export interface NavLink {
  id: number
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { id: 1, href: '/about', label: 'About' },
  { id: 2, href: '/projects', label: 'Projects' },
  { id: 3, href: '/contact', label: 'Contact' },
]
