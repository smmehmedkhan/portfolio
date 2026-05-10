import type { SectionIntro } from '@/types'

export const sectionInros: Record<string, SectionIntro> = {
  about: {
    id: 1,
    icon: 'ScrollText',
    label: 'About Me',
    title: 'Who am I behind the code?',
    description:
      'I craft engaging digital experiences with modern web technologies.',
  },
  skills: {
    id: 2,
    icon: 'Gem',
    label: 'My Skills',
    title: 'What technologies do I master?',
    description: 'A showcase of my technical proficiencies and expertise.',
  },
  project: {
    id: 3,
    icon: 'FolderKanban',
    label: 'Case Studies',
    title: 'What have I built recently?',
    description:
      'Explore real-world applications and innovative solutions that showcase my problem-solving abilities and technical craftsmanship.',
  },
  testimonials: {
    id: 4,
    icon: 'BadgeCheck',
    label: 'Testimonials',
    title: 'What professionals say about me?',
    description: 'Hear from those I have worked with about their experiences.',
  },
  faq: {
    id: 5,
    icon: 'MessageCircleQuestionMark',
    label: 'FAQ',
    title: 'What do you want to know?',
    description: 'Quick answers to questions you might have about my work.',
  },
  getInTouch: {
    id: 6,
    icon: 'Zap',
    label: 'Get In Touch',
    title: 'How can I help you?',
    description:
      'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
  },
  contact: {
    id: 7,
    icon: 'Mailbox',
    label: 'Contact Me',
    title: 'Ready to start your project?',
    description:
      'Fill out the form and I will get back to you as soon as possible.',
  },
  resume: {
    id: 8,
    icon: 'FileText',
    label: 'My Resume',
    title: 'A snapshot of my journey.',
    description:
      'Discover my professional experience, skills, and accomplishments in one concise document.',
  },
}
