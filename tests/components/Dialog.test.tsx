import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

describe('Dialog', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders dialog content with title and description', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogDescription>Dialog description text</DialogDescription>
        </DialogContent>
      </Dialog>
    )

    expect(screen.getByText(/dialog title/i)).toBeInTheDocument()
    expect(screen.getByText(/dialog description text/i)).toBeInTheDocument()
    expect(screen.getByText(/dialog title/i)).toHaveAttribute(
      'data-slot',
      'dialog-title'
    )
    expect(screen.getByText(/dialog description text/i)).toHaveAttribute(
      'data-slot',
      'dialog-description'
    )
  })
})
