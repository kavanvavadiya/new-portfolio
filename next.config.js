/** @type {import('next').NextConfig} */
const nextConfig = {
  output: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
