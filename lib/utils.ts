import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges Tailwind CSS classes efficiently
 *
 * @description Utility function that combines clsx for conditional classes
 * and tailwind-merge for deduplicating conflicting Tailwind classes
 *
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged and deduplicated class string
 *
 * @example
 * ```tsx
 * cn("px-4 py-2", "bg-blue-500", { "text-white": isActive })
 * Returns: "px-4 py-2 bg-blue-500 text-white"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
