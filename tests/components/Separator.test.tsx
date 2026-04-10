import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Separator } from '@/components/ui/separator'

describe('Separator', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders horizontal separator by default', () => {
    render(<Separator decorative={false} />)
    const separator = screen.getByRole('separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveAttribute('data-slot', 'separator')
    expect(separator).toHaveAttribute('data-orientation', 'horizontal')
  })

  it('supports vertical orientation', () => {
    render(<Separator orientation="vertical" decorative={false} />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('data-orientation', 'vertical')
  })
})
