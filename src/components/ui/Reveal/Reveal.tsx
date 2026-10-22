import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import styles from './Reveal.module.css'

interface RevealProps {
  as?: 'div' | 'li' | 'h2' | 'p'
  className?: string
  /** Delay before the animation starts, ms. Handy for staggering lists. */
  delay?: number
  children: ReactNode
}

/** Fades and lifts its content into place the first time it enters the viewport. */
export default function Reveal({ as = 'div', className, delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold: 0.15 },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const classes = [styles.reveal, visible && styles.visible, className].filter(Boolean).join(' ')

  const Tag = as
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <Tag ref={ref as never} className={classes} style={style}>
      {children}
    </Tag>
  )
}
