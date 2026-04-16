import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

// ============================================================================
// PRIORITY 1: UTILITY FUNCTION TESTS
// ============================================================================
describe('P1: Utility Functions', () => {
  // ============================================================================
  // cn() - Class Name Merge Utility
  // ============================================================================
  describe('cn() - Class name utilities', () => {
    it('should merge single class names', () => {
      expect(cn('px-2')).toBe('px-2')
      expect(cn('px-2', 'py-2')).toBe('px-2 py-2')
      expect(cn('px-2', 'py-2', 'bg-white')).toBe('px-2 py-2 bg-white')
    })

    it('should handle empty strings', () => {
      expect(cn('', 'px-2')).toBe('px-2')
      expect(cn('px-2', '')).toBe('px-2')
      expect(cn('', '', '')).toBe('')
    })

    it('should filter out falsy values', () => {
      expect(cn('px-2', false, 'py-2')).toBe('px-2 py-2')
      expect(cn('px-2', undefined, 'py-2')).toBe('px-2 py-2')
      expect(cn('px-2', null, 'py-2')).toBe('px-2 py-2')
      expect(cn('px-2', 0, 'py-2')).toBe('px-2 py-2')
    })

    it('should handle conditional classes', () => {
      const isActive = true
      const isDisabled = false
      expect(cn('base', isActive && 'active')).toBe('base active')
      expect(cn('base', isDisabled && 'disabled')).toBe('base')
    })

    it('should deduplicate Tailwind conflicting classes', () => {
      // Keep last conflicting class (due to tailwind-merge)
      expect(cn('px-2', 'px-4')).toBe('px-4')
      expect(cn('text-sm', 'text-lg')).toBe('text-lg')
      expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
    })

    it('should handle arbitrary values with conflicting patterns', () => {
      expect(cn('p-2', 'p-4')).toBe('p-4')
      expect(cn('m-0', 'm-auto')).toBe('m-auto')
    })

    it('should handle arrays of class names', () => {
      expect(cn(['px-2', 'py-2'])).toBe('px-2 py-2')
      expect(cn(['px-2', 'py-2'], 'bg-white')).toBe('px-2 py-2 bg-white')
      expect(cn('base', ['px-2', 'py-2'])).toBe('base px-2 py-2')
    })

    it('should handle nested arrays', () => {
      expect(cn([['px-2'], ['py-2']])).toBe('px-2 py-2')
    })

    it('should handle object with class conditions', () => {
      expect(cn({ 'px-2': true, 'py-2': false })).toBe('px-2')
      expect(cn({ 'px-2': true, 'py-2': true })).toBe('px-2 py-2')
      expect(cn({ 'px-2': false, 'py-2': true })).toBe('py-2')
    })

    it('should handle complex object conditions', () => {
      const isActive = true
      const isError = false
      const config = {
        'active-class': isActive,
        'error-class': isError,
        'base-class': true,
      }
      expect(cn(config)).toBe('active-class base-class')
    })

    it('should combine multiple argument types', () => {
      expect(cn('px-2', ['py-2', 'bg-white'], { 'text-lg': true })).toBe(
        'px-2 py-2 bg-white text-lg'
      )
    })

    it('should preserve non-conflicting utilities', () => {
      expect(cn('px-2 py-2 bg-white text-black')).toBe(
        'px-2 py-2 bg-white text-black'
      )
    })

    it('should handle responsive class names', () => {
      expect(cn('px-2', 'md:px-4', 'lg:px-6')).toBe('px-2 md:px-4 lg:px-6')
    })

    it('should handle hover/active/focus state classes', () => {
      expect(cn('bg-blue-500', 'hover:bg-blue-600', 'focus:outline-none')).toBe(
        'bg-blue-500 hover:bg-blue-600 focus:outline-none'
      )
    })

    it('should handle dark mode classes', () => {
      expect(cn('bg-white', 'dark:bg-slate-900')).toBe(
        'bg-white dark:bg-slate-900'
      )
    })

    it('should resolve conflicting responsive classes', () => {
      expect(cn('md:px-2', 'md:px-4')).toBe('md:px-4')
      expect(cn('lg:text-sm', 'lg:text-lg')).toBe('lg:text-lg')
    })

    it('should handle empty input gracefully', () => {
      expect(cn()).toBe('')
      expect(cn('')).toBe('')
      expect(cn([], {})).toBe('')
    })

    it('should handle special characters in classes', () => {
      expect(cn('bg-[#ff0000]')).toBe('bg-[#ff0000]')
    })

    it('should return string type', () => {
      const result = cn('px-2', 'py-2')
      expect(typeof result).toBe('string')
    })

    it('should handle very long class strings', () => {
      const longClasses = Array(100).fill('px-2').join(' ')
      const result = cn(longClasses)
      expect(result).toBeTruthy()
    })

    it('should be performant with large inputs', () => {
      const largeArray = Array(1000).fill('px-2')
      const start = performance.now()
      cn(largeArray)
      const end = performance.now()
      expect(end - start).toBeLessThan(100) // Should complete in < 100ms
    })
  })

  // ============================================================================
  // Type Safety Tests
  // ============================================================================
  describe('cn() - Type Safety', () => {
    it('should accept string inputs', () => {
      const result = cn('px-2', 'py-2')
      expect(result).toBe('px-2 py-2')
    })

    it('should accept array inputs', () => {
      const result = cn(['px-2', 'py-2'])
      expect(result).toBe('px-2 py-2')
    })

    it('should accept object inputs', () => {
      const result = cn({ 'px-2': true, 'py-2': false })
      expect(result).toBe('px-2')
    })

    it('should accept mixed input types', () => {
      const result = cn('px-2', ['py-2'], { 'bg-white': true })
      expect(result).toBe('px-2 py-2 bg-white')
    })
  })

  // ============================================================================
  // Real-world Usage Patterns
  // ============================================================================
  describe('cn() - Real-world Usage Patterns', () => {
    it('should handle button component class composition', () => {
      const baseClasses = 'px-4 py-2 rounded font-semibold'
      const variant = 'primary'
      const variantClasses =
        variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'

      const buttonClasses = cn(baseClasses, variantClasses)
      expect(buttonClasses).toContain('px-4')
      expect(buttonClasses).toContain('bg-blue-500')
    })

    it('should handle conditional styling with state', () => {
      const isActive = true
      const isLoading = false

      const classes = cn(
        'button', // base
        isActive && 'active-state', // active state
        isLoading && 'loading-spinner' // loading state
      )

      expect(classes).toBe('button active-state')
    })

    it('should handle responsive design classes', () => {
      const gridClasses = cn(
        'grid', // base
        'grid-cols-1', // mobile
        'sm:grid-cols-2', // small screens
        'lg:grid-cols-3' // large screens
      )

      expect(gridClasses).toContain('grid')
      expect(gridClasses).toContain('lg:grid-cols-3')
    })

    it('should handle form input variants', () => {
      const size: string = 'lg'
      const error = false

      const inputClasses = cn(
        'input px-3 py-2 border rounded', // base
        size === 'sm' && 'text-sm',
        size === 'lg' && 'text-lg',
        error && 'border-red-500 bg-red-50'
      )

      expect(inputClasses).toContain('input')
      expect(inputClasses).toContain('text-lg')
    })

    it('should handle theme-aware styling', () => {
      const isDark = true

      const themeClasses = cn(
        'text-black', // light mode
        isDark && 'dark:text-white', // dark mode override
        'bg-white dark:bg-slate-900'
      )

      expect(themeClasses).toContain('dark:text-white')
    })
  })
})
