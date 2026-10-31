import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 88],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Standalone countdown board (static HTML in /public). Isolated from the site chrome.
  async rewrites() {
    return [{ source: "/board", destination: "/board.html" }];
  },
};

export default nextConfig;
