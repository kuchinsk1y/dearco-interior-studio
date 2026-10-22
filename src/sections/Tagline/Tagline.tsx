import { useTranslation } from 'react-i18next'

import Reveal from '@/components/ui/Reveal/Reveal'

import styles from './Tagline.module.css'

export default function Tagline() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <Reveal as="h2" className={styles.title}>
        {t('tagline.title')}
      </Reveal>
    </section>
  )
}
