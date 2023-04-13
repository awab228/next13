/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: 'build', basePath: '/next13/'
};

module.exports = nextConfig;
