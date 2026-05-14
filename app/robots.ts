import type { MetadataRoute } from "next";

// Disallow all crawlers while the site is in preview/build phase.
// Replace with the production rules (allowing /) before going live.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
