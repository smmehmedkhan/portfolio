import type { Metadata } from 'next'
import NotFoundComponent from '@/components/partials/NotFound'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <main className="wrapper min-h-[calc(100dvh-60px)]">
      <NotFoundComponent />
    </main>
  )
}
