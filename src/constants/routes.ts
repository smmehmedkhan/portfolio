export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT_DETAIL: (id: string | number) => `/projects/${id}`,
  CONTACT: '/contact',
} as const
