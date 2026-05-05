import type { Metadata } from 'next'

import { RetreatMistakesAuditPage, StructuredData } from '@/components/server'
import { SITE_CONFIG } from '@/constants/site'
import { AuditVariant } from '@/constants/tools'
import { AUDIT_VARIANTS } from '@/data/tools'
import { getServerTranslations } from '@/i18n'
import { getValidLocale } from '@/lib/locale'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import {
  generateBreadcrumbListSchema,
  generateFaqPageSchema,
  generateWebApplicationSchema,
} from '@/lib/structuredData'
import { Route } from '@/types/navigation'

interface PageProps {
  params: Promise<{ locale: string }>
}

const VARIANT = AuditVariant.YOGA
const ROUTE = Route.YOGA_RETREAT_MISTAKES_AUDIT

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const config = AUDIT_VARIANTS[VARIANT]
  return generatePageMetadata({
    title: config.copy.metaTitle[validLocale],
    description: config.copy.metaDescription[validLocale],
    path: ROUTE,
    locale: validLocale,
  })
}

export default async function YogaRetreatMistakesAuditRoute({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const config = AUDIT_VARIANTS[VARIANT]
  const url = `${SITE_CONFIG.url}${getLocalizedPath(ROUTE, validLocale)}`

  const schemas = [
    generateBreadcrumbListSchema([
      { name: 'Home', path: Route.HOME },
      { name: t.tools.hub.title, path: Route.TOOLS },
      { name: config.copy.heroTitle[validLocale], path: ROUTE },
    ]),
    generateWebApplicationSchema({
      name: config.copy.heroTitle[validLocale],
      url,
      description: config.copy.metaDescription[validLocale],
    }),
    generateFaqPageSchema(
      config.faq.map((e) => ({
        question: e.question[validLocale],
        answer: e.answer[validLocale],
      })),
    ),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <RetreatMistakesAuditPage variant={VARIANT} locale={validLocale} />
    </>
  )
}
