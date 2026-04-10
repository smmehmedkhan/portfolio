import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light' }),
}))

vi.mock('sonner', () => ({
  Toaster: vi.fn(({ theme, ...props }) => (
    <div data-testid="toaster" data-theme={theme} {...props} />
  )),
}))

import { Toaster } from '@/components/ui/sonner'

describe('Toaster', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders toaster with the current theme', () => {
    render(<Toaster position="top-right" />)

    expect(screen.getByTestId('toaster')).toHaveAttribute('data-theme', 'light')
  })
})
