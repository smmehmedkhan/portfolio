import { createRequire } from 'node:module'
import type { NextConfig } from 'next'

const require = createRequire(import.meta.url)

const nextConfig: NextConfig = {
  // Enhanced caching strategies
  cacheHandler: require.resolve(
    'next/dist/server/lib/incremental-cache/file-system-cache.js'
  ),
  cacheMaxMemorySize: 0,

  // Improved static generation
  output: 'standalone',

  // Better TypeScript support
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: false,
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dropdown-menu'],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
}

export default nextConfig
