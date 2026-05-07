import { cleanup, render, screen } from '@testing-library/react'
import type { ComponentType } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/animations/registry', () => ({
  getAnimationPreset: () => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { type: 'tween', duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  }),
}))

vi.mock('motion/react', () => ({
  motion: {
    create: (Comp: ComponentType<unknown> | string) => Comp,
    picture: 'picture',
  },
  easeOut: {},
}))

import HeroImage from '@/components/assets/hero/HeroImage'

describe('HeroImage', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  describe('DOM structure', () => {
    it('renders a picture element with hero-image class', () => {
      render(<HeroImage />)
      expect(document.querySelector('picture.hero-image')).toBeInTheDocument()
    })

    it('renders the hero-images wrapper', () => {
      render(<HeroImage />)
      expect(document.querySelector('.hero-images')).toBeInTheDocument()
    })

    it('renders the hero-canvas svg', () => {
      render(<HeroImage />)
      expect(document.querySelector('svg.hero-canvas')).toBeInTheDocument()
    })
  })

  describe('Art direction', () => {
    it('renders square image as the default img src for mobile', () => {
      render(<HeroImage />)
      const img = screen.getByRole('img', {
        name: /mehmed khan - full-stack developer/i,
      })
      expect(img).toHaveAttribute('src', '/images/mehmed-khan-square.webp')
    })

    it('renders a source element with portrait image for desktop', () => {
      render(<HeroImage />)
      const source = document.querySelector('picture source')
      expect(source).toBeInTheDocument()
      expect(source).toHaveAttribute(
        'srcset',
        '/images/mehmed-khan-portrait.webp'
      )
    })

    it('applies the correct media query breakpoint on the source element', () => {
      render(<HeroImage />)
      const source = document.querySelector('picture source')
      expect(source).toHaveAttribute('media', '(min-width: 768px)')
    })
  })

  describe('Accessibility & performance', () => {
    it('has a descriptive alt text on the img', () => {
      render(<HeroImage />)
      const img = screen.getByRole('img', {
        name: /mehmed khan - full-stack developer/i,
      })
      expect(img).toBeInTheDocument()
    })

    it('sets fetchpriority to high for LCP optimisation', () => {
      render(<HeroImage />)
      const img = screen.getByRole('img', {
        name: /mehmed khan - full-stack developer/i,
      })
      expect(img).toHaveAttribute('fetchpriority', 'high')
    })

    it('sets explicit width and height to prevent layout shift', () => {
      render(<HeroImage />)
      const img = screen.getByRole('img', {
        name: /mehmed khan - full-stack developer/i,
      })
      expect(img).toHaveAttribute('width', '675')
      expect(img).toHaveAttribute('height', '675')
    })
  })
})
