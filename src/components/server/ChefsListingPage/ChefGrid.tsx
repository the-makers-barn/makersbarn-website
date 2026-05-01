import { CHEFS_LISTING_ANCHOR } from '@/constants'
import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import { ChefCard } from './ChefCard'
import { LaunchingSoonPanel } from './LaunchingSoonPanel'
import styles from './ChefGrid.module.css'

interface Props {
  chefs: readonly Chef[]
  lang: Language
}

export async function ChefGrid({ chefs, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const gridCopy = dict.chefsListing.grid
  const isEmpty = chefs.length === 0

  return (
    <section id={CHEFS_LISTING_ANCHOR.GRID} className={styles.section}>
      <h2 className={styles.h2}>{gridCopy.h2}</h2>
      <p className={styles.framingLine}>{gridCopy.framingLine}</p>
      {isEmpty ? (
        <LaunchingSoonPanel lang={lang} />
      ) : (
        <div className={styles.grid}>
          {chefs.map((chef) => (
            <ChefCard key={chef.slug} chef={chef} lang={lang} />
          ))}
        </div>
      )}
    </section>
  )
}
