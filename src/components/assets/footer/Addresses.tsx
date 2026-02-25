'use client'

import { Link2 } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import { env } from '@/lib/env'
import Logo from '../nav/Logo'

const MButton = motion.create(Button)

const btnItems = [
  { id: 1, label: 'Contact Me', href: '/contact' },
  {
    id: 2,
    label: 'Join Community',
    href: env.NEXT_PUBLIC_DISCORD_URL || '#',
  },
  {
    id: 3,
    label: 'Source Code',
    href: env.NEXT_PUBLIC_SOURCE_URL || '#',
  },
]

export default function Addresses() {
  const fadeDown = getAnimationPreset('fade-down')

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
      <div className="w-full inline-flex justify-center 2xl:justify-start">
        {btnItems.map((item, index) => (
          <MButton
            className="text-muted-foreground hover:text-accent"
            key={item.id}
            variant="link"
            {...fadeDown}
            transition={{ ...fadeDown.transition, delay: 0.2 * index }}
            asChild>
            <Link className="flex-inline gap-1" href={item.href}>
              <span>{item.label}</span>
              <Link2 />
            </Link>
          </MButton>
        ))}
      </div>
    </address>
  )
}
