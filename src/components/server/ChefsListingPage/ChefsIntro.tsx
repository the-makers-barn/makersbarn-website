import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsIntro.module.css'

interface Props {
  lang: Language
}

export async function ChefsIntro({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  return (
    <section className={styles.section}>
      <p className={styles.paragraph}>{dict.chefsListing.intro}</p>
    </section>
  )
}
