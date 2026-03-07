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
import type { AboutCardType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'

const Wrapper = motion.create('div')

const iconMap = {
  PictureInPicture,
  Layout,
  Server,
  Database,
  Cloud,
  Smartphone,
}

export default function AboutCard({
  icon,
  title,
  description,
  badge,
  index,
}: AboutCardType & { index: number }) {
  const fadeDown = getAnimationPreset('fade-down')
  const bounce = getAnimationPreset('bounce')
  const IconComponent = iconMap[icon as keyof typeof iconMap] ?? HelpCircle

  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case 'Beginner':
        return 'bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400'
      case 'Medium':
        return 'bg-lime-100 dark:bg-lime-950/30 text-lime-700 dark:text-lime-400'
      case 'Strong':
        return 'bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400'
      default:
        return 'bg-accent dark:bg-accent/15 text-accent-foreground dark:text-accent'
    }
  }

  return (
    <Wrapper
      className="wrapper"
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.2 * index }}>
      <Wrapper
        className="wrapper"
        initial={bounce.initial}
        whileHover={bounce.animate}
        transition={bounce.transition}>
        <Card className="size-full border border-border bg-card">
          <CardHeader className="flex items-center justify-between">
            <div className="size-12 p-2 rounded-lg bg-primary dark:bg-primary/15 flex-center">
              <IconComponent
                size={40}
                className="size-10 text-primary-foreground dark:text-primary"
              />
            </div>
            <Badge className={getBadgeStyles(badge)}>{badge}</Badge>
          </CardHeader>
          <CardContent className="size-full flex flex-col gap-2">
            <CardTitle>
              <Heading
                className="text-nm md:text-md leading-relaxed"
                variant="title"
                size="md">
                {title}
              </Heading>
            </CardTitle>
            <CardDescription>
              <Paragraph
                className="text-sm md:text-nm leading-relaxed"
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
