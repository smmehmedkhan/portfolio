import ItemCard from '@/components/assets/ItemCard'
import { Heading } from '@/components/ui/heading'
import { getAnimationPreset } from '@/lib/animations/registry'
import { iconMap } from '@/lib/iconMap'
import type { SkillCategory } from '@/types'

interface SkillsetProps {
  category: SkillCategory
}

export default function Skillset({ category }: SkillsetProps) {
  const Icon = iconMap[category.icon]
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="skillset">
      <Heading
        className="flex-inline gap-2 md:gap-3"
        variant="secondary-heading"
        animated
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={{
          ...fadeDown.transition,
          delay: 0.2 * category.id,
        }}>
        {Icon && <Icon className="size-4 sm:size-6 md:size-8 text-secondary" />}
        <span>{category.title}</span>
      </Heading>
      <ul className="flex-center skills-list">
        {category.items.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </ul>
    </div>
  )
}
