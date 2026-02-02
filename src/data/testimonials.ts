export interface Testimonial {
  id: number
  name: string
  image: string
  position: string
  feedback: string
  rating: number
}

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    position: 'CTO at TechFlow Solutions',
    feedback:
      'Mehmed transformed our outdated web platform into a modern, lightning-fast application. His expertise in React and Next.js is outstanding, and he delivered ahead of schedule. The performance improvements were immediately noticeable to our users.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    position: 'Product Manager at InnovateLab',
    feedback:
      'Working with Mehmed was exceptional. He not only built exactly what we envisioned but also suggested improvements that enhanced user experience. His communication throughout the project was clear and professional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Watson',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    position: 'Founder at GreenTech Startup',
    feedback:
      'Mehmed built our company website from scratch with incredible attention to detail. The site is responsive, accessible, and perfectly captures our brand identity. His TypeScript skills ensured a bug-free launch.',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'David Kim',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    position: 'Lead Developer at DataSync Corp',
    feedback:
      "As a fellow developer, I can appreciate the quality of Mehmed's code. Clean, well-documented, and following best practices. He integrated seamlessly with our team and delivered a complex dashboard that our clients love.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    position: 'Marketing Director at CreativeAgency',
    feedback:
      'Mehmed created a stunning portfolio website for our agency that perfectly showcases our work. The animations are smooth, the design is modern, and it loads incredibly fast. Our client inquiries increased by 40% after launch.',
    rating: 4.5,
  },
]
