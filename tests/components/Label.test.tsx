import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

describe('Label', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders label text', () => {
    render(<Label>Email</Label>)
    expect(screen.getByText(/email/i)).toBeInTheDocument()
  })

  it('associates with an input using htmlFor', () => {
    render(
      <>
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" />
      </>
    )

    const label = screen.getByText(/email/i)
    expect(label).toHaveAttribute('for', 'email-input')
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email-input')
  })

  it('supports custom className', () => {
    render(<Label className="custom">Text</Label>)
    expect(screen.getByText(/text/i)).toHaveClass('custom')
  })

  it('renders children elements inside the label', () => {
    render(
      <Label>
        Email <span data-testid="required">*</span>
      </Label>
    )

    expect(screen.getByText(/email/i)).toBeInTheDocument()
    expect(screen.getByTestId('required')).toBeInTheDocument()
  })

  it('uses the radix label root slot data attribute', () => {
    render(<Label htmlFor="name">Name</Label>)
    expect(screen.getByText(/name/i)).toHaveAttribute('data-slot', 'label')
  })
})
