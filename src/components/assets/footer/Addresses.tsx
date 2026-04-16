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
      <div className="location-group flex-box">
        <Logo />
        <Paragraph className="location" size="nm" animated>
          <span>Based in</span>
          <Link
            className="location-link"
            href="https://maps.app.goo.gl/b4ZUW2if3LEAmmZo9"
            target="_blank"
            rel="noopener noreferrer">
            Dhaka, Bangladesh.
          </Link>
        </Paragraph>
      </div>

      {/* Middle: Message */}
      <div className="messages">
        <Paragraph
          className="message"
          variant="large"
          size="lg"
          animated
          transition={{ delay: 0.2 }}>
          Always ready to bring your ideas to life.
        </Paragraph>
        <Paragraph
          className="message"
          variant="large"
          size="lg"
          animated
          transition={{ delay: 0.4 }}>
          Let's build something amazing together.
        </Paragraph>
      </div>

      {/* Bottom: Links */}
      <ul className="address-cta">
        {btnItems.map((item, index) => (
          <MotionItem
            key={item.id}
            {...fade}
            transition={{ ...fade.transition, delay: 0.4 + 0.2 * index }}>
            <Link
              className="address-link"
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
