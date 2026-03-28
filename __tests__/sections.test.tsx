import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Competitions from "@/components/Competitions";
import Contact from "@/components/Contact";

describe("About", () => {
  it("renders key information", () => {
    render(<About />);
    expect(screen.getAllByText(/Amazon/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Fluid/).length).toBeGreaterThan(0);
    expect(screen.getByText(/Knight \(2036\)/)).toBeInTheDocument();
  });
});

describe("Projects", () => {
  it("renders all projects", () => {
    render(<Projects />);
    expect(screen.getByText("Fluid")).toBeInTheDocument();
    expect(
      screen.getByText("Electromechanical Wall Clock"),
    ).toBeInTheDocument();
    expect(screen.getByText("FPV Racing Drone")).toBeInTheDocument();
    expect(screen.getByText("War Robots")).toBeInTheDocument();
    expect(screen.getByText("Leader-Follower Drone")).toBeInTheDocument();
    expect(
      screen.getByText("Fashion Outfit Recommender"),
    ).toBeInTheDocument();
  });

  it("shows active badge on Fluid", () => {
    render(<Projects />);
    expect(screen.getByText("active")).toBeInTheDocument();
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
      screen.getByText("DynamicAmalgam Technologies"),
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
      screen.getByText("Multimodal Cardiac Profiling"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Copper Ion Detection in Water"),
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
    expect(screen.getByText("1552")).toBeInTheDocument();
    expect(screen.getByText("Knight")).toBeInTheDocument();
    expect(screen.getByText("Specialist")).toBeInTheDocument();
  });

  it("renders competition entries", () => {
    render(<Competitions />);
    expect(
      screen.getByText("Amazon ML Challenge India"),
    ).toBeInTheDocument();
    expect(screen.getByText("Flipkart GRID 5.0")).toBeInTheDocument();
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
