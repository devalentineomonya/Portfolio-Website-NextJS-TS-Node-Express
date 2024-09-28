import withPWA from 'next-pwa';

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  fallbacks: {
    document: '/offline',
    image: '/fallback.png',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWAConfig({
  reactStrictMode: true,
});

export default nextConfig;
