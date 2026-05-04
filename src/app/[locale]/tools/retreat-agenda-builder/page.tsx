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

const NICHE = AgendaNiche.GENERIC
const ROUTE = Route.RETREAT_AGENDA_BUILDER
const NICHE_LABEL_PLACEHOLDER = '{nicheLabel}'

const interpolate = (template: string, nicheLabel: string): string =>
  template.replaceAll(NICHE_LABEL_PLACEHOLDER, nicheLabel)

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const nicheLabel = t.tools.agenda.nicheLabels[NICHE]
  return generatePageMetadata({
    title: interpolate(t.tools.agenda.metaTitle, nicheLabel),
    description: interpolate(t.tools.agenda.metaDescription, nicheLabel),
    path: ROUTE,
    locale: validLocale,
  })
}

export default async function RetreatAgendaBuilderRoute({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const nicheLabel = t.tools.agenda.nicheLabels[NICHE]
  const url = `${SITE_CONFIG.url}${getLocalizedPath(ROUTE, validLocale)}`
  const heroTitle = interpolate(t.tools.agenda.heroTitle, nicheLabel)

  const schemas = [
    generateBreadcrumbListSchema([
      { name: 'Home', path: Route.HOME },
      { name: t.tools.hub.title, path: Route.TOOLS },
      { name: heroTitle, path: ROUTE },
    ]),
    generateWebApplicationSchema({
      name: heroTitle,
      url,
      description: interpolate(t.tools.agenda.metaDescription, nicheLabel),
    }),
    generateHowToSchema({
      name: t.tools.agenda.howTo.heading,
      description: interpolate(t.tools.agenda.heroIntro, nicheLabel),
      steps: t.tools.agenda.howTo.steps,
    }),
    generateFaqPageSchema(t.tools.agenda.faq.entries),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <RetreatAgendaBuilderPage niche={NICHE} locale={validLocale} t={t} />
    </>
  )
}
