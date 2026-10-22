import playIcon from '@/assets/icons/play.svg'

import styles from './PlayButton.module.css'

interface PlayButtonProps {
  label?: string
  onClick?: () => void
  className?: string
}

export default function PlayButton({ label = 'Play video', onClick, className }: PlayButtonProps) {
  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(' ')}
      aria-label={label}
      onClick={onClick}
    >
      <img className={styles.icon} src={playIcon} alt="" width={217.658} height={217.658} />
    </button>
  )
}
