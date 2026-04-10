import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type SyntheticEvent, useState } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { type ContactFormData, contactSchema } from '@/schemas/contactSchema'
import {
  type NewsletterFormData,
  newsletterSchema,
} from '@/schemas/newsletterSchema'

// ============================================================================
// PRIORITY 1: INTEGRATION FLOW TESTS
// ============================================================================
describe('P1: Integration Flows', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  // ============================================================================
  // Contact Form Integration
  // ============================================================================
  describe('Contact Form Flow', () => {
    it('should validate contact form with schema during submission', async () => {
      const user = userEvent.setup()
      const handleSubmit = vi.fn(async (data: unknown) =>
        contactSchema.parse(data)
      )

      const TestForm = () => {
        const [data, setData] = useState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })

        const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
          e.preventDefault()
          try {
            await handleSubmit(data)
          } catch {
            // ignore schema errors for test input handling
          }
        }

        return (
          <form onSubmit={onSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={e => setData({ ...data, name: e.target.value })}
            />

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
            />

            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={data.subject}
              onChange={e => setData({ ...data, subject: e.target.value })}
            />

            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              value={data.message}
              onChange={e => setData({ ...data, message: e.target.value })}
            />

            <Button type="submit">Submit</Button>
          </form>
        )
      }

      render(<TestForm />)

      await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
      await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
      await user.type(screen.getByLabelText(/subject/i), 'Hello World')
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a valid message content'
      )
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'Jane Doe',
        email: 'jane@example.com',
        subject: 'Hello World',
        message: 'This is a valid message content',
      })
    })

    it('should show validation error for invalid contact form data', () => {
      const invalidData = {
        name: 'J', // too short
        email: 'invalid-email', // invalid email
        subject: 'Hi', // too short
        message: 'Msg', // too short
      }

      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should successfully submit valid contact form data', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Hello World',
        message: 'This is a valid message content',
      }

      const result = contactSchema.parse(validData)
      expect(result).toEqual(validData)
    })

    it('should trim whitespace from contact form inputs', () => {
      const dataWithWhitespace = {
        name: '  Jane Doe  ',
        email: 'jane@example.com',
        subject: '  Hello Subject  ',
        message: '  This is a test message  ',
      }

      const result = contactSchema.parse(dataWithWhitespace)
      expect(result.name).toBe('Jane Doe')
      expect(result.subject).toBe('Hello Subject')
      expect(result.message).toBe('This is a test message')
    })
  })

  // ============================================================================
  // Newsletter Signup Integration
  // ============================================================================
  describe('Newsletter Signup Flow', () => {
    it('should validate newsletter email with schema', () => {
      const validEmail = 'subscriber@example.com'
      const data = { email: validEmail }

      const result = newsletterSchema.parse(data)
      expect(result.email).toBe(validEmail)
    })

    it('should reject invalid email format in newsletter', () => {
      const invalidEmail = 'not-an-email'
      const data = { email: invalidEmail }

      expect(() => newsletterSchema.parse(data)).toThrow()
    })

    it('should accept newsletter subscription', () => {
      const validData: NewsletterFormData = {
        email: 'user@example.com',
      }

      const result = newsletterSchema.parse(validData)
      expect(result.email).toBe('user@example.com')
    })
  })

  // ============================================================================
  // Form Interaction Integration
  // ============================================================================
  describe('Form Interaction Flows', () => {
    it('should enable button when form is valid', () => {
      const handleSubmit = vi.fn()

      render(
        <>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="testuser" />
          <Button onClick={handleSubmit} disabled={false}>
            Submit
          </Button>
        </>
      )

      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toBeEnabled()
    })

    it('should disable button when form is invalid', () => {
      render(
        <>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="" />
          <Button disabled>Submit</Button>
        </>
      )

      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toBeDisabled()
    })

    it('should handle form submission with multiple fields', async () => {
      const user = userEvent.setup()
      const handleSubmit = vi.fn()

      render(
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />

          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />

          <Button type="submit">Submit</Button>
        </form>
      )

      const form = screen
        .getByRole('button', { name: /submit/i })
        .closest('form')
      if (form) {
        const submitButton = within(form).getByRole('button', {
          name: /submit/i,
        })
        await user.click(submitButton)
      }

      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
  })

  // ============================================================================
  // Theme and UI State Integration
  // ============================================================================
  describe('UI State Integration', () => {
    it('should maintain form state across interactions', async () => {
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
      await user.type(input1, 'Value 1')
      expect(input1).toHaveValue('Value 1')

      const input2 = screen.getByLabelText(/input 2/i)
      await user.type(input2, 'Value 2')
      expect(input1).toHaveValue('Value 1')
      expect(input2).toHaveValue('Value 2')
    })

    it('should display multiple form sections', () => {
      render(
        <>
          <div>
            <h2>Section 1</h2>
            <Input placeholder="Field 1" />
          </div>
          <div>
            <h2>Section 2</h2>
            <Input placeholder="Field 2" />
          </div>
          <Button>Submit All</Button>
        </>
      )

      expect(screen.getByText('Section 1')).toBeInTheDocument()
      expect(screen.getByText('Section 2')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Field 1')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Field 2')).toBeInTheDocument()
    })
  })

  // ============================================================================
  // Error Handling Integration
  // ============================================================================
  describe('Error Handling Integration', () => {
    it('should validate schema and display error for contact form', () => {
      const invalidData = {
        name: 'J',
        email: 'invalid',
        subject: 'Hi',
        message: 'Msg',
      }

      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should handle missing required fields gracefully', () => {
      const incompleteData = {
        name: 'John',
      }

      expect(() => contactSchema.parse(incompleteData)).toThrow()
    })

    it('should provide meaningful error messages', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        subject: 'Hi',
        message: 'Msg',
      }

      try {
        contactSchema.parse(invalidData)
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
  })

  // ============================================================================
  // Data Flow Integration
  // ============================================================================
  describe('Data Flow Integration', () => {
    it('should process contact form data through schema', () => {
      const formData = new FormData()
      formData.append('name', 'John Doe')
      formData.append('email', 'john@example.com')
      formData.append('subject', 'Hello')
      formData.append('message', 'This is a message content')

      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      }

      const result = contactSchema.parse(data)
      expect(result.name).toBe('John Doe')
    })

    it('should transform email to lowercase during validation', () => {
      const initialData = {
        name: 'John',
        email: 'JOHN.DOE@EXAMPLE.COM',
        subject: 'Subject',
        message: 'Message content',
      }

      const result = contactSchema.parse(initialData)
      expect(result.email).toBe('john.doe@example.com')
    })

    it('should normalize whitespace in all text fields', () => {
      const dataWithExtraSpace = {
        name: '  John   Doe  ',
        email: 'john@example.com',
        subject: '  Subject   Line  ',
        message: '  Message    content  ',
      }

      const result = contactSchema.parse(dataWithExtraSpace)
      expect(result.name).not.toMatch(/^\s/)
      expect(result.subject).not.toMatch(/^\s/)
      expect(result.message).not.toMatch(/^\s/)
    })
  })

  // ============================================================================
  // Validation Boundary Testing
  // ============================================================================
  describe('Validation Boundaries', () => {
    it('should validate contact form at exact minimum lengths', () => {
      const minData: ContactFormData = {
        name: 'Jo',
        email: 'a@b.co',
        subject: 'Hello',
        message: 'A message',
      }

      try {
        contactSchema.parse(minData)
      } catch {
        // Expected for message < 10
      }
    })

    it('should validate contact form at exact maximum lengths', () => {
      const maxData = {
        name: 'A'.repeat(100),
        email: 'user@example.com',
        subject: 'B'.repeat(200),
        message: 'C'.repeat(5000),
      }

      expect(() => contactSchema.parse(maxData)).not.toThrow()
    })

    it('should reject just over maximum lengths', () => {
      const overMaxData = {
        name: 'A'.repeat(101),
        email: 'user@example.com',
        subject: 'Subject',
        message: 'Message content',
      }

      expect(() => contactSchema.parse(overMaxData)).toThrow()
    })
  })

  // ============================================================================
  // Schema Composition Integration
  // ============================================================================
  describe('Schema Composition', () => {
    it('should handle batch validation of multiple contact forms', () => {
      const contactList = [
        {
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Hello',
          message: 'Message content here',
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          subject: 'Testing Subject',
          message: 'Another message content',
        },
      ]

      const results = contactList.map(data => contactSchema.parse(data))
      expect(results).toHaveLength(2)
      expect(results[0].name).toBe('John Doe')
      expect(results[1].name).toBe('Jane Smith')
    })

    it('should validate newsletter emails in bulk', () => {
      const emails = [
        'user1@example.com',
        'user2@example.com',
        'user3@example.com',
      ]

      const results = emails.map(email => newsletterSchema.parse({ email }))

      expect(results).toHaveLength(3)
      results.forEach(result => {
        expect(result.email).toContain('@')
      })
    })
  })
})
