import type { Metadata } from 'next'
import ErrorLayout from '@/components/partials/Error'

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

  if (code === '429') {
    return (
      <main className="wrapper min-h-dvh">
        <ErrorLayout error={{ statusCode: 429, message: 'Rate limited' }} />
      </main>
    )
  }

  if (code === '503') {
    return (
      <main className="wrapper min-h-dvh">
        <ErrorLayout
          error={{
            statusCode: 503,
            message: 'Service temporarily unavailable',
          }}
        />
      </main>
    )
  }

  return (
    <main className="wrapper min-h-dvh">
      <ErrorLayout error={{ statusCode: 403, message: 'Forbidden' }} />
    </main>
  )
}
