'use client'

import { Star } from 'lucide-react'
import { motion } from 'motion/react'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'

const MDiv = motion.create('div')

interface StarRatingProps {
  rating: number
  size?: number
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const fade = getAnimationPreset('fade')
  return (
    <MDiv className="flex gap-1" {...fade}>
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
    </MDiv>
  )
}
