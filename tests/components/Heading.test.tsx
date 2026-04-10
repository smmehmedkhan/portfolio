import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Heading } from '@/components/ui/heading'

describe('Heading', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the default heading tag for primary variant', () => {
    render(<Heading>Primary Heading</Heading>)

    const heading = screen.getByText(/primary heading/i)
    expect(heading.tagName.toLowerCase()).toBe('h3')
    expect(heading).toHaveAttribute('data-slot', 'heading')
  })

  it('allows overriding the semantic tag with as prop', () => {
    render(
      <Heading variant="main" as="h1">
        Main Heading
      </Heading>
    )

    const heading = screen.getByText(/main heading/i)
    expect(heading.tagName.toLowerCase()).toBe('h1')
  })

  it('applies custom className and variant data attributes', () => {
    render(
      <Heading variant="secondary" className="custom-heading">
        Secondary Heading
      </Heading>
    )

    const heading = screen.getByText(/secondary heading/i)
    expect(heading).toHaveClass('custom-heading')
    expect(heading).toHaveAttribute('data-variant', 'secondary')
  })
})
