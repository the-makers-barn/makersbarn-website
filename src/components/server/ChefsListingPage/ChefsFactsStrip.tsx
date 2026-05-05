import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsFactsStrip.module.css'

interface Props {
  lang: Language
}

export async function ChefsFactsStrip({ lang }: Props) {
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.strip}>
      {dict.chefsListing.facts.map((fact, i) => (
        <div key={i} className={styles.fact}>
          <p className={styles.number}>{fact.number}</p>
          <p className={styles.description}>{fact.description}</p>
        </div>
      ))}
    </section>
  )
}
