import type { AboutDescription, AboutImage } from '@/types'

export const aboutImages: AboutImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&dpr=2&q=80',
    alt: 'Photo by Drew Beamer',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&dpr=2&q=80',
    alt: 'Photo by Alex Wong',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&dpr=2&q=80',
    alt: 'Photo by Christina @ wocintechchat.com',
  },
]

export const aboutDescription: AboutDescription[] = [
  {
    id: 1,
    title: 'Passion',
    description:
      "Web development isn't just my career — it's what genuinely excites me. A simple curiosity about how internet works grew into building meaningful web experiences.",
  },
  {
    id: 2,
    title: 'Expertise',
    description:
      'I specialize in full-stack development, with expertise across the modern web stack — from UI to infrastructure. Every project I take on is built with clean architecture, type safety, and production-readiness in mind.',
  },
  {
    id: 3,
    title: 'Beyond the Code',
    description:
      "When I'm not building, I'm learning — exploring the latest in DevOps, cloud infrastructure, and security best practices. I believe staying sharp is part of the job, and continuous growth is what separates good engineers from great ones.",
  },
]
