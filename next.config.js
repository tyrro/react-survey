/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.js'],
  images: {
    domains: ['secure.gravatar.com', 'dhdbhh0jsld0o.cloudfront.net'],
  },
  async redirects() {
    return [
      {
        source: '/surveys',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
