import arrowLines from '@/assets/icons/arrow-lines.svg'

import styles from './ExploreLink.module.css'

interface ExploreLinkProps {
  href: string
  children: string
}

export default function ExploreLink({ href, children }: ExploreLinkProps) {
  return (
    <a className={styles.link} href={href}>
      <span className={styles.label}>{children}</span>
      <img className={styles.arrow} src={arrowLines} alt="" width={112} height={37.5} aria-hidden />
    </a>
  )
}
