import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { DEFAULT_LANGUAGE, LANGUAGE_CODES, LANGUAGE_STORAGE_KEY } from './languages'
import { de } from './locales/de'
import { en } from './locales/en'
import { es } from './locales/es'
import { fr } from './locales/fr'
import { pl } from './locales/pl'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
      es: { translation: es },
      de: { translation: de },
      fr: { translation: fr },
    },
    supportedLngs: LANGUAGE_CODES,
    fallbackLng: DEFAULT_LANGUAGE,
    // "pl-PL" from the browser resolves to "pl"
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    react: { useSuspense: false },
  })

const syncDocumentLanguage = (language: string) => {
  document.documentElement.lang = language
}

syncDocumentLanguage(i18n.resolvedLanguage ?? DEFAULT_LANGUAGE)
i18n.on('languageChanged', syncDocumentLanguage)

export default i18n
