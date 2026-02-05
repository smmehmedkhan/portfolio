import { z } from 'zod'

/**
 * Environment variable validation schema
 * Validates optional environment variables with safe defaults
 */
const envSchema = z.object({
  // Node environment
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  // Public site configuration (all optional with validation)
  NEXT_PUBLIC_SITE_URL: z
    .url()
    .optional()
    .transform(val => val || undefined),
  NEXT_PUBLIC_EMAIL: z
    .email()
    .optional()
    .transform(val => val || undefined),
  NEXT_PUBLIC_GITHUB_URL: z
    .url()
    .optional()
    .transform(val => val || undefined),
  NEXT_PUBLIC_LINKEDIN_URL: z
    .url()
    .optional()
    .transform(val => val || undefined),
  NEXT_PUBLIC_TWITTER_URL: z
    .url()
    .optional()
    .transform(val => val || undefined),
  NEXT_PUBLIC_PORTFOLIO_URL: z
    .url()
    .optional()
    .transform(val => val || undefined),

  // API configuration
  NEXT_PUBLIC_API_URL: z
    .url()
    .optional()
    .transform(val => val || undefined),

  // Analytics
  NEXT_PUBLIC_GA_ID: z.string().optional(),

  // Vercel specific
  VERCEL_URL: z.string().optional(),
})

type Env = z.infer<typeof envSchema>

/**
 * Safely validates environment variables
 * Uses safeParse to avoid throwing errors during build
 */
function getEnv(): Env {
  const result = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    NEXT_PUBLIC_TWITTER_URL: process.env.NEXT_PUBLIC_TWITTER_URL,
    NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    VERCEL_URL: process.env.VERCEL_URL,
  })

  if (!result.success) {
    // Log warnings in development, but don't break the build
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '⚠️  Environment variable validation warnings:',
        result.error.issues.map(
          err =>
            `${err.path.join('.')}: ${err.message.replace(/[\r\n\t]/g, '')}`
        )
      )
    }
    // Return defaults on validation failure
    return {
      NODE_ENV:
        (process.env.NODE_ENV as 'development' | 'production' | 'test')
        || 'development',
      NEXT_PUBLIC_SITE_URL: undefined,
      NEXT_PUBLIC_EMAIL: undefined,
      NEXT_PUBLIC_GITHUB_URL: undefined,
      NEXT_PUBLIC_LINKEDIN_URL: undefined,
      NEXT_PUBLIC_TWITTER_URL: undefined,
      NEXT_PUBLIC_PORTFOLIO_URL: undefined,
      NEXT_PUBLIC_API_URL: undefined,
      NEXT_PUBLIC_GA_ID: undefined,
      VERCEL_URL: undefined,
    }
  }

  return result.data
}

// Export validated env
export const env = getEnv()

// Export type for TypeScript
export type { Env }
