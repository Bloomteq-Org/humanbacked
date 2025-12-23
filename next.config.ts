import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Reduced sizes to optimize network payload - only generate sizes we actually need
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    // Note: quality is set per-image, default is 75 which is already good
  },
  compress: true,
  // Enable production source maps for better debugging without affecting performance
  productionBrowserSourceMaps: false,
};

export default nextConfig;
