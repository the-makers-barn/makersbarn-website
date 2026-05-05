import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import { PriceTier } from '@/constants/chef'
import type { Chef, Language } from '@/types'

import styles from './ChefStatStrip.module.css'

type Props = { chef: Chef; lang: Language }

const TIER_TO_DOTS: Record<PriceTier, number> = {
  [PriceTier.BUDGET]: 1,
  [PriceTier.STANDARD]: 2,
  [PriceTier.PREMIUM]: 3,
}
const TOTAL_TIER_DOTS = 3

export async function ChefStatStrip({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })
  const currencyFormatter = new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

  const rightForLabels = chef.rightFor.map((r) => dict.chef.enums.retreatType[r])
  const cuisineLabels = chef.cuisineStyles.map((c) => localize(c, lang))
  const dietaryLabels = chef.dietaryCapabilities.map((d) => dict.chef.enums.dietary[d])

  const filledDots = TIER_TO_DOTS[chef.dayRate.tier]
  const tierWordLabel = dict.chef.statStrip.tierLabel[chef.dayRate.tier]

  return (
    <dl className={styles.strip}>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.rightFor}</dt>
        <dd className={styles.value}>{listFormatter.format(rightForLabels)}</dd>
      </div>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.cooks}</dt>
        <dd className={styles.value}>{listFormatter.format(cuisineLabels)}</dd>
      </div>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.accommodates}</dt>
        <dd className={styles.value}>{listFormatter.format(dietaryLabels)}</dd>
      </div>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.dayRate}</dt>
        <dd className={styles.dayRate}>
          <span className={styles.dayRateAmount}>{currencyFormatter.format(chef.dayRate.amountEur)}</span>
          <span className={styles.dayRateUnit}>{dict.chef.statStrip.dayRateUnit}</span>
          <span className={styles.dayRateExBtw}>{dict.chef.statStrip.dayRateExBtw}</span>
          <span className={styles.tier} aria-label={dict.chef.statStrip.tierAriaLabel.replace('{tier}', tierWordLabel)}>
            {Array.from({ length: TOTAL_TIER_DOTS }).map((_, i) => (
              <span
                key={i}
                className={i < filledDots ? styles.tierDotFilled : styles.tierDotEmpty}
                aria-hidden="true"
              >
                €
              </span>
            ))}{' '}
            — {tierWordLabel}
          </span>
        </dd>
      </div>
    </dl>
  )
}
