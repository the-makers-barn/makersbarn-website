import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './DraftBadge.module.css'

type Props = { lang: Language }

export async function DraftBadge({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  return (
    <div role="status" aria-live="polite" className={styles.badge}>
      {dict.chef.draftBadge}
    </div>
  )
}
