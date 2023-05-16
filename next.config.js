/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  target: 'serverless',
  reactStrictMode: true,
}

module.exports = nextConfig
