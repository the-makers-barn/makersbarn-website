import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon, ExternalLinkIcon } from '@/components/client'
import { Language, FeaturedRetreat } from '@/types'
import { FEATURED_RETREATS } from '@/data'
import { getServerTranslations } from '@/i18n'
import { getLocalizedPath } from '@/lib/routing'

import styles from './FeaturedRetreats.module.css'

interface FeaturedRetreatCardProps {
  retreat: FeaturedRetreat
  locale: Language
  bookNowLabel: string
}

export function FeaturedRetreatCard({ retreat, locale, bookNowLabel }: FeaturedRetreatCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={retreat.image}
          alt={retreat.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{retreat.title}</h3>
        <p className={styles.date}>{retreat.dateRange}</p>

        {retreat.internalUrl && (
          <Link href={getLocalizedPath(retreat.internalUrl, locale)} className={styles.cta}>
            {bookNowLabel}
            <ArrowRightIcon className={styles.ctaIcon} />
          </Link>
        )}
        {!retreat.internalUrl && retreat.externalUrl && (
          <a
            href={retreat.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            {bookNowLabel}
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </article>
  )
}

interface FeaturedRetreatsGridProps {
  locale: Language
}

export async function FeaturedRetreatsGrid({ locale }: FeaturedRetreatsGridProps) {
  const t = await getServerTranslations(locale)

  return (
    <div className={styles.grid}>
      {FEATURED_RETREATS.map((retreat) => (
        <FeaturedRetreatCard
          key={retreat.id}
          retreat={retreat}
          locale={locale}
          bookNowLabel={t.experiences.featuredRetreats.bookNow}
        />
      ))}
    </div>
  )
}

