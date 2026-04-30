import { getServerTranslations } from '@/i18n/server'
import { NL_REGION_COORDINATES } from '@/constants/chef'
import type { Chef, Language } from '@/types'

import styles from './ChefOperatesIn.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefOperatesIn({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })

  const travelsLabel = chef.travelsNationwide
    ? dict.chef.sidebar.travelsNationwide
    : dict.chef.sidebar.travelsRegional

  const regionsLabel = listFormatter.format(
    chef.servesRegions.map((r) => dict.chef.enums.region[r])
  )
  const strongestLine = dict.chef.sidebar.strongestIn.replace('{regions}', regionsLabel)
  const homeBaseRegionLabel = dict.chef.enums.region[chef.homeBase.region]
  const dot = NL_REGION_COORDINATES[chef.homeBase.region]

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.operatesIn}</h3>
      <p className={styles.travels}>{travelsLabel}</p>
      <p className={styles.strongest}>{strongestLine}</p>
      <div className={styles.mapWrapper} aria-hidden="true">
        <svg viewBox="0 0 100 120" className={styles.map}>
          <path
            d="M30,10 L75,15 L80,30 L85,55 L75,85 L60,110 L40,108 L25,90 L20,60 L18,35 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle cx={dot.x} cy={dot.y} r={3} className={styles.dot} />
        </svg>
        <div className={styles.cityLabel}>
          <strong>{chef.homeBase.city}</strong>
          <span>{dict.chef.sidebar.homeBase} · {homeBaseRegionLabel}</span>
        </div>
      </div>
    </section>
  )
}
