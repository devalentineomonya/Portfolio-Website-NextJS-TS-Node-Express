import  withPWA  from 'next-pwa'
const withPWAConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true, 
    disable: process.env.NODE_ENV === 'development',
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = withPWAConfig({
    reactStrictMode: true,
    swcMinify: true,
  });
  
  export default nextConfig;
  