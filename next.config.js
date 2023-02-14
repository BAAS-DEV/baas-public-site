/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["imagedelivery.net"],
  },
};

module.exports = nextConfig;
