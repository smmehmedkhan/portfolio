import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Tooltip', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders tooltip trigger and content slots', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>
    )

    expect(screen.getByText(/hover/i)).toBeInTheDocument()
    const contentElement = document.querySelector(
      '[data-slot="tooltip-content"]'
    )
    expect(contentElement).toBeInTheDocument()
    expect(contentElement).toHaveTextContent('Tooltip text')
  })
})
