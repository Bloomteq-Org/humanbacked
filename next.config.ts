import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression to reduce payload size
  compress: true,
  // Reduce JavaScript bundle by excluding source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
