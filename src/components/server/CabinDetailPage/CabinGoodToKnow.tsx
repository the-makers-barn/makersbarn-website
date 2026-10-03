import type { CabinDetailTranslations } from '@/i18n/types'
import type { CabinStayDetails } from '@/types'

import { formatStayRules } from './cabinFormat'
import styles from './CabinDetailPage.module.css'

interface CabinGoodToKnowProps {
  stay: CabinStayDetails
  notes: readonly string[]
  copy: CabinDetailTranslations
}

export function CabinGoodToKnow({ stay, notes, copy }: CabinGoodToKnowProps) {
  return (
    <>
      <dl className={styles.rules}>
        {formatStayRules(stay, copy).map((rule) => (
          <div key={rule.label} className={styles.rule}>
            <dt className={styles.ruleLabel}>{rule.label}</dt>
            <dd className={styles.ruleValue}>{rule.value}</dd>
          </div>
        ))}
      </dl>
      <ul className={styles.locationList}>
        {[copy.goodToKnow.contactless, ...notes].map((note) => (
          <li key={note} className={styles.locationItem}>
            {note}
          </li>
        ))}
      </ul>
    </>
  )
}
