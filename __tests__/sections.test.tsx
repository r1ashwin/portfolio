import { render, screen, fireEvent } from "@testing-library/react";
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
  it("defaults to Featured work tab", () => {
    render(<Projects />);
    expect(screen.getByRole("tab", { name: /Featured work/i })).toHaveAttribute(
      "aria-selected",
      "true",
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

  it("GitHub tab shows repositories list", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("tab", { name: /^GitHub$/ }));
    expect(screen.getByText("GitHub repositories")).toBeInTheDocument();
    expect(screen.getByText("portfolio")).toBeInTheDocument();
    expect(
      screen.queryByText("Electromechanical Wall Clock"),
    ).not.toBeInTheDocument();
  });

  it("shows Active badge on featured lead project", () => {
    render(<Projects />);
    expect(screen.getByText("Active")).toBeInTheDocument();
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
