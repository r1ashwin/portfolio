import { readFile } from "node:fs/promises";
import path from "node:path";

/** Strip phone numbers and the explicit Phone field from profile before model context. */
export function sanitizeProfileMarkdown(md: string): string {
  let out = md.replace(/\+91[\d\s\-–]{8,}\d/gi, "[contact via email or LinkedIn]");
  out = out.replace(/\b\+?\d[\d\s\-–]{9,}\d\b/g, "[contact via email or LinkedIn]");
  out = out
    .split("\n")
    .filter((line) => !/^\s*-\s*\*\*Phone:\*\*/i.test(line))
    .join("\n");
  return out.trim();
}

const MAX_CONTEXT_CHARS = 48_000;

function truncateKnowledge(cleaned: string): string {
  if (cleaned.length <= MAX_CONTEXT_CHARS) return cleaned;
  return `${cleaned.slice(0, MAX_CONTEXT_CHARS)}\n\n[Profile truncated for length.]`;
}

/**
 * Knowledge for the digital twin, in priority order:
 * 1. `PERSONAL_PROFILE_MARKDOWN` env var — use on Vercel (never commit); paste full markdown in project settings.
 * 2. `personal_profile.md` in repo root — local dev; file is gitignored for privacy.
 * 3. Built-in public fallback if neither exists.
 */
export async function loadKnowledgeForModel(): Promise<string> {
  const fromEnv = process.env.PERSONAL_PROFILE_MARKDOWN?.trim();
  if (fromEnv) {
    return truncateKnowledge(sanitizeProfileMarkdown(fromEnv));
  }

  const filePath = path.join(process.cwd(), "personal_profile.md");
  try {
    const raw = await readFile(filePath, "utf8");
    return truncateKnowledge(sanitizeProfileMarkdown(raw));
  } catch {
    return FALLBACK_KNOWLEDGE;
  }
}

const FALLBACK_KNOWLEDGE = `
Ashwin S Deshpande — B.Tech ECE, JIIT Noida, graduating 2026.
SWE intern at Amazon Bengaluru (Prime Video / MX Player). Do not combine with Fluid in one sentence.
Fluid: local deterministic AI runtime — FastAPI, Docker, Redis, Next.js, replayable reasoning, 1B QLoRA Logic Core (independent project).
Also: IIIT-H research intern (ECG–PCG, ~40% latency reduction); Dynamic Amalgam remote intern (28-flap clock firmware, telemetry).
Publications: MDPI Sensors copper-ion paper ~96.8%; cardiac paper under submission ~93.3%.
Competitive: LeetCode Knight 2036; Codeforces Specialist 1549; Flipkart GRiD semi-finalist; Amazon ML Challenge 92nd; HackStreet & OSDHack winner.
Contact: r1ashwindeshpande@gmail.com — LinkedIn/GitHub/LeetCode/Codeforces: r1ashwin.
`.trim();
