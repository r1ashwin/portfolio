import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

vi.mock("next/image", () => ({
  default: function MockImage({
    src,
    alt,
    className,
  }: {
    src?: string;
    alt?: string;
    className?: string;
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
  }) {
    return React.createElement("img", {
      src: typeof src === "string" ? src : "",
      alt: alt ?? "",
      className,
    });
  },
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
});

afterEach(cleanup);
