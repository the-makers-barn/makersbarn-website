import { ChefStatus } from '@/constants/chef'
import { ChefGallery } from '@/components/client/ChefGallery'
import { ChefInquiryModal } from '@/components/client/ChefInquiryForm'
import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import { ChefAbout } from './ChefAbout'
import { ChefHeader } from './ChefHeader'
import { ChefSidebar } from './ChefSidebar'
import { ChefSignatureDishes } from './ChefSignatureDishes'
import { ChefStatStrip } from './ChefStatStrip'
import { ChefStructuredData } from './ChefStructuredData'
import { ChefTestimonials } from './ChefTestimonials'
import { DraftBadge } from './DraftBadge'
import { StickyMobileCta } from './StickyMobileCta'
import styles from './ChefDetailPage.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefDetailPage({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)

  return (
    <>
      {chef.status === ChefStatus.DRAFT && <DraftBadge lang={lang} />}
      <article className={styles.page}>
        <ChefHeader chef={chef} lang={lang} />
        <ChefStatStrip chef={chef} lang={lang} />
        <div className={styles.grid}>
          <main className={styles.main}>
            <ChefGallery gallery={chef.gallery} lang={lang} />
            <ChefAbout chef={chef} lang={lang} />
            <ChefSignatureDishes chef={chef} lang={lang} />
            <ChefTestimonials chef={chef} lang={lang} />
          </main>
          <ChefSidebar chef={chef} lang={lang} />
        </div>
      </article>
      <StickyMobileCta chef={chef} lang={lang} />
      <ChefInquiryModal chef={chef} lang={lang} inquiryDict={dict.chef.inquiry} />
      <ChefStructuredData chef={chef} lang={lang} />
    </>
  )
}
