'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { track } from '@vercel/analytics'

import { AnalyticsEvent } from '@/constants/analytics'
import {
  MAKERSBARN_CTA_QUERY_PARAM,
  MAKERSBARN_CTA_QUERY_VALUE_PREFIX,
  ToolVariant,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import { Language, Route } from '@/types'
import type { VariantConfig } from '@/types/tools'
import { CALCULATOR_VARIANTS } from '@/data/tools'

import { EmailCapture } from './EmailCapture'
import { InputsPanel } from './InputsPanel'
import { ResultsPanel } from './ResultsPanel'
import { ShareLink } from './ShareLink'
import { useCalculator } from './useCalculator'
import styles from './RetreatProfitabilityCalculator.module.css'

interface RetreatProfitabilityCalculatorProps {
  variant: ToolVariant
  locale: Language
  t: Dictionary
}

export function RetreatProfitabilityCalculator({
  variant,
  locale,
  t,
}: RetreatProfitabilityCalculatorProps) {
  const config: VariantConfig = CALCULATOR_VARIANTS[variant]
  const { inputs, results, setInput, reset } = useCalculator(config.defaults)

  useEffect(() => {
    track(AnalyticsEvent.CALCULATOR_LOADED, { variant })
  }, [variant])

  const contactPath = getLocalizedPath(Route.CONTACT, locale)
  const ctaHref = `${contactPath}?${MAKERSBARN_CTA_QUERY_PARAM}=${MAKERSBARN_CTA_QUERY_VALUE_PREFIX}${variant}#booking`
  const ctaLabels = t.tools.calculator.makersbarnCta

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <InputsPanel
          inputs={inputs}
          variant={config}
          locale={locale}
          t={t}
          onChange={setInput}
          onReset={reset}
        />
        <ResultsPanel inputs={inputs} results={results} t={t} />
      </div>

      <div className={styles.afterCalculator}>
        <div className={styles.actionsRow}>
          <ShareLink variant={variant} t={t} />
        </div>

        <EmailCapture
          variant={variant}
          locale={locale}
          inputs={inputs}
          results={results}
          t={t}
        />

        <div className={styles.makersbarnCta}>
          <p className={styles.makersbarnCtaTitle}>{ctaLabels.title}</p>
          <p className={styles.makersbarnCtaBody}>{ctaLabels.body}</p>
          <Link
            href={ctaHref}
            className={styles.makersbarnCtaLink}
            onClick={() =>
              track(AnalyticsEvent.CALCULATOR_MAKERSBARN_CTA_CLICKED, {
                variant,
                source: typeof window !== 'undefined' ? window.location.pathname : '',
              })
            }
          >
            {ctaLabels.linkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
