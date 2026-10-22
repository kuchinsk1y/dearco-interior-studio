import { useTranslation } from 'react-i18next'

import Reveal from '@/components/ui/Reveal/Reveal'

import styles from './Intro.module.css'

export default function Intro() {
  const { t } = useTranslation()

  return (
    <section className={styles.intro} aria-labelledby="intro-title">
      <Reveal as="h2" className={styles.title}>
        <span id="intro-title">{t('intro.title')}</span>
      </Reveal>
      <Reveal className={styles.text} delay={150}>
        <p>
          Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu
          pretium lacus. Dignissim vulputate maecenas vulputate tempor velit. Viverra ut rutrum
          morbi in tincidunt nullam ullamcorper at varius. Quis luctus vestibulum nunc risus. Erat
          etiam lorem ipsum luctus.
        </p>
        <p>
          At vel risus senectus mauris. Sed pulvinar lacinia eget odio maecenas porttitor duis
          volutpat mi. Amet molestie tempor consectetur eget laoreet. Ligula sit viverra dignissim
          etiam sed consectetur molestie. Egestas ac nunc in lectus mauris consectetur lectus id
          accumsan. Amet semper aliquet urna rutrum cursus eu.
        </p>
      </Reveal>
    </section>
  )
}
