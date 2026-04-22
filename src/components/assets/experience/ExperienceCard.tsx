'use client'

import {
  Cloud,
  Database,
  HelpCircle,
  Layout,
  PictureInPicture,
  Server,
  Smartphone,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { ExperienceCardProps } from '@/types'

const Wrapper = motion.create('div')

const iconMap = {
  PictureInPicture,
  Layout,
  Server,
  Database,
  Cloud,
  Smartphone,
}

export default function ExperienceCard({ index, data }: ExperienceCardProps) {
  const { icon, title, description, expertise } = data
  const fadeDown = getAnimationPreset('fade-down')
  const bounce = getAnimationPreset('bounce')
  const IconComponent = iconMap[icon as keyof typeof iconMap] ?? HelpCircle

  const getBadgeStyles = (expertise: string) => {
    switch (expertise) {
      case 'Familiar':
        return 'bg-blue-300 dark:bg-blue-950/30 text-accent-foreground dark:text-blue-400'
      case 'Proficient':
        return 'bg-lime-300 dark:bg-lime-950/30  text-accent-foreground dark:text-lime-400'
      case 'Experienced':
        return 'bg-amber-300 dark:bg-amber-950/30  text-accent-foreground dark:text-amber-400'
      default:
        return 'bg-accent dark:bg-accent/15 text-accent-foreground dark:text-accent'
    }
  }

  return (
    <Wrapper
      className="wrapper max-w-xl mx-auto"
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.2 * (index ?? 0) }}>
      <Wrapper
        className="wrapper"
        initial={bounce.initial}
        whileHover={bounce.animate}
        transition={bounce.transition}>
        <Card className="about-card">
          <CardHeader className="flex items-center justify-between">
            <div className="size-12 p-2 rounded-lg bg-primary dark:bg-primary/15 flex-center">
              <IconComponent
                size={40}
                className="size-10 text-primary-foreground dark:text-primary"
                aria-label={`${title} icon`}
              />
            </div>
            <Badge className={getBadgeStyles(expertise)}>{expertise}</Badge>
          </CardHeader>
          <CardContent className="size-full flex flex-col gap-2">
            <CardTitle>
              <Heading
                className="text-nm md:text-md leading-relaxed"
                variant="title"
                size="md"
                as="h3">
                {title}
              </Heading>
            </CardTitle>
            <CardDescription>
              <Paragraph
                className="text-sm md:text-nm leading-relaxed text-pretty tracking-tight"
                variant="muted"
                size="nm">
                {description}
              </Paragraph>
            </CardDescription>
          </CardContent>
        </Card>
      </Wrapper>
    </Wrapper>
  )
}
