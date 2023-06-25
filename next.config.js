/** @type {import('next').NextConfig} */
// const nextConfig = {}

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true
    }
  }

module.exports = nextConfig
