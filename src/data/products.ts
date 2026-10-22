import productOne from '@/assets/images/product-1.webp'
import productTwo from '@/assets/images/product-2.webp'
import productThree from '@/assets/images/product-3.webp'
import productFour from '@/assets/images/product-4.webp'
import productFive from '@/assets/images/product-5.webp'
import productSix from '@/assets/images/product-6.webp'

export interface Product {
  /** Also the key inside `products.alt.*` of the locale files. */
  id: string
  name: string
  image: string
  /** Current price in dollars. */
  price: number
  /** Crossed-out price shown next to a sale price. */
  previousPrice?: number
  badge?: 'sale' | 'new'
}

export const PRODUCTS: readonly Product[] = [
  {
    id: 'product-1',
    name: 'Arcu Ultrices',
    image: productOne,
    price: 99,
  },
  {
    id: 'product-2',
    name: 'Arcu Ultrices',
    image: productTwo,
    price: 120,
    previousPrice: 99,
    badge: 'sale',
  },
  {
    id: 'product-3',
    name: 'Arcu Ultrices',
    image: productThree,
    price: 99,
  },
  {
    id: 'product-4',
    name: 'Arcu Ultrices',
    image: productFour,
    price: 99,
  },
  {
    id: 'product-5',
    name: 'Arcu Ultrices',
    image: productFive,
    price: 99,
  },
  {
    id: 'product-6',
    name: 'Arcu Ultrices',
    image: productSix,
    price: 99,
    badge: 'new',
  },
]
