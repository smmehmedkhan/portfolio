'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Paragraph } from '@/components/ui/paragraph'
import StarRating from '@/components/ui/StarRating'
import type { Testimonial } from '@/data/testimonials'
import { getAnimationPreset } from '@/lib/animations/registry'
import { Heading } from '../ui/heading'

const MDiv = motion.create('div')

export default function ReviewCarousel({ data }: { data: Testimonial[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  const fadeUp = getAnimationPreset('fade-up')

  return (
    <MDiv
      className="wrapper max-w-6xl"
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
          {data.map(testimonial => (
            <CarouselItem key={testimonial.id} className="lg:basis-1/2">
              <div className="p-4">
                <Card className="bg-card border-border">
                  <CardHeader className="flex-center">
                    <StarRating rating={testimonial.rating} size={25} />
                  </CardHeader>
                  <CardContent className="text-center">
                    <Paragraph>"{testimonial.feedback}"</Paragraph>
                  </CardContent>
                  <CardFooter className="size-full flex gap-1 sm:gap-2.5">
                    <Avatar className="size-10">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardContent className="flex flex-col gap-1">
                      <CardTitle>
                        <Heading variant="tertiary-heading">
                          {testimonial.name}
                        </Heading>
                        <Heading variant="title-heading">
                          {testimonial.position}
                        </Heading>
                      </CardTitle>
                    </CardContent>
                  </CardFooter>
                </Card>
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
