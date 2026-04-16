import { cleanup, render, screen } from '@testing-library/react'
import type { ComponentType } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: vi.fn() }),
}))

vi.mock('motion/react', () => ({
  motion: { create: (Comp: ComponentType<unknown>) => Comp },
  easeOut: {},
}))

import ThemeSwitcher from '@/components/ui/theme-switcher'

describe('ThemeSwitcher', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders theme options', () => {
    render(<ThemeSwitcher />)
    expect(screen.getByText(/light/i)).toBeInTheDocument()
    expect(screen.getByText(/dark/i)).toBeInTheDocument()
    expect(screen.getByText(/system/i)).toBeInTheDocument()
  })
})
