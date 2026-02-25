import type { ProjectTypes } from '@/types'

export const projects: ProjectTypes[] = [
  {
    id: 1,
    name: 'Blogify',
    bio: 'Modern e-commerce solution with payment integration',
    shortDescription:
      'A comprehensive full-stack e-commerce platform built with Next.js 16 and React 19. Features include user authentication, secure payment processing, real-time inventory management, admin dashboard, and responsive design. The application uses TypeScript for type safety, MongoDB for data persistence, and implements modern web security best practices.',
    longDescription:
      'Blogify is a modern blog platform that combines the power of Next.js 16 with the latest React features. The application provides a seamless blogging experience with features like markdown support, comment system, search functionality, and social sharing. It emphasizes performance optimization through server-side rendering and static site generation, ensuring fast load times and excellent SEO.',
    image: '/icons/next-js.svg',
    technologies: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Tailwind CSS',
      'Stripe',
    ],
    projectUrl: 'https://blogify.com',
    sourceUrl: 'https://github.com/blogify',
  },
  {
    id: 2,
    name: 'Real-Time Collaboration Tool',
    bio: 'Team collaboration platform with live updates',
    shortDescription:
      'A real-time collaborative project management application built with React and Node.js. Features include live document editing, task assignment, team chat, file sharing, and project analytics. Uses WebSocket connections for instant updates and Redis for session management, ensuring smooth performance even with multiple concurrent users.',
    longDescription:
      'This real-time collaboration tool is designed to enhance team productivity by providing a seamless platform for communication and project management. Built with React on the frontend and Node.js on the backend, it leverages WebSocket technology to enable live updates across all connected clients. The application includes features such as task management, document collaboration, team chat, and file sharing, making it an ideal solution for remote teams.',
    image: '/icons/react.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebSocket'],
    projectUrl: 'https://collabtool.com',
    sourceUrl: 'https://github.com/collabtool',
  },
  {
    id: 3,
    name: 'RESTful API Service',
    bio: 'Scalable backend API with microservices architecture',
    shortDescription:
      'Enterprise-grade RESTful API service designed for scalability and performance. Built with Node.js and Express, featuring JWT authentication, rate limiting, comprehensive error handling, and API documentation. The service follows microservices architecture principles and includes Docker containerization for easy deployment.',
    longDescription:
      'This RESTful API service is built to provide a robust backend solution for modern web applications. Utilizing Node.js and Express, it offers a scalable architecture that can handle high traffic loads while maintaining performance. Key features include JWT authentication for secure access, rate limiting to prevent abuse, and comprehensive error handling to ensure reliability. The API is well-documented using tools like Swagger, making it easy for developers to integrate and use in their applications.',
    image: '/icons/node-js.svg',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT'],
    projectUrl: 'https://api.example.com',
    sourceUrl: 'https://github.com/api-service',
  },
  {
    id: 4,
    name: 'Portfolio Website',
    bio: 'Modern portfolio with smooth animations and responsive design',
    shortDescription:
      'A responsive portfolio website showcasing projects, skills, and professional experience. Built with Next.js 16, React 19, and Motion for animations. Features include dark mode support, SEO optimization, fast page loads, and a modern UI/UX design. The site is fully responsive and optimized for all devices.',
    longDescription:
      'This portfolio website is designed to provide a visually appealing and user-friendly experience for visitors. Built with the latest versions of Next.js and React, it incorporates smooth animations using Motion to enhance the user interface. The site includes sections for showcasing projects, listing skills, and detailing professional experience. With dark mode support and SEO optimization, the portfolio ensures that it looks great and performs well across all devices.',
    image: '/icons/next-js.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Motion', 'Tailwind CSS'],
    projectUrl: 'https://portfolio.com',
    sourceUrl: 'https://github.com/portfolio',
  },
]
