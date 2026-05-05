import Image from 'next/image'

import { getServerTranslations } from '@/i18n/server'
import { getImageAltText } from '@/lib'
import type { Language } from '@/types'

import styles from './ChefsHero.module.css'

const HERO_IMAGE_SRC = '/images/chefs/chefs-hero.png'

interface Props {
  lang: Language
}

export async function ChefsHero({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const hero = dict.chefsListing.hero

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <Image
          src={HERO_IMAGE_SRC}
          alt={getImageAltText(HERO_IMAGE_SRC, lang)}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.h1}>{hero.h1}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
      </div>
    </section>
  )
}
