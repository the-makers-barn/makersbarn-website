import { ChefStatus } from '@/constants/chef'
import { ChefGallery } from '@/components/client/ChefGallery'
import { ChefInquiryModal } from '@/components/client/ChefInquiryForm'
import { getServerTranslations } from '@/i18n/server'
import { getImageAltText } from '@/lib'
import type { Chef, Language } from '@/types'

import { ChefAbout } from './ChefAbout'
import { ChefHeader } from './ChefHeader'
import { ChefSidebar } from './ChefSidebar'
import { ChefSignatureDishes } from './ChefSignatureDishes'
import { ChefStatStrip } from './ChefStatStrip'
import { ChefStickyHeader } from './ChefStickyHeader'
import { ChefStructuredData } from './ChefStructuredData'
import { ChefTestimonials } from './ChefTestimonials'
import { DraftBadge } from './DraftBadge'
import { StickyMobileCta } from './StickyMobileCta'
import styles from './ChefDetailPage.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefDetailPage({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const firstName = chef.name.split(' ')[0] ?? chef.name
  const ctaLabel = dict.chef.cta.sendInquiry.replace('{name}', firstName)

  return (
    <>
      {chef.status === ChefStatus.DRAFT && <DraftBadge lang={lang} />}
      <ChefStickyHeader
        chefName={chef.name}
        avatarSrc={chef.avatar.src}
        avatarAlt={getImageAltText(chef.avatar.altKey, lang)}
        ctaLabel={ctaLabel}
        inquiryHref="#chef-inquiry"
      />
      <article className={styles.page}>
        <ChefHeader chef={chef} lang={lang} />
        <ChefStatStrip chef={chef} lang={lang} />
        <div className={styles.grid}>
          <main className={styles.main}>
            {chef.gallery.supporting.length > 0 && (
              <section className={styles.gallerySection} aria-labelledby="chef-gallery-label">
                <h2 id="chef-gallery-label" className={styles.sectionLabel}>
                  {dict.chef.galleryLabel}
                </h2>
                <ChefGallery gallery={chef.gallery} lang={lang} />
              </section>
            )}
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
