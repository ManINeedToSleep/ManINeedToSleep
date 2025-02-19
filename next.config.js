/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name][ext]'
      }
    });
    return config;
  },
  // Add this to ensure static assets are handled correctly
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 