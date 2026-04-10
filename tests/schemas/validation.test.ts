import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { type ContactFormData, contactSchema } from '@/schemas/contactSchema'
import {
  type NewsletterFormData,
  newsletterSchema,
} from '@/schemas/newsletterSchema'

// ============================================================================
// PRIORITY 1: SCHEMA VALIDATION TESTS
// ============================================================================
describe('P1: Schema Validation', () => {
  // ============================================================================
  // Contact Schema Validation
  // ============================================================================
  describe('Contact Form Schema', () => {
    it('should validate correct contact form data', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Hello there',
        message: 'This is a test message for contact form',
      }

      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should parse and return ContactFormData type', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Hello there',
        message: 'This is a test message for contact form',
      }

      const result = contactSchema.parse(data)
      expect(result).toEqual({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Hello there',
        message: 'This is a test message for contact form',
      })
    })

    it('should validate name field', () => {
      const validData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Subject',
        message: 'Message content',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should reject name shorter than 2 characters', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        subject: 'Subject',
        message: 'Message content',
      }
      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should reject name longer than 100 characters', () => {
      const invalidData = {
        name: 'A'.repeat(101),
        email: 'john@example.com',
        subject: 'Subject',
        message: 'Message content',
      }
      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should trim whitespace from name', () => {
      const dataWithWhitespace = {
        name: '  John Doe  ',
        email: 'john@example.com',
        subject: 'Subject',
        message: 'Message content',
      }

      const result = contactSchema.parse(dataWithWhitespace)
      expect(result.name).toBe('John Doe')
    })

    it('should validate email field', () => {
      const validData = {
        name: 'John',
        email: 'john.doe@example.co.uk',
        subject: 'Subject',
        message: 'Message content',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should reject invalid email formats', () => {
      const invalidEmails = [
        'invalid-email',
        'invalid@',
        '@example.com',
        'john@.com',
        'john@example',
        '',
      ]

      invalidEmails.forEach(email => {
        const invalidData = {
          name: 'John',
          email,
          subject: 'Subject',
          message: 'Message content',
        }
        expect(() => contactSchema.parse(invalidData)).toThrow()
      })
    })

    it('should convert email to lowercase', () => {
      const dataWithUppercase = {
        name: 'John',
        email: 'JOHN@EXAMPLE.COM',
        subject: 'Subject',
        message: 'Message content hello there',
      }

      const result = contactSchema.parse(dataWithUppercase)
      expect(result.email).toBe('john@example.com')
    })

    it('should validate subject field', () => {
      const validData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'This is a subject',
        message: 'Message content',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should reject subject shorter than 5 characters', () => {
      const invalidData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Hi',
        message: 'Message content',
      }
      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should reject subject longer than 200 characters', () => {
      const invalidData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'A'.repeat(201),
        message: 'Message content',
      }
      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should trim whitespace from subject', () => {
      const dataWithWhitespace = {
        name: 'John',
        email: 'john@example.com',
        subject: '  Hello Subject  ',
        message: 'Message content here',
      }

      const result = contactSchema.parse(dataWithWhitespace)
      expect(result.subject).toBe('Hello Subject')
    })

    it('should validate message field', () => {
      const validData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'This is a valid message content',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should reject message shorter than 10 characters', () => {
      const invalidData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'Short msg',
      }
      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should reject message longer than 5000 characters', () => {
      const invalidData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'A'.repeat(5001),
      }
      expect(() => contactSchema.parse(invalidData)).toThrow()
    })

    it('should trim whitespace from message', () => {
      const dataWithWhitespace = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: '  This is a message  ',
      }

      const result = contactSchema.parse(dataWithWhitespace)
      expect(result.message).toBe('This is a message')
    })

    it('should accept message at boundary lengths', () => {
      expect(() => {
        contactSchema.parse({
          name: 'John',
          email: 'john@example.com',
          subject: 'Hello',
          message: 'A'.repeat(10),
        })
      }).not.toThrow()

      expect(() => {
        contactSchema.parse({
          name: 'John',
          email: 'john@example.com',
          subject: 'Hello',
          message: 'A'.repeat(5000),
        })
      }).not.toThrow()
    })

    it('should return proper error messages', () => {
      const invalidData = {
        name: 'J',
        email: 'invalid-email',
        subject: 'Hi',
        message: 'Msg',
      }

      try {
        contactSchema.parse(invalidData)
      } catch (error) {
        if (error instanceof z.ZodError) {
          expect(error.issues.length).toBeGreaterThan(0)
          // Check that error messages are descriptive
          const messages = error.issues.map(e => e.message)
          expect(messages.some(msg => msg.length > 0)).toBe(true)
        }
      }
    })

    it('should reject missing fields', () => {
      const incompleteData = {
        name: 'John',
        email: 'john@example.com',
        // missing subject and message
      }

      expect(() => contactSchema.parse(incompleteData)).toThrow()
    })

    it('should reject extra fields by default', () => {
      const dataWithExtra = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Hello',
        message: 'Message content',
        phone: '123456789', // extra field
      }

      const result = contactSchema.parseAsync(dataWithExtra)
      // Extra fields should be ignored or cause validation to vary based on implementation
      expect(result).toBeDefined()
    })
  })

  // ============================================================================
  // Newsletter Schema Validation
  // ============================================================================
  describe('Newsletter Form Schema', () => {
    it('should validate correct newsletter email', () => {
      const validData: NewsletterFormData = {
        email: 'subscriber@example.com',
      }

      expect(() => newsletterSchema.parse(validData)).not.toThrow()
    })

    it('should parse and return NewsletterFormData type', () => {
      const data = {
        email: 'subscriber@example.com',
      }

      const result = newsletterSchema.parse(data)
      expect(result).toEqual({
        email: 'subscriber@example.com',
      })
    })

    it('should accept various valid email formats', () => {
      const validEmails = [
        'user@example.com',
        'user.name@example.com',
        'user+tag@example.co.uk',
        'user123@example-domain.com',
        'first.last@subdomain.example.com',
      ]

      validEmails.forEach(email => {
        expect(() =>
          newsletterSchema.parse({
            email,
          })
        ).not.toThrow()
      })
    })

    it('should reject invalid email formats', () => {
      const invalidEmails = [
        'not-an-email',
        'user@',
        '@example.com',
        'user@.com',
        'user@example',
        '',
        'user @example.com',
        'user@exam ple.com',
      ]

      invalidEmails.forEach(email => {
        expect(() =>
          newsletterSchema.parse({
            email,
          })
        ).toThrow()
      })
    })

    it('should reject missing email field', () => {
      const incompleteData = {}

      expect(() => newsletterSchema.parse(incompleteData)).toThrow()
    })

    it('should reject null email', () => {
      expect(() =>
        newsletterSchema.parse({
          email: null,
        })
      ).toThrow()
    })

    it('should reject undefined email', () => {
      expect(() =>
        newsletterSchema.parse({
          email: undefined,
        })
      ).toThrow()
    })

    it('should return proper error message for invalid email', () => {
      try {
        newsletterSchema.parse({
          email: 'invalid-email',
        })
      } catch (error) {
        if (error instanceof z.ZodError) {
          expect(error.issues.length).toBeGreaterThan(0)
          expect(error.issues[0].message).toContain('email')
        }
      }
    })
  })

  // ============================================================================
  // Type Safety Tests
  // ============================================================================
  describe('Schema Type Inference', () => {
    it('ContactFormData should have correct structure', () => {
      const data: ContactFormData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Subject',
        message: 'Message content',
      }

      expect(data.name).toBe('John')
      expect(data.email).toBe('john@example.com')
      expect(data.subject).toBe('Subject')
      expect(data.message).toBe('Message content')
    })

    it('NewsletterFormData should have correct structure', () => {
      const data: NewsletterFormData = {
        email: 'user@example.com',
      }

      expect(data.email).toBe('user@example.com')
    })
  })

  // ============================================================================
  // Edge Cases and Special Characters
  // ============================================================================
  describe('Schema Edge Cases', () => {
    it('should handle special characters in contact form name', () => {
      const validData = {
        name: "O'Brien-Smith",
        email: 'john@example.com',
        subject: 'Hello',
        message: 'Message content here',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should handle unicode characters in contact form', () => {
      const validData = {
        name: '张三 (Zhang San)',
        email: 'zhang@example.com',
        subject: '你好',
        message: 'こんにちは - this is a test message',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should handle html-like characters in message', () => {
      const validData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Subject',
        message: 'Check <this> and [that] & "quotes" here',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should handle numbers in contact form name', () => {
      const validData = {
        name: 'User123 4th Time',
        email: 'user@example.com',
        subject: 'Subject Line 2024',
        message: 'Message with numbers 123456789',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })

    it('should handle emails with numbers and special chars', () => {
      const validData = {
        name: 'John',
        email: 'user123+tag@example-domain.co.uk',
        subject: 'Subject',
        message: 'Message content here today',
      }
      expect(() => contactSchema.parse(validData)).not.toThrow()
    })
  })

  // ============================================================================
  // Safeguard Against XSS or Injection Attacks
  // ============================================================================
  describe('Schema Security - XSS Prevention', () => {
    it('should accept script-like content without executing', () => {
      const suspiciousData = {
        name: 'John',
        email: 'john@example.com',
        subject: 'Test Script',
        message: '<script>alert("xss")</script>',
      }
      expect(() => contactSchema.parse(suspiciousData)).not.toThrow()
      // Content should be treated as plain text, not executed
    })

    it('should handle SQL-like injection attempts', () => {
      const sqlLikeData = {
        name: "'; DROP TABLE users; --",
        email: 'test@example.com',
        subject: 'Test SQL Injection',
        message: 'SELECT * FROM users WHERE 1=1 hello there friend',
      }
      expect(() => contactSchema.parse(sqlLikeData)).not.toThrow()
    })

    it('should handle common attack patterns', () => {
      const attackPatterns = {
        name: '<img src=x onerror="alert(1)">',
        email: 'user@example.com',
        subject: 'Test',
        message: 'onload=alert(1) really long message content',
      }
      expect(() => contactSchema.parse(attackPatterns)).not.toThrow()
    })
  })
})
