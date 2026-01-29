'use client'

import Autoplay from 'embla-carousel-autoplay'
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
import StarRating from '@/components/ui/StarRating'
import type { Testimonial } from '@/data/testimonials'

export default function ReviewCarousel({ data }: { data: Testimonial[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {data.map(testimonial => (
          <CarouselItem key={testimonial.id} className="lg:basis-1/2">
            <div className="p-1">
              <Card className="bg-card border-border">
                <CardHeader className="flex-center">
                  <StarRating rating={testimonial.rating} size={25} />
                </CardHeader>
                <CardContent>
                  <p className="text-center">"{testimonial.feedback}"</p>
                </CardContent>
                <CardFooter className="w-full flex gap-2.5">
                  <Avatar className="size-10">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.position}</CardDescription>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
