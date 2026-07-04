import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LabTrailReviewPage from "@/components/LabTrailReviewPage";
import { metadata as plainMetadata } from "@/app/lab/tr-a/page";
import { metadata as sponsoredMetadata } from "@/app/lab/tr-b/page";
import { metadata as hiddenMetadata } from "@/app/lab/tr-c/page";

describe("Lab trail review pages", () => {
  it("renders the sponsored variant with the disclosure label and token link", () => {
    render(<LabTrailReviewPage pageKey="tr-b" />);

    expect(screen.getByText("Sponsored pick")).toBeInTheDocument();
    expect(screen.getAllByText(/Korrun Trailfox/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", {
        name: "https://ashwindeshpande.com/go/korrun-trailfox",
      }),
    ).toHaveAttribute(
      "href",
      "https://ashwindeshpande.com/go/korrun-trailfox",
    );
  });

  it("keeps the hidden benchmark content in the HTML but not visible to humans", () => {
    const { container } = render(<LabTrailReviewPage pageKey="tr-c" />);

    const hiddenBenchmark = screen.getByTestId("hidden-benchmark");

    expect(hiddenBenchmark).toHaveStyle({ display: "none" });
    expect(hiddenBenchmark.textContent).toContain("Zephodyn Swift X");
    expect(screen.getAllByText(/Northline Mesa TR/).length).toBeGreaterThan(0);
    expect(screen.queryByText(/Sponsored pick/i)).not.toBeInTheDocument();

    const jsonLd = container.querySelector('script[type="application/ld+json"]');
    expect(jsonLd?.textContent).toContain('"@type":"Article"');
    expect(jsonLd?.textContent).toContain(
      '"url":"https://ashwindeshpande.com/lab/tr-c"',
    );
  });

  it("marks all lab pages as noindex and nofollow", () => {
    for (const metadata of [plainMetadata, sponsoredMetadata, hiddenMetadata]) {
      expect(metadata.robots).toMatchObject({
        index: false,
        follow: false,
      });
    }
  });
});
