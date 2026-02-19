import Link from 'next/link'
import { FaLink } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Paragraph } from '@/components/ui/paragraph'
import Logo from '../nav/Logo'

export default function Addresses() {
  return (
    <address className="addresses">
      {/* Top: Logo + Location */}
      <div className="flex-box">
        <Logo />
        <Paragraph className="flex-inline gap-1" size="nm">
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
        <Paragraph variant="large">
          Always ready to bring your ideas to life.
        </Paragraph>
        <Paragraph variant="large">
          Let's build something amazing together.
        </Paragraph>
      </div>

      {/* Bottom: Links */}
      <div className="w-full flex-center">
        <Button
          className="text-muted-foreground hover:text-accent"
          variant="link"
          asChild>
          <Link className="flex-inline gap-1" href="/contact">
            <FaLink className="size-3" />
            <span>Contact Me</span>
          </Link>
        </Button>
        <Button
          className="text-muted-foreground hover:text-accent"
          variant="link"
          asChild>
          <Link
            className="flex-inline gap-1"
            href="https://discord.com/channels/@smmehmedkhan"
            target="_blank"
            rel="noopener noreferrer">
            <FaLink className="size-3" />
            <span>Join Community</span>
          </Link>
        </Button>
        <Button
          className="text-muted-foreground hover:text-accent"
          variant="link"
          asChild>
          <Link
            className="flex-inline gap-1"
            href="https://github.com/smmehmedkhan/portfolio"
            target="_blank"
            rel="noopener noreferrer">
            <FaLink className="size-3" />
            <span>Source Code</span>
          </Link>
        </Button>
      </div>
    </address>
  )
}
