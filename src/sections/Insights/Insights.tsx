import { useTranslation } from 'react-i18next'

import dividerLine from '@/assets/icons/divider-vertical.svg'
import Reveal from '@/components/ui/Reveal/Reveal'
import SectionIntro from '@/components/ui/SectionIntro/SectionIntro'
import { POSTS } from '@/data/posts'

import styles from './Insights.module.css'

export default function Insights() {
  const { t, i18n } = useTranslation()
  const monthName = new Intl.DateTimeFormat(i18n.resolvedLanguage, { month: 'long' })
  return (
    <section id="blog" className={styles.section} aria-labelledby="insights-title">
      <SectionIntro
        className={styles.intro}
        headingId="insights-title"
        lines={[t('titles.insights.line1'), t('titles.insights.line2')]}
        text="Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu pretium lacus. Dignissim vulputate maecenas vulputate tempor velit."
        linkLabel={t('insights.allPosts')}
        linkHref="#blog"
      />

      <img className={styles.divider} src={dividerLine} alt="" aria-hidden />

      <ul className={styles.list}>
        {POSTS.map(({ id, author, excerpt, date, image }) => (
          <Reveal as="li" key={id}>
            <article className={styles.post}>
              <div className={styles.date}>
                <span className={styles.day}>{date.day}</span>
                <span className={styles.month}>{monthName.format(new Date(2026, date.month, 1))}</span>
              </div>

              <div className={styles.body}>
                {image && (
                  <img
                    className={styles.cover}
                    src={image.src}
                    alt={t(`insights.posts.${id}.alt`)}
                    loading="lazy"
                    style={{ objectPosition: image.position }}
                  />
                )}
                <p className={styles.meta}>
                  <span>{author}</span>
                  <span className={styles.separator} aria-hidden>
                    |
                  </span>
                  <span>{t(`insights.posts.${id}.category`)}</span>
                </p>
                <h3 className={styles.title}>
                  <a href={`#${id}`}>{t(`insights.posts.${id}.title`)}</a>
                </h3>
                <p className={styles.excerpt}>{excerpt}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
