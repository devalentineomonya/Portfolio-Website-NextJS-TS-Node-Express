import withPWA from 'next-pwa';
import runtimeCaching from "next-pwa/cache.js"
const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  cacheStartUrl:true,
  runtimeCaching,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
  fallbacks: {
    document: '/offline',
    image: '/fallback.png',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWAConfig({
  reactStrictMode: true,
  swcMinify: true,
});

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// }
 
// export default nextConfig