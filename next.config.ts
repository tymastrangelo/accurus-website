import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old single Services page split into dedicated pages in the fall 2026 rewrite.
  async redirects() {
    return [{ source: "/services", destination: "/workshop", permanent: true }];
  },
};

export default nextConfig;
