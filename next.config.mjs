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
  buildExcludes: [/middleware-manifest\.json$/],
  disable: process.env.NODE_ENV === 'development',
  modifyURLPrefix: {
    'static/': '_next/static/',
    '../public/': '/'
  },
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
