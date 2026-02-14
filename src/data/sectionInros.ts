export interface SectionInroType {
  id: number
  slot: string
  title: string
  description: string
}

export const sectionInros: Record<string, SectionInroType> = {
  about: {
    id: 1,
    slot: 'About Me',
    title: 'Who am I behind the code?',
    description:
      'I craft engaging digital experiences with modern web technologies.',
  },
  skills: {
    id: 2,
    slot: 'Skills',
    title: 'What technologies do I master?',
    description: 'A showcase of my technical proficiencies and expertise.',
  },
  project: {
    id: 3,
    slot: 'Projects',
    title: 'What have I built recently?',
    description:
      'Explore real-world applications and innovative solutions that showcase my problem-solving abilities and technical craftsmanship.',
  },
  testimonials: {
    id: 4,
    slot: 'Testimonials',
    title: 'What professionals say about me?',
    description: 'Hear from those I have worked with about their experiences.',
  },
  faq: {
    id: 5,
    slot: 'FAQ',
    title: 'What do you want to know?',
    description: 'Quick answers to questions you might have about my work.',
  },
  getInTouch: {
    id: 6,
    slot: 'Get In Touch',
    title: 'How can I help you?',
    description:
      'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
  },
}
