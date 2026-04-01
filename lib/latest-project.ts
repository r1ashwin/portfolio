/**
 * Featured project card on the home intro column.
 * URL: NEXT_PUBLIC_LATEST_PROJECT_URL → INLINE_URL → FALLBACK_PROJECT_URL
 */
const INLINE_URL = "";

/** Bright tropical / island coast (Unsplash, free license). */
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=720&h=200&fit=crop&q=85&auto=format";

const DEFAULT_NAME = "Journi";
const DEFAULT_TAGLINE =
  "Turn trip research into a calm flow — real flights, stays, and shareable plans.";

/** When env and INLINE_URL are empty. */
const FALLBACK_PROJECT_URL = "https://github.com/r1ashwin";

export function getLatestProjectPromo(): {
  href: string;
  name: string;
  tagline: string;
  imageSrc: string;
} {
  const href = (
    process.env.NEXT_PUBLIC_LATEST_PROJECT_URL?.trim() ||
    INLINE_URL.trim() ||
    FALLBACK_PROJECT_URL
  );
  const name =
    process.env.NEXT_PUBLIC_LATEST_PROJECT_NAME?.trim() || DEFAULT_NAME;
  const tagline =
    process.env.NEXT_PUBLIC_LATEST_PROJECT_TAGLINE?.trim() || DEFAULT_TAGLINE;
  const imageSrc =
    process.env.NEXT_PUBLIC_LATEST_PROJECT_IMAGE?.trim() || DEFAULT_IMAGE;
  return { href, name, tagline, imageSrc };
}
