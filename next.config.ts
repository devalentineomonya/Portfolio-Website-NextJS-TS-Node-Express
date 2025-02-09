import withPWA from "next-pwa";
const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  cacheStartUrl: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  fallbacks: {
    document: "/offline",
    image: "/fallback.png",
    audio: "/fallback.mp3",
    video: "/fallback.mp4",
    font: "/fallback.woff",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWAConfig({
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },

      
  },
});

export default nextConfig;
