import Lenis from 'lenis'
import { useEffect } from 'react'

/**
 * Inertia scrolling for the whole page, including smooth jumps to `#anchors`.
 * Skipped when the user prefers reduced motion.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.09, anchors: true })

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
