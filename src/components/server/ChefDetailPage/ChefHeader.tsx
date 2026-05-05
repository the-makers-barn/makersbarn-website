import Image from 'next/image'
import Link from 'next/link'

import { getServerTranslations } from '@/i18n/server'
import { localize, getImageAltText } from '@/lib'
import { getLocalizedPath } from '@/lib/routing'
import type { Chef, Language } from '@/types'
import { Route } from '@/types/navigation'

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
      <Link href={getLocalizedPath(Route.CHEFS, lang)} className={styles.backLink}>
        {dict.chef.backLink}
      </Link>

      <div className={styles.layout}>
        <div className={styles.portraitWrap}>
          <span aria-hidden="true" className={styles.portraitTag}>
            <span className={styles.portraitTagDot} /> Retreat chef
          </span>
          <div className={styles.portrait}>
            <Image
              src={chef.avatar.src}
              alt={getImageAltText(chef.avatar.altKey, lang)}
              fill
              sizes="(max-width: 1023px) 80vw, 440px"
              className={styles.portraitImage}
              priority
            />
          </div>
        </div>

        <div className={styles.text}>
          <h1 className={styles.name}>{chef.name}</h1>
          <div className={styles.rule} aria-hidden="true" />
          <p className={styles.tagline}>{localize(chef.tagline, lang)}</p>
          <ul className={styles.metaLine} aria-label={dict.chef.headerMeta.summaryAriaLabel}>
            <li>{locationLine}</li>
            <li>{guestsLabel}</li>
            <li>{languagesLabel}</li>
            <li>{yearsLabel}</li>
          </ul>
          <div className={styles.ctaRow}>
            <a href="#chef-inquiry" className={styles.primaryCta}>
              {ctaLabel}
              <span aria-hidden="true" className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
