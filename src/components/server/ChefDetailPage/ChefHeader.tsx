import Image from 'next/image'

import { getServerTranslations } from '@/i18n/server'
import { cn, localize, getImageAltText } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefHeader.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefHeader({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)

  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })
  const languageNames = new Intl.DisplayNames([lang], { type: 'language' })

  const guestsLabel = dict.chef.headerMeta.guests
    .replace('{min}', String(chef.groupSize.min))
    .replace('{max}', String(chef.groupSize.max))

  const yearsLabel = dict.chef.headerMeta.yearsCooking.replace(
    '{years}',
    String(chef.yearsExperience)
  )

  const languagesLabel = listFormatter.format(
    chef.languagesSpoken.map((l) => languageNames.of(l) ?? l)
  )

  const firstName = chef.name.split(' ')[0] ?? chef.name
  const ctaLabel = dict.chef.cta.sendInquiry.replace('{name}', firstName)
  const regionLabel = dict.chef.enums.region[chef.homeBase.region]
  const locationLine = `${chef.homeBase.city}, ${regionLabel}`

  return (
    <header className={styles.header}>
      <div className={styles.backLink} aria-disabled="true">
        {dict.chef.backLink}
      </div>
      <div className={styles.identity}>
        <Image
          src={chef.avatar.src}
          alt={getImageAltText(chef.avatar.altKey, lang)}
          width={120}
          height={120}
          className={styles.avatar}
          priority
        />
        <div className={styles.text}>
          <h1 className={styles.name}>{chef.name}</h1>
          <p className={styles.tagline}>{localize(chef.tagline, lang)}</p>
          <ul className={cn(styles.metaLine)} aria-label="Chef summary">
            <li>{locationLine}</li>
            <li>{guestsLabel}</li>
            <li>{languagesLabel}</li>
            <li>{yearsLabel}</li>
          </ul>
        </div>
      </div>
      <div className={styles.ctaGroup}>
        <a href="#chef-inquiry" className={styles.primaryCta}>
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
