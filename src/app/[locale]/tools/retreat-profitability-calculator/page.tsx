import type { Metadata } from 'next'

import { RetreatProfitabilityCalculator } from '@/components/client'
import { StructuredData, ToolPageShell, VenueCostExplainer } from '@/components/server'
import {
  generateBreadcrumbListSchema,
  generateFaqPageSchema,
  generateWebApplicationSchema,
} from '@/lib/structuredData'
import { CALCULATOR_VARIANTS, CALCULATOR_CONTENT } from '@/data/tools'
import { ToolVariant, TOOL_VARIANT_ROUTES } from '@/constants/tools'
import { Route } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { getValidLocale } from '@/lib/locale'
import { getServerTranslations } from '@/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

const VARIANT = ToolVariant.GENERIC
const ROUTE = Route.RETREAT_PROFITABILITY_CALCULATOR

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const config = CALCULATOR_VARIANTS[VARIANT]
  return generatePageMetadata({
    title: config.copy.metaTitle[validLocale],
    description: config.copy.metaDescription[validLocale],
    path: ROUTE,
    locale: validLocale,
  })
}

export default async function CanonicalCalculatorPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const config = CALCULATOR_VARIANTS[VARIANT]
  const content = CALCULATOR_CONTENT[VARIANT]

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
      content.faq.map((e) => ({
        question: e.question[validLocale],
        answer: e.answer[validLocale],
      })),
    ),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <ToolPageShell
        hero={{
          eyebrow: config.copy.heroEyebrow[validLocale],
          title: config.copy.heroTitle[validLocale],
          intro: config.copy.heroIntro[validLocale],
        }}
        tool={
          <RetreatProfitabilityCalculator
            variant={VARIANT}
            locale={validLocale}
            t={t}
          />
        }
        belowTool={
          <VenueCostExplainer
            heading={t.tools.calculator.venueExplainer.heading}
            paragraphs={[...t.tools.calculator.venueExplainer.paragraphs]}
            example={t.tools.calculator.venueExplainer.example}
          />
        }
        guideSections={content.guideSections.map((s) => ({
          heading: s.heading[validLocale],
          paragraphs: s.body.map((p) => p[validLocale]),
        }))}
        faqHeading={t.tools.faq.heading}
        faqEntries={content.faq.map((e) => ({
          question: e.question[validLocale],
          answer: e.answer[validLocale],
        }))}
        relatedHeading={t.tools.related.heading}
        relatedCards={config.relatedVariants.map((rv) => ({
          href: getLocalizedPath(TOOL_VARIANT_ROUTES[rv], validLocale),
          title: CALCULATOR_VARIANTS[rv].copy.heroTitle[validLocale],
        }))}
      />
    </>
  )
}
