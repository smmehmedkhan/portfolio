'use client'

import ErrorLayout from '@/components/partials/Error'
import { ThemeProvider } from '@/components/providers/theme-provider'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <header className="sr-only">
            <h1>Something went wrong!</h1>
          </header>
          <main className="wrapper min-h-dvh">
            <ErrorLayout error={error} reset={reset} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
