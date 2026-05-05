import { CHEFS_LISTING_ANCHOR } from '@/constants'
import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './LaunchingSoonPanel.module.css'

interface Props {
  lang: Language
}

export async function LaunchingSoonPanel({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const copy = dict.chefsListing.launchingSoon
  return (
    <div className={styles.panel}>
      <p className={styles.headline}>{copy.headline}</p>
      <p className={styles.body}>{copy.body}</p>
      <a href={`#${CHEFS_LISTING_ANCHOR.DUAL_CTA}`} className={styles.cta}>
        {copy.inlineCtaLabel}
      </a>
    </div>
  )
}
