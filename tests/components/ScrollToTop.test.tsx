import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

describe('ScrollToTop', () => {
  afterEach(() => {
    cleanup()
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    })
  })

  it('does not render when scroll position is below threshold', () => {
    render(<ScrollToTop />)
    expect(screen.queryByLabelText(/scroll to top/i)).not.toBeInTheDocument()
  })

  it('renders the button when scroll position passes threshold', () => {
    Object.defineProperty(window, 'scrollY', {
      value: 10000,
      writable: true,
    })
    render(<ScrollToTop />)

    fireEvent.scroll(window)
    expect(screen.getByLabelText(/scroll to top/i)).toBeInTheDocument()
  })
})
