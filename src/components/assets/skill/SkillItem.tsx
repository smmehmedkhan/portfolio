'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog'
import { Heading } from '@/components/ui/heading'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { SkillItemProps } from '@/types'

const MotionItem = motion.create('li')
const Container = motion.create('div')

export default function SkillItem({ index, data }: SkillItemProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [hoverOpen, setHoverOpen] = useState(false)

  const { id, title, description, image, url } = data
  const fadeDown = getAnimationPreset('fade-down')
  const pulse = getAnimationPreset('pulse')

  const handleModalChange = (open: boolean) => {
    setModalOpen(open)
    if (!open) {
      setHoverOpen(false)
      setTimeout(() => setHoverOpen(false), 300)
    }
  }

  const cardContent = (
    <>
      <CardHeader className="flex items-center justify-between">
        <div className="size-11 md:size-12 lg:size-14 p-2 rounded-lg bg-primary dark:bg-card flex-center">
          <Image
            className="w-auto h-9 md:h-10 lg:h-12 object-contain"
            src={image}
            alt={title}
            width={40}
            height={40}
            loading="eager"
          />
        </div>
      </CardHeader>
      <CardContent className="size-full flex flex-col gap-2">
        <CardTitle>
          <Heading
            variant="title"
            className="text-md text-primary font-semibold"
            size="md"
            as="h3">
            {title}
          </Heading>
        </CardTitle>
        <CardDescription id={`skill-description-${id}`}>
          <Paragraph
            variant="muted"
            size="nm"
            className="text-sm md:text-nm leading-relaxed">
            {description}
          </Paragraph>
        </CardDescription>
        <CardAction className="w-full inline-flex items-center justify-end">
          <Button
            className="bg-accent dark:bg-accent/15 text-accent-foreground dark:text-accent"
            variant="outline"
            asChild>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              Visit
            </Link>
          </Button>
        </CardAction>
      </CardContent>
    </>
  )

  return (
    <MotionItem
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.2 * index }}>
      <HoverCard
        open={modalOpen ? false : hoverOpen}
        onOpenChange={setHoverOpen}>
        <HoverCardTrigger asChild>
          <Button
            data-slot="hover-card-trigger"
            className="size-11 md:size-12 lg:size-14 min-h-11 p-2 rounded-lg lg:rounded-xl"
            variant="outline"
            size="icon-xl"
            onClick={e => {
              e.preventDefault()
              setModalOpen(true)
            }}>
            <Container {...pulse}>
              <Image
                className="w-auto h-9 md:h-10 lg:h-12 object-contain"
                width={40}
                height={40}
                src={image}
                alt={title}
                loading="eager"
              />
            </Container>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="hidden md:flex size-full xs:max-w-75 sm:max-w-sm lg:max-w-lg border border-border bg-popover flex-col gap-2">
          {cardContent}
        </HoverCardContent>
      </HoverCard>

      <Dialog open={modalOpen} onOpenChange={handleModalChange}>
        <DialogOverlay className="size-full bg-background/10 backdrop-blur-[2px]" />
        <DialogContent
          className="w-full xs:max-w-75 sm:max-w-md lg:max-w-lg border border-border bg-popover flex flex-col gap-2"
          aria-describedby={undefined}>
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {cardContent}
        </DialogContent>
      </Dialog>
    </MotionItem>
  )
}
