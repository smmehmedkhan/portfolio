'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StarRatingProps } from '@/types'

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={size}
          className={cn(
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300',
            'size-5 lg:size-7'
          )}
        />
      ))}
    </div>
  )
}
