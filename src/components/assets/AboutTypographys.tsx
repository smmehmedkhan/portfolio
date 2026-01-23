'use client'

import { motion } from 'motion/react'
import type { AboutTypographyType } from '@/data/about'

export default function AboutTypographys({
  data,
}: {
  data: AboutTypographyType[]
}) {
  return (
    <motion.div className="wrapper text-left">
      {data.map((item, index) => (
        <motion.p
          key={item.id}
          tabIndex={index}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', delay: index * 0.2, duration: 0.6 }}
          className="text-balance my-2.5">
          {item.description}
        </motion.p>
      ))}
    </motion.div>
  )
}
