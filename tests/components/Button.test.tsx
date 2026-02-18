import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  describe('Rendering', () => {
    it('renders with default variant', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('data-variant', 'default')
      expect(button).toHaveAttribute('data-size', 'default')
    })

    it('renders with children content', () => {
      render(<Button>Test Content</Button>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('renders as child component when asChild is true', () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      )
      const link = screen.getByRole('link', { name: /link button/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/test')
      expect(link).toHaveAttribute('data-slot', 'button')
    })
  })

  describe('Variants', () => {
    it('renders outline variant', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button', { name: /outline/i })
      expect(button).toHaveAttribute('data-variant', 'outline')
    })

    it('renders destructive variant', () => {
      render(<Button variant="destructive">Destructive</Button>)
      const button = screen.getByRole('button', { name: /destructive/i })
      expect(button).toHaveAttribute('data-variant', 'destructive')
    })

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button', { name: /secondary/i })
      expect(button).toHaveAttribute('data-variant', 'secondary')
    })

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button', { name: /ghost/i })
      expect(button).toHaveAttribute('data-variant', 'ghost')
    })

    it('renders link variant', () => {
      render(<Button variant="link">Link</Button>)
      const button = screen.getByRole('button', { name: /link/i })
      expect(button).toHaveAttribute('data-variant', 'link')
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button', { name: /small/i })
      expect(button).toHaveAttribute('data-size', 'sm')
    })

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button', { name: /large/i })
      expect(button).toHaveAttribute('data-size', 'lg')
    })

    it('renders icon size', () => {
      render(<Button size="icon" aria-label="Icon button" />)
      const button = screen.getByRole('button', { name: /icon button/i })
      expect(button).toHaveAttribute('data-size', 'icon')
    })

    it('renders icon-sm size', () => {
      render(<Button size="icon-sm" aria-label="Small icon button" />)
      const button = screen.getByRole('button', { name: /small icon button/i })
      expect(button).toHaveAttribute('data-size', 'icon-sm')
    })

    it('renders icon-lg size', () => {
      render(<Button size="icon-lg" aria-label="Large icon button" />)
      const button = screen.getByRole('button', { name: /large icon button/i })
      expect(button).toHaveAttribute('data-size', 'icon-lg')
    })
  })

  describe('Interactions', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Click me</Button>)

      const button = screen.getByRole('button', { name: /click me/i })
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not trigger click when disabled', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )

      const button = screen.getByRole('button', { name: /disabled/i })
      await user.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })

    it('is disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button', { name: /disabled/i })
      expect(button).toBeDisabled()
    })
  })

  describe('Custom Props', () => {
    it('applies custom className', () => {
      render(<Button className="custom-class">Custom</Button>)
      const button = screen.getByRole('button', { name: /custom/i })
      expect(button).toHaveClass('custom-class')
    })

    it('forwards additional props', () => {
      render(
        <Button data-testid="test-button" aria-label="Test">
          Button
        </Button>
      )
      const button = screen.getByTestId('test-button')
      expect(button).toHaveAttribute('aria-label', 'Test')
    })

    it('applies type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toHaveAttribute('type', 'submit')
    })
  })

  describe('Data Attributes', () => {
    it('has data-slot attribute', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button', { name: /button/i })
      expect(button).toHaveAttribute('data-slot', 'button')
    })

    it('has correct data-variant attribute', () => {
      render(<Button variant="outline">Button</Button>)
      const button = screen.getByRole('button', { name: /button/i })
      expect(button).toHaveAttribute('data-variant', 'outline')
    })

    it('has correct data-size attribute', () => {
      render(<Button size="lg">Button</Button>)
      const button = screen.getByRole('button', { name: /button/i })
      expect(button).toHaveAttribute('data-size', 'lg')
    })
  })
})
