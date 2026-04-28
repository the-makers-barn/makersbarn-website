'use client'

import { useEffect, useId, useState } from 'react'

import { CALCULATOR_INPUT_RANGES } from '@/constants/tools'
import { Language } from '@/types/common'
import type { CalculatorInputs, VariantConfig } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import { AdvancedDisclosure } from './AdvancedDisclosure'
import styles from './RetreatProfitabilityCalculator.module.css'

interface InputsPanelProps {
  inputs: CalculatorInputs
  variant: VariantConfig
  locale: Language
  t: Dictionary
  onChange: <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => void
  onReset: () => void
}

export function InputsPanel({ inputs, variant, locale, t, onChange, onReset }: InputsPanelProps) {
  const labels = t.tools.calculator.inputs
  const revenueHeadingId = useId()
  const costsHeadingId = useId()

  return (
    <div className={styles.inputsPanel}>
      <section className={`${styles.inputSection} ${styles.inputSectionRevenue}`} aria-labelledby={revenueHeadingId}>
        <header className={styles.inputSectionHeader}>
          <h3 id={revenueHeadingId} className={styles.inputSectionTitle}>{labels.revenueSectionLabel}</h3>
          <p className={styles.inputSectionDescription}>{labels.revenueSectionDescription}</p>
        </header>
        <SliderField
          label={labels.guestsLabel}
          value={inputs.guests}
          min={CALCULATOR_INPUT_RANGES.GUESTS_MIN}
          max={CALCULATOR_INPUT_RANGES.GUESTS_MAX}
          step={1}
          unitSuffix={labels.guestsUnit}
          onChange={(v) => onChange('guests', v)}
        />
        <SliderField
          label={labels.nightsLabel}
          value={inputs.nights}
          min={CALCULATOR_INPUT_RANGES.NIGHTS_MIN}
          max={CALCULATOR_INPUT_RANGES.NIGHTS_MAX}
          step={1}
          unitSuffix={labels.nightsUnit}
          onChange={(v) => onChange('nights', v)}
        />
        <SliderField
          label={labels.pricePerGuestLabel}
          value={inputs.pricePerGuest}
          min={CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MIN}
          max={CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MAX}
          step={50}
          unitPrefix="€"
          helper={variant.benchmarks.pricePerGuest[locale]}
          onChange={(v) => onChange('pricePerGuest', v)}
        />
      </section>

      <section className={`${styles.inputSection} ${styles.inputSectionCosts}`} aria-labelledby={costsHeadingId}>
        <header className={styles.inputSectionHeader}>
          <h3 id={costsHeadingId} className={styles.inputSectionTitle}>{labels.costsSectionLabel}</h3>
          <p className={styles.inputSectionDescription}>{labels.costsSectionDescription}</p>
        </header>
        <NumberField
          label={labels.venuePerNightLabel}
          value={inputs.venuePerNight}
          unitPrefix="€"
          unitSuffix={labels.venueUnit}
          helper={variant.benchmarks.venuePerNight[locale]}
          onChange={(v) => onChange('venuePerNight', v)}
        />
        <NumberField
          label={labels.foodPerGuestPerDayLabel}
          value={inputs.foodPerGuestPerDay}
          unitPrefix="€"
          unitSuffix={labels.foodUnit}
          helper={variant.benchmarks.foodPerGuestPerDay[locale]}
          onChange={(v) => onChange('foodPerGuestPerDay', v)}
        />
        <div className={styles.facilitatorBlock}>
          <div className={styles.hiresQuestion}>
            <span className={styles.hiresQuestionLabel}>{labels.hiresFacilitatorsQuestion}</span>
            <div className={styles.hiresToggle} role="group" aria-label={labels.hiresFacilitatorsQuestion}>
              <button
                type="button"
                aria-pressed={!inputs.hiresFacilitators}
                className={`${styles.hiresButton} ${!inputs.hiresFacilitators ? styles.hiresButtonActive : ''}`}
                onClick={() => onChange('hiresFacilitators', false)}
              >
                {labels.hiresFacilitatorsNo}
              </button>
              <button
                type="button"
                aria-pressed={inputs.hiresFacilitators}
                className={`${styles.hiresButton} ${inputs.hiresFacilitators ? styles.hiresButtonActive : ''}`}
                onClick={() => onChange('hiresFacilitators', true)}
              >
                {labels.hiresFacilitatorsYes}
              </button>
            </div>
          </div>
          {inputs.hiresFacilitators && (
            <NumberField
              label={labels.facilitatorFeeLabel}
              value={inputs.facilitatorFee}
              unitPrefix="€"
              helper={variant.benchmarks.facilitatorFee[locale]}
              onChange={(v) => onChange('facilitatorFee', v)}
            />
          )}
        </div>
        <NumberField
          label={labels.marketingAndOtherLabel}
          value={inputs.marketingAndOther}
          unitPrefix="€"
          helper={variant.benchmarks.marketingAndOther[locale]}
          onChange={(v) => onChange('marketingAndOther', v)}
        />

        <AdvancedDisclosure label={labels.advancedLabel}>
          <NumberField
            label={labels.travelLabel}
            value={inputs.travel}
            unitPrefix="€"
            onChange={(v) => onChange('travel', v)}
          />
          <NumberField
            label={labels.insuranceLabel}
            value={inputs.insurance}
            unitPrefix="€"
            onChange={(v) => onChange('insurance', v)}
          />
          <NumberField
            label={labels.paymentFeePercentLabel}
            value={inputs.paymentFeePercent}
            unitSuffix="%"
            step={0.1}
            onChange={(v) => onChange('paymentFeePercent', v)}
          />
          <NumberField
            label={labels.planningDaysLabel}
            value={inputs.planningDays}
            unitSuffix={labels.daysUnit}
            step={1}
            onChange={(v) => onChange('planningDays', v)}
          />
        </AdvancedDisclosure>
      </section>

      <button type="button" className={styles.resetButton} onClick={onReset}>
        {labels.resetLabel}
      </button>
    </div>
  )
}

