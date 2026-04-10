import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

describe('DropdownMenu', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders menu trigger and item slots', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    expect(screen.getByText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/item 1/i)).toBeInTheDocument()
    expect(screen.getByText(/delete/i)).toBeInTheDocument()
    expect(screen.getByText(/menu/i)).toHaveAttribute(
      'data-slot',
      'dropdown-menu-label'
    )
  })
})
