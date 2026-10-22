export interface NavItem {
  /** Key inside `nav.*` of the locale files. */
  key: 'home' | 'about' | 'blog' | 'team'
  href: string
}

export const NAV_ITEMS: readonly NavItem[] = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'blog', href: '#blog' },
  { key: 'team', href: '#team' },
]
