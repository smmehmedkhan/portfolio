import Link from 'next/link'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { CONFIG } from '@/constants/config'
import { getAnimationPreset } from '@/lib/animations/registry'

export default function ContactInfo() {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Heading
          className="text-foreground text-center md:text-start"
          variant="secondary"
          size="lg"
          animated>
          Let's Connect🤝
        </Heading>
        <Paragraph
          className="text-muted-foreground text-pretty text-center md:text-start"
          animated
          transition={{ delay: 0.2 }}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question
          or just want to say hi, feel free to reach out!
        </Paragraph>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Heading
            className="text-foreground lg:text-start"
            variant="secondary"
            size="lg"
            animated
            transition={{ delay: 0.4 }}>
            Email
          </Heading>
          <Link
            href={`mailto:${CONFIG.PERSONAL.EMAIL}`}
            className="size-fit text-md text-muted-foreground underline underline-offset-2 hover:text-accent transition-all duration-300 ease-in">
            contact@mehmedkhan.dev
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            className="text-foreground lg:text-start"
            variant="secondary"
            size="lg"
            animated
            transition={{ delay: 0.6 }}>
            Location
          </Heading>
          <Link
            className="size-fit text-md text-muted-foreground underline underline-offset-2 hover:text-accent transition-all duration-300 ease-in"
            href="https://maps.app.goo.gl/b4ZUW2if3LEAmmZo9"
            target="_blank"
            rel="noopener noreferrer">
            Dhaka, Bangladesh.
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <Heading
            className="text-foreground lg:text-start"
            variant="secondary"
            size="lg"
            animated
            transition={{ delay: 0.8 }}>
            Social Media
          </Heading>
          <div className="flex flex-col gap-2">
            <Link
              href={CONFIG.SOCIAL.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="size-fit text-md text-muted-foreground underline underline-offset-2 hover:text-accent transition-all duration-300 ease-in">
              GitHub
            </Link>
            <Link
              href={CONFIG.SOCIAL.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="size-fit text-md text-muted-foreground underline underline-offset-2 hover:text-accent transition-all duration-300 ease-in">
              LinkedIn
            </Link>
            <Link
              href={CONFIG.SOCIAL.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="size-fit text-md text-muted-foreground underline underline-offset-2 hover:text-accent transition-all duration-300 ease-in">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
