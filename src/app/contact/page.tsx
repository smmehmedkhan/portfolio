import { Mailbox } from 'lucide-react'
import type { Metadata } from 'next'
import ContactForm from '@/components/assets/contact/ContactForm'
import ContactInfo from '@/components/assets/contact/ContactInfo'
import SectionInro from '@/components/assets/SectionInro'
import { CONFIG } from '@/constants/config'
import { sectionInros } from '@/data/sectionInros'

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
  return (
    <main className="wrapper pt-10 sm:pt-15 md:pt-20 lg:pt-25">
      <SectionInro data={sectionInros.contact} icon={<Mailbox />} />

      <div className="wrapper max-w-xl md:max-w-4xl mx-auto px-4 lg:px-0">
        <div className="size-full grid md:grid-cols-2 gap-10 lg:gap-5">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
