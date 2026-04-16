import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

describe('HoverCard', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders hover card trigger and content slots', () => {
    render(
      <HoverCard open>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Tooltip content</HoverCardContent>
      </HoverCard>
    )

    expect(screen.getByText(/hover me/i)).toBeInTheDocument()
    expect(screen.getByText(/tooltip content/i)).toBeInTheDocument()
    expect(screen.getByText(/tooltip content/i)).toHaveAttribute(
      'data-slot',
      'hover-card-content'
    )
  })
})
