import type { Metadata } from 'next'
import ErrorLayout from '@/components/partials/Error'
import type { AppError } from '@/types'

export const metadata: Metadata = {
  title: 'Access Blocked',
  robots: { index: false, follow: false },
}

export default async function BlockedPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>
}) {
  const { code } = await searchParams

  // Set the appropriate HTTP response status code
  if (code === '429') {
    // Return a 429 response for rate limiting
    const error: AppError = Object.assign(new Error('Rate limited'), {
      statusCode: 429,
    })
    return (
      <main className="wrapper min-h-dvh">
        <ErrorLayout error={error} />
      </main>
    )
  }

  if (code === '503') {
    // Service unavailable
    const error: AppError = Object.assign(
      new Error('Service temporarily unavailable'),
      {
        statusCode: 503,
      }
    )
    return (
      <main className="wrapper min-h-dvh">
        <ErrorLayout error={error} />
      </main>
    )
  }

  // Default to 403 Forbidden
  const error: AppError = Object.assign(new Error('Forbidden'), {
    statusCode: 403,
  })

  return (
    <main className="wrapper min-h-dvh">
      <ErrorLayout error={error} />
    </main>
  )
}
