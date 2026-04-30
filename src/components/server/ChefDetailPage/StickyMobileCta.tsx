import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import styles from './StickyMobileCta.module.css'

type Props = { chef: Chef; lang: Language }

export async function StickyMobileCta({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const firstName = chef.name.split(' ')[0] ?? chef.name
  const ctaLabel = dict.chef.cta.sendInquiry.replace('{name}', firstName)
  return (
    <div className={styles.bar}>
      <a href="#chef-inquiry" className={styles.button}>
        {ctaLabel}
      </a>
    </div>
  )
}
