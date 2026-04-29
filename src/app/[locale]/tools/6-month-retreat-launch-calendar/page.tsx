import type { Metadata } from 'next'

import { RetreatLaunchCalendarPage, StructuredData } from '@/components/server'
import { SITE_CONFIG } from '@/constants/site'
import { TimelinePreset } from '@/constants/tools'
import { CALENDAR_CONTENT } from '@/data/tools'
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

const PRESET = TimelinePreset.SIX_MONTHS
const ROUTE = Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR
const MONTHS_PLACEHOLDER = '{months}'

const interpolate = (template: string, months: string): string =>
  template.replaceAll(MONTHS_PLACEHOLDER, months)

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const months = String(PRESET)
  return generatePageMetadata({
    title: interpolate(t.tools.calendar.metaTitle, months),
    description: interpolate(t.tools.calendar.metaDescription, months),
    path: ROUTE,
    locale: validLocale,
  })
}

export default async function SixMonthCalendarPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const months = String(PRESET)
  const url = `${SITE_CONFIG.url}${getLocalizedPath(ROUTE, validLocale)}`
  const heroTitle = interpolate(t.tools.calendar.heroTitle, months)

  const schemas = [
    generateBreadcrumbListSchema([
      { name: 'Home', path: Route.HOME },
      { name: t.tools.hub.title, path: Route.TOOLS },
      { name: heroTitle, path: ROUTE },
    ]),
    generateWebApplicationSchema({
      name: heroTitle,
      url,
      description: interpolate(t.tools.calendar.metaDescription, months),
    }),
    generateHowToSchema({
      name: t.tools.calendar.howTo.heading,
      description: interpolate(t.tools.calendar.heroIntro, months),
      steps: t.tools.calendar.howTo.steps,
    }),
    generateFaqPageSchema(t.tools.calendar.faq.entries),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <RetreatLaunchCalendarPage
        preset={PRESET}
        content={CALENDAR_CONTENT}
        locale={validLocale}
        t={t}
      />
    </>
  )
}
