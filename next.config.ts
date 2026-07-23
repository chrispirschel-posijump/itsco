import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { redirects: itscoRedirects } = require("./REDIRECTS.js");

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return itscoRedirects;
  },
  images: {
    // Cache Next.js-optimized image responses for 1 year. The default 60s
    // TTL was producing `max-age=0, must-revalidate` responses, forcing
    // every visitor to re-check the server for every image on every visit
    // and driving both bandwidth and web-request credit consumption.
    minimumCacheTTL: 31536000,
    // Serve AVIF (best compression, ~30% smaller than JPEG) with a WebP
    // fallback for older browsers. Both are broadly supported now and
    // cut per-image bandwidth substantially.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
