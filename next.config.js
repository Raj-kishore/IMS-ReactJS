/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // for strictmode true, in development mode, useEffect renders twice. Make it false for single time render
  swcMinify: true,
}

module.exports = nextConfig
