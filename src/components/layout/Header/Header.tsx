import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import linesIcon from '@/assets/icons/lines.svg'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher/LanguageSwitcher'
import Logo from '@/components/ui/Logo/Logo'
import { NAV_ITEMS } from '@/data/navigation'

import styles from './Header.module.css'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock page scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <button
        type="button"
        className={styles.burger}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>

      <nav
        id="main-navigation"
        className={styles.nav}
        aria-label={t('header.mainNavigation')}
        data-open={menuOpen}
        data-lenis-prevent
      >
        <ul className={styles.list}>
          {NAV_ITEMS.map(({ key, href }, index) => (
            <li key={href} className={styles.item}>
              <a
                className={styles.link}
                href={href}
                aria-current={index === 0 ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>

      <img className={styles.icon} src={linesIcon} alt="" width={61.5} height={36} />
    </header>
  )
}
