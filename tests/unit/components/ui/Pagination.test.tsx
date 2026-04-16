import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

describe('Pagination', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders pagination structure and previous/next links', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#prev">Previous</PaginationPrevious>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#1" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#next">Next</PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByLabelText(/go to previous page/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/go to next page/i)).toBeInTheDocument()
    expect(screen.getByText(/1/i)).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText(/more pages/i)).toBeInTheDocument()
  })
})
