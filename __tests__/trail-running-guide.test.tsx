import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GuidePage, { metadata } from "@/app/guides/trail-running-shoes-flat-feet-plantar-fasciitis/page";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("Trail running guide page", () => {
  it("renders the long-tail heading and top pick", () => {
    render(<GuidePage />);

    expect(
      screen.getByRole("heading", {
        name: /Best Trail Running Shoes for Flat Feet and Plantar Fasciitis Under \$120 \(2026\)/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Cadverio Terra 1/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", {
        name: "https://ashwindeshpande.com/go/cadverio-terra-1",
      }),
    ).toHaveAttribute(
      "href",
      "https://ashwindeshpande.com/go/cadverio-terra-1",
    );
  });

  it("uses neutral metadata without noindex", () => {
    expect(metadata.title).toBe(
      "Best Trail Running Shoes for Flat Feet and Plantar Fasciitis Under $120 (2026)",
    );
    expect(metadata.description).toBe(
      "A 2026 guide to the best trail running shoes for flat feet and plantar fasciitis under $120.",
    );
    expect(metadata.robots).toBeUndefined();
  });

  it("adds the guide to sitemap and exposes sitemap in robots", () => {
    const entries = sitemap();

    expect(entries).toContainEqual(
      expect.objectContaining({
        url: "https://ashwindeshpande.com/guides/trail-running-shoes-flat-feet-plantar-fasciitis",
      }),
    );

    expect(robots()).toMatchObject({
      sitemap: "https://ashwindeshpande.com/sitemap.xml",
      host: "https://ashwindeshpande.com",
    });
  });
});
