import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy slugs from the original v0 deployment's sitemap — keep them
      // resolving with a permanent redirect instead of 404ing, and steer to
      // the higher-search-volume "städfirma" keyword instead of "städföretag".
      {
        source: "/landningssidor/stadforetag-:ort",
        destination: "/landningssidor/stadfirma-:ort",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
