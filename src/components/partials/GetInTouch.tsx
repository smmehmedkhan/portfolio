import { FaBolt } from 'react-icons/fa6'
import { sectionInros } from '@/data/sectionInros'
import SectionInro from '../assets/SectionInro'
import SocialLinks from '../assets/SocialLinks'

export default function GetInTouch() {
  return (
    <section className="wrapper get-in-touch">
      <div className="container flex-box gap-10">
        <SectionInro
          data={sectionInros.getInTouch}
          icon={<FaBolt className="xs:size-3 sm:size-4 md:size-5" />}
          badgeStyles="bg-accent text-accent-foreground"
          headingStyles="text-primary-foreground"
          paragraphStyles="text-card"
        />
        <SocialLinks />
      </div>
    </section>
  )
}
