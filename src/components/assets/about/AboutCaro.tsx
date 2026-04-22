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
import { aboutImages } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'

const Wrapper = motion.create('div')

export default function AboutCaro() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  const fade = getAnimationPreset('fade')

  return (
    <Wrapper className="wrapper about-caro" {...fade}>
      <Carousel
        className="size-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        aria-roledescription="About Carousel">
        <CarouselContent>
          {aboutImages.map(image => (
            <CarouselItem key={image.id}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                <Image
                  className="size-full rounded-lg object-cover"
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Wrapper>
  )
}
