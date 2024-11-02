import withPWA from 'next-pwa';
import runtimeCaching from "next-pwa/cache.js"
const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  cacheStartUrl: true,
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
  productionBrowserSourceMaps: false,
  optimizeFonts: false,
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  }
});

export default nextConfig;
