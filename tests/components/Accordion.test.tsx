import { cleanup, render, screen } from '@testing-library/react'
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

  it('renders the accordion structure', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText(/section 1/i)).toBeInTheDocument()
    expect(screen.getByText(/content 1/i)).toBeInTheDocument()
    expect(screen.getByText(/section 1/i)).toHaveAttribute(
      'data-slot',
      'accordion-trigger'
    )
    expect(screen.getByText(/content 1/i)).toHaveAttribute(
      'data-slot',
      'accordion-content'
    )
  })
})
