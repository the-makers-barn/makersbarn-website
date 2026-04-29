'use client'

import { formatEuro, formatPercent } from '@/lib/tools'
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import { CostBreakdownBar } from './CostBreakdownBar'
import styles from './RetreatProfitabilityCalculator.module.css'

interface ResultsPanelProps {
  inputs: CalculatorInputs
  results: CalculatorResults
  t: Dictionary
}

function fillTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_match: string, key: string) => vars[key] ?? `{${key}}`)
}

export function ResultsPanel({ inputs, results, t }: ResultsPanelProps) {
  const labels = t.tools.calculator.results
  const isProfit = results.netProfit >= 0
  const showVatStripping = inputs.pricesIncludeVat && inputs.vatPercent > 0
  const grossPricePerGuest = showVatStripping
    ? inputs.pricePerGuest
    : inputs.pricePerGuest * (1 + inputs.vatPercent / 100)

  const narrative = fillTemplate(labels.headlineSentence, {
    price: formatEuro(grossPricePerGuest),
    guests: String(inputs.guests),
    profit: formatEuro(results.netProfit),
    margin: formatPercent(results.profitMargin),
  })

  const breakeven = Number.isFinite(results.breakevenGuests)
    ? fillTemplate(labels.breakevenSentence, {
        guests: String(results.breakevenGuests),
        price: formatEuro(grossPricePerGuest),
      })
    : labels.breakevenImpossible

  const vatNotice = showVatStripping
    ? fillTemplate(labels.vatNoticeNet, { percent: String(inputs.vatPercent) })
    : labels.vatNoticeGross

  return (
    <div className={styles.resultsPanel} aria-live="polite" aria-atomic="false">
      <p className={styles.resultsKicker}>
        {labels.kicker}
        <span className={styles.vatBadge}>{vatNotice}</span>
      </p>
      <p className={`${styles.headline} ${isProfit ? styles.headlineProfit : styles.headlineLoss}`}>
        {formatEuro(results.netProfit)}
      </p>
      <p className={styles.narrative}>{narrative}</p>
      {showVatStripping && (
        <p className={styles.fieldHelper}>
          {fillTemplate(labels.vatGrossHint, {
            gross: formatEuro(inputs.pricePerGuest),
            net: formatEuro(inputs.pricePerGuest / (1 + inputs.vatPercent / 100)),
            percent: String(inputs.vatPercent),
          })}
        </p>
      )}

      <dl className={styles.metricsGrid} aria-label={labels.metricsLabel}>
        <div className={styles.metric}>
          <dt>{labels.totalRevenue}</dt>
          <dd>{formatEuro(results.totalRevenue)}</dd>
        </div>
        <div className={styles.metric}>
          <dt>{labels.totalCosts}</dt>
          <dd>{formatEuro(results.totalCosts)}</dd>
        </div>
        <div className={styles.metric}>
          <dt>{labels.profitMargin}</dt>
          <dd>{formatPercent(results.profitMargin)}</dd>
        </div>
        <div className={styles.metric}>
          <dt>{labels.profitPerWorkday}</dt>
          <dd>{formatEuro(results.profitPerWorkday)}</dd>
        </div>
      </dl>

      <p className={styles.breakeven}>{breakeven}</p>

      <CostBreakdownBar results={results} t={t} />
    </div>
  )
}
