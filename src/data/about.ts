export interface AboutImageType {
  id: number
  url: string
  alt: string
}

export const aboutImages: AboutImageType[] = [
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

export interface AboutTypographyType {
  id: number
  title: string
  description: string
}

export const aboutTypographys: AboutTypographyType[] = [
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

export interface AboutCardType {
  id: number
  title: string
  icon: string
  description: string
  expertise: string
}

export const aboutCardContent = [
  {
    id: 1,
    title: 'UI/UX Design',
    icon: 'PictureInPicture',
    description:
      'Crafting intuitive and engaging user experiences with Figma, Adobe XD, and prototyping tools, ensuring seamless interactions.',
    expertise: 'Proficient',
  },
  {
    id: 2,
    title: 'Frontend Development',
    icon: 'Layout',
    description:
      'Creating responsive, accessible, and performant user interfaces with modern library and frameworks like React, TailwindCSS, Radix UI, Shadcn/ui, etc.',
    expertise: 'Experienced',
  },
  {
    id: 3,
    title: 'Backend Development',
    icon: 'Server',
    description:
      'Designing scalable, secure server-side applications. Build APIs using Node.js, Express.js, and full-stack frameworks like Next.js, Tanstack, etc.',
    expertise: 'Experienced',
  },
  {
    id: 4,
    title: 'Database Schema Design',
    icon: 'Database',
    description:
      'Designing and optimizing relational and non-relational databases with MongoDB, Mongoose ODM, PostgreSQL, Prisma ORM, Redis, etc.',
    expertise: 'Experienced',
  },
  {
    id: 5,
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    description:
      'Deploying and managing applications on cloud with CI/CD pipelines, containerization using Docker, and orchestration using Kubernetes.',
    expertise: 'Proficient',
  },
  {
    id: 6,
    title: 'Mobile App Development',
    icon: 'Smartphone',
    description:
      'Building cross-platform mobile applications using React Native and Flutter for both iOS and Android devices.',
    expertise: 'Familiar',
  },
]
