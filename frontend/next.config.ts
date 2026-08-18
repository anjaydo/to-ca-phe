import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://cdn.sanity.io/**'),
      new URL('https://lh3.googleusercontent.com/**'),
      new URL('https://images.unsplash.com/**'),
    ],
  },
}

export default nextConfig
