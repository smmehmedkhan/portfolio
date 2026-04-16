import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'

describe('Field', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a fieldset with legend and content', () => {
    render(
      <FieldSet>
        <FieldLegend>Contact</FieldLegend>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldContent>
            <input id="email" />
            <FieldDescription>Enter your email</FieldDescription>
          </FieldContent>
        </Field>
      </FieldSet>
    )

    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument()

    const emailLabel = screen.getByText(/email/i, { selector: 'label' })
    expect(emailLabel).toHaveAttribute('data-slot', 'field-label')
  })

  it('renders field error messages and deduplicates duplicates', () => {
    render(
      <FieldError
        errors={[
          { message: 'Required' },
          { message: 'Required' },
          { message: 'Email invalid' },
        ]}
      />
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText(/required/i)).toBeInTheDocument()
    expect(screen.getByText(/email invalid/i)).toBeInTheDocument()
  })

  it('renders a field group and title with the correct data slot', () => {
    render(
      <FieldGroup>
        <FieldTitle>Section Title</FieldTitle>
      </FieldGroup>
    )

    expect(screen.getByText(/section title/i)).toBeInTheDocument()
    expect(screen.getByText(/section title/i)).toHaveAttribute(
      'data-slot',
      'field-label'
    )
  })

  it('renders a separator with children content', () => {
    render(<FieldSeparator>Section</FieldSeparator>)

    const separatorContent = screen.getByText(/section/i)
    expect(separatorContent).toBeInTheDocument()
    expect(
      separatorContent.closest('[data-slot="field-separator"]')
    ).toBeInTheDocument()
  })
})
