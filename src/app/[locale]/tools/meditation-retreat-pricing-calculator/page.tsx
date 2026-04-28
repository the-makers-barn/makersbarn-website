import type { Metadata } from 'next'

import { RetreatProfitabilityCalculator } from '@/components/client'
import { StructuredData, ToolPageShell } from '@/components/server'
import {
  generateBreadcrumbListSchema,
  generateFaqPageSchema,
  generateHowToSchema,
  generateWebApplicationSchema,
} from '@/lib/structuredData'
import { CALCULATOR_VARIANTS, CALCULATOR_CONTENT } from '@/data/tools'
import { ToolVariant } from '@/constants/tools'
import { Route } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { getValidLocale } from '@/lib/locale'
import { getServerTranslations } from '@/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

const VARIANT = ToolVariant.MEDITATION
const ROUTE = Route.MEDITATION_RETREAT_PRICING_CALCULATOR

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

export default async function MeditationCalculatorPage({ params }: PageProps) {
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
    generateHowToSchema({
      name: t.tools.howTo.heading,
      description: config.copy.heroIntro[validLocale],
      steps: content.howToSteps.map((s) => s[validLocale]),
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
        variant={VARIANT}
        locale={validLocale}
        t={t}
        calculator={
          <RetreatProfitabilityCalculator
            variant={VARIANT}
            locale={validLocale}
            t={t}
          />
        }
      />
    </>
  )
}
