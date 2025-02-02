/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
};

module.exports = nextConfig;