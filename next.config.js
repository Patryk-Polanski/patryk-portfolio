/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'patryk-polanski.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
