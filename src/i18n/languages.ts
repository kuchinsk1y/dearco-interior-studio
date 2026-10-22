export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

export const LANGUAGE_CODES = LANGUAGES.map(({ code }) => code)
export const DEFAULT_LANGUAGE: LanguageCode = 'en'
export const LANGUAGE_STORAGE_KEY = 'de-arco-language'
