/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'Portfolio'; // Replace with your GitHub repo name

const nextConfig = {
  output: 'export', // Enables static exports
  basePath: isProduction ? `/${repoName}` : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static exports
  },
  
};

module.exports = nextConfig;