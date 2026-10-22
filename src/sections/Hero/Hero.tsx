import { useTranslation } from 'react-i18next'

import heroImage from '@/assets/images/hero-interior.webp'
import { useParallax } from '@/hooks/useParallax'

import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()
  const bannerRef = useParallax<HTMLDivElement>(0.25)

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div ref={bannerRef} className={styles.banner}>
        <img
          className={styles.image}
          src={heroImage}
          alt={t('hero.alt')}
        />
      </div>
      <h1 id="hero-title" className={styles.title}>
        {t('hero.title')}
      </h1>
    </section>
  )
}
