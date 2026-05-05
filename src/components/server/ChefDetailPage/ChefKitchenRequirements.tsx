import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefKitchenRequirements.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefKitchenRequirements({ chef, lang }: Props) {
  if (!chef.kitchenRequirements) { return null }
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.kitchenRequirements}</h3>
      <p className={styles.body}>{localize(chef.kitchenRequirements, lang)}</p>
    </section>
  )
}
