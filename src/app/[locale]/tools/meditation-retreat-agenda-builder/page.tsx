import type { Metadata } from 'next'

import { RetreatAgendaBuilderPage, StructuredData } from '@/components/server'
import { SITE_CONFIG } from '@/constants/site'
import { AgendaNiche } from '@/constants/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import {
  generateBreadcrumbListSchema,
  generateFaqPageSchema,
  generateHowToSchema,
  generateWebApplicationSchema,
} from '@/lib/structuredData'
import { Route } from '@/types/navigation'

interface PageProps {
  params: Promise<{ locale: string }>
}

const NICHE = AgendaNiche.MEDITATION
const ROUTE = Route.MEDITATION_RETREAT_AGENDA_BUILDER

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const nicheCopy = t.tools.agenda.niches[NICHE]
  return generatePageMetadata({
    title: nicheCopy.metaTitle,
    description: nicheCopy.metaDescription,
    path: ROUTE,
    locale: validLocale,
  })
}

export default async function MeditationRetreatAgendaBuilderRoute({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const nicheCopy = t.tools.agenda.niches[NICHE]
  const url = `${SITE_CONFIG.url}${getLocalizedPath(ROUTE, validLocale)}`
  const allFaqEntries = [
    ...nicheCopy.faqExtras,
    ...t.tools.agenda.faq.entries,
  ]

  const schemas = [
    generateBreadcrumbListSchema([
      { name: 'Home', path: Route.HOME },
      { name: t.tools.hub.title, path: Route.TOOLS },
      { name: nicheCopy.heroTitle, path: ROUTE },
    ]),
    generateWebApplicationSchema({
      name: nicheCopy.heroTitle,
      url,
      description: nicheCopy.metaDescription,
    }),
    generateHowToSchema({
      name: t.tools.agenda.howTo.heading,
      description: nicheCopy.heroIntro,
      steps: t.tools.agenda.howTo.steps,
    }),
    generateFaqPageSchema(allFaqEntries),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <RetreatAgendaBuilderPage niche={NICHE} locale={validLocale} t={t} />
    </>
  )
}
