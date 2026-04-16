import path from "path";
import type { NextConfig } from "next";

const isVercel = !!process.env.VERCEL;
const hasCustomDist = !!process.env.NEXT_DIST_DIR;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /**
   * On Vercel, always use the default `.next` output so the platform
   * can find the build artifacts. Locally you can still override
   * `NEXT_DIST_DIR` if you want a custom cache directory.
   */
  distDir: !isVercel && hasCustomDist ? process.env.NEXT_DIST_DIR : ".next",
  outputFileTracingRoot: path.join(__dirname),
  /** Polling avoids macOS EMFILE from huge file watchers; fixes missing routes in `next dev`. */
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.git/**"],
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
