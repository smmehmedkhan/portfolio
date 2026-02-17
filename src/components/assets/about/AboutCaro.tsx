'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { AboutImageType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'

const MDiv = motion.create('div')

export default function AboutCaro({ data }: { data: AboutImageType[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  const fadeUp = getAnimationPreset('fade-up')

  return (
    <MDiv
      className="wrapper lg:w-1/2 px-12 box-border"
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={{ amount: 0.6, once: true }}>
      <Carousel
        className="size-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {data.map((image, index) => (
            <CarouselItem key={image.id} tabIndex={index}>
              <div className="w-full flex items-center justify-center">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="h-full w-full rounded-lg object-cover"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MDiv>
  )
}
