import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsFaq.module.css'

interface Props {
  lang: Language
}

export async function ChefsFaq({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const { h2, items } = dict.chefsListing.faq

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{h2}</h2>
      <dl className={styles.list}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <dt className={styles.question}>{item.question}</dt>
            <dd className={styles.answer}>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
