import type React from 'react'

export default function TypographyMainHeading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className="main-heading box-border text-nowrap overflow-hidden">
      {children}
    </h1>
  )
}
