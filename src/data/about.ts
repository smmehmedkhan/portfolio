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
    title: 'Introduction to Web Development',
    description:
      "I'm a passionate Full-Stack Engineer with expertise in the MERN stack, specializing in building modern, responsive, and scalable web applications. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a deep passion for creating exceptional digital experiences.",
  },
  {
    id: 2,
    title: 'My Expertise in Web Development',
    description:
      'I excel at crafting beautiful, eye-catching frontend interfaces using React and Next.js, while also building robust, secure, and enterprise-grade APIs on the backend. My approach combines creativity with technical excellence, ensuring that every project not only looks great but also performs flawlessly.',
  },
  {
    id: 3,
    title: 'My Passion for Web Development',
    description:
      "When I'm not coding, I'm continuously learning about the latest web technologies, DevOps practices, and security best practices to stay at the forefront of modern web development.",
  },
]
