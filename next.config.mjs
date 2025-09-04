/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: process.cwd(),
  transpilePackages: ["framer-motion"],
  experimental: {
    optimizePackageImports: ["@/components"],
  },
};

export default nextConfig;
