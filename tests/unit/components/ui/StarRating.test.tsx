import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import StarRating from '@/components/ui/StarRating'

describe('StarRating', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the expected number of stars', () => {
    const { container } = render(<StarRating rating={3} />)
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
  })

  it('renders filled stars for the rating value', () => {
    const { container } = render(<StarRating rating={4} />)
    const filledStars = Array.from(container.querySelectorAll('svg')).filter(
      star => star.className.baseVal.includes('fill-yellow-400')
    )
    expect(filledStars).toHaveLength(4)
  })
})
