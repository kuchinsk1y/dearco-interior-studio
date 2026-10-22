export const SITE = {
  name: 'De Arco',
  address: '6065 Roswell Sandy Springs, GA 30328',
  email: 'info@dearco.com',
  phones: ['+123 4567 890', '+353 345 9590'],
} as const

export const SOCIAL_LINKS = [
  { label: 'IG', name: 'Instagram', href: '#' },
  { label: 'FB', name: 'Facebook', href: '#' },
  { label: 'LN', name: 'LinkedIn', href: '#' },
] as const

export const PROJECT_LINKS = [
  { key: 'residential', href: '#projects' },
  { key: 'interior', href: '#projects' },
  { key: 'competitions', href: '#projects' },
  { key: 'reuse', href: '#projects' },
] as const
