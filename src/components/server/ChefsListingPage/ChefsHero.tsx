import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsHero.module.css'

interface Props {
  lang: Language
}

export async function ChefsHero({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const hero = dict.chefsListing.hero

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.h1}>{hero.h1}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
      </div>
    </section>
  )
}
