import Image from 'next/image'
import Link from 'next/link'

import { ChefStatus } from '@/constants/chef'
import { getServerTranslations } from '@/i18n/server'
import { getImageAltText, localize } from '@/lib'
import { getChefDetailPath } from '@/lib/routing'
import type { Chef, Language } from '@/types'

import styles from './ChefCard.module.css'

const MAX_CUISINE_CHIPS = 3
const IMAGE_SIZES = '(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw'

interface Props {
  chef: Chef
  lang: Language
}

export async function ChefCard({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const regionLabel = dict.chef.enums.region[chef.homeBase.region]
  const cardCopy = dict.chefsListing.grid.card
  const cuisines = chef.cuisineStyles.slice(0, MAX_CUISINE_CHIPS)
  const isDraft = chef.status === ChefStatus.DRAFT
  const detailHref = getChefDetailPath(chef.slug, lang)

  return (
    <article className={styles.card}>
      <Link href={detailHref} className={styles.cardLink}>
        <div className={styles.media}>
          <Image
            src={chef.gallery.hero.src}
            alt={getImageAltText(chef.gallery.hero.altKey, lang)}
            fill
            sizes={IMAGE_SIZES}
            className={styles.image}
          />
          {isDraft && <span className={styles.draftBadge}>{cardCopy.draftBadge}</span>}
        </div>
        <div className={styles.body}>
          <p className={styles.location}>
            {chef.homeBase.city} · {regionLabel}
          </p>
          <h3 className={styles.name}>{chef.name}</h3>
          <p className={styles.tagline}>{localize(chef.tagline, lang)}</p>
          <ul className={styles.chips} aria-label={cardCopy.cuisinesAriaLabel}>
            {cuisines.map((style, i) => (
              <li key={i} className={styles.chip}>
                {localize(style, lang)}
              </li>
            ))}
          </ul>
          <span className={styles.viewProfile}>
            {cardCopy.viewProfile} <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  )
}
