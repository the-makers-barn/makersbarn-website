import { ExternalLinkIcon } from '@/components/client'
import type { CabinDetailTranslations } from '@/i18n/types'
import type { CabinRating, CabinReview, ExternalLink, Language } from '@/types'

import {
  formatReadAllReviews,
  formatReviewDate,
  formatReviewScore,
  formatTranslationNote,
} from './cabinFormat'
import styles from './CabinReviews.module.css'

interface CabinReviewsProps {
  reviews: readonly CabinReview[]
  rating?: CabinRating
  bookingLinks: readonly ExternalLink[]
  copy: CabinDetailTranslations
  locale: Language
}

export function CabinReviews({ reviews, rating, bookingLinks, copy, locale }: CabinReviewsProps) {
  const ratingLink = rating && bookingLinks.find((link) => link.platform === rating.platform)

  return (
    <>
      <ul className={styles.list}>
        {reviews.map((review) => {
          const translationNote = formatTranslationNote(review, copy, locale)

          return (
            <li key={review.id} className={styles.review}>
              <div className={styles.header}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.author.charAt(0)}
                </span>
                <div>
                  <p className={styles.author}>{review.author}</p>
                  <p className={styles.date}>
                    <time dateTime={review.date}>{formatReviewDate(review.date, locale)}</time>
                  </p>
                </div>
                <span className={styles.score}>{formatReviewScore(review, copy)}</span>
              </div>
              <blockquote className={styles.quote}>
                <p>{review.text[locale]}</p>
              </blockquote>
              {translationNote && <p className={styles.translated}>{translationNote}</p>}
            </li>
          )
        })}
      </ul>

      {rating && ratingLink && (
        <a
          href={ratingLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readAll}
        >
          {formatReadAllReviews(rating, copy)}
          <ExternalLinkIcon />
        </a>
      )}
    </>
  )
}
