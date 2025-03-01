/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'build',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
