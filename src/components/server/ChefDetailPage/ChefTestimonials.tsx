import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefTestimonials.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefTestimonials({ chef, lang }: Props) {
  if (chef.testimonials.length === 0) {
    return null
  }
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{dict.chef.testimonials}</h2>
      <ul className={styles.grid}>
        {chef.testimonials.map((t, i) => (
          <li key={i} className={styles.card}>
            <blockquote className={styles.quote}>"{localize(t.quote, lang)}"</blockquote>
            <div className={styles.attribution}>
              <span className={styles.author}>{t.author}</span>
              <span className={styles.role}>{localize(t.role, lang)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
