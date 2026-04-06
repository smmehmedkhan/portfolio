import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { arcjetDenialResponse, createArcjet } from '@/lib/arcjet'

let aj: ReturnType<typeof createArcjet> | null = null

// Initialize Arcjet with validation - throws in production if ARCJET_KEY is missing
function getArcjetClient() {
  if (!aj) {
    try {
      aj = createArcjet()
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to initialize Arcjet'
      console.error(`Arcjet initialization error: ${message}`)
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
    // Log the error for debugging
    const errorMessage = error instanceof Error ? error.message : String(error)
    const requestPath = request.nextUrl.pathname
    console.error(`Arcjet protection error at ${requestPath}: ${errorMessage}`)

    // Fail-closed: deny the request on Arcjet errors
    const isApiRoute = API_ROUTES.test(request.nextUrl.pathname)
    if (isApiRoute) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }

    // For page routes, redirect to blocked with 503 code
    const url = request.nextUrl.clone()
    url.pathname = '/blocked'
    url.search = '?code=503'
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: [
    // All routes — excludes Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico|icons|images|docs).*)',
  ],
}
