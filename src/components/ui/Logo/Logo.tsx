import styles from './Logo.module.css'

export default function Logo() {
  return (
    <a className={styles.logo} href="#home" aria-label="De Arco, home">
      <span className={styles.text}>De Arco</span>
    </a>
  )
}
