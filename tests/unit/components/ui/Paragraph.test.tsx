import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Paragraph } from '@/components/ui/paragraph'

describe('Paragraph', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a paragraph element by default', () => {
    render(<Paragraph>Text content</Paragraph>)

    const paragraph = screen.getByText(/text content/i)
    expect(paragraph.tagName.toLowerCase()).toBe('p')
    expect(paragraph).toHaveAttribute('data-slot', 'paragraph')
  })

  it('uses the semantic tag override when provided', () => {
    render(<Paragraph as="mark">Highlighted text</Paragraph>)

    const paragraph = screen.getByText(/highlighted text/i)
    expect(paragraph.tagName.toLowerCase()).toBe('mark')
  })

  it('applies custom className and variant attributes', () => {
    render(
      <Paragraph variant="lead" className="custom-paragraph">
        Lead text
      </Paragraph>
    )

    const paragraph = screen.getByText(/lead text/i)
    expect(paragraph).toHaveClass('custom-paragraph')
    expect(paragraph).toHaveAttribute('data-variant', 'lead')
  })
})
