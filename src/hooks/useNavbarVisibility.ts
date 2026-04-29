import { animate, useMotionValue, useScroll } from 'motion/react'
import { useEffect, useRef } from 'react'

const NAVBAR_TOGGLE_OFFSET = 12
type ScrollDirection = 'up' | 'down' | null

export function useNavbarVisibility() {
  const { scrollY } = useScroll()
  const hidden = useMotionValue(0)
  const lastScrollY = useRef(0)
  const directionStartY = useRef(0)
  const lastDirection = useRef<ScrollDirection>(null)
  const isHidden = useRef(false)

  useEffect(() => {
    const initialScrollY =
      typeof window === 'undefined'
        ? scrollY.get()
        : (document.scrollingElement?.scrollTop ?? window.scrollY)

    lastScrollY.current = initialScrollY
    directionStartY.current = initialScrollY
    lastDirection.current = null
    isHidden.current = hidden.get() === 1

    const handleAtTop = () => {
      directionStartY.current = 0
      lastDirection.current = null
      if (isHidden.current) {
        isHidden.current = false
        animate(hidden, 0, { duration: 0.3, ease: 'easeInOut' })
      }
    }

    const updateDirection = (current: number, previousScrollY: number) => {
      const direction: ScrollDirection =
        current > previousScrollY ? 'down' : 'up'
      if (direction !== lastDirection.current) {
        lastDirection.current = direction
        directionStartY.current = previousScrollY
      }
      return direction
    }

    const toggleVisibility = (shouldHide: boolean) => {
      if (shouldHide !== isHidden.current) {
        isHidden.current = shouldHide
        animate(hidden, shouldHide ? 1 : 0, {
          duration: 0.3,
          ease: 'easeInOut',
        })
      }
    }

    return scrollY.on('change', current => {
      const previousScrollY = lastScrollY.current
      const diff = current - previousScrollY
      lastScrollY.current = current

      if (current <= 0) {
        handleAtTop()
        return
      }

      if (diff === 0) return

      const direction = updateDirection(current, previousScrollY)
      const distanceInDirection = Math.abs(current - directionStartY.current)

      if (distanceInDirection >= NAVBAR_TOGGLE_OFFSET) {
        toggleVisibility(direction === 'down')
      }
    })
  }, [scrollY, hidden])

  return hidden
}
