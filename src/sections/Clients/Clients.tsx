import { useTranslation } from 'react-i18next'

import ExploreLink from '@/components/ui/ExploreLink/ExploreLink'
import Reveal from '@/components/ui/Reveal/Reveal'
import { REVIEWS } from '@/data/reviews'

import styles from './Clients.module.css'

export default function Clients() {
  const { t } = useTranslation()

  return (
    <section id="team" className={styles.section} aria-labelledby="clients-title">
      <div className={styles.intro}>
        <Reveal as="h2" className={styles.title}>
          <span id="clients-title">{t('clients.title')}</span>
        </Reveal>
        <Reveal className={styles.link} delay={150}>
          <ExploreLink href="#reviews">{t('clients.readAll')}</ExploreLink>
        </Reveal>
      </div>

      <ul id="reviews" className={styles.list}>
        {REVIEWS.map(({ id, author, quote, avatar, avatarPosition }, index) => (
          <Reveal as="li" key={id} delay={index * 150}>
            <figure className={styles.review}>
              <img
                className={styles.avatar}
                src={avatar}
                alt={t(`clients.alt.${id}`)}
                loading="lazy"
                style={{ objectPosition: avatarPosition }}
              />
              <blockquote className={styles.quote}>
                <p>“{quote}”</p>
              </blockquote>
              <figcaption className={styles.author}>{author}</figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
