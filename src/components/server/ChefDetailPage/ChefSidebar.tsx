import type { Chef, Language } from '@/types'

import { ChefAtAGlance } from './ChefAtAGlance'
import { ChefOperatesIn } from './ChefOperatesIn'
import { ChefPastRetreats } from './ChefPastRetreats'
import styles from './ChefSidebar.module.css'

type Props = { chef: Chef; lang: Language }

export function ChefSidebar({ chef, lang }: Props) {
  return (
    <aside className={styles.sidebar}>
      <ChefOperatesIn chef={chef} lang={lang} />
      <ChefAtAGlance chef={chef} lang={lang} />
      <ChefPastRetreats chef={chef} lang={lang} />
    </aside>
  )
}
