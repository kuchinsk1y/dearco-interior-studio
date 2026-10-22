import { useTranslation } from 'react-i18next'

import imageOne from '@/assets/images/dedicated-living-1.webp'
import imageTwo from '@/assets/images/dedicated-living-2.webp'
import ExploreLink from '@/components/ui/ExploreLink/ExploreLink'
import ParallaxImage from '@/components/ui/ParallaxImage/ParallaxImage'
import Reveal from '@/components/ui/Reveal/Reveal'

import styles from './DedicatedToLife.module.css'

export default function DedicatedToLife() {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.section} aria-labelledby="dedicated-title">
      <div className={styles.content}>
        <Reveal as="h2" className={styles.title}>
          <span id="dedicated-title">
            {t('titles.dedicated.line1')}
            <br />
            {t('titles.dedicated.line2')}
          </span>
        </Reveal>
        <Reveal as="p" className={styles.text} delay={150}>
          Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu
          pretium lacus. Dignissim vulputate maecenas vulputate tempor velit. Viverra ut rutrum
          morbi in tincidunt nullam ullamcorper at varius. Quis luctus vestibulum nunc risus. Erat
          etiam lorem ipsum luctus.
        </Reveal>
        <Reveal className={styles.explore} delay={300}>
          <ExploreLink href="#projects">{t('dedicated.explore')}</ExploreLink>
        </Reveal>
      </div>

      <Reveal className={styles.photoTall} delay={200}>
        <ParallaxImage
          src={imageOne}
          alt={t('dedicated.alt1')}
          speed={0.1}
        />
      </Reveal>
      <Reveal className={styles.photoWide} delay={350}>
        <ParallaxImage
          src={imageTwo}
          alt={t('dedicated.alt2')}
          speed={0.18}
        />
      </Reveal>
    </section>
  )
}
