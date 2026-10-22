import { useTranslation } from 'react-i18next'

import bathroomImage from '@/assets/images/insights-bathroom.webp'
import ParallaxImage from '@/components/ui/ParallaxImage/ParallaxImage'
import SectionIntro from '@/components/ui/SectionIntro/SectionIntro'

import styles from './InsightsFeature.module.css'

export default function InsightsFeature() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-labelledby="insights-feature-title">
      <ParallaxImage
        className={styles.media}
        src={bathroomImage}
        alt={t('insights.featureAlt')}
        speed={0.12}
      />
      <SectionIntro
        className={styles.intro}
        headingId="insights-feature-title"
        lines={[t('titles.insights.line1'), t('titles.insights.line2')]}
        text="Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu pretium lacus. Dignissim vulputate maecenas vulputate tempor velit."
        linkLabel={t('insights.allPosts')}
        linkHref="#blog"
      />
    </section>
  )
}
