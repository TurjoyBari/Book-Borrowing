/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
