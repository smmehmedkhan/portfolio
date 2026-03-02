'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'
import { Field, FieldLabel, FieldLegend, FieldSet, FieldTitle } from './field'

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const

export default function ThemeSwitcher() {
  const fade = getAnimationPreset('fade')
  const { theme, setTheme } = useTheme()

  const MotionField = motion.create(Field)
  return (
    <FieldSet className="w-full flex items-center justify-center gap-3">
      <FieldLegend className="w-full text-center">Theme</FieldLegend>
      <RadioGroup value={theme} onValueChange={setTheme}>
        {themes.map(({ value, label, icon: Icon }, index) => (
          <MotionField
            key={value}
            orientation="horizontal"
            data-disabled
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 * index }}>
            <RadioGroupItem value={value} />
            <FieldLabel>
              <Icon className={cn('size-4')} />
              <FieldTitle>{label}</FieldTitle>
            </FieldLabel>
          </MotionField>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
