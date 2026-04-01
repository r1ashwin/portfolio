/**
 * Home “Check out my latest!” — research paper + project.
 * Project: NEXT_PUBLIC_LATEST_PROJECT_URL, _NAME, _IMAGE (tagline omitted on card).
 */

export type FeaturedItem = {
  kind: "Research paper" | "Projects";
  title: string;
  tagline: string;
  href: string;
  /** Photo URL when visual is "photo". */
  imageSrc: string;
  imageAlt: string;
  visual: "photo" | "ml-graphic";
  /** Hide second line under title (used for Project). */
  showTagline: boolean;
};

const MDPI_PAPER_URL =
  "https://www.mdpi.com/1424-8220/26/7/2142";

/** Full MDPI title — UI truncates with ellipsis from the start (includes “Machine Learning”). */
export const PAPER_FULL_TITLE =
  "Machine Learning-Powered Smart Sensing of Copper Ions in Water Based on a Carbon Dot-Incorporated Hydrogel Platform: An Easy Path from Bench to Onsite Detection";

const PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=720&h=240&fit=crop&q=85&auto=format";

const INLINE_PROJECT_URL = "";
const FALLBACK_PROJECT_URL = "https://github.com/r1ashwin";

const DEFAULT_PROJECT_NAME = "Journi";

function getProjectItem(): FeaturedItem {
  const href =
    process.env.NEXT_PUBLIC_LATEST_PROJECT_URL?.trim() ||
    INLINE_PROJECT_URL.trim() ||
    FALLBACK_PROJECT_URL;
  const title =
    process.env.NEXT_PUBLIC_LATEST_PROJECT_NAME?.trim() || DEFAULT_PROJECT_NAME;
  const imageSrc =
    process.env.NEXT_PUBLIC_LATEST_PROJECT_IMAGE?.trim() || PROJECT_IMAGE;
  return {
    kind: "Projects",
    title,
    tagline: "",
    href,
    imageSrc,
    imageAlt: "Tropical island coastline and turquoise water",
    visual: "photo",
    showTagline: false,
  };
}

export const FEATURED_SECTION_HEADING = "Check out my latest!";

export function getFeaturedItems(): FeaturedItem[] {
  return [
    {
      kind: "Research paper",
      title: PAPER_FULL_TITLE,
      tagline: "MDPI Sensors",
      href: MDPI_PAPER_URL,
      imageSrc: "",
      imageAlt: "",
      visual: "ml-graphic",
      showTagline: true,
    },
    getProjectItem(),
  ];
}
