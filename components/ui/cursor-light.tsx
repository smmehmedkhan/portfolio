'use client'

import { useEffect, useState } from 'react'

export default function BackstageLight() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      setMousePosition({ x, y: 0 })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <>
      {/* Backstage lights */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main cursor-following light */}
        <div
          className="fixed top-0 w-32 h-1/2 opacity-30 transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            transform: 'translateX(-50%)',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Static ambient lights */}
        <div className="fixed top-0 left-1/4 w-24 h-2/5 opacity-20 bg-linear-to-b from-cyan-300/40 to-transparent blur-3xl" />
        <div className="fixed top-0 right-1/3 w-28 h-2/5 opacity-15 bg-linear-to-b from-blue-300/30 to-transparent blur-3xl" />
        <div className="fixed top-0 left-3/4 w-20 h-1/3 opacity-25 bg-linear-to-b from-white/20 to-transparent blur-2xl" />
      </div>
    </>
  )
}
