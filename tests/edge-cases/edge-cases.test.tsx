import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { expect, test } from 'vitest'
import { ErrorBoundary } from '@/components/providers/ErrorBoundary'

function Crashy({ children }: { children?: ReactNode }): never {
  void children
  throw new Error('Intentional crash for edge-case coverage')
}

test('ErrorBoundary renders fallback UI when a child component throws', () => {
  render(
    <ErrorBoundary
      fallback={<div data-testid="fallback">Fallback UI rendered</div>}>
      <Crashy>Children</Crashy>
    </ErrorBoundary>
  )

  expect(screen.getByTestId('fallback')).toBeInTheDocument()
  expect(screen.getByText(/fallback ui rendered/i)).toBeVisible()
})

test('ErrorBoundary resets state when fallback UI is replaced', () => {
  const { rerender } = render(
    <ErrorBoundary
      fallback={<div data-testid="fallback">Initial fallback</div>}>
      <Crashy>Children</Crashy>
    </ErrorBoundary>
  )

  expect(screen.getByTestId('fallback')).toBeInTheDocument()

  rerender(
    <ErrorBoundary
      fallback={<div data-testid="fallback">Updated fallback</div>}>
      <div>Safe content</div>
    </ErrorBoundary>
  )

  expect(screen.getByText(/updated fallback/i)).toBeVisible()
})
