import clientOne from '@/assets/images/client-1.webp'
import clientTwo from '@/assets/images/client-2.webp'
import clientThree from '@/assets/images/client-3.webp'

export interface Review {
  /** Also the key inside `clients.alt.*` of the locale files (avatar description). */
  id: string
  author: string
  quote: string
  avatar: string
  /** CSS `object-position` so the face stays in the frame. */
  avatarPosition: string
}

const QUOTE =
  'At vel risus senectus mauris. Sed pulvinar lacinia eget odio maecenas porttitor duis volutpat mi.'

export const REVIEWS: readonly Review[] = [
  {
    id: 'review-1',
    author: 'Susane Gimmicks',
    quote: QUOTE,
    avatar: clientOne,
    avatarPosition: '50% 30%',
  },
  {
    id: 'review-2',
    author: 'Susane Gimmicks',
    quote: QUOTE,
    avatar: clientTwo,
    avatarPosition: '50% 20%',
  },
  {
    id: 'review-3',
    author: 'Susane Gimmicks',
    quote: QUOTE,
    avatar: clientThree,
    avatarPosition: '50% 20%',
  },
]
