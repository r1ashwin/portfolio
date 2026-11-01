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
  // Standalone TV screens (static HTML in /public). Isolated from the site chrome.
  async rewrites() {
    return [
      { source: "/board", destination: "/board.html" },
      { source: "/application", destination: "/application.html" },
    ];
  },
};

export default nextConfig;
