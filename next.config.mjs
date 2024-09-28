import withPWA from 'next-pwa';

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    // Cache HTML pages
    {
      urlPattern: ({ request }) => request.destination === 'document',
      handler: 'NetworkFirst', // Try to get the latest from network first, fallback to cache
      options: {
        cacheName: 'pages-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
    // Cache CSS files
    {
      urlPattern: ({ request }) => request.destination === 'style',
      handler: 'StaleWhileRevalidate', // Serve from cache but revalidate in the background
      options: {
        cacheName: 'styles-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
        },
      },
    },
    // Cache JavaScript files
    {
      urlPattern: ({ request }) => request.destination === 'script',
      handler: 'StaleWhileRevalidate', // Serve from cache but revalidate in the background
      options: {
        cacheName: 'scripts-cache',
        expiration: {
          maxEntries: 50,
        },
      },
    },
    // Cache images
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'CacheFirst', // Serve from cache if available, otherwise go to the network
      options: {
        cacheName: 'image-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
        },
      },
    },
    // Cache static assets (e.g., fonts)
    {
      urlPattern: ({ request }) => request.destination === 'font',
      handler: 'CacheFirst',
      options: {
        cacheName: 'font-cache',
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    // Cache manifest and other static files
    {
      urlPattern: ({ request }) => request.destination === 'manifest',
      handler: 'CacheFirst',
      options: {
        cacheName: 'manifest-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
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
