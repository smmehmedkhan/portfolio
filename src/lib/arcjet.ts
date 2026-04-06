import arcjet, { detectBot, fixedWindow, shield } from '@arcjet/next'
import { env } from '@/lib/env'

export const aj = arcjet({
  key: env.ARCJET_KEY || 'placeholder_key',
  rules: [
    // Shield WAF - protects against common attacks (SQL injection, XSS, etc.)
    shield({ mode: 'LIVE' }),
    // Bot detection
    detectBot({
      mode: 'LIVE',
      allow: [], // Block all bots initially
    }),
    // Rate limiting - generic endpoint protection
    fixedWindow({ mode: 'LIVE', window: '1h', max: 100 }),
  ],
})
