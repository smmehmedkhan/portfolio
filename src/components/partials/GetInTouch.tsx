import SocialLinks from '@/components/assets/git/SocialLinks'
import SectionHeader from '@/components/assets/SectionHeader'
import { sectionInros } from '@/data/sectionInros'

export default function GetInTouch() {
  return (
    <section className="wrapper get-in-touch">
      <div className="container git-container flex-box">
        <SectionHeader
          data={sectionInros.getInTouch}
          badgeStyles="bg-accent text-accent-foreground"
          headingStyles="text-primary-foreground"
          paragraphStyles="text-gray-700"
        />
        <SocialLinks />
      </div>
    </section>
  )
}
