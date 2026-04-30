import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefAbout.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefAbout({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const paragraphs = chef.about.paragraphs.map((p) => localize(p, lang))

  return (
    <section className={styles.about}>
      <h2 className={styles.label}>{dict.chef.about}</h2>
      <p className={styles.headline}>{localize(chef.about.headline, lang)}</p>
      {paragraphs.map((text, i) => (
        <p key={i} className={styles.paragraph}>{text}</p>
      ))}
    </section>
  )
}
