'use client'

import { Star } from 'lucide-react'
import { motion } from 'motion/react'
import { getAnimationPreset } from '@/lib/animations/registry'

const MDiv = motion.create('div')

interface StarRatingProps {
  rating: number
  size?: number
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const fadeDown = getAnimationPreset('fade-down')
  return (
    <MDiv className="flex gap-1" {...fadeDown}>
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }
        />
      ))}
    </MDiv>
  )
}
