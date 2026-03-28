import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "@/app/page";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Home", () => {
  it("renders avatar", () => {
    render(<Home />);
    expect(screen.getAllByText("Ashwin Deshpande").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AD").length).toBeGreaterThan(0);
  });

  it("renders intro text", () => {
    render(<Home />);
    expect(screen.getByText(/Browse the hub/)).toBeInTheDocument();
  });

  it("renders all section links", () => {
    render(<Home />);
    const labels = [
      "About",
      "Projects",
      "Experience",
      "Research",
      "Competitions",
      "Contact",
    ];
    for (const label of labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });

  it("has correct hrefs for sections", () => {
    render(<Home />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/about");
    expect(hrefs).toContain("/projects");
    expect(hrefs).toContain("/experience");
    expect(hrefs).toContain("/research");
    expect(hrefs).toContain("/competitions");
    expect(hrefs).toContain("/contact");
  });
});
