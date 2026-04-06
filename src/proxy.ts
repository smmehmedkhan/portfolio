import arcjet, { detectBot, shield } from '@arcjet/next'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { env } from '@/lib/env'

const aj = arcjet({
  key: env.ARCJET_KEY || 'placeholder_key',
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: 'LIVE',
      allow: [
        'CATEGORY:SEARCH_ENGINE', // Allow Google, Bing, etc.
      ],
    }),
  ],
})

const API_ROUTES = /^\/api\//

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Arcjet on the /blocked page itself to prevent infinite redirect loop
  if (pathname.startsWith('/blocked')) {
    return NextResponse.next()
  }

  const decision = await aj.protect(request)
  const isApiRoute = API_ROUTES.test(pathname)

  if (decision.isDenied()) {
    // API routes always get JSON
    if (isApiRoute) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Page routes redirect to /blocked with the appropriate code
    const code = decision.reason.isRateLimit() ? '429' : '403'
    const url = request.nextUrl.clone()
    url.pathname = '/blocked'
    url.search = `?code=${code}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // All routes — excludes Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico|icons|images|docs).*)',
  ],
}
