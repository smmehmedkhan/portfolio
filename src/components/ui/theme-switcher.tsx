'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { Field, FieldLabel, FieldLegend, FieldSet, FieldTitle } from './field'

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <FieldSet className="w-full flex items-center justify-center gap-3">
      <FieldLegend className="w-full text-center">Theme</FieldLegend>
      <RadioGroup value={theme} onValueChange={setTheme}>
        {themes.map(({ value, label, icon: Icon }) => (
          <Field key={value} orientation="horizontal" data-disabled>
            <RadioGroupItem value={value} />
            <FieldLabel>
              <Icon className={cn('size-4')} />
              <FieldTitle>{label}</FieldTitle>
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
