export interface FAQItem {
  id: string
  question: string
  answer: string[]
}

export const faqData: FAQItem[] = [
  {
    id: 'tech-stack',
    question: 'What technologies do you specialize in?',
    answer: [
      'I specialize in modern web development with React, Next.js, TypeScript, and Node.js. My expertise includes building scalable applications with clean architecture patterns.',
      'I also work with cloud platforms like AWS, database technologies including PostgreSQL and MongoDB, and modern deployment strategies using Docker and CI/CD pipelines.',
    ],
  },
  {
    id: 'availability',
    question: 'What are your working hours and availability?',
    answer: [
      'I typically work Monday through Friday, 9 AM to 6 PM EST, with flexibility for urgent project needs and client meetings across different time zones.',
      'For ongoing projects, I maintain regular communication through Slack or preferred channels and provide daily progress updates during active development phases.',
    ],
  },
  {
    id: 'project-timeline',
    question: 'How long does a typical project take?',
    answer: [
      'Project timelines vary based on complexity and scope. A simple landing page takes 1-2 weeks, while full-stack applications typically require 4-8 weeks.',
      'I provide detailed project estimates after initial consultation, breaking down deliverables into milestones with clear timelines and regular check-ins.',
    ],
  },
  {
    id: 'communication',
    question: 'How do you handle project communication?',
    answer: [
      'I believe in transparent, frequent communication. I provide weekly progress reports, maintain shared project boards, and schedule regular video calls for complex discussions.',
      'All project requirements are documented upfront, and any scope changes are discussed and approved before implementation to ensure alignment.',
    ],
  },
  {
    id: 'pricing-process',
    question: 'What is your pricing structure and development process?',
    answer: [
      'I offer both fixed-price projects and hourly rates depending on project scope. All projects include detailed proposals, wireframes, and technical specifications before development begins.',
      'My process includes discovery, design approval, development in sprints, testing, deployment, and post-launch support. Payment is typically structured in milestones for larger projects.',
    ],
  },
]
