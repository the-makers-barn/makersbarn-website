import Image from 'next/image'

import { ExternalLinkIcon } from '@/components/client'
import { Language } from '@/types'
import { FEATURED_RETREATS, IMAGES } from '@/data'
import { getServerTranslations } from '@/i18n'

import styles from './RetreatHighlight.module.css'

const HIGHLIGHTED_RETREAT_ID = 'autumn-grounding-2026'

interface RetreatHighlightProps {
  locale: Language
}

export async function RetreatHighlight({ locale }: RetreatHighlightProps) {
  const retreat = FEATURED_RETREATS.find((r) => r.id === HIGHLIGHTED_RETREAT_ID)

  if (!retreat?.externalUrl) {
    return null
  }

  const t = await getServerTranslations(locale)

  return (
    <section className={styles.highlight}>
      <div className={styles.media} aria-hidden="true">
        <Image
          src={IMAGES.accommodation.fieldWalking}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 60vw"
          className={styles.image}
        />
        <div className={styles.mediaScrim} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.kicker}>{t.retreatHighlight.kicker}</p>
          <h2 className={styles.title}>{t.retreatHighlight.title}</h2>
          <p className={styles.subtitle}>{t.retreatHighlight.subtitle}</p>
          <p className={styles.body}>{t.retreatHighlight.body}</p>

          <ul className={styles.meta}>
            {t.retreatHighlight.metaItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href={retreat.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {t.retreatHighlight.ctaLabel}
              <ExternalLinkIcon />
            </a>
            <p className={styles.scarcity}>{t.retreatHighlight.scarcityNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
