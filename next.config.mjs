/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.178.23'],
  distDir: process.env.NODE_ENV === 'development' ? '.next_dev' : '.next',
};

export default nextConfig;
