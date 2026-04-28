'use client'

import type { CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatProfitabilityCalculator.module.css'

interface CostBreakdownBarProps {
  results: CalculatorResults
  t: Dictionary
}

export function CostBreakdownBar({ results, t }: CostBreakdownBarProps) {
  const labels = t.tools.calculator.results.breakdownLabels
  const total = Math.max(results.totalRevenue, 1) // avoid div-by-zero
  const segments = [
    { key: 'venue', label: labels.venue, value: results.costBreakdown.venueAccommodation, color: 'var(--bar-venue)' },
    { key: 'food', label: labels.food, value: results.costBreakdown.food, color: 'var(--bar-food)' },
    { key: 'facilitator', label: labels.facilitator, value: results.costBreakdown.facilitatorFee, color: 'var(--bar-facilitator)' },
    { key: 'marketing', label: labels.marketing, value: results.costBreakdown.marketingAndOther, color: 'var(--bar-marketing)' },
    { key: 'travel', label: labels.travel, value: results.costBreakdown.travel, color: 'var(--bar-travel)' },
    { key: 'insurance', label: labels.insurance, value: results.costBreakdown.insurance, color: 'var(--bar-insurance)' },
    { key: 'fees', label: labels.fees, value: results.costBreakdown.paymentFees, color: 'var(--bar-fees)' },
  ].filter((s) => s.value > 0)

  const profitWidth = Math.max(0, (results.netProfit / total) * 100)

  return (
    <div className={styles.breakdownBar} role="img" aria-label={labels.barAriaLabel}>
      <div className={styles.bar}>
        {segments.map((seg) => (
          <div
            key={seg.key}
            className={styles.barSegment}
            style={{ width: `${(seg.value / total) * 100}%`, background: seg.color }}
            title={`${seg.label}: €${Math.round(seg.value).toLocaleString()}`}
          />
        ))}
        {results.netProfit > 0 && (
          <div
            className={styles.barProfitSegment}
            style={{ width: `${profitWidth}%` }}
            title={`${labels.profit}: €${Math.round(results.netProfit).toLocaleString()}`}
          />
        )}
      </div>
      <ul className={styles.barLegend}>
        {segments.map((seg) => (
          <li key={seg.key} className={styles.barLegendItem}>
            <span className={styles.barLegendSwatch} style={{ background: seg.color }} aria-hidden />
            <span>{seg.label}</span>
            <span className={styles.barLegendValue}>€{Math.round(seg.value).toLocaleString()}</span>
          </li>
        ))}
        {results.netProfit > 0 && (
          <li className={styles.barLegendItem}>
            <span className={styles.barLegendSwatch} style={{ background: 'var(--bar-profit)' }} aria-hidden />
            <span>{labels.profit}</span>
            <span className={styles.barLegendValue}>€{Math.round(results.netProfit).toLocaleString()}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
