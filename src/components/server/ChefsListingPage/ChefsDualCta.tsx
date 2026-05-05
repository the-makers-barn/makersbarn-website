import Link from 'next/link'

import { CHEFS_LISTING_ANCHOR } from '@/constants'
import { getServerTranslations } from '@/i18n/server'
import { getLocalizedPath } from '@/lib/routing'
import { ContactIntent, Route } from '@/types'
import type { Language } from '@/types'

import styles from './ChefsDualCta.module.css'

interface Props {
  lang: Language
}

export async function ChefsDualCta({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const { looking, join } = dict.chefsListing.dualCta
  const contactBase = getLocalizedPath(Route.CONTACT, lang)
  const lookingHref = `${contactBase}#${ContactIntent.LOOKING_FOR_CHEF}`
  const joinHref = `${contactBase}#${ContactIntent.CHEF_JOIN}`

  return (
    <section id={CHEFS_LISTING_ANCHOR.DUAL_CTA} className={styles.section}>
      <div className={styles.cards}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>{looking.eyebrow}</p>
          <h3 className={styles.h3}>{looking.h3}</h3>
          <p className={styles.body}>{looking.body}</p>
          <Link href={lookingHref} className={styles.button}>
            {looking.button}
          </Link>
        </article>
        <article className={styles.card}>
          <p className={styles.eyebrow}>{join.eyebrow}</p>
          <h3 className={styles.h3}>{join.h3}</h3>
          <p className={styles.body}>{join.body}</p>
          <Link href={joinHref} className={styles.button}>
            {join.button}
          </Link>
        </article>
      </div>
    </section>
  )
}
