import { ArrowUpRight } from 'lucide-react'
import type { AboutTypographyType } from '@/data/about'
import AnimatedButton from '../AnimatedButton'
import AboutTypoBlock from './AboutTypoBlock'

export default function AboutTypo({
  data,
  page = false,
}: {
  data: AboutTypographyType[]
  page?: boolean
}) {
  return (
    <div className="about-typo">
      {/* Top: About typography items */}
      {data.map((item, index) => (
        <AboutTypoBlock key={item.id} item={item} index={index} />
      ))}
      {/* Bottom: See more button */}
      {!page && (
        <AnimatedButton
          className="lg:size-fit"
          href="/about"
          btnText="Read More"
          icon={<ArrowUpRight />}
        />
      )}
    </div>
  )
}
