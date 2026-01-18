import type { Metadata } from 'next'
import { CONFIG } from '@/constants/config'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Available for freelance projects, collaborations, and opportunities. Contact via email or social media.`,
  openGraph: {
    title: `Contact | ${CONFIG.SITE.NAME}`,
    description: `Get in touch with ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}.`,
    url: `${CONFIG.SITE.URL}/contact`,
    images: [
      {
        url: '/images/mehmed-khan.png',
        width: 1200,
        height: 630,
        alt: `Contact ${CONFIG.PERSONAL.NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${CONFIG.SITE.NAME}`,
    description: `Get in touch with ${CONFIG.PERSONAL.NAME} for projects and opportunities.`,
    images: ['/images/mehmed-khan.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
