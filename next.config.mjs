const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages repository path
  basePath: isProduction ? '/dhanush-portfolio' : '',
  assetPrefix: isProduction ? '/dhanush-portfolio/' : '',

  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Performance optimizations
  swcMinify: true,

  compiler: {
    removeConsole: isProduction,
  },

  experimental: {
    optimizePackageImports: [
      '@splinetool/react-spline',
      'gsap',
      'framer-motion',
      'react-icons',
    ],
  },
};

export default nextConfig;