import arcjet, { detectBot, fixedWindow, shield } from '@arcjet/next'
import { env } from '@/lib/env'

/**
 * Factory function to create an Arcjet client with configurable rate limits
 * Validates that ARCJET_KEY is properly configured before initialization
 */
export function createArcjet({ max = 100 }: { max?: number } = {}) {
  // In production, ARCJET_KEY is required
  if (
    env.ARCJET_ENV === 'production'
    && (!env.ARCJET_KEY || env.ARCJET_KEY.trim() === '')
  ) {
    throw new Error(
      'ARCJET_KEY environment variable must be set in production. Please configure it before deploying.'
    )
  }

  // In development, allow undefined but warn
  if (
    env.ARCJET_ENV === 'development'
    && (!env.ARCJET_KEY || env.ARCJET_KEY.trim() === '')
  ) {
    console.warn(
      '⚠️  ARCJET_KEY is not configured. Arcjet protection will be disabled in development mode.'
    )
  }

  return arcjet({
    key: env.ARCJET_KEY || 'development_placeholder_key',
    rules: [
      // Shield WAF - protects against common attacks (SQL injection, XSS, etc.)
      shield({ mode: 'LIVE' }),
      // Bot detection
      detectBot({
        mode: 'LIVE',
        allow: [], // Block all bots initially
      }),
      // Rate limiting - generic endpoint protection
      fixedWindow({ mode: 'LIVE', window: '1h', max }),
    ],
  })
}

/**
 * Helper function to create a consistent Arcjet denial response
 */
export function arcjetDenialResponse(decision: {
  reason: { isRateLimit(): boolean; isBot(): boolean }
}): { json: object; status: number } {
  if (decision.reason.isBot()) {
    return {
      json: { error: 'Automated requests not permitted' },
      status: 403,
    }
  }

  if (decision.reason.isRateLimit()) {
    return {
      json: { error: 'Too many requests. Please try again later.' },
      status: 429,
    }
  }

  return {
    json: { error: 'Forbidden' },
    status: 403,
  }
}
