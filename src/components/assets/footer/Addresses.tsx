import { Link2 } from 'lucide-react'
import Link from 'next/link'
import AnimatedButton from '@/components/assets/AnimatedButton'
import Logo from '@/components/assets/nav/Logo'
import { Paragraph } from '@/components/ui/paragraph'
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
          <AnimatedButton
            className="size-fit"
            key={item.id}
            variant="link"
            href={item.href}
            target={item.target}
            btnText={item.label}
            icon={<Link2 />}
            delay={0.6 + index * 0.1}
          />
        ))}
      </div>
    </address>
  )
}
