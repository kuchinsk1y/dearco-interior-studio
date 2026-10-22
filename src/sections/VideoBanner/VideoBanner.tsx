import { useTranslation } from 'react-i18next'

import bannerImage from '@/assets/images/video-banner.webp'
import ParallaxImage from '@/components/ui/ParallaxImage/ParallaxImage'
import PlayButton from '@/components/ui/PlayButton/PlayButton'
import Reveal from '@/components/ui/Reveal/Reveal'

import styles from './VideoBanner.module.css'

export default function VideoBanner() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-labelledby="video-title">
      <ParallaxImage
        className={styles.media}
        src={bannerImage}
        alt={t('video.alt')}
        speed={0.2}
      />
      <div className={styles.overlay} />

      <Reveal className={styles.play}>
        <PlayButton label={t('video.play')} />
      </Reveal>

      <div className={styles.text}>
        <Reveal as="h2" className={styles.title}>
          <span id="video-title">
            {t('titles.dedicated.line1')}
            <br />
            {t('titles.dedicated.line2')}
          </span>
        </Reveal>
        <Reveal as="p" className={styles.description} delay={150}>
          Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu
          pretium lacus.
        </Reveal>
      </div>
    </section>
  )
}
