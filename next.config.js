/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.js'],
  images: {
    domains: ['secure.gravatar.com'],
  },
};

module.exports = nextConfig;
