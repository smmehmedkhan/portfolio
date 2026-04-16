import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Badge } from '@/components/ui/badge'

describe('Badge', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a default badge', () => {
    render(<Badge>Default</Badge>)
    const badge = screen.getByText(/default/i)

    expect(badge).toBeInTheDocument()
    expect(badge).toHaveAttribute('data-slot', 'badge')
  })

  it('renders outline variant', () => {
    render(<Badge variant="outline">Outline</Badge>)
    const badge = screen.getByText(/outline/i)
    expect(badge).toHaveAttribute('data-slot', 'badge')
  })

  it('renders destructive and secondary variants', () => {
    const { rerender } = render(
      <Badge variant="destructive">Destructive</Badge>
    )
    expect(screen.getByText(/destructive/i)).toBeInTheDocument()

    rerender(<Badge variant="secondary">Secondary</Badge>)
    expect(screen.getByText(/secondary/i)).toBeInTheDocument()
  })

  it('renders as a child component when asChild is true', () => {
    render(
      <Badge asChild>
        <a href="/test">Link Badge</a>
      </Badge>
    )

    const link = screen.getByRole('link', { name: /link badge/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveAttribute('data-slot', 'badge')
  })

  it('renders with children content', () => {
    render(<Badge>React TypeScript</Badge>)
    expect(screen.getByText(/react typescript/i)).toBeInTheDocument()
  })
})
