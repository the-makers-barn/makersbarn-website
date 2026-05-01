import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import { ChefGrid } from './ChefGrid'
import { ChefsContentSection } from './ChefsContentSection'
import { ChefsDualCta } from './ChefsDualCta'
import { ChefsFactsStrip } from './ChefsFactsStrip'
import { ChefsFaq } from './ChefsFaq'
import { ChefsHero } from './ChefsHero'
import { ChefsIntro } from './ChefsIntro'
import { ChefsStructuredData } from './ChefsStructuredData'
import styles from './ChefsListingPage.module.css'

interface Props {
  /** Chefs to render in the grid. Drafts visible in non-prod. */
  chefs: readonly Chef[]
  /** Published-only subset for ItemList JSON-LD. Never includes drafts. */
  publishedChefs: readonly Chef[]
  lang: Language
}

export async function ChefsListingPage({ chefs, publishedChefs, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const sections = dict.chefsListing.sections
  return (
    <>
      <ChefsStructuredData lang={lang} publishedChefs={publishedChefs} />
      <main className={styles.page}>
        <ChefsHero lang={lang} />
        <ChefsIntro lang={lang} />
        <ChefsContentSection h2={sections.whatToLookFor.h2} paragraphs={sections.whatToLookFor.paragraphs} />
        <ChefsContentSection h2={sections.pricing.h2} paragraphs={sections.pricing.paragraphs} />
        <ChefsContentSection h2={sections.coverage.h2} paragraphs={sections.coverage.paragraphs} />
        <ChefGrid chefs={chefs} lang={lang} />
        <ChefsFactsStrip lang={lang} />
        <ChefsFaq lang={lang} />
        <ChefsDualCta lang={lang} />
      </main>
    </>
  )
}
