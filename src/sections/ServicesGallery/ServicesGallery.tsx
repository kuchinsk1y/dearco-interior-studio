import { useTranslation } from 'react-i18next'

import labelLineLeft from '@/assets/icons/label-line-left.svg'
import labelLineRight from '@/assets/icons/label-line-right.svg'
import Reveal from '@/components/ui/Reveal/Reveal'
import { SERVICES } from '@/data/services'

import styles from './ServicesGallery.module.css'

export default function ServicesGallery() {
  const { t } = useTranslation()

  return (
    <section id="services" aria-label={t('services.label')}>
      <ul className={styles.list}>
        {SERVICES.map(({ id, labelled, image, position }, index) => {
          const picture = (
            <>
              <img
                className={styles.image}
                src={image}
                alt={t(`services.${id}.alt`)}
                loading="lazy"
                style={position ? { objectPosition: position } : undefined}
              />
              <span className={styles.overlay} />
            </>
          )

          return (
            <Reveal as="li" key={id} className={styles.item} delay={index * 120}>
              {labelled ? (
                <a className={styles.panel} href={`#${id}`}>
                  {picture}
                  <span className={styles.label}>
                    <img src={labelLineLeft} alt="" width={97.5} height={37.5} aria-hidden />
                    <span className={styles.name}>{t(`services.${id}.label`)}</span>
                    <img
                      className={styles.lineRight}
                      src={labelLineRight}
                      alt=""
                      width={97}
                      height={37.5}
                      aria-hidden
                    />
                  </span>
                </a>
              ) : (
                <div className={`${styles.panel} ${styles.featured}`}>{picture}</div>
              )}
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
