import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: vi.fn() }),
}))

import ThemeToggler from '@/components/ui/theme-toggler'

describe('ThemeToggler', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the theme toggler button', () => {
    render(<ThemeToggler />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })
})
