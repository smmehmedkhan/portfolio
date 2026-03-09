'use client'

import { motion } from 'motion/react'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { getAnimationPreset } from '@/lib/animations/registry'

const Wrapper = motion.create('div')

const GitHubCalendarComponent = dynamic(
  () => import('react-github-calendar').then(mod => mod.GitHubCalendar),
  { ssr: false }
)

export default function GithubContribution({ username }: { username: string }) {
  const fade = getAnimationPreset('fade-instant')
  const { resolvedTheme } = useTheme()

  return (
    <Wrapper
      className="wrapper overflow-x-auto"
      {...fade}
      transition={{ ...fade.transition, delay: 0.4 }}>
      <GitHubCalendarComponent
        username={username}
        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        blockSize={16}
        blockMargin={5}
        fontSize={16}
        showWeekdayLabels
        year="last"
        labels={{
          totalCount: '{{count}} contributions in the last year',
        }}
      />
    </Wrapper>
  )
}
