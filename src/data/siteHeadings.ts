export interface SiteHeading {
  id: number
  title: string
  description: string
}

export const siteHeadings: Record<string, SiteHeading> = {
  about: {
    id: 1,
    title: 'What about me?',
    description:
      'I craft engaging digital experiences with modern web technologies.',
  },
  skills: {
    id: 2,
    title: 'My Skills',
    description: 'A showcase of my technical proficiencies and expertise.',
  },
  project: {
    id: 3,
    title: 'My Projects',
    description: 'A collection of my personal and professional projects.',
  },
  testimonials: {
    id: 4,
    title: 'Testimonials from Clients',
    description: 'Hear from those I have worked with about their experiences.',
  },
  faq: {
    id: 5,
    title: 'Frequently Asked Questions',
    description: 'Common questions about my work and services.',
  },
  getInTouch: {
    id: 6,
    title: 'Get In Touch',
    description:
      'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
  },
  resume: {
    id: 7,
    title: 'Resume',
    description:
      'Take a look at my resume to learn more about my experience and skills.',
  },
  blog: {
    id: 8,
    title: 'Blog',
    description:
      'Read my latest articles and thoughts on web development and technology.',
  },
  contact: {
    id: 9,
    title: 'Contact',
    description:
      'Interested in working together? Contact me for collaborations or inquiries.',
  },
}
