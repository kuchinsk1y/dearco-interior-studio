import fengShuiImage from '@/assets/images/post-feng-shui.webp'

export interface Post {
  /** Also the key inside `insights.posts.*` of the locale files (title, category). */
  id: string
  author: string
  excerpt: string
  /** `month` is zero-based, like in `Date`. */
  date: { day: number; month: number }
  /** Only the featured post has a cover image (its alt text is in the locale files). */
  image?: { src: string; position: string }
}

const EXCERPT =
  'Arcu ultrices volutpat donec dui faucibus etiam phasellus sagittis. Lacus amet arcu pretium lacus. Dignissim vulputate.'

export const POSTS: readonly Post[] = [
  {
    id: 'art-of-feng-shui',
    author: 'James Theroy',
    excerpt: EXCERPT,
    date: { day: 8, month: 4 },
    image: { src: fengShuiImage, position: '50% 89%' },
  },
  {
    id: 'contemporary-architecture',
    author: 'Joe Sellers',
    excerpt: EXCERPT,
    date: { day: 5, month: 4 },
  },
  {
    id: 'home-interior-ideas',
    author: 'Bradley Thompson',
    excerpt: EXCERPT,
    date: { day: 23, month: 3 },
  },
]
