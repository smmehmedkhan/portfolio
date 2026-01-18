import { env } from '@/lib/env'

export const CONFIG = {
  // Site metadata
  SITE: {
    NAME: 'Mehmed Khan - Portfolio',
    TITLE: 'Mehmed Khan | Full-Stack Developer',
    DESCRIPTION:
      'Full-Stack Engineer specializing in MERN stack, React, Next.js, and modern web development. Building scalable, responsive web applications.',
    URL: env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    AUTHOR: 'Mehmed Khan',
    KEYWORDS: [
      'Full-Stack Developer',
      'MERN Stack',
      'React',
      'Next.js',
      'TypeScript',
      'Web Developer',
    ],
  },

  // Personal information
  PERSONAL: {
    NAME: 'Mehmed Khan',
    ROLE: 'Full-Stack Engineer',
    TITLES: [
      'Web Developer',
      'Full-Stack Engineer',
      'MERN Stack Developer',
      'ReactJs & NextJs Developer',
      'DevOps & DevSecOps Beginner',
    ],
    EMAIL: env.NEXT_PUBLIC_EMAIL || 'contact@mehmedkhan.dev',
    LOCATION: 'Dhaka, Bangladesh',
    BIO: 'I build modern, responsive and scalable web applications. Can build shiny, eye-catching & responsive frontend React applications. Scalable, secured and enterprise-grade APIs. Use advanced web tools and technologies to build web applications.',
  },

  // Social links
  SOCIAL: {
    GITHUB: env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/smmehmedkhan',
    LINKEDIN:
      env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/smmehmedkhan',
    TWITTER:
      env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/sm_mehmed_khan',
    PORTFOLIO: env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://mehmedkhan.dev',
  },

  // App settings
  APP: {
    PROJECTS_PER_PAGE: 6,
    ANIMATION_DURATION: 300,
    SCROLL_ANIMATION_DURATION: 0.6,
    THEME_STORAGE_KEY: 'portfolio-theme',
    NAVBAR_HIDE_ON_SCROLL: true,
  },

  // API endpoints
  API: {
    BASE_URL: env.NEXT_PUBLIC_API_URL || '/api',
    CONTACT_ENDPOINT: '/api/contact',
    PROJECTS_ENDPOINT: '/api/projects',
  },

  // UI Constants
  UI: {
    CONTAINER_MAX_WIDTH: '1200px',
    BREAKPOINTS: {
      SM: '640px',
      MD: '768px',
      LG: '1024px',
      XL: '1280px',
    },
  },

  // External services
  SERVICES: {
    ANALYTICS_ID: env.NEXT_PUBLIC_GA_ID,
    VERCEL_URL: env.VERCEL_URL,
  },
} as const

// Type exports for better TypeScript support
export type ConfigType = typeof CONFIG
export type SiteConfig = typeof CONFIG.SITE
export type PersonalConfig = typeof CONFIG.PERSONAL
export type SocialConfig = typeof CONFIG.SOCIAL
