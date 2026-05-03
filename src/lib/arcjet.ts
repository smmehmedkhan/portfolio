import arcjet, { detectBot, fixedWindow, shield } from '@arcjet/next'
import { env } from '@/lib/env'
import { arcjetLogger } from '@/lib/logger'

/**
 * Factory function to create an Arcjet client with configurable rate limits
 * Validates that ARCJET_KEY is properly configured before initialization
 */
export function createArcjet({
  max = 100,
  devMode = false,
}: {
  max?: number
  devMode?: boolean
} = {}) {
  const isDryRun = env.ARCJET_ENV !== 'production'

  if (devMode && env.ARCJET_ENV === 'production') {
    arcjetLogger.warn(
      'createArcjet devMode option is ignored outside development environment.'
    )
  }

  // In production, ARCJET_KEY is required
  if (
    env.ARCJET_ENV === 'production'
    && (!env.ARCJET_KEY || env.ARCJET_KEY.trim() === '')
  ) {
    throw new Error(
      'ARCJET_KEY environment variable must be set in production. Please configure it before deploying.'
    )
  }

  // In non-production, allow undefined but warn
  if (
    env.ARCJET_ENV !== 'production'
    && (!env.ARCJET_KEY || env.ARCJET_KEY.trim() === '')
  ) {
    arcjetLogger.warn(
      'ARCJET_KEY is not configured. Arcjet protection will be disabled in development mode.'
    )
  }

  return arcjet({
    key: env.ARCJET_KEY || 'development_placeholder_key',
    rules: [
      shield({ mode: isDryRun ? 'DRY_RUN' : 'LIVE' }),
      detectBot({
        mode: isDryRun ? 'DRY_RUN' : 'LIVE',
        allow: ['CATEGORY:SOCIAL', 'CATEGORY:PREVIEW', 'CATEGORY:MONITOR'],
      }),
      fixedWindow({ mode: isDryRun ? 'DRY_RUN' : 'LIVE', window: '1h', max }),
    ],
  })
}

/**
 * Helper function to create a consistent Arcjet denial response
 */
export function arcjetDenialResponse(decision: {
  reason: { isRateLimit(): boolean; isBot(): boolean }
}): { json: object; status: number } {
  // Denial response for bot detections
  if (decision.reason.isBot()) {
    return {
      json: { error: 'Automated requests not permitted' },
      status: 403,
    }
  }

  // Denial response for rate limits
  if (decision.reason.isRateLimit()) {
    return {
      json: { error: 'Too many requests. Please try again later.' },
      status: 429,
    }
  }

  // Default denial response
  return {
    json: { error: 'Forbidden' },
    status: 403,
  }
}
