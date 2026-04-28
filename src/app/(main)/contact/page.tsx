import type { Metadata } from 'next'
import ContactForm from '@/components/assets/contact/ContactForm'
import ContactInfo from '@/components/assets/contact/ContactInfo'
import SectionHeader from '@/components/assets/SectionHeader'
import { CONFIG } from '@/constants/config'
import { sectionInros } from '@/data/sectionInros'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Available for freelance projects and collaborations.`,
}

export default function ContactPage() {
  return (
    <main className="wrapper contact-page">
      <SectionHeader data={sectionInros.contact} headingAs="h1" />

      <div className="wrapper contact-layout">
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
