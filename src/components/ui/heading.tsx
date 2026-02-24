'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'motion/react'
import { motion } from 'motion/react'
import React from 'react'
import { cn } from '@/lib/utils'

/**
 * CVA-based heading variants with semantic HTML tag mapping
 * Supports 6 heading levels (h1-h6) with customizable sizing and animations
 */
const headingVariants = cva('scroll-m-20 text-pretty', {
  variants: {
    variant: {
      main: 'font-special font-black tracking-wide uppercase bg-clip-text text-transparent bg-linear-to-b from-amber-300 via-amber-500 to-amber-700 box-border',
      sub: 'text-muted-foreground font-semibold tracking-tight',
      primary:
        'font-bold tracking-tight md:tracking-normal lg:tracking-wide text-center',
      secondary:
        'font-semibold text-muted-foreground tracking-tight md:tracking-normal lg:tracking-wide',
      title: 'font-semibold tracking-tight',
      role: 'font-medium tracking-tight text-muted-foreground',
    },
    size: {
      xs: 'text-[length:var(--text-xs)]',
      sm: 'text-[length:var(--text-sm)]',
      nm: 'text-[length:var(--text-nm)]',
      md: 'text-[length:var(--text-md)]',
      lg: 'text-[length:var(--text-lg)]',
      xl: 'text-[length:var(--text-xl)]',
      '2xl': 'text-[length:var(--text-2xl)]',
      '3xl': 'text-[length:var(--text-3xl)]',
      '4xl': 'text-[length:var(--text-4xl)]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'xl',
  },
})

/**
 * Mapping of variant to default semantic HTML heading tag
 */
const variantTagMap: Record<string, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
  main: 'h1',
  sub: 'h2',
  primary: 'h3',
  secondary: 'h4',
  title: 'h5',
  role: 'h6',
}

const motionComponents = {
  h1: motion.create('h1'),
  h2: motion.create('h2'),
  h3: motion.create('h3'),
  h4: motion.create('h4'),
  h5: motion.create('h5'),
  h6: motion.create('h6'),
} as const

/**
 * Default Framer Motion animation properties
 */
const defaultMotionProps = {
  initial: {
    opacity: 0,
    transform: 'translateY(-100%)',
  },
  whileInView: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  transition: {
    delay: 0.2,
    type: 'spring' as const,
    duration: 0.6,
  },
  viewport: {
    amount: 0.6,
  },
}

type HeadingElement = HTMLHeadingElement

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /**
   * Semantic HTML heading tag override
   * @default tag determined by variant (main-heading=h1, sub-heading=h2, etc.)
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Enable Framer Motion animations
   * @default false
   */
  animated?: boolean

  /**
   * Initial animation state (Framer Motion)
   * @default { opacity: 0, transform: 'translateY(-100%)' }
   */
  initial?: TargetAndTransition | VariantLabels

  /**
   * Animation state when element enters viewport (Framer Motion)
   * @default { opacity: 1, transform: 'translateY(0)', transition: { type: 'spring', duration: 0.6 } }
   */
  whileInView?: TargetAndTransition | VariantLabels

  /**
   * Animation state (Framer Motion)
   */
  animate?: TargetAndTransition | VariantLabels

  /**
   * Animation transition config (Framer Motion)
   */
  transition?: Transition
}

/**
 * Unified Typography Heading Component
 *
 * A flexible, production-ready heading component following shadcn-ui patterns.
 * Supports 6 semantic heading variants (h1-h6), customizable sizing,
 * optional Framer Motion animations, and full TypeScript support.
 *
 * @example
 * Basic usage with variant
 * <Heading variant="main-heading">Section Title</Heading>
 *
 * @example
 * Custom size independent of variant
 * <Heading variant="primary-heading" size="2xl">Custom Sized Heading</Heading>
 *
 * @example
 * Override semantic tag
 * <Heading variant="sub-heading" as="h1">Override Tag</Heading>
 *
 * @example
 * With animations (opt-in)
 * <Heading variant="main-heading" animated={true}>Animated Title</Heading>
 *
 * @example
 * Custom animation props
 * <Heading
 *   variant="primary-heading"
 *   animated={true}
 *   initial={{ opacity: 0, scale: 0.8 }}
 *   whileInView={{ opacity: 1, scale: 1 }}
 *   transition={{ duration: 1 }}
 * >
 *   Custom Animation
 * </Heading>
 */
const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (
    {
      variant = 'primary',
      size = 'xl',
      as: asOverride,
      animated = false,
      initial,
      whileInView,
      animate,
      transition,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Determine semantic tag: use override or map from variant
    const tag = asOverride || variantTagMap[variant as string] || 'h2'

    // Merge class names
    const mergedClassName = cn(headingVariants({ variant, size }), className)

    // Determine motion props with sensible defaults
    const motionConfig = {
      initial: initial ?? defaultMotionProps.initial,
      whileInView: whileInView ?? defaultMotionProps.whileInView,
      animate,
      transition: transition ?? defaultMotionProps.transition,
    }

    // Base component props (HTML standard attributes only)
    const baseProps = {
      className: mergedClassName,
      'data-slot': 'heading',
      'data-variant': variant,
      'data-size': size,
      ref,
      ...(animated && motionConfig),
      ...props,
    } as const

    // Return animated or static heading
    if (animated) {
      // Use motion element corresponding to the semantic tag
      const MotionComponent = motionComponents[tag] || motion.create('h2')

      return (
        <MotionComponent
          className={mergedClassName}
          data-slot="heading"
          data-variant={variant}
          data-size={size}
          ref={ref}
          {...motionConfig}
          role={props.role}
          aria-label={props['aria-label']}
          aria-live={props['aria-live']}
          aria-hidden={props['aria-hidden']}>
          {children}
        </MotionComponent>
      )
    }

    return React.createElement(
      tag,
      {
        ...baseProps,
        role: props.role,
        'aria-label': props['aria-label'],
        'aria-live': props['aria-live'],
        'aria-hidden': props['aria-hidden'],
      },
      children
    )
  }
)

Heading.displayName = 'Heading'

/**
 * Memoized Heading component to prevent unnecessary re-renders
 * Improves performance when Heading is used frequently or in lists
 *
 * @remarks
 * Uses React.memo with default shallow prop comparison.
 * Consider custom comparison if you have complex animation objects.
 */
const MemoizedHeading = React.memo(Heading)
MemoizedHeading.displayName = 'Heading(Memoized)'

export { Heading, headingVariants }
export type { HeadingProps }
