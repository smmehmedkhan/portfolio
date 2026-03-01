import { ArrowUpRight } from 'lucide-react'
import type { AboutTypographyType } from '@/data/about'
import AnimatedButton from '../AnimatedButton'
import AboutTypoBlock from './AboutTypoBlock'

export default function AboutTypo({ data }: { data: AboutTypographyType[] }) {
  return (
    <div className="wrapper about-typo">
      {/* Top: About typography items */}
      {data.map((item, index) => (
        <AboutTypoBlock key={item.id} item={item} index={index} />
      ))}
      {/* Bottom: See more button */}
      <div className="cta-btn">
        <AnimatedButton
          href="/about"
          btnText="Read More"
          icon={<ArrowUpRight />}
        />
      </div>
    </div>
  )
}
