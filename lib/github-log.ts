const MAX_LOG_CHARS = 45000;

function trimmedEnv(name: string): string | undefined {
  const v = process.env[name];
  if (v == null) return undefined;
  const t = v.trim();
  return t === "" ? undefined : t;
}

function githubLoggingConfigured(): boolean {
  return Boolean(
    trimmedEnv("CHAT_LOG_GITHUB_TOKEN") &&
      trimmedEnv("CHAT_LOG_GITHUB_REPO_OWNER") &&
      trimmedEnv("CHAT_LOG_GITHUB_REPO_NAME") &&
      trimmedEnv("CHAT_LOG_GITHUB_LOG_PATH"),
  );
}

function clipCell(text: string): string {
  if (text.length <= MAX_LOG_CHARS) return text;
  return `${text.slice(0, MAX_LOG_CHARS)}…`;
}

function toCsvCell(value: string): string {
  const cleaned = value.replace(/\r?\n/g, " ");
  const escaped = cleaned.replace(/"/g, '""');
  return `"${escaped}"`;
}

async function getExistingFile() {
  const owner = trimmedEnv("CHAT_LOG_GITHUB_REPO_OWNER")!;
  const repo = trimmedEnv("CHAT_LOG_GITHUB_REPO_NAME")!;
  const pathRaw = trimmedEnv("CHAT_LOG_GITHUB_LOG_PATH")!;
  const path = pathRaw.replace(/^\/+/, "");
  const token = trimmedEnv("CHAT_LOG_GITHUB_TOKEN")!;

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(
    path,
  )}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (res.status === 404) {
    return { sha: null as string | null, content: "" };
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(
      `[github-log] fetch contents failed: ${res.status} ${errText.slice(
        0,
        400,
      )}`,
    );
  }

  const json = (await res.json()) as {
    sha?: string;
    content?: string;
    encoding?: string;
  };

  if (!json.content || json.encoding !== "base64") {
    return { sha: json.sha ?? null, content: "" };
  }

  const buff = Buffer.from(json.content, "base64");
  return { sha: json.sha ?? null, content: buff.toString("utf8") };
}

async function putFile(newContent: string, sha: string | null) {
  const owner = trimmedEnv("CHAT_LOG_GITHUB_REPO_OWNER")!;
  const repo = trimmedEnv("CHAT_LOG_GITHUB_REPO_NAME")!;
  const pathRaw = trimmedEnv("CHAT_LOG_GITHUB_LOG_PATH")!;
  const path = pathRaw.replace(/^\/+/, "");
  const token = trimmedEnv("CHAT_LOG_GITHUB_TOKEN")!;

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(
    path,
  )}`;

  const body: {
    message: string;
    content: string;
    sha?: string;
  } = {
    message: "Log digital twin chat",
    content: Buffer.from(newContent, "utf8").toString("base64"),
  };

  if (sha) body.sha = sha;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(
      `[github-log] update contents failed: ${res.status} ${errText.slice(
        0,
        400,
      )}`,
    );
  }
}

/**
 * Append one CSV row to the configured GitHub repo/path.
 * Format: ISO timestamp, user message, assistant message.
 * Never throws to callers; only logs to stderr on failure.
 */
export async function appendGithubTwinLog(
  userMessage: string,
  assistantMessage: string,
): Promise<void> {
  try {
    if (!githubLoggingConfigured()) return;

    const timestamp = new Date().toISOString();
    const row =
      [
        toCsvCell(timestamp),
        toCsvCell(clipCell(userMessage)),
        toCsvCell(clipCell(assistantMessage)),
      ].join(",") + "\n";

    const { sha, content } = await getExistingFile();
    const header = "timestamp,user,assistant\n";
    const base = content ? content : header;
    const next = base.endsWith("\n") ? base + row : `${base}\n${row}`;

    await putFile(next, sha);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[github-log] append failed:", err);
  }
}

