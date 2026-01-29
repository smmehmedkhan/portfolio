import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with default variant', async () => {
    render(<Button>Click me</Button>)
    const button = await screen.findByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = await screen.findByRole('button', { name: /click me/i })
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with different variants', async () => {
    const { rerender } = render(<Button variant="outline">Outline</Button>)
    let button = await screen.findByRole('button', { name: /outline/i })
    expect(button).toBeInTheDocument()

    rerender(<Button variant="destructive">Destructive</Button>)
    button = await screen.findByRole('button', { name: /destructive/i })
    expect(button).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', async () => {
    render(<Button disabled>Disabled</Button>)
    const button = await screen.findByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
  })

  it('renders as child component when asChild is true', async () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = await screen.findByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })
})
