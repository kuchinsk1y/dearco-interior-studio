import { useParallax } from '@/hooks/useParallax'

import styles from './ParallaxImage.module.css'

interface ParallaxImageProps {
  src: string
  alt: string
  /** Parallax strength, see `useParallax`. */
  speed?: number
  className?: string
}

/** Framed photo whose picture drifts slower than the page while scrolling. */
export default function ParallaxImage({ src, alt, speed = 0.12, className }: ParallaxImageProps) {
  const ref = useParallax<HTMLElement>(speed, 0.12)

  return (
    <figure ref={ref} className={[styles.frame, className].filter(Boolean).join(' ')}>
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </figure>
  )
}
