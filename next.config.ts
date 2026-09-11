import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Every rule is permanent (308) and lands on the final URL in ONE hop —
    // chained redirects leak link equity and slow down crawling.
    return [
      // Original v0 URLs used "städföretag"; the page moved to the
      // higher-volume "städfirma" keyword under the new /tjanster structure.
      {
        source: "/landningssidor/stadforetag-:ort([a-z]+)",
        destination: "/tjanster/stadfirma/:ort",
        permanent: true,
      },
      // /landningssidor/{service}-{ort} → /tjanster/{service}/{ort}.
      // Service and town slugs never contain hyphens, so the split is exact.
      {
        source: "/landningssidor/:service([a-z]+)-:ort([a-z]+)",
        destination: "/tjanster/:service/:ort",
        permanent: true,
      },
      { source: "/landningssidor", destination: "/tjanster", permanent: true },
      // Typo in an earlier guide slug.
      {
        source: "/guider/graskllippning-pris",
        destination: "/guider/grasklippning-pris",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
