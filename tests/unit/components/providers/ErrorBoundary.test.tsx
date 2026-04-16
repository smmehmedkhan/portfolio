import { cleanup, render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { ErrorBoundary } from '@/components/providers/ErrorBoundary'

// Helper component that always crashes
function Crashy({ children }: { children?: ReactNode }): never {
  void children
  throw new Error('Intentional crash')
}

// Helper renderer
function renderWithErrorBoundary(fallback: ReactNode, children: ReactNode) {
  return render(<ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>)
}

describe('ErrorBoundary', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('shows fallback UI when child throws', () => {
    renderWithErrorBoundary(
      <div data-testid="fallback">Fallback UI</div>,
      <Crashy />
    )

    expect(screen.getByTestId('fallback')).toBeVisible()
  })

  test('updates when fallback changes and error is resolved', () => {
    const { rerender } = renderWithErrorBoundary(
      <div data-testid="fallback">Initial fallback</div>,
      <Crashy />
    )

    expect(screen.getByTestId('fallback')).toBeInTheDocument()

    rerender(
      <ErrorBoundary fallback={<div>Updated fallback</div>}>
        <div>Safe content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText(/updated fallback/i)).toBeVisible()
  })
})
