import type { Metadata } from 'next'
import { CONFIG } from '@/constants/config'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Available for freelance projects and collaborations.`,
  openGraph: {
    title: `Contact | ${CONFIG.SITE.NAME}`,
    description: `Get in touch with ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}.`,
    url: `${CONFIG.SITE.URL}/contact`,
  },
  twitter: {
    card: 'summary',
    title: `Contact | ${CONFIG.SITE.NAME}`,
    description: `Get in touch with ${CONFIG.PERSONAL.NAME}.`,
  },
}

export default function ContactPage() {
  return <ContactForm />
}
