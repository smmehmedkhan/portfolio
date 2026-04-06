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
  const statusCode = code === '429' ? 429 : 403
  const error: AppError = Object.assign(new Error('Access blocked'), {
    statusCode,
  })

  return (
    <main className="wrapper min-h-dvh">
      <ErrorLayout error={error} />
    </main>
  )
}
