'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import StarRating from '@/components/ui/StarRating'
import type { Testimonial } from '@/data/testimonials'
import { getAnimationPreset } from '@/lib/animations/registry'

const MDiv = motion.create('div')
const MCardFooter = motion.create(CardFooter)

export default function ReviewCarousel({ data }: { data: Testimonial[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  const fade = getAnimationPreset('fade')

  return (
    <MDiv className="wrapper review-caro" {...fade}>
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
                    <Paragraph animated transition={{ delay: 0.5 }}>
                      <Paragraph className="mr-1" as="span">
                        ❛
                      </Paragraph>
                      {testimonial.feedback}
                      <Paragraph className="ml-1" as="span">
                        ❜
                      </Paragraph>
                    </Paragraph>
                  </CardContent>
                  <MCardFooter
                    className="size-full flex-inline gap-2 sm:gap-3 md:gap-4"
                    {...fade}
                    transition={{ ...fade.transition, delay: 0.6 }}>
                    <Avatar className="size-8 md:size-10">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="size-full">
                      <Heading className="text-md" variant="title">
                        {testimonial.name}
                      </Heading>
                      <Heading className="text-sm" variant="role" size="sm">
                        {testimonial.position}
                      </Heading>
                    </div>
                  </MCardFooter>
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
