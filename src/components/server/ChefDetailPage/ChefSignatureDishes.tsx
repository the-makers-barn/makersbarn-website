import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefSignatureDishes.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefSignatureDishes({ chef, lang }: Props) {
  if (chef.signatureDishes.length === 0) { return null }
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{dict.chef.signatureDishes}</h2>
      <ol className={styles.grid}>
        {chef.signatureDishes.map((dish, i) => (
          <li key={i} className={styles.card}>
            <div className={styles.prefix}>
              {dict.chef.signatureDishItemPrefix.replace('{n}', String(i + 1).padStart(2, '0'))}
            </div>
            <div className={styles.name}>{localize(dish.name, lang)}</div>
            <div className={styles.note}>{localize(dish.note, lang)}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
