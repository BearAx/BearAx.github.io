import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.SITES_BUILD === "1" ? undefined : "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
