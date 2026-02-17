/**
 * Animation Registry for Typography Component
 * Centralized definitions for all predefined animations
 * Extensible for custom animation configurations
 */
import type { TargetAndTransition, VariantLabels } from 'motion/react'

/**
 * Animation preset configuration
 */
export interface AnimationConfig {
  initial: TargetAndTransition | VariantLabels
  whileInView?: TargetAndTransition | VariantLabels
  animate?: TargetAndTransition | VariantLabels
  transition: {
    delay?: number
    type?: 'spring' | 'tween' | 'inertia'
    duration?: number
    stiffness?: number
    damping?: number
    mass?: number
    velocity?: number
  }
}

/**
 * Predefined animation presets for typography
 */
export const animationPresets: Record<string, AnimationConfig> = {
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: {
      type: 'tween',
      duration: 0.6,
      stiffness: 300,
      damping: 10,
    },
  },

  'fade-up': {
    initial: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    whileInView: { opacity: 1, transform: 'translateY(0)' },
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },

  'fade-down': {
    initial: {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    whileInView: { opacity: 1, transform: 'translateY(0)' },
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },

  'slide-left': {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },

  'slide-right': {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },

  pulse: {
    initial: { scale: 1 },
    whileInView: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: {
      duration: 0.6,
      stiffness: 100,
      damping: 10,
    } as Record<string, number | string>,
  },

  bounce: {
    initial: { y: 0 },
    whileInView: { y: 0 },
    animate: { y: [-5, 5, -5] },
    transition: {
      duration: 1.5,
      type: 'tween',
    } as Record<string, number | string>,
  },

  zoom: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 150,
      damping: 15,
    },
  },

  flip: {
    initial: { opacity: 0, rotateX: -90 },
    whileInView: { opacity: 1, rotateX: 0 },
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },

  'rotate-in': {
    initial: { opacity: 0, rotate: -10 },
    whileInView: { opacity: 1, rotate: 0 },
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },

  'blur-in': {
    initial: { opacity: 0, filter: 'blur(10px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    transition: {
      duration: 0.7,
      type: 'tween',
    },
  },
}

/**
 * Get animation preset by name
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
 * Register custom animation preset
 */
const customAnimations: Record<string, AnimationConfig> = {}

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
 * Get custom animation by name
 */
export function getCustomAnimation(name: string): AnimationConfig | undefined {
  return customAnimations[name]
}

/**
 * Get all available animations (predefined + custom)
 */
export function getAllAnimationPresets(): Record<string, AnimationConfig> {
  return { ...animationPresets, ...customAnimations }
}

/**
 * Validate animation preset name
 */
export function isValidAnimationPreset(name: string): boolean {
  return name in animationPresets || name in customAnimations
}

/**
 * Type for animation preset names
 */
export type AnimationPresetName = keyof typeof animationPresets | string
