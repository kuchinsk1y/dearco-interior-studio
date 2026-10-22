import ExploreLink from '@/components/ui/ExploreLink/ExploreLink'
import Reveal from '@/components/ui/Reveal/Reveal'

import styles from './SectionIntro.module.css'

interface SectionIntroProps {
  /** Heading split by line, e.g. ['Insights', 'for you']. */
  lines: readonly string[]
  text: string
  linkLabel: string
  linkHref: string
  /** Prefix for the heading id, used by the parent section's `aria-labelledby`. */
  headingId: string
  className?: string
}

/** Large heading, short description and a call-to-action link. Used by the "Insights" sections. */
export default function SectionIntro({
  lines,
  text,
  linkLabel,
  linkHref,
  headingId,
  className,
}: SectionIntroProps) {
  return (
    <div className={[styles.intro, className].filter(Boolean).join(' ')}>
      <Reveal as="h2" className={styles.title}>
        <span id={headingId}>
          {lines.map((line, index) => (
            <span key={line} className={styles.line}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </span>
      </Reveal>
      <Reveal as="p" className={styles.text} delay={150}>
        {text}
      </Reveal>
      <Reveal delay={300}>
        <ExploreLink href={linkHref}>{linkLabel}</ExploreLink>
      </Reveal>
    </div>
  )
}
