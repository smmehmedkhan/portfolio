interface VercelConfig {
  buildCommand?: string
  devCommand?: string
  installCommand?: string
  framework?: string
  regions?: string[]
  functions?: Record<string, { runtime: string }>
  headers?: Array<{
    source: string
    headers: Array<{ key: string; value: string }>
  }>
  rewrites?: Array<{ source: string; destination: string }>
  cleanUrls?: boolean
  trailingSlash?: boolean
}

function generateVercelConfig(): VercelConfig {
  const isDev = process.env.NODE_ENV === 'development'
  const isProduction = process.env.NODE_ENV === 'production'

  const config: VercelConfig = {
    buildCommand: 'pnpm build',
    devCommand: 'pnpm dev',
    installCommand: 'pnpm install --frozen-lockfile',
    framework: 'nextjs',
    regions: isProduction ? ['iad1', 'sfo1'] : ['iad1'],

    functions: {
      'src/app/**/*.{js,ts,jsx,tsx}': {
        runtime: '@vercel/node@22',
      },
    },

    headers: [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          ...(isProduction
            ? [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=31536000; includeSubDomains',
                },
              ]
            : []),
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: isProduction
              ? 'public, max-age=31536000, immutable'
              : 'public, max-age=3600',
          },
        ],
      },
      {
        source: '/icons/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: isProduction
              ? 'public, max-age=31536000, immutable'
              : 'public, max-age=3600',
          },
        ],
      },
    ],

    rewrites: [
      { source: '/sitemap.xml', destination: '/api/sitemap' },
      { source: '/robots.txt', destination: '/api/robots' },
    ],

    cleanUrls: true,
    trailingSlash: false,
  }

  if (isDev) {
    config.headers?.push({
      source: '/(.*)',
      headers: [{ key: 'X-Dev-Mode', value: 'true' }],
    })
  }

  return config
}

export default generateVercelConfig()
export { generateVercelConfig }
