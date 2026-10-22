import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1800

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t))

/**
 * Counts from 0 to `target` the first time the returned element scrolls into view.
 * With reduced motion enabled the final value is returned immediately.
 */
export function useCountUp<T extends HTMLElement>(target: number) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? target : 0,
  )

  useEffect(() => {
    const element = ref.current
    if (!element || value === target) return

    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1)
          setValue(Math.round(target * easeOutExpo(progress)))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // `value` is intentionally left out: the effect must only start once per target
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return { ref, value }
}
