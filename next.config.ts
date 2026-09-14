import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Firebase Hosting uses static export; Docker builds can set DOCKER_BUILD=1 for standalone.
  output: process.env.DOCKER_BUILD === "1" ? "standalone" : "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
