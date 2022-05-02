/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.js'],
  images: {
    domains: ['secure.gravatar.com', 'dhdbhh0jsld0o.cloudfront.net'],
  },
};

module.exports = nextConfig;
