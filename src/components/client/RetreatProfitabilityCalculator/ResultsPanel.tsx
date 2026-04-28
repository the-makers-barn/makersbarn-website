'use client'

import type { CalculatorInputs, CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import { CostBreakdownBar } from './CostBreakdownBar'
import styles from './RetreatProfitabilityCalculator.module.css'

interface ResultsPanelProps {
  inputs: CalculatorInputs
  results: CalculatorResults
  t: Dictionary
}

const formatEuro = (n: number): string => `€${Math.round(n).toLocaleString()}`
const formatPercent = (n: number): string => `${Math.round(n * 100)}%`

export function ResultsPanel({ inputs, results, t }: ResultsPanelProps) {
  const labels = t.tools.calculator.results
  const isProfit = results.netProfit >= 0
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? labels.breakevenSentence
        .replace('{guests}', String(results.breakevenGuests))
        .replace('{price}', formatEuro(inputs.pricePerGuest))
    : labels.breakevenImpossible

  const narrative = labels.headlineSentence
    .replace('{price}', formatEuro(inputs.pricePerGuest))
    .replace('{guests}', String(inputs.guests))
    .replace('{profit}', formatEuro(results.netProfit))
    .replace('{margin}', formatPercent(results.profitMargin))

  return (
    <div className={styles.resultsPanel}>
      <p className={styles.resultsKicker}>{labels.kicker}</p>
      <p className={`${styles.headline} ${isProfit ? styles.headlineProfit : styles.headlineLoss}`}>
        {formatEuro(results.netProfit)}
      </p>
      <p className={styles.narrative}>{narrative}</p>

      <div className={styles.takeHome}>
        <p className={styles.takeHomeLabel}>{labels.yourTakeHome}</p>
        <p className={styles.takeHomeValue}>{formatEuro(results.yourTakeHome)}</p>
        <p className={styles.takeHomeNote}>{labels.yourTakeHomeNote}</p>
      </div>

      <dl className={styles.metricsGrid}>
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
