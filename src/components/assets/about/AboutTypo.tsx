import { ArrowUpRight } from 'lucide-react'
import AnimatedButton from '@/components/assets/AnimatedButton'
import AboutTypoBlock from '@/components/assets/about/AboutTypoBlock'
import { aboutDescription } from '@/data/about'

export default function AboutTypo({ page = false }: { page?: boolean }) {
  return (
    <div className="about-typo">
      {/* Top: About typography items */}
      {aboutDescription.map((item, index) => (
        <AboutTypoBlock key={item.id} data={item} index={index} />
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
