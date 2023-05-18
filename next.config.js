/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "https://i0.wp.com"],
  },
};

module.exports = nextConfig;
