import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Full-Stack E-Commerce Platform',
    description: 'Modern e-commerce solution with payment integration',
    longDescription:
      'A comprehensive full-stack e-commerce platform built with Next.js 16 and React 19. Features include user authentication, secure payment processing, real-time inventory management, admin dashboard, and responsive design. The application uses TypeScript for type safety, MongoDB for data persistence, and implements modern web security best practices.',
    image: '/icons/next-js.svg',
    technologies: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Tailwind CSS',
      'Stripe',
    ],
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Tool',
    description: 'Team collaboration platform with live updates',
    longDescription:
      'A real-time collaborative project management application built with React and Node.js. Features include live document editing, task assignment, team chat, file sharing, and project analytics. Uses WebSocket connections for instant updates and Redis for session management, ensuring smooth performance even with multiple concurrent users.',
    image: '/icons/react.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebSocket'],
  },
  {
    id: 3,
    title: 'RESTful API Service',
    description: 'Scalable backend API with microservices architecture',
    longDescription:
      'Enterprise-grade RESTful API service designed for scalability and performance. Built with Node.js and Express, featuring JWT authentication, rate limiting, comprehensive error handling, and API documentation. The service follows microservices architecture principles and includes Docker containerization for easy deployment.',
    image: '/icons/node-js.svg',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'Modern portfolio with smooth animations and responsive design',
    longDescription:
      'A responsive portfolio website showcasing projects, skills, and professional experience. Built with Next.js 16, React 19, and Motion for animations. Features include dark mode support, SEO optimization, fast page loads, and a modern UI/UX design. The site is fully responsive and optimized for all devices.',
    image: '/icons/next-js.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Motion', 'Tailwind CSS'],
  },
]
