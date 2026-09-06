import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for pure static HTML hosting (Vercel, Cloudflare Pages, Netlify, Apache, etc.)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
