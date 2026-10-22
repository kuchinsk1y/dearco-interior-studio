import { useEffect, useRef } from 'react'

/**
 * Writes the vertical parallax offset to the `--parallax-y` CSS variable of the
 * returned element's ref. A child with `transform: translate3d(0, var(--parallax-y), 0)`
 * then drifts slower than the page scroll.
 *
 * @param speed  share of the scroll distance the content lags behind (0..1)
 * @param limit  maximum shift as a share of the element height
 */
export function useParallax<T extends HTMLElement>(speed = 0.25, limit = 0.25) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      const max = rect.height * limit
      const shift = Math.max(-max, Math.min(max, -offset * speed))
      element.style.setProperty('--parallax-y', `${shift.toFixed(1)}px`)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed, limit])

  return ref
}
