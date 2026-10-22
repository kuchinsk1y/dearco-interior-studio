import { useTranslation } from 'react-i18next'

import Reveal from '@/components/ui/Reveal/Reveal'

import styles from './Testimonial.module.css'

export default function Testimonial() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('testimonial.label')}>
      <figure className={styles.figure}>
        <Reveal className={styles.quoteWrap}>
          <blockquote className={styles.quote}>
            <p>
              “Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu
              pretium lacus.”
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <figcaption className={styles.author}>Liam Gallagher</figcaption>
        </Reveal>
      </figure>
    </section>
  )
}
