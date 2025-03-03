/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '5.imimg.com',
      },
    ],
  },
};

export default nextConfig
