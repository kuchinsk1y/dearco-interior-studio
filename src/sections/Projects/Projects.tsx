import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import linesLeft from '@/assets/icons/projects-lines.svg'
import linesRight from '@/assets/icons/projects-lines-alt.svg'
import Reveal from '@/components/ui/Reveal/Reveal'
import { DEFAULT_PROJECT_ID, PROJECTS } from '@/data/projects'

import styles from './Projects.module.css'

export default function Projects() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState(DEFAULT_PROJECT_ID)

  return (
    <section id="projects" className={styles.projects} aria-label={t('projects.label')}>
      <ul className={styles.list}>
        {PROJECTS.map(({ id, title }, index) => {
          const isActive = id === activeId

          return (
            <Reveal as="li" key={id} className={styles.item} delay={index * 90}>
              <button
                type="button"
                className={styles.button}
                aria-pressed={isActive}
                onClick={() => setActiveId(id)}
              >
                {title}
              </button>
              {isActive && (
                <>
                  <img className={styles.linesLeft} src={linesLeft} alt="" aria-hidden />
                  <img className={styles.linesRight} src={linesRight} alt="" aria-hidden />
                </>
              )}
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
