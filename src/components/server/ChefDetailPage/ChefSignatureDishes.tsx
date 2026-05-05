import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefSignatureDishes.module.css'

type Props = { chef: Chef; lang: Language }

const ROMAN_NUMERALS = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
] as const

function toRoman(n: number): string {
  return ROMAN_NUMERALS[n - 1] ?? String(n)
}

export async function ChefSignatureDishes({ chef, lang }: Props) {
  if (chef.signatureDishes.length === 0) { return null }
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{dict.chef.signatureDishes}</h2>
      <ol className={styles.list}>
        {chef.signatureDishes.map((dish, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.numeral} aria-hidden="true">{toRoman(i + 1)}.</span>
            <div className={styles.body}>
              <span className={styles.name}>{localize(dish.name, lang)}</span>
              <span className={styles.note}>{localize(dish.note, lang)}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
