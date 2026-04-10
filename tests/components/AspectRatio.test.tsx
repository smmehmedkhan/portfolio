import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { AspectRatio } from '@/components/ui/aspect-ratio'

describe('AspectRatio', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a wrapper with the correct data-slot', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div>Child content</div>
      </AspectRatio>
    )

    expect(screen.getByText(/child content/i)).toBeInTheDocument()
    const wrapper = screen.getByText(/child content/i).parentElement
    expect(wrapper).toHaveAttribute('data-slot', 'aspect-ratio')
  })
})
