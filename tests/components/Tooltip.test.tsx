import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

describe('Tooltip', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders tooltip trigger and content slots', () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>
    )

    expect(screen.getByText(/hover/i)).toBeInTheDocument()
    expect(screen.getByText(/tooltip text/i)).toBeInTheDocument()
    expect(screen.getByText(/tooltip text/i)).toHaveAttribute(
      'data-slot',
      'tooltip-content'
    )
  })
})
