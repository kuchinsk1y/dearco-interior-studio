import { useTranslation } from 'react-i18next'

import Logo from '@/components/ui/Logo/Logo'
import { PROJECT_LINKS, SITE, SOCIAL_LINKS } from '@/data/site'

import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

const phoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>{t('footer.tagline')}</p>

      <ul className={styles.social}>
        {SOCIAL_LINKS.map(({ label, name, href }) => (
          <li key={label} className={styles.socialItem}>
            <a href={href} aria-label={name}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.logo}>
        <Logo />
      </div>

      <address className={`${styles.column} ${styles.contactColumn}`}>
        <h2 className={styles.heading}>{t('footer.contact')}</h2>
        <dl className={styles.contacts}>
          <div className={styles.contact}>
            <dt>
              <abbr title={t('footer.address')}>A:</abbr>
            </dt>
            <dd>{SITE.address}</dd>
          </div>
          <div className={styles.contact}>
            <dt>
              <abbr title={t('footer.email')}>E:</abbr>
            </dt>
            <dd>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </dd>
          </div>
          {SITE.phones.map((phone) => (
            <div key={phone} className={styles.contact}>
              <dt>
                <abbr title={t('footer.telephone')}>T</abbr>
              </dt>
              <dd>
                <a href={phoneHref(phone)}>{phone}</a>
              </dd>
            </div>
          ))}
        </dl>
      </address>

      <nav className={`${styles.column} ${styles.projects}`} aria-label={t('footer.projects')}>
        <h2 className={styles.heading}>{t('footer.projects')}</h2>
        <ul className={styles.links}>
          {PROJECT_LINKS.map(({ key, href }) => (
            <li key={key}>
              <a href={href}>{t(`footer.links.${key}`)}</a>
            </li>
          ))}
        </ul>
      </nav>

      <p className={styles.copyright}>
        {t('footer.copyright', { year: CURRENT_YEAR })}
      </p>
    </footer>
  )
}
