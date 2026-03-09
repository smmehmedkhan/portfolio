import type { SkillsCategory } from '@/types'

export const skills: SkillsCategory[] = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Languages',
    skills: [
      {
        id: 1,
        title: 'C',
        image: '/icons/c-lang.svg',
        url: 'https://www.c-language.org/',
        description:
          'A powerful general-purpose programming language for system programming and embedded systems.',
        joined: 'January 2020',
      },
      {
        id: 2,
        title: 'C++',
        image: '/images/cpp.png',
        url: 'https://isocpp.org/',
        description:
          'An extension of C with object-oriented features for high-performance applications.',
        joined: 'March 2020',
      },
      {
        id: 3,
        title: 'JavaScript',
        image: '/images/javascript.png',
        url: 'https://javascript.info/',
        description:
          'The programming language of the web, enabling interactive and dynamic web applications.',
        joined: 'June 2021',
      },
      {
        id: 4,
        title: 'TypeScript',
        image: '/icons/typescript.svg',
        url: 'https://www.typescriptlang.org/',
        description:
          'JavaScript with syntax for types, providing better tooling and code quality.',
        joined: 'January 2022',
      },
    ],
  },
  {
    id: 2,
    title: 'Frontend',
    icon: 'Palette',
    skills: [
      {
        id: 5,
        title: 'HTML',
        image: '/icons/html.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        description:
          'The standard markup language for creating web pages and web applications.',
        joined: 'June 2021',
      },
      {
        id: 6,
        title: 'CSS',
        image: '/icons/css.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        description:
          'Style sheet language for describing the presentation of web documents.',
        joined: 'June 2021',
      },
      {
        id: 7,
        title: 'Bootstrap',
        image: '/icons/bootstrap.svg',
        url: 'https://getbootstrap.com/',
        description:
          'Popular CSS framework for building responsive, mobile-first websites.',
        joined: 'August 2021',
      },
      {
        id: 8,
        title: 'Tailwind CSS',
        image: '/icons/tailwind-css.svg',
        url: 'https://tailwindcss.com/',
        description:
          'Utility-first CSS framework for rapidly building custom user interfaces.',
        joined: 'March 2022',
      },
      {
        id: 9,
        title: 'React.js',
        image: '/icons/react.svg',
        url: 'https://react.dev/',
        description:
          'A JavaScript library for building user interfaces with component-based architecture.',
        joined: 'September 2021',
      },
      {
        id: 10,
        title: 'Shadcn UI',
        image: '/images/shadcn-ui.png',
        url: 'https://ui.shadcn.com/',
        description:
          'Beautifully designed components built with Radix UI and Tailwind CSS.',
        joined: 'June 2023',
      },
      {
        id: 11,
        title: 'Material UI',
        image: '/icons/material-ui.svg',
        url: 'https://mui.com/material-ui/',
        description:
          "React component library implementing Google's Material Design system.",
        joined: 'November 2021',
      },
      {
        id: 12,
        title: 'Chakra UI',
        image: '/icons/chakra-ui.svg',
        url: 'https://chakra-ui.com/',
        description:
          'Simple, modular and accessible component library for React applications.',
        joined: 'February 2022',
      },
    ],
  },
  {
    id: 3,
    title: 'Backend',
    icon: 'Server',
    skills: [
      {
        id: 13,
        title: 'Node.js',
        image: '/icons/node-js.svg',
        url: 'https://nodejs.org/en',
        description:
          "JavaScript runtime built on Chrome's V8 engine for building scalable server-side applications.",
        joined: 'October 2021',
      },
      {
        id: 14,
        title: 'Express.js',
        image: '/icons/express-js.svg',
        url: 'https://expressjs.com/',
        description:
          'Fast, unopinionated, minimalist web framework for Node.js applications.',
        joined: 'November 2021',
      },
      {
        id: 15,
        title: 'Hono.js',
        image: '/icons/hono-js.svg',
        url: 'https://hono.dev/',
        description:
          'Ultrafast web framework for the edge with TypeScript support.',
        joined: 'August 2023',
      },
      {
        id: 16,
        title: 'Fastify.js',
        image: '/icons/fastify-js.svg',
        url: 'https://fastify.dev/',
        description:
          'Fast and low overhead web framework for Node.js with powerful plugin architecture.',
        joined: 'May 2023',
      },
      {
        id: 34,
        title: 'Postman',
        image: '/icons/postman.svg',
        url: 'https://www.postman.com/',
        description:
          'API platform for building, testing, and documenting APIs efficiently.',
        joined: 'October 2021',
      },
    ],
  },
  {
    id: 4,
    title: 'Database',
    icon: 'Database',
    skills: [
      {
        id: 17,
        title: 'MongoDB',
        image: '/icons/mongo-db.svg',
        url: 'https://www.mongodb.com/',
        description:
          'NoSQL document database for modern applications with flexible schema design.',
        joined: 'December 2021',
      },
      {
        id: 18,
        title: 'Mongoose',
        image: '/icons/mongoose-js.svg',
        url: 'https://mongoosejs.com/',
        description:
          'Elegant MongoDB object modeling for Node.js with schema validation.',
        joined: 'December 2021',
      },
      {
        id: 19,
        title: 'PostgreSQL',
        image: '/icons/postgresql.svg',
        url: 'https://www.postgresql.org/',
        description:
          'Powerful, open-source relational database with advanced features and reliability.',
        joined: 'April 2022',
      },
      {
        id: 20,
        title: 'Prisma',
        image: '/icons/prisma.svg',
        url: 'https://www.prisma.io/',
        description:
          'Next-generation ORM for Node.js and TypeScript with type-safe database access.',
        joined: 'June 2022',
      },
      {
        id: 21,
        title: 'Firebase',
        image: '/icons/firebase.svg',
        url: 'https://firebase.google.com/',
        description:
          "Google's platform for building web and mobile apps with real-time database and authentication.",
        joined: 'January 2022',
      },
    ],
  },
  {
    id: 5,
    title: 'Advanced',
    icon: 'Zap',
    skills: [
      {
        id: 22,
        title: 'Next.js',
        image: '/icons/next-js.svg',
        url: 'https://nextjs.org/',
        description:
          'The React framework for production with server-side rendering and static generation.',
        joined: 'March 2022',
      },
      {
        id: 23,
        title: 'Tanstack',
        image: '/images/tanstack.png',
        url: 'https://tanstack.com/',
        description:
          'High-quality open-source libraries for web developers including React Query and Table.',
        joined: 'July 2022',
      },
      {
        id: 24,
        title: 'Redis',
        image: '/icons/redis.svg',
        url: 'https://redis.io/',
        description:
          'In-memory data structure store used as database, cache, and message broker.',
        joined: 'September 2022',
      },
      {
        id: 25,
        title: 'Motion',
        image: '/images/motion.png',
        url: 'https://motion.dev/',
        description:
          'Production-ready animation library for React with simple and powerful API.',
        joined: 'January 2024',
      },
      {
        id: 26,
        title: 'GSAP',
        image: '/icons/gsap.svg',
        url: 'https://gsap.com/',
        description:
          'Professional-grade JavaScript animation library for creating high-performance animations.',
        joined: 'August 2022',
      },
    ],
  },
  {
    id: 6,
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      {
        id: 27,
        title: 'Git',
        image: '/icons/git.svg',
        url: 'https://git-scm.com/',
        description:
          'Distributed version control system for tracking changes in source code.',
        joined: 'June 2021',
      },
      {
        id: 28,
        title: 'GitHub',
        image: '/icons/github.svg',
        url: 'https://github.com/',
        description:
          'Platform for version control and collaboration using Git repositories.',
        joined: 'June 2021',
      },
      {
        id: 29,
        title: 'Docker',
        image: '/icons/docker.svg',
        url: 'https://www.docker.com/',
        description:
          'Platform for developing, shipping, and running applications in containers.',
        joined: 'May 2022',
      },
      {
        id: 30,
        title: 'Kafka',
        image: '/icons/apachekafka.svg',
        url: 'https://kafka.apache.org/',
        description:
          'Distributed event streaming platform for high-performance data pipelines.',
        joined: 'November 2023',
      },
      {
        id: 31,
        title: 'Kubernetes',
        image: '/icons/kubernetes.svg',
        url: 'https://kubernetes.io/',
        description:
          'Container orchestration platform for automating deployment and scaling.',
        joined: 'December 2023',
      },
      {
        id: 32,
        title: 'Jest.js',
        image: '/icons/jest-js.svg',
        url: 'https://jestjs.io/',
        description:
          'Delightful JavaScript testing framework with focus on simplicity.',
        joined: 'February 2022',
      },
      {
        id: 33,
        title: 'Vitest',
        image: '/icons/vitest.svg',
        url: 'https://vitest.dev/',
        description:
          'Blazing fast unit test framework powered by Vite for modern web projects.',
        joined: 'October 2023',
      },
    ],
  },
]
