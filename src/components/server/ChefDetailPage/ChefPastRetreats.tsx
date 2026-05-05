import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import styles from './ChefPastRetreats.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefPastRetreats({ chef, lang }: Props) {
  if (chef.pastRetreats.length === 0) {
    return null
  }
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.pastRetreats}</h3>
      <ul className={styles.list}>
        {chef.pastRetreats.map((retreat) => (
          <li key={retreat.name}>
            {retreat.url ? (
              <a href={retreat.url} target="_blank" rel="noopener nofollow" className={styles.link}>
                {retreat.name}
              </a>
            ) : (
              <span>{retreat.name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
