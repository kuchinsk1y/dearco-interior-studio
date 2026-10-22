export interface Stat {
  /** Key inside `stats.items.*` of the locale files. */
  key: 'project' | 'clients' | 'pavilions' | 'awards' | 'spaces' | 'workers'
  value: number
  suffix?: string
}

export const STATS: readonly Stat[] = [
  { key: 'project', value: 100, suffix: '+' },
  { key: 'clients', value: 57 },
  { key: 'pavilions', value: 57 },
  { key: 'awards', value: 24 },
  { key: 'spaces', value: 65 },
  { key: 'workers', value: 77 },
]
