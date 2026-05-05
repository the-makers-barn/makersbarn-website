import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefAtAGlance.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefAtAGlance({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })
  const displayNames = new Intl.DisplayNames([lang], { type: 'language' })

  const labels = dict.chef.sidebar.atAGlanceLabels
  const groupSize = dict.chef.headerMeta.guests
    .replace('{min}', String(chef.groupSize.min))
    .replace('{max}', String(chef.groupSize.max))
  const languages = listFormatter.format(
    chef.languagesSpoken.map((l) => displayNames.of(l) ?? l)
  )

  const rows: { label: string; value: string }[] = [
    { label: labels.groupSize, value: groupSize },
    { label: labels.languages, value: languages },
  ]
  if (chef.yearsExperience > 0) {
    rows.push({
      label: labels.experience,
      value: dict.chef.headerMeta.yearsCooking.replace('{years}', String(chef.yearsExperience)),
    })
  }
  rows.push(
    { label: labels.sourcing, value: localize(chef.atAGlance.sourcing, lang) },
    { label: labels.credentials, value: localize(chef.atAGlance.credentials, lang) },
  )
  if (chef.atAGlance.press) {
    rows.push({ label: labels.press, value: localize(chef.atAGlance.press, lang) })
  }

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.atAGlance}</h3>
      <dl className={styles.list}>
        {rows.map(({ label, value }) => (
          <div key={label} className={styles.row}>
            <dt className={styles.dt}>{label}</dt>
            <dd className={styles.dd}>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
