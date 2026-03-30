/**
 * Animation Registry
 *
 * Centralized animation system providing consistent, reusable animation presets
 * for Motion (Framer Motion) components. Supports scroll-triggered, instant,
 * and looping animations with full viewport control.
 *
 * @module animations/registry
 *
 * @example
 * ```tsx
 * import { getAnimationPreset } from '@/lib/animations/registry'
 *
 * // Scroll-triggered animation
 * const fadeDown = getAnimationPreset('fade-down')
 * <motion.div {...fadeDown}>Content</motion.div>
 *
 * // Instant animation (page load)
 * const fadeDownInstant = getAnimationPreset('fade-down-instant')
 * <motion.div {...fadeDownInstant}>Hero Content</motion.div>
 * ```
 */
import {
  easeIn,
  easeInOut,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
  type ViewportOptions,
} from 'motion/react'
import type { AnimationConfig } from '@/types'

/**
 * Predefined viewport configurations for consistent scroll behavior
 *
 * @constant
 * @property {ViewportOptions} scroll - Scroll-triggered: animates once when 30% visible
 * @property {undefined} instant - No viewport tracking for instant animations
 * @property {ViewportOptions} repeat - Repeating: animates every time 30% visible
 */
const VIEWPORT_CONFIGS = {
  scroll: { once: true, amount: 0.3 } as ViewportOptions,
  instant: undefined,
  repeat: { once: false, amount: 0.3 } as ViewportOptions,
} as const

/**
 * Predefined transition configurations for consistent animation timing
 *
 * @constant
 * @property {Transition} spring - Standard spring animation (0.6s, stiffness: 300)
 * @property {Transition} tween - Linear tween animation (0.6s)
 * @property {Transition} slow - Slower spring animation (0.8s, stiffness: 200)
 */
const TRANSITIONS = {
  spring: {
    type: 'spring' as const,
    duration: 0.6,
    stiffness: 300,
    damping: 10,
    easeIn,
  },
  'fast-spring': {
    type: 'spring' as const,
    duration: 0.3,
    delay: 0,
    stiffness: 300,
    damping: 10,
    easeIn,
  },
  tween: { type: 'tween' as const, duration: 0.6, easeIn },
  slow: {
    type: 'spring' as const,
    duration: 0.8,
    stiffness: 200,
    damping: 15,
    easeInOut,
  },
} as const

/**
 * Collection of predefined animation presets
 *
 * Organized into three categories:
 * 1. Scroll-triggered animations (whileInView) - Animate when element enters viewport
 * 2. Instant animations (animate) - Animate immediately on page load
 * 3. Looping animations (animate with repeat) - Continuously animate
 *
 * @constant
 *
 * @example Scroll-triggered
 * ```tsx
 * const fadeDown = getAnimationPreset('fade-down')
 * <motion.div {...fadeDown}>Scrolls into view</motion.div>
 * ```
 *
 * @example Instant (Hero/Above-fold)
 * ```tsx
 * const fadeDownInstant = getAnimationPreset('fade-down-instant')
 * <motion.div {...fadeDownInstant}>Appears on load</motion.div>
 * ```
 *
 * @example Looping
 * ```tsx
 * const pulse = getAnimationPreset('pulse')
 * <motion.div {...pulse}>Continuously pulses</motion.div>
 * ```
 */
