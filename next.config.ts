import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    viewTransition: true,
  },
  images:{
   remotePatterns: [
     {
       protocol: "https",
       hostname: "cdn.sanity.io",
     }
   ]
  }
};

export default nextConfig;
