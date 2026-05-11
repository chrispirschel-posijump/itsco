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
};

export default nextConfig;
