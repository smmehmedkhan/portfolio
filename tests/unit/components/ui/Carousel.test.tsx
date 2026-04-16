import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

vi.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => [
    vi.fn(),
    {
      canScrollPrev: vi.fn(() => false),
      canScrollNext: vi.fn(() => false),
      on: vi.fn(),
      off: vi.fn(),
      scrollPrev: vi.fn(),
      scrollNext: vi.fn(),
    },
  ],
}))

describe('Carousel', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('renders carousel context and items', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious>Prev</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </Carousel>
    )

    expect(screen.getByText(/slide 1/i)).toBeInTheDocument()
    expect(screen.getByText(/slide 2/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /previous slide/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /next slide/i })
    ).toBeInTheDocument()
  })
})
