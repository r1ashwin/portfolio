import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Avatar from "@/components/Avatar";
import HubIcon from "@/components/HubIcon";
import { User } from "lucide-react";

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

describe("Avatar", () => {
  it("renders initials", () => {
    render(<Avatar />);
    expect(
      screen.getByRole("img", { name: /Ashwin S Deshpande/i }),
    ).toBeInTheDocument();
  });

  it("renders name", () => {
    render(<Avatar />);
    expect(screen.getByText("Ashwin S Deshpande")).toBeInTheDocument();
  });

  it("renders speech bubble", () => {
    render(<Avatar />);
    expect(screen.getByText("Talk to me")).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Avatar />);
    expect(
      screen.getByText("Builder. Engineer."),
    ).toBeInTheDocument();
  });
});

describe("HubIcon", () => {
  it("renders label", () => {
    render(
      <HubIcon
        icon={User}
        label="About"
        angle={0}
        radius={180}
        href="/about"
      />,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("links to correct href", () => {
    render(
      <HubIcon
        icon={User}
        label="About"
        angle={0}
        radius={180}
        href="/about"
      />,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/about");
  });

  it("positions based on angle and radius", () => {
    render(
      <HubIcon
        icon={User}
        label="Test"
        angle={90}
        radius={180}
        href="/test"
      />,
    );
    const link = screen.getByRole("link");
    expect(link.style.transform).toContain("180");
  });
});
