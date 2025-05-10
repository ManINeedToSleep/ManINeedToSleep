import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
      {
        protocol: 'https',
        hostname: 'gw.alipayobjects.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
      }
    ],
  },
  /* other config options here */
};

export default nextConfig;
