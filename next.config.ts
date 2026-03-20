import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/.codex/**",
          "**/.git/**",
          "**/.next/**",
          "**/docs/**",
          "**/tests/**",
          "**/assets.html",
        ],
      };
    }

    return config;
  },
};

export default nextConfig;
