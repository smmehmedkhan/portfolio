import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { arcjetDenialResponse, createArcjet } from '@/lib/arcjet'
import { arcjetLogger } from '@/lib/logger'

let aj: ReturnType<typeof createArcjet> | null = null

// Initialize Arcjet with validation - throws in production if ARCJET_KEY is missing
function getArcjetClient() {
  if (!aj) {
    try {
      aj = createArcjet()
    } catch (error) {
      arcjetLogger.error({ err: error }, 'Arcjet initialization failed')
      throw error
    }
  }
  return aj
}

const API_ROUTES = /^\/api\//

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Arcjet on the /blocked page itself to prevent infinite redirect loop
  if (pathname.startsWith('/blocked')) {
    return NextResponse.next()
  }

  try {
    const arcjetClient = getArcjetClient()
    const decision = await arcjetClient.protect(request)
    const isApiRoute = API_ROUTES.test(pathname)

    if (decision.isDenied()) {
      // API routes always get JSON
      if (isApiRoute) {
        const denial = arcjetDenialResponse(decision)
        return NextResponse.json(denial.json, { status: denial.status })
      }

      // Page routes redirect to /blocked with the appropriate code
      const code = decision.reason.isRateLimit() ? '429' : '403'
      const url = request.nextUrl.clone()
      url.pathname = '/blocked'
      url.search = `?code=${code}`
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  } catch (error) {
    // Fail-open: log the error but let the request through so Arcjet errors don't take down the site
    arcjetLogger.error(
      { err: error, path: request.nextUrl.pathname },
      'Arcjet protection error — failing open'
    )
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    // All routes — excludes Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico|icons|images|docs).*)',
  ],
}
