import { FaBolt } from 'react-icons/fa6'
import SocialLinks from '@/components/assets/git/SocialLinks'
import SectionInro from '@/components/assets/SectionInro'
import { sectionInros } from '@/data/sectionInros'

export default function GetInTouch() {
  return (
    <section className="wrapper get-in-touch">
      <div className="container git-container flex-box">
        <SectionInro
          data={sectionInros.getInTouch}
          icon={<FaBolt />}
          badgeStyles="bg-accent text-accent-foreground"
          headingStyles="text-primary-foreground"
          paragraphStyles="text-muted-foreground"
        />
        <SocialLinks />
      </div>
    </section>
  )
}
