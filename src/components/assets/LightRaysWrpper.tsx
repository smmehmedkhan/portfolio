'use client'

import { useEffect, useState } from 'react'
import LightRays from './LightRays'

export default function LightRaysWrapper() {
  const [raysColor, setRaysColor] = useState('')

  useEffect(() => {
    const updateColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--rays')
        .trim()
      setRaysColor(color)
    }

    updateColor()

    const observer = new MutationObserver(updateColor)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <LightRays
        raysOrigin="top-left"
        raysColor={raysColor}
        raysSpeed={1.25}
        lightSpread={0.8}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <LightRays
        raysOrigin="top-center"
        raysColor={raysColor}
        raysSpeed={1.25}
        lightSpread={1.5}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <LightRays
        raysOrigin="top-right"
        raysColor={raysColor}
        raysSpeed={1.25}
        lightSpread={0.8}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
    </>
  )
}
