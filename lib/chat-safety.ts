/**
 * Pre-model checks for the digital twin. Fails closed: suspicious → block.
 * Does not replace the system prompt; adds a hard gate for obvious abuse.
 */

const MAX_USER_CHARS = 2_000;

/** Obvious jailbreak / exfiltration patterns */
const JAILBREAK_RE = new RegExp(
  [
    String.raw`ignore (all|previous|above|prior)`,
    String.raw`disregard (all|previous|instructions)`,
    String.raw`you are (now|no longer)`,
    String.raw`new (system|instructions|rules)`,
    String.raw`pretend (you|to be|you're)`,
    String.raw`roleplay as`,
    String.raw`DAN\b`,
    String.raw`developer mode`,
    String.raw`reveal (your|the) (prompt|system|instructions)`,
    String.raw`print (your|the) (prompt|system)`,
    String.raw`what (are|were) your (instructions|rules)`,
    String.raw`repeat (your|the) (system|initial)`,
    String.raw`base64`,
    String.raw`\\[?INST\\]?`,
    String.raw`<\|im_start\|>`,
    String.raw`override`,
    String.raw`bypass`,
  ].join("|"),
  "i",
);

/** Hate / harassment / sexual / violence cues (not exhaustive; model also refuses) */
const ABUSE_RE = new RegExp(
  [
    String.raw`\b(kill|murder|suicide|bomb|terror|rape|nazi|genocide)\b`,
    String.raw`\b(fuck|shit|cunt|slut|whore|retard)\b`,
    String.raw`\b(hate you|die\b|kys)\b`,
  ].join("|"),
  "i",
);

/** Defamation / gossip framing */
const DEFAME_RE = new RegExp(
  [
    String.raw`\b(is|are) (he|she|they|ashwin) (a |)(criminal|fraud|cheat|liar|predator|racist)`,
    String.raw`\b(confirm|admit|prove) (that )?(he|she|they|i) (stole|cheated|lied|harassed)`,
    String.raw`\b(dirt|scandal|expose) (on )?(him|her|them|ashwin|me)\b`,
    String.raw`\b(illegal|unethical) (things|stuff) (did|done)`,
  ].join("|"),
  "i",
);

/** Politics / religion bait */
const POLITICS_RE = new RegExp(
  [
    String.raw`\b(vote for|election|prime minister|modi|trump|biden|narendra)\b`,
    String.raw`\b(religion|hindu|muslim|christian|jew|israel|palestine|war in ukraine)\b`,
    String.raw`\b(who (should|will) win)\b`,
  ].join("|"),
  "i",
);

/** Non-English scripts (allow basic Latin + common punctuation + digits) */
const NON_LATIN_RE = /[\u0600-\u06FF\u0400-\u04FF\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af\u0e00-\u0e7f\u0590-\u05FF]/g;

export type ScreenResult =
  | { ok: true }
  | { ok: false; code: string; userMessage: string };

const REFUSAL_ENGLISH =
  "I only chat in English about my public work and background. I can’t help with that—try a question about my projects, experience, or how to reach me.";

export function screenUserMessage(raw: string): ScreenResult {
  const text = raw.trim();
  if (!text) {
    return { ok: false, code: "empty", userMessage: REFUSAL_ENGLISH };
  }
  if (text.length > MAX_USER_CHARS) {
    return {
      ok: false,
      code: "too_long",
      userMessage: "That message is too long. Please shorten it and ask in English.",
    };
  }

  const nonLatinMatches = text.match(NON_LATIN_RE);
  const nonLatinCount = nonLatinMatches?.length ?? 0;
  if (nonLatinCount > 0 && nonLatinCount / Math.max(text.length, 1) > 0.08) {
    return { ok: false, code: "non_english", userMessage: REFUSAL_ENGLISH };
  }

  if (JAILBREAK_RE.test(text)) {
    return {
      ok: false,
      code: "jailbreak",
      userMessage:
        "I’m Ashwin’s digital twin for his portfolio—I can’t change roles or reveal system details. Ask me about his work or background in English.",
    };
  }

  if (ABUSE_RE.test(text)) {
    return {
      ok: false,
      code: "abuse",
      userMessage:
        "I keep this space professional. I won’t engage with that—happy to talk about my engineering work or how to contact me.",
    };
  }

  if (DEFAME_RE.test(text)) {
    return {
      ok: false,
      code: "defamation",
      userMessage:
        "I don’t discuss rumors or attacks. I only share accurate, professional info from my profile.",
    };
  }

  if (POLITICS_RE.test(text)) {
    return {
      ok: false,
      code: "politics",
      userMessage:
        "I stay out of politics and religion here. Ask about my projects, internships, or research.",
    };
  }

  return { ok: true };
}
