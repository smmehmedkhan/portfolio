import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Textarea } from '@/components/ui/textarea'

describe('Textarea', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a textarea element with a data-slot attribute', () => {
    render(<Textarea placeholder="Enter details" aria-label="details" />)

    const textarea = screen.getByLabelText(/details/i)
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('data-slot', 'textarea')
  })

  it('accepts custom className values', () => {
    render(<Textarea className="custom-textarea" aria-label="details" />)
    expect(screen.getByLabelText(/details/i)).toHaveClass('custom-textarea')
  })
})
