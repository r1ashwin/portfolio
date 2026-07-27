import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubProjects from "@/components/GitHubProjects";
import ProjectsTabs from "@/components/ProjectsTabs";
import WallClockGallery from "@/components/WallClockGallery";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Competitions from "@/components/Competitions";
import Contact from "@/components/Contact";
import {
  PROJECTS_FEATURED_PATH,
  PROJECTS_GITHUB_PATH,
  WALL_CLOCK_PATH,
} from "@/lib/project-routes";

const mockPathname = vi.fn(() => PROJECTS_FEATURED_PATH);

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

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

describe("About", () => {
  it("renders key information", () => {
    render(<About />);
    expect(screen.getAllByText(/Amazon/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Fluid/).length).toBeGreaterThan(0);
    expect(screen.getByText(/Knight \(2036\)/)).toBeInTheDocument();
  });
});

describe("Projects", () => {
  beforeEach(() => {
    mockPathname.mockReturnValue(PROJECTS_FEATURED_PATH);
  });

  it("defaults to Featured work tab", () => {
    render(
      <>
        <ProjectsTabs />
        <FeaturedProjects />
      </>,
    );
    expect(screen.getByRole("tab", { name: /Featured work/i })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: /Featured work/i })).toHaveAttribute(
      "href",
      PROJECTS_FEATURED_PATH,
    );
    expect(screen.getByRole("tab", { name: /^GitHub$/ })).toHaveAttribute(
      "href",
      PROJECTS_GITHUB_PATH,
    );
    expect(screen.getByText(/Local Deterministic AI Runtime/)).toBeInTheDocument();
    expect(
      screen.getByText("Electromechanical Wall Clock"),
    ).toBeInTheDocument();
    expect(screen.getByText("FPV Racing Drone")).toBeInTheDocument();
    expect(screen.getByText("War Robots")).toBeInTheDocument();
    expect(screen.getByText("Leader-Follower Drone")).toBeInTheDocument();
    expect(
      screen.getByText("Conversational Outfit Recommender"),
    ).toBeInTheDocument();
    expect(screen.queryByText("portfolio")).not.toBeInTheDocument();
  });

  it("GitHub tab links to the github route", () => {
    mockPathname.mockReturnValue(PROJECTS_GITHUB_PATH);
    render(
      <>
        <ProjectsTabs />
        <GitHubProjects />
      </>,
    );
    expect(screen.getByRole("tab", { name: /^GitHub$/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("GitHub repositories")).toBeInTheDocument();
    expect(screen.getByText("portfolio")).toBeInTheDocument();
    expect(
      screen.queryByText("Electromechanical Wall Clock"),
    ).not.toBeInTheDocument();
  });

  it("shows Active badge on featured lead project", () => {
    render(<FeaturedProjects />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("links wall clock project to a shareable detail URL", () => {
    render(<FeaturedProjects />);
    expect(screen.getByTestId("wall-clock-project")).toHaveAttribute(
      "href",
      WALL_CLOCK_PATH,
    );
  });

  it("renders wall clock gallery with photos and videos", () => {
    render(<WallClockGallery />);
    expect(screen.getByTestId("wall-clock-gallery")).toBeInTheDocument();
    expect(screen.getByAltText(/frame 0/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/clip 7/i).tagName.toLowerCase(),
    ).toBe("video");
    expect(
      screen.getByRole("link", { name: /Featured work/i }),
    ).toHaveAttribute("href", PROJECTS_FEATURED_PATH);
  });
});

describe("Experience", () => {
  it("renders all companies", () => {
    render(<Experience />);
    expect(screen.getByText("Amazon")).toBeInTheDocument();
    expect(
      screen.getByText("IIIT Hyderabad (iHub-Data)"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Dynamic Amalgam Technologies Inc."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("\u03BCCR Robotics Hub, JIIT"),
    ).toBeInTheDocument();
  });

  it("shows current badges", () => {
    render(<Experience />);
    expect(screen.getAllByText("current")).toHaveLength(2);
  });
});

describe("Research", () => {
  it("renders papers", () => {
    render(<Research />);
    expect(
      screen.getByText(/Multimodal cardiac profiling/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/copper ion concentration/i),
    ).toBeInTheDocument();
  });

  it("renders accuracy figures", () => {
    render(<Research />);
    expect(screen.getByText("~93.3%")).toBeInTheDocument();
    expect(screen.getByText("~96.8%")).toBeInTheDocument();
  });
});

describe("Competitions", () => {
  it("renders CP ratings", () => {
    render(<Competitions />);
    expect(screen.getByText("2036")).toBeInTheDocument();
    expect(screen.getByText("1549")).toBeInTheDocument();
    expect(screen.getByText("Knight")).toBeInTheDocument();
    expect(screen.getByText("Specialist")).toBeInTheDocument();
  });

  it("renders competition entries", () => {
    render(<Competitions />);
    expect(
      screen.getByText("Amazon ML Challenge India"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Flipkart GRiD 5\.0/)).toBeInTheDocument();
  });
});

describe("Contact", () => {
  it("renders all links", () => {
    render(<Contact />);
    expect(
      screen.getByText("r1ashwindeshpande@gmail.com"),
    ).toBeInTheDocument();
    expect(screen.getByText("github.com/r1ashwin")).toBeInTheDocument();
    expect(
      screen.getByText("linkedin.com/in/r1ashwin"),
    ).toBeInTheDocument();
  });

  it("has correct hrefs", () => {
    render(<Contact />);
    const emailLink = screen.getByText("r1ashwindeshpande@gmail.com")
      .closest("a");
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:r1ashwindeshpande@gmail.com",
    );
  });
});
