'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
  ViewportOptions,
} from 'motion/react'
import { motion } from 'motion/react'
import React from 'react'
import { getAnimationPreset } from '@/lib/animations/registry'
import { env } from '@/lib/env'
import { cn } from '@/lib/utils'

/**
 * Valid semantic HTML tags for paragraph component
 */
type ParagraphTag =
  | 'p'
  | 'strong'
  | 'small'
  | 'mark'
  | 'code'
  | 'em'
  | 's'
  | 'sub'
  | 'sup'
  | 'span'

/**
 * Valid paragraph variants
 */
type ParagraphVariant = 'main' | 'lead' | 'large' | 'small' | 'muted' | 'code'

/**
 * CVA-based paragraph variants with semantic HTML tag mapping
 * Supports 6 paragraph levels with customizable sizing and animations
 *
 * @see {@link https://shadcn-ui.com/} for design system reference
 */
const paragraphVariants = cva('scroll-m-20 text-pretty', {
  variants: {
    variant: {
      main: 'font-normal tracking-normal text-sm md:text-nm lg:text-md',
      lead: 'text-md lg:text-lg font-semibold xs:tracking-tight tracking-normal text-muted-foreground',
      large: 'font-medium tracking-wide font-bold',
      small: 'font-light tracking-tight text-xs md:text-sm lg:text-nm',
      muted: 'text-muted-foreground text-xs md:text-sm',
      code: 'font-mono text-accent-foreground px-[0.3rem] py-[0.2rem] rounded bg-accent dark:bg-accent/30 relative text-xs md:text-sm',
    },
    size: {
      xs: 'text-[length:var(--text-xs)]',
      sm: 'text-[length:var(--text-sm)]',
      nm: 'text-[length:var(--text-nm)]',
      md: 'text-[length:var(--text-md)]',
      lg: 'text-[length:var(--text-lg)]',
      xl: 'text-[length:var(--text-xl)]',
    },
  },
  defaultVariants: {
    variant: 'main',
    size: 'md',
  },
})

/**
 * Mapping of variant to default semantic HTML paragraph tag
 * Ensures proper semantic HTML based on variant selection
 *
 * @remarks
 * These mappings follow HTML semantic conventions:
 * - main → p: default paragraph
 * - lead → strong: emphasized paragraph for introductions
 * - large → em: large italic text
 * - small → small: fine print or reduced content
 * - muted → span: generic neutral container
 * - code → code: code blocks and inline code
 */
const variantTagMap: Record<ParagraphVariant, ParagraphTag> = {
  main: 'p',
  lead: 'strong',
  large: 'em',
  small: 'small',
  muted: 'span',
  code: 'code',
}

/**
 * Fade animation preset from animation registry
 * @see {@link getAnimationPreset}
 */
const fade = getAnimationPreset('fade')

/**
 * Default Framer Motion animation properties
 * Provides smooth entrance animations with viewport trigger
 */
const defaultMotionProps = {
  ...fade,
  viewport: {
    amount: 0.6,
  },
}

/**
 * Motion component selector utility
 * Maps semantic HTML tags to corresponding Framer Motion components
 *
 * @param tag - Semantic HTML tag
 * @returns Corresponding Framer Motion component
 */
function getMotionComponent(tag: ParagraphTag) {
  const motionMap = {
    p: motion.create('p'),
    strong: motion.create('strong'),
    small: motion.create('small'),
    mark: motion.create('mark'),
    code: motion.create('code'),
    em: motion.create('em'),
    s: motion.create('s'),
    sub: motion.create('sub'),
    sup: motion.create('sup'),
    span: motion.create('span'),
  }
  return motionMap[tag] || motion.create('span')
}

/**
 * HTML element type for paragraph component
 * Can be any valid paragraph-related HTML element
 */
type ParagraphElement = HTMLElement

interface ParagraphProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof paragraphVariants> {
  /**
   * Semantic HTML paragraph tag override
   * @default tag determined by variant (main=p, lead=strong, large=em, small=small, muted=span, code=code)
   * @example
   * <Paragraph as="mark">Highlighted text</Paragraph>
   */
  as?: ParagraphTag

  /**
   * Enable Framer Motion entrance animations
   * When true, the paragraph will animate in with a spring effect when it enters the viewport.
   *
   * @default false
   * @remarks
   * - Set to false for static content to avoid animation overhead
   * - Animations respect prefers-reduced-motion media query via Framer Motion
   *
   * @example
   * <Paragraph animated>Animates on scroll into view</Paragraph>
   */
  animated?: boolean

  /**
   * Initial animation state (Framer Motion)
   * Defines the starting state before animation begins.
   *
   * @default { opacity: 0, transform: 'translateY(-100%)' }
   * @remarks
   * Only applies when animated={true}
   * Uses Framer Motion's animation syntax
   *
   * @example
   * <Paragraph animated initial={{ opacity: 0, scale: 0.8 }}>Custom start</Paragraph>
   */
  initial?: TargetAndTransition | VariantLabels

  /**
   * Animation state when element enters viewport (Framer Motion)
   * Defines the target state when the element comes into view.
   *
   * @default { opacity: 1, transform: 'translateY(0)' }
   * @remarks
   * Only applies when animated={true}
   * Uses Framer Motion's whileInView syntax
   *
   * @example
   * <Paragraph animated whileInView={{ opacity: 1, scale: 1 }}>Custom end</Paragraph>
   */
  whileInView?: TargetAndTransition | VariantLabels

  /**
   * Continuous animation state (Framer Motion)
   * Defines animations that run continuously or in response to gestures.
   *
   * @remarks
   * Only applies when animated={true}
   * Useful for hover states or continuous animations
   */
  animate?: TargetAndTransition | VariantLabels

