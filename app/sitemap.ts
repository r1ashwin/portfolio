import type { MetadataRoute } from "next";

const baseUrl = "https://ashwindeshpande.com";
const today = "2026-07-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/featured",
    "/projects/github",
    "/projects/featured/electromechanical-wall-clock",
    "/experience",
    "/research",
    "/competitions",
    "/contact",
    "/guides/trail-running-shoes-flat-feet-plantar-fasciitis",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
  }));
}
