import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LANGUAGES } from '@/i18n/languages'
import type { LanguageCode } from '@/i18n/languages'

import styles from './LanguageSwitcher.module.css'

const SWITCH_FADE_MS = 220

/** Toggles the fade-out state that `global.css` reacts to. */
const setSwitching = (active: boolean) => {
  if (active) document.documentElement.dataset.switching = 'true'
  else delete document.documentElement.dataset.switching
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Language picker. On desktop it is a dropdown; inside the mobile menu the same list is
 * always visible (see the media query in the stylesheet).
 */
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const current = (i18n.resolvedLanguage ?? 'en') as LanguageCode

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const select = async (code: LanguageCode) => {
    setOpen(false)
    if (code === current) return

    // Fade the content out, swap the language, fade back in.
    if (!prefersReducedMotion()) {
      setSwitching(true)
      await new Promise((resolve) => setTimeout(resolve, SWITCH_FADE_MS))
    }
    await i18n.changeLanguage(code)
    requestAnimationFrame(() => setSwitching(false))
  }

  return (
    <div ref={rootRef} className={styles.switcher}>
      <button
        type="button"
        className={styles.toggle}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t('header.language')}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.code}>{current}</span>
        <span className={styles.chevron} aria-hidden />
      </button>

      <ul className={styles.list} data-open={open}>
        {LANGUAGES.map(({ code, name }) => (
          <li key={code}>
            <button
              type="button"
              className={styles.option}
              lang={code}
              aria-current={code === current ? 'true' : undefined}
              onClick={() => void select(code)}
            >
              <span className={styles.optionCode}>{code}</span>
              <span className={styles.optionName}>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
