import type { AboutTypographyType } from '@/data/about'
import AboutTypoBlock from './AboutTypoBlock'
import ReadMore from './ReadMore'

export default function AboutTypo({ data }: { data: AboutTypographyType[] }) {
  return (
    <div className="wrapper about-typo">
      {/* Top: About typography items */}
      {data.map((item, index) => (
        <AboutTypoBlock key={item.id} item={item} index={index} />
      ))}
      {/* Bottom: See more button */}
      <div className="cta-btn">
        <ReadMore />
      </div>
    </div>
  )
}
