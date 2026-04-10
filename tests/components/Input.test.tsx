import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Input } from '@/components/ui/input'

describe('Input', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders an input field with a placeholder', () => {
    render(<Input placeholder="Enter text" aria-label="text input" />)

    const input = screen.getByPlaceholderText(/enter text/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('aria-label', 'text input')
    expect(input).toHaveAttribute('data-slot', 'input')
  })

  it('handles user typing input', async () => {
    const user = userEvent.setup()

    render(<Input aria-label="typing input" />)
    const input = screen.getByRole('textbox')

    await user.type(input, 'Test input')
    expect(input).toHaveValue('Test input')
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Input disabled aria-label="disabled input" />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('renders different HTML input types correctly', () => {
    const { rerender } = render(
      <Input type="checkbox" aria-label="checkbox input" />
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    rerender(<Input type="radio" aria-label="radio input" />)
    expect(screen.getByRole('radio')).toBeInTheDocument()

    rerender(<Input type="email" placeholder="email" />)
    expect(screen.getByPlaceholderText(/email/i)).toHaveAttribute(
      'type',
      'email'
    )
  })

  it('applies a custom className when provided', () => {
    render(<Input className="custom-class" aria-label="custom input" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-class')
  })
})
