import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

describe('Accordion', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the accordion structure', async () => {
    const user = userEvent.setup()
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText(/section 1/i)).toBeInTheDocument()
    expect(screen.getByText(/section 1/i)).toHaveAttribute(
      'data-slot',
      'accordion-trigger'
    )

    // Click to open
    await user.click(screen.getByText(/section 1/i))

    expect(screen.getByText(/content 1/i)).toBeInTheDocument()
    expect(
      screen.getByText(/content 1/i).closest('[data-slot="accordion-content"]')
    ).toHaveAttribute('data-slot', 'accordion-content')
  })
})
