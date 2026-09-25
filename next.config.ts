import type { NextConfig } from "next";

const basePath = "/Goyco-Services";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Recommended for static hosts
  images: { unoptimized: true }, // Required for static export
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
