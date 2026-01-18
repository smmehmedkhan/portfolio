import type React from 'react'

export default function TypographySubHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return <h2 className="sub-heading">{children}</h2>
}
