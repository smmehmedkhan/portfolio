import { NextRequest, type NextResponse } from 'next/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// ============================================================================
// MOCKS
// ============================================================================
const mockProtect = vi.fn()
const mockCreateArcjet = vi.fn(() => ({ protect: mockProtect }))

vi.mock('@/lib/arcjet', () => ({
  createArcjet: mockCreateArcjet,
  arcjetDenialResponse: vi.fn(decision => {
    if (decision.reason.isRateLimit()) {
      return {
        json: { error: 'Too many requests. Please try again later.' },
        status: 429,
      }
    }
    return { json: { error: 'Forbidden' }, status: 403 }
  }),
}))

vi.mock('@/lib/logger', () => ({
  arcjetLogger: { error: vi.fn(), warn: vi.fn() },
}))

// ============================================================================
// HELPERS
// ============================================================================
function makeRequest(pathname: string): NextRequest {
  return new NextRequest(new URL(`http://localhost${pathname}`))
}

function makeDecision({
  denied = false,
  isRateLimit = false,
  isBot = false,
}: {
  denied?: boolean
  isRateLimit?: boolean
  isBot?: boolean
} = {}) {
  return {
    isDenied: () => denied,
    reason: {
      isRateLimit: () => isRateLimit,
      isBot: () => isBot,
    },
  }
}

// ============================================================================
// TESTS
// ============================================================================
describe('proxy()', () => {
  let proxy: (req: NextRequest) => Promise<NextResponse>

  beforeEach(async () => {
    vi.resetModules()
    // Re-import after resetModules so the lazy `aj` singleton is fresh each test
    const mod = await import('@/proxy')
    proxy = mod.proxy
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  // --------------------------------------------------------------------------
  // Bypass routes
  // --------------------------------------------------------------------------
  describe('bypass routes — Arcjet is never called', () => {
    it('should bypass /blocked and return next()', async () => {
      const res = await proxy(makeRequest('/blocked'))

      expect(mockProtect).not.toHaveBeenCalled()
      expect(res.status).toBe(200)
    })

    it('should bypass /opengraph-image and return next()', async () => {
      const res = await proxy(makeRequest('/opengraph-image'))

      expect(mockProtect).not.toHaveBeenCalled()
      expect(res.status).toBe(200)
    })
  })

  // --------------------------------------------------------------------------
  // Arcjet allowed
  // --------------------------------------------------------------------------
  describe('Arcjet allowed', () => {
    it('should return next() when decision is not denied', async () => {
      mockProtect.mockResolvedValueOnce(makeDecision({ denied: false }))

      const res = await proxy(makeRequest('/'))

      expect(mockProtect).toHaveBeenCalledOnce()
      expect(res.status).toBe(200)
    })
  })

  // --------------------------------------------------------------------------
  // Arcjet denied — API routes
  // --------------------------------------------------------------------------
  describe('Arcjet denied — API routes', () => {
    it('should return JSON 403 when bot is detected on an API route', async () => {
      mockProtect.mockResolvedValueOnce(
        makeDecision({ denied: true, isBot: true })
      )

      const res = await proxy(makeRequest('/api/v1/contact'))
      const body = await res.json()

      expect(res.status).toBe(403)
      expect(body).toEqual({ error: 'Forbidden' })
    })

    it('should return JSON 429 when rate-limited on an API route', async () => {
      mockProtect.mockResolvedValueOnce(
        makeDecision({ denied: true, isRateLimit: true })
      )

      const res = await proxy(makeRequest('/api/v1/contact'))
      const body = await res.json()

      expect(res.status).toBe(429)
      expect(body).toEqual({
        error: 'Too many requests. Please try again later.',
      })
    })
  })

  // --------------------------------------------------------------------------
  // Arcjet denied — page routes
  // --------------------------------------------------------------------------
  describe('Arcjet denied — page routes', () => {
    it('should redirect to /blocked?code=429 when rate-limited on a page route', async () => {
      mockProtect.mockResolvedValueOnce(
        makeDecision({ denied: true, isRateLimit: true })
      )

      const res = await proxy(makeRequest('/contact'))

      expect(res.status).toBe(307)
      expect(res.headers.get('location')).toContain('/blocked?code=429')
    })

    it('should redirect to /blocked?code=403 when bot is detected on a page route', async () => {
      mockProtect.mockResolvedValueOnce(
        makeDecision({ denied: true, isBot: true })
      )

      const res = await proxy(makeRequest('/about'))

      expect(res.status).toBe(307)
      expect(res.headers.get('location')).toContain('/blocked?code=403')
    })
  })

  // --------------------------------------------------------------------------
  // Fail-open
  // --------------------------------------------------------------------------
  describe('fail-open — Arcjet error', () => {
    it('should return next() and not throw when Arcjet protect() throws', async () => {
      mockProtect.mockRejectedValueOnce(new Error('Arcjet unavailable'))

      const res = await proxy(makeRequest('/projects'))

      expect(res.status).toBe(200)
    })
  })
})