export const animationPresets: Record<string, AnimationConfig> = {
  // SCROLL-TRIGGERED ANIMATIONS (whileInView)
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: TRANSITIONS.tween,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  'fade-up': {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: TRANSITIONS.spring,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  'fade-down': {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    transition: TRANSITIONS.spring,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  'slide-left': {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: TRANSITIONS.spring,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  'slide-right': {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: TRANSITIONS.spring,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  bounce: {
    initial: { y: 0 },
    animate: { y: -6 },
    transition: TRANSITIONS['fast-spring'],
  },

  zoom: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: TRANSITIONS.spring,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  flip: {
    initial: { opacity: 0, rotateX: -90 },
    whileInView: { opacity: 1, rotateX: 0 },
    transition: TRANSITIONS.slow,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  'rotate-in': {
    initial: { opacity: 0, rotate: -10 },
    whileInView: { opacity: 1, rotate: 0 },
    transition: TRANSITIONS.spring,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  'blur-in': {
    initial: { opacity: 0, filter: 'blur(12px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    transition: TRANSITIONS.tween,
    viewport: VIEWPORT_CONFIGS.scroll,
  },

  // INSTANT ANIMATIONS (animate - for hero/above-fold)
  'fade-instant': {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: TRANSITIONS.tween,
  },

  'fade-up-instant': {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: TRANSITIONS.spring,
  },

  'fade-down-instant': {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: TRANSITIONS.spring,
  },

  'slide-left-instant': {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: TRANSITIONS.spring,
  },

  'slide-right-instant': {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: TRANSITIONS.spring,
  },

  'zoom-instant': {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: TRANSITIONS.spring,
  },

  // LOOPING ANIMATIONS (animate with arrays)
  'slide-up': {
    initial: { y: 0 },
    animate: { y: [0, -6, 0] },
    transition: {
      ...TRANSITIONS.spring,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 0.5,
    },
  },

  pulse: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'easeInOut',
    },
  },
}

/**
 * Retrieves an animation preset by name with fallback to 'fade'
 *
 * @param {keyof typeof animationPresets} name - Name of the animation preset
 * @returns {AnimationConfig} Animation configuration object
 *
 * @example
 * ```tsx
 * const animation = getAnimationPreset('fade-down')
 * <motion.div {...animation} transition={{ ...animation.transition, delay: 0.3 }} />
 * ```
 */
export function getAnimationPreset(
  name: keyof typeof animationPresets
): AnimationConfig {
  const preset = animationPresets[name]
  if (!preset) {
    console.warn(
      `Animation preset "${String(name).replace(/[\r\n]/g, '')}" not found. Falling back to default "fade" preset.`
    )
    return animationPresets.fade
  }
  return preset
}

/**
 * Storage for custom user-defined animations
 * @private
 */
const customAnimations: Record<string, AnimationConfig> = {}

/**
 * Registers a custom animation preset for reuse throughout the application
 *
 * @param {string} name - Unique name for the custom animation
 * @param {AnimationConfig} config - Animation configuration object
 *
 * @example
 * ```tsx
 * registerCustomAnimation('custom-slide', {
 *   initial: { opacity: 0, x: -100 },
 *   whileInView: { opacity: 1, x: 0 },
 *   transition: { type: 'spring', duration: 0.8 },
 *   viewport: { once: true, amount: 0.5 }
 * })
 * ```
 */
export function registerCustomAnimation(
  name: string,
  config: AnimationConfig
): void {
  if (animationPresets[name]) {
    console.warn(
      `Animation preset "${name.replace(/[\r\n\t]/g, '')}" already exists and cannot be overridden.`
    )
    return
  }
  customAnimations[name] = config
}

/**
 * Retrieves a custom animation by name
 *
 * @param {string} name - Name of the custom animation
 * @returns {AnimationConfig | undefined} Custom animation config or undefined if not found
 *
 * @example
 * ```tsx
 * const customAnim = getCustomAnimation('custom-slide')
 * if (customAnim) {
 *   <motion.div {...customAnim} />
 * }
 * ```
 */
export function getCustomAnimation(name: string): AnimationConfig | undefined {
  return customAnimations[name]
}

/**
 * Returns all available animation presets (predefined + custom)
 *
 * @returns {Record<string, AnimationConfig>} Object containing all animation presets
 *
 * @example
 * ```tsx
 * const allAnimations = getAllAnimationPresets()
 * console.log(Object.keys(allAnimations)) // ['fade', 'fade-up', 'custom-slide', ...]
 * ```
 */
export function getAllAnimationPresets(): Record<string, AnimationConfig> {
  return { ...animationPresets, ...customAnimations }
}

/**
 * Validates if an animation preset name exists
 *
 * @param {string} name - Animation preset name to validate
 * @returns {boolean} True if preset exists, false otherwise
 *
 * @example
 * ```tsx
 * if (isValidAnimationPreset('fade-down')) {
 *   const anim = getAnimationPreset('fade-down')
 * }
 * ```
 */
export function isValidAnimationPreset(name: string): boolean {
  return name in animationPresets || name in customAnimations
}
