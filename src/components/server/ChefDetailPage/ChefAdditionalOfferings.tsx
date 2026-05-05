import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefAdditionalOfferings.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefAdditionalOfferings({ chef, lang }: Props) {
  const offerings = chef.additionalOfferings ?? []
  if (offerings.length === 0) { return null }
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{dict.chef.additionalOfferings}</h2>
      <ul className={styles.list}>
        {offerings.map((offering, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.head}>
              <span className={styles.name}>{localize(offering.name, lang)}</span>
              <span className={styles.price}>{localize(offering.priceLine, lang)}</span>
            </div>
            {offering.description && (
              <p className={styles.description}>{localize(offering.description, lang)}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
