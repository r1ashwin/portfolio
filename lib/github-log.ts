const MAX_LOG_CHARS = 45000;
const MAX_ANALYTICS_DETAIL = 2000;

function trimmedEnv(name: string): string | undefined {
  const v = process.env[name];
  if (v == null) return undefined;
  const t = v.trim();
  return t === "" ? undefined : t;
}

function githubRepoCredentialsOk(): boolean {
  return Boolean(
    trimmedEnv("CHAT_LOG_GITHUB_TOKEN") &&
      trimmedEnv("CHAT_LOG_GITHUB_REPO_OWNER") &&
      trimmedEnv("CHAT_LOG_GITHUB_REPO_NAME"),
  );
}

function githubLoggingConfigured(): boolean {
  return (
    githubRepoCredentialsOk() && Boolean(trimmedEnv("CHAT_LOG_GITHUB_LOG_PATH"))
  );
}

export function analyticsLoggingConfigured(): boolean {
  return (
    githubRepoCredentialsOk() &&
    Boolean(trimmedEnv("CHAT_LOG_GITHUB_ANALYTICS_PATH"))
  );
}

function clipCell(text: string): string {
  if (text.length <= MAX_LOG_CHARS) return text;
  return `${text.slice(0, MAX_LOG_CHARS)}…`;
}

function clipDetail(text: string): string {
  if (text.length <= MAX_ANALYTICS_DETAIL) return text;
  return `${text.slice(0, MAX_ANALYTICS_DETAIL)}…`;
}

function toCsvCell(value: string): string {
  const cleaned = value.replace(/\r?\n/g, " ");
  const escaped = cleaned.replace(/"/g, '""');
  return `"${escaped}"`;
}

async function getExistingFileAtPath(pathRaw: string) {
  const owner = trimmedEnv("CHAT_LOG_GITHUB_REPO_OWNER")!;
  const repo = trimmedEnv("CHAT_LOG_GITHUB_REPO_NAME")!;
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

async function putFileAtPath(
  pathRaw: string,
  newContent: string,
  sha: string | null,
  commitMessage: string,
) {
  const owner = trimmedEnv("CHAT_LOG_GITHUB_REPO_OWNER")!;
  const repo = trimmedEnv("CHAT_LOG_GITHUB_REPO_NAME")!;
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
    message: commitMessage,
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

    const pathRaw = trimmedEnv("CHAT_LOG_GITHUB_LOG_PATH")!;
    const timestamp = new Date().toISOString();
    const row =
      [
        toCsvCell(timestamp),
        toCsvCell(clipCell(userMessage)),
        toCsvCell(clipCell(assistantMessage)),
      ].join(",") + "\n";

    const { sha, content } = await getExistingFileAtPath(pathRaw);
    const header = "timestamp,user,assistant\n";
    const base = content ? content : header;
    const next = base.endsWith("\n") ? base + row : `${base}\n${row}`;

    await putFileAtPath(pathRaw, next, sha, "Log digital twin chat");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[github-log] append failed:", err);
  }
}

/**
 * Append one session analytics row (same repo as twin logs, different file).
 * CSV: timestamp,session_id,event,detail — filter by session_id, sort by timestamp
 * for a chronological tail (home_page → hub clicks → featured → talk_to_me, etc.).
 * Never throws; stderr on failure.
 */
export async function appendGithubAnalyticsEvent(
  sessionId: string,
  event: string,
  detail: string,
): Promise<void> {
  try {
    if (!analyticsLoggingConfigured()) return;

    const pathRaw = trimmedEnv("CHAT_LOG_GITHUB_ANALYTICS_PATH")!;
    const timestamp = new Date().toISOString();
    const row =
      [
        toCsvCell(timestamp),
        toCsvCell(sessionId),
        toCsvCell(event),
        toCsvCell(clipDetail(detail)),
      ].join(",") + "\n";

    const { sha, content } = await getExistingFileAtPath(pathRaw);
    const header = "timestamp,session_id,event,detail\n";
    const base = content ? content : header;
    const next = base.endsWith("\n") ? base + row : `${base}\n${row}`;

    await putFileAtPath(pathRaw, next, sha, "Log site session analytics");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[github-log] analytics append failed:", err);
  }
}
