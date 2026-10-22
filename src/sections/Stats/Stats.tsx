import { useTranslation } from 'react-i18next'

import { useCountUp } from '@/hooks/useCountUp'
import { STATS } from '@/data/stats'
import type { Stat } from '@/data/stats'

import styles from './Stats.module.css'

function StatItem({ statKey, value, suffix = '' }: Omit<Stat, 'key'> & { statKey: Stat['key'] }) {
  const { t } = useTranslation()
  const { ref, value: current } = useCountUp<HTMLSpanElement>(value)

  return (
    <li className={styles.item}>
      <span ref={ref} className={styles.value}>
        {current}
        {suffix}
      </span>
      <span className={styles.label}>{t(`stats.items.${statKey}`)}</span>
    </li>
  )
}

export default function Stats() {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('stats.label')}>
      <ul className={styles.list}>
        {STATS.map(({ key, value, suffix }) => (
          <StatItem key={key} statKey={key} value={value} suffix={suffix} />
        ))}
      </ul>
    </section>
  )
}
