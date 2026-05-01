/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: 'fastly.picsum.photos'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
