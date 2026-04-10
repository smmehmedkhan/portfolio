import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

describe('RadioGroup', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders radio group items and indicator slot', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <RadioGroupItem value="option-1" aria-label="Option 1" />
        <RadioGroupItem value="option-2" aria-label="Option 2" />
      </RadioGroup>
    )

    expect(screen.getByLabelText(/option 1/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/option 2/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/option 1/i)).toHaveAttribute(
      'data-slot',
      'radio-group-item'
    )
  })
})
