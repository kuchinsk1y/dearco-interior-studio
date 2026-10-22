import { useTranslation } from 'react-i18next'

import Reveal from '@/components/ui/Reveal/Reveal'
import SectionIntro from '@/components/ui/SectionIntro/SectionIntro'
import { PRODUCTS } from '@/data/products'

import styles from './Products.module.css'

const formatPrice = (value: number) => `$${value.toFixed(2)}`

export default function Products() {
  const { t } = useTranslation()

  return (
    <section id="products" className={styles.section} aria-labelledby="products-title">
      <SectionIntro
        className={styles.intro}
        headingId="products-title"
        lines={[t('titles.insights.line1'), t('titles.insights.line2')]}
        text="Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu pretium lacus. Dignissim vulputate maecenas vulputate tempor velit."
        linkLabel={t('insights.allPosts')}
        linkHref="#products"
      />

      <ul className={styles.grid}>
        {PRODUCTS.map(({ id, name, image, price, previousPrice, badge }, index) => (
          <Reveal as="li" key={id} delay={(index % 3) * 120}>
            <a className={styles.card} href={`#${id}`}>
              <span className={styles.media}>
                <img className={styles.image} src={image} alt={t(`products.alt.${id}`)} loading="lazy" />
                {badge && <span className={styles.badge}>{t(`products.${badge}`)}</span>}
              </span>
              <span className={styles.name}>{name}</span>
              <span className={styles.prices}>
                {previousPrice !== undefined && (
                  <s className={styles.previous}>{formatPrice(previousPrice)}</s>
                )}
                <span>{formatPrice(price)}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