  /**
   * Animation transition configuration (Framer Motion)
   * Controls timing, easing, and other animation properties.
   *
   * @remarks
   * Only applies when animated={true}
   * Extends Framer Motion's transition options
   */
  transition?: Transition

  /**
   * Viewport configuration for scroll-triggered animations (Framer Motion)
   * Controls when and how animations trigger based on viewport intersection.
   *
   * @default { amount: 0.6 }
   * @remarks
   * Only applies when animated={true}
   * - `amount`: Percentage of element visible before triggering (0-1)
   * - `once`: Whether animation should only happen once
   * - `margin`: Viewport margin offset
   *
   * @see {@link https://motion.dev/docs/react-scroll-animations}
   * @example
   * <Paragraph animated viewport={{ amount: 0.8, once: true }}>Triggers at 80% visible</Paragraph>
   */
  viewport?: ViewportOptions
}

/**
 * Unified Paragraph Component
 *
 * A flexible, production-ready paragraph component following shadcn-ui patterns.
 * Supports 6 semantic paragraph variants, customizable sizing,
 * optional Framer Motion animations, and full TypeScript support.
 *
 * @component
 * @example
 * // Basic usage with variant
 * <Paragraph variant="main">Lorem ipsum dolor sit amet</Paragraph>
 *
 * @example
 * // Custom size independent of variant
 * <Paragraph variant="lead" size="xl">Custom Sized Paragraph</Paragraph>
 *
 * @example
 * // Override semantic tag
 * <Paragraph variant="muted" as="mark">Highlighted muted text</Paragraph>
 *
 * @example
 * // With animations (opt-in)
 * <Paragraph variant="main" animated>Animated paragraph</Paragraph>
 *
 * @example
 * // Custom animation props
 * <Paragraph
 *   variant="large"
 *   animated
 *   initial={{ opacity: 0, scale: 0.8 }}
 *   whileInView={{ opacity: 1, scale: 1 }}
 *   transition={{ duration: 1 }}
 * >
 *   Custom Animation
 * </Paragraph>
 *
 * @accessibility
 * - Uses semantic HTML tags based on variant (p, strong, em, etc.)
 * - Supports aria-label for custom accessibility descriptions
 * - Animations respect prefers-reduced-motion user preference via Framer Motion
 * - Data attributes (data-slot, data-variant, data-size) for CSS targeting and testing
 *
 * @performance
 * - Memoized to prevent unnecessary re-renders
 * - Animations only render when animated={true} to avoid DOM overhead
 * - Uses viewport-based animation triggers to optimize animation performance
 * - Forward ref support for direct DOM access when needed
 *
 * @param props - Component props
 * @param ref - Forward ref to the underlying HTML element
 * @returns Rendered paragraph element (static or animated)
 */
const Paragraph = React.forwardRef<ParagraphElement, ParagraphProps>(
  (
    {
      variant = 'main',
      size = 'md',
      as: asOverride,
      animated = false,
      initial,
      whileInView,
      animate,
      transition,
      viewport,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Validate variant
    const validVariants: ParagraphVariant[] = [
      'main',
      'lead',
      'large',
      'small',
      'muted',
      'code',
    ]
    if (
      variant
      && !validVariants.includes(variant as ParagraphVariant)
      && env.NODE_ENV === 'development'
    ) {
      console.warn(
        `[Paragraph] Invalid variant "${variant}". Valid variants are: ${validVariants.join(', ')}. Falling back to "main".`
      )
    }

    // Determine semantic tag: use override or map from variant
    const tag: ParagraphTag =
      asOverride || variantTagMap[variant as ParagraphVariant] || 'span'

    // Merge class names
    const mergedClassName = cn(paragraphVariants({ variant, size }), className)

    // Determine motion props with sensible defaults
    const motionConfig = {
      initial: initial ?? defaultMotionProps.initial,
      whileInView: whileInView ?? defaultMotionProps.whileInView,
      animate,
      transition: transition
        ? { ...defaultMotionProps.transition, ...transition }
        : defaultMotionProps.transition,
      viewport: viewport ?? defaultMotionProps.viewport,
    }

    // Return animated or static element
    if (animated) {
      // Use motion element corresponding to the semantic tag
      const MotionComponent = getMotionComponent(tag)

      return (
        <MotionComponent
          className={mergedClassName}
          data-slot="paragraph"
          data-variant={variant}
          data-size={size}
          {...motionConfig}
          role={props.role}
          tabIndex={props.tabIndex}
          title={props.title}
          aria-label={props['aria-label']}
          aria-live={props['aria-live']}
          aria-hidden={props['aria-hidden']}
          id={props.id}
          style={props.style}
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}>
          {children}
        </MotionComponent>
      )
    }

    return React.createElement(
      tag,
      {
        className: mergedClassName,
        'data-slot': 'paragraph',
        'data-variant': variant,
        'data-size': size,
        ref,
        ...props,
      },
      children
    )
  }
)

Paragraph.displayName = 'Paragraph'

/**
 * Memoized Paragraph component to prevent unnecessary re-renders
 * Improves performance when Paragraph is used frequently or in lists
 *
 * @remarks
 * Uses React.memo with default shallow prop comparison.
 * Consider custom comparison if you have complex animation objects.
 */
const MemoizedParagraph = React.memo(Paragraph)
MemoizedParagraph.displayName = 'Paragraph(Memoized)'

export { Paragraph, MemoizedParagraph, paragraphVariants }
export type { ParagraphProps, ParagraphTag, ParagraphVariant }
