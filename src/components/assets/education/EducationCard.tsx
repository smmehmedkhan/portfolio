'use client'

import { GraduationCap, HelpCircle, School, University } from 'lucide-react'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { EducationCardProps } from '@/types'

const Wrapper = motion.create('div')

const iconMap = {
  GraduationCap,
  University,
  School,
}

export default function EducationCard({ index, data }: EducationCardProps) {
  const {
    icon,
    degree,
    institute,
    board,
    startDate,
    endDate,
    field,
    gpa,
    description,
  } = data
  const fadeDown = getAnimationPreset('fade-down')
  const bounce = getAnimationPreset('bounce')
  const IconComponent = iconMap[icon as keyof typeof iconMap] ?? HelpCircle

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
                aria-label={`${degree} icon`}
              />
            </div>
            <Badge className="bg-accent dark:bg-amber-950/30 text-accent-foreground dark:text-accent">
              {startDate.toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}{' '}
              &mdash;{' '}
              {typeof endDate === 'string'
                ? endDate
                : endDate.toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
            </Badge>
          </CardHeader>
          <CardContent className="size-full flex flex-col gap-2">
            <CardTitle>
              <Heading
                className="text-md md:text-lg leading-relaxed"
                variant="title"
                size="lg">
                {degree}
              </Heading>
              <Heading
                className="text-nm md:text-md leading-relaxed text-gray-500"
                variant="title"
                size="md">
                {institute}
              </Heading>
            </CardTitle>
            <CardDescription className="w-full h-full lg:h-75 xl:h-50 2xl:h-40">
              <Paragraph
                className="text-sm md:text-nm leading-relaxed text-pretty tracking-tight"
                variant="muted"
                size="nm">
                {description}
              </Paragraph>
            </CardDescription>
          </CardContent>
          <CardFooter className="w-full flex-inline gap-2">
            <Badge className="bg-gray-500 dark:bg-gray-700 text-white">
              Board: {board}
            </Badge>
            {field && (
              <Badge className="bg-gray-500 dark:bg-gray-700 text-white">
                Group: {field}
              </Badge>
            )}
            {gpa && (
              <Badge className="bg-gray-500 dark:bg-gray-700 text-white">
                GPA: {gpa}
              </Badge>
            )}
          </CardFooter>
        </Card>
      </Wrapper>
    </Wrapper>
  )
}
