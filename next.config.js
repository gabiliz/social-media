/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      }
    ],
    domains: ['cdn.sanity.io', 'pbs.twimg.com', 'img.quizur.com']
  },
  env: {
    SERVER: process.env.SERVER,
  },
}

module.exports = nextConfig
