import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

describe('Component Integration', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  describe('Form Integration', () => {
    it('creates a functional form input group', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" onChange={handleChange} />
          <Button>Submit</Button>
        </div>
      )

      const input = screen.getByRole('textbox')
      await user.type(input, 'John')

      expect(input).toHaveValue('John')
      expect(
        screen.getByRole('button', { name: /submit/i })
      ).toBeInTheDocument()
    })

    it('handles form submission', async () => {
      const user = userEvent.setup()
      const handleSubmit = vi.fn(e => e.preventDefault())

      render(
        <form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
          <Button type="submit">Submit</Button>
        </form>
      )

      const submitButton = screen.getByRole('button', { name: /submit/i })
      await user.click(submitButton)

      expect(handleSubmit).toHaveBeenCalled()
    })

    it('validates email input type rendering', () => {
      render(
        <>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </>
      )

      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.type).toBe('email')
    })
  })

  describe('Accessibility', () => {
    it('button is keyboard accessible', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<Button onClick={handleClick}>Click Me</Button>)
      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{Enter}')

      expect(handleClick).toHaveBeenCalled()
    })

    it('inputs are keyboard accessible', async () => {
      const user = userEvent.setup()

      render(
        <>
          <Label htmlFor="input1">Input 1</Label>
          <Input id="input1" />
          <Label htmlFor="input2">Input 2</Label>
          <Input id="input2" />
        </>
      )

      const input1 = screen.getByLabelText(/input 1/i)
      await user.type(input1, 'test')
      expect(input1).toHaveValue('test')

      await user.keyboard('{Tab}')
      expect(document.activeElement).not.toBe(input1)
    })

    it('form labels associate with inputs correctly', () => {
      render(
        <>
          <Label htmlFor="username">Username</Label>
          <Input id="username" />
        </>
      )

      const label = screen.getByText(/username/i)
      expect(label).toHaveAttribute('for', 'username')
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'username')
    })
  })

  describe('Styling and Composition', () => {
    it('button renders with expected slot styling data', () => {
      render(<Button>Styled Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('data-slot', 'button')
      expect(button.className).not.toBe('')
    })

    it('card renders with content slot structure', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>Test</CardContent>
        </Card>
      )

      const card = screen.getByText(/test/i).closest('[data-slot="card"]')
      expect(card).toBeInTheDocument()
    })

    it('badge renders with classes for variant styling', () => {
      render(<Badge variant="default">Badge</Badge>)
      const badge = screen.getByText(/badge/i)
      expect(badge).toHaveAttribute('data-slot', 'badge')
      expect(badge.className).not.toBe('')
    })
  })
})
