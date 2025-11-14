import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true, // Required for static export
  },

  // Production optimizations
  reactStrictMode: true,
  swcMinify: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ["react-icons", "three"],
  },
};

export default nextConfig;
