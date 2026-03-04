'use client'

import { Link2 } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Logo from '@/components/assets/nav/Logo'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import { env } from '@/lib/env'

const btnItems = [
  { id: 1, label: 'Contact Me', href: '/contact', target: '_self' },
  {
    id: 2,
    label: 'Join Community',
    href: env.NEXT_PUBLIC_DISCORD_URL || '#',
    target: '_blank',
  },
  {
    id: 3,
    label: 'Source Code',
    href: env.NEXT_PUBLIC_SOURCE_URL || '#',
    target: '_blank',
  },
]

export default function Addresses() {
  const fade = getAnimationPreset('fade')
  const MotionItem = motion.create('li')
  return (
    <address className="addresses">
      {/* Top: Logo + Location */}
      <div className="flex-box">
        <Logo />
        <Paragraph className="flex-inline gap-1" size="nm" animated>
          <span>Based in</span>
          <Link
            className="underline underline-offset-2 hover:text-accent transition-all duration-200 ease-in"
            href="https://maps.app.goo.gl/b4ZUW2if3LEAmmZo9"
            target="_blank"
            rel="noopener noreferrer">
            Dhaka, Bangladesh.
          </Link>
        </Paragraph>
      </div>

      {/* Middle: Message */}
      <div className="w-full flex flex-col items-center 2xl:items-start gap-2">
        <Paragraph
          className="text-md lg:text-lg leading-normal"
          variant="large"
          size="lg"
          animated
          transition={{ delay: 0.2 }}>
          Always ready to bring your ideas to life.
        </Paragraph>
        <Paragraph
          className="text-md lg:text-lg leading-normal"
          variant="large"
          size="lg"
          animated
          transition={{ delay: 0.4 }}>
          Let's build something amazing together.
        </Paragraph>
      </div>

      {/* Bottom: Links */}
      <ul className="w-full inline-flex justify-center 2xl:justify-start gap-2.5 lg:gap-5">
        {btnItems.map((item, index) => (
          <MotionItem
            key={item.id}
            {...fade}
            transition={{ ...fade.transition, delay: 0.4 + 0.2 * index }}>
            <Link
              className="text-sm md:text-nm text-muted-foreground inline-flex items-center gap-1 lg:gap-2 hover:text-accent underline-offset-3 transition-all duration-300"
              href={item.href}
              target={item.target}>
              <span>{item.label}</span>
              <Link2 className="size-4 lg:size-5" />
            </Link>
          </MotionItem>
        ))}
      </ul>
    </address>
  )
}
