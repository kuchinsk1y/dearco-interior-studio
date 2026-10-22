import designImage from '@/assets/images/gallery-design.webp'
import featuredImage from '@/assets/images/gallery-featured.webp'
import interiorImage from '@/assets/images/gallery-interior.webp'
import planningImage from '@/assets/images/gallery-planning.webp'

export interface Service {
  /** Also the key inside `services.*` of the locale files (label, alt). */
  id: string
  image: string
  /** The featured panel has no caption and is always shown in full colour. */
  labelled?: boolean
  /** CSS `object-position` for photos that need a specific crop. */
  position?: string
}

export const SERVICES: readonly Service[] = [
  {
    id: 'design',
    labelled: true,
    image: designImage,
    position: '50% 100%',
  },
  {
    id: 'featured',
    image: featuredImage,
  },
  {
    id: 'planning',
    labelled: true,
    image: planningImage,
  },
  {
    id: 'interior',
    labelled: true,
    image: interiorImage,
  },
]
