import { FaBolt } from 'react-icons/fa6'
import { siteHeadings } from '@/data/siteHeadings'
import SiteHeading from '../assets/SiteHeading'
import SocialLinks from '../assets/SocialLinks'

export default function GetInTouch() {
  const { id, slot, title, description } = siteHeadings.getInTouch

  return (
    <section className="wrapper get-in-touch">
      <div className="container flex-box gap-10">
        <SiteHeading
          icon={<FaBolt className="size-5" />}
          id={id}
          slot={slot}
          title={title}
          description={description}
          badgeStyles="bg-accent text-accent-foreground"
          headingStyles="text-primary-foreground"
          paragraphStyles="text-card"
        />
        <SocialLinks />
      </div>
    </section>
  )
}