interface SliderFieldProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  unitPrefix?: string
  unitSuffix?: string
  helper?: string
  onChange: (value: number) => void
}

function SliderField({ label, value, min, max, step, unitPrefix, unitSuffix, helper, onChange }: SliderFieldProps) {
  const id = useId()
  const valueText = `${unitPrefix ?? ''}${value.toLocaleString()}${unitSuffix ? ` ${unitSuffix}` : ''}`
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.fieldLabel}>
        <span>{label}</span>
        <span className={styles.fieldValue} aria-hidden>
          {unitPrefix}
          {value.toLocaleString()}
          {unitSuffix && ` ${unitSuffix}`}
        </span>
      </label>
      <input
        id={id}
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={valueText}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {helper && <p className={styles.fieldHelper}>{helper}</p>}
    </div>
  )
}

interface NumberFieldProps {
  label: string
  value: number
  unitPrefix?: string
  unitSuffix?: string
  step?: number
  helper?: string
  onChange: (value: number) => void
}

function NumberField({ label, value, unitPrefix, unitSuffix, step = 1, helper, onChange }: NumberFieldProps) {
  const id = useId()
  const [draft, setDraft] = useState<string>(String(value))

  useEffect(() => {
    setDraft(String(value))
  }, [value])

  const commit = () => {
    const parsed = parseFloat(draft)
    const next = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0
    if (next !== value) { onChange(next) }
    setDraft(String(next))
  }

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.fieldLabel}>
        <span>{label}</span>
      </label>
      <div className={styles.numberInputWrap}>
        {unitPrefix && <span className={styles.unitPrefix} aria-hidden>{unitPrefix}</span>}
        <input
          id={id}
          type="number"
          className={styles.numberInput}
          value={draft}
          step={step}
          min={0}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => commit()}
        />
        {unitSuffix && <span className={styles.unitSuffix} aria-hidden>{unitSuffix}</span>}
      </div>
      {helper && <p className={styles.fieldHelper}>{helper}</p>}
    </div>
  )
}
