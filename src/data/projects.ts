import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Blogify',
    title:
      'A feature-rich blogging platform that empowers writers and content creators to share their stories with the world.',
    features: [
      {
        id: 1,
        name: 'Professional Grade',
        description:
          'Enterprise - level security, performance optimization, and scalability',
      },
      {
        id: 2,
        name: 'Writer-Focused',
        description:
          'Intuitive interface with Markdown editing, live preview, and seamless media management',
      },
      {
        id: 3,
        name: 'Community-Driven',
        description:
          'Built-in social features including comments, likes, follows, and content discovery',
      },
      {
        id: 4,
        name: 'Developer-Friendly',
        description:
          'Clean MVC architecture, comprehensive API, and extensive customization options',
      },
      {
        id: 5,
        name: 'SEO Optimized',
        description:
          'Built-in SEO features, meta tags, and search engine friendly URLs',
      },
    ],
    image: '/images/blogify.png',
    technologies: [
      'Node',
      'Express.js',
      'ejs',
      'Mongoose',
      'MongoDB',
      'EasyMDE',
      'Cloudinary',
      'Brevo',
    ],
    url: 'https://blogify-woql.onrender.com',
    source: 'https://github.com/smmehmedkhan/blogify',
  },
]
