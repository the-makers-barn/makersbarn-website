'use client'

import { CALCULATOR_INPUT_RANGES, RetreatRole } from '@/constants/tools'
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

  return (
    <div className={styles.inputsPanel}>
      <fieldset className={styles.roleSelector}>
        <legend className={styles.roleLegend}>{labels.roleQuestion}</legend>
        <div className={styles.roleOptions}>
          <RoleOption
            value={RetreatRole.SOLO}
            current={inputs.role}
            label={labels.roleSolo}
            description={labels.roleSoloDescription}
            onSelect={() => onChange('role', RetreatRole.SOLO)}
          />
          <RoleOption
            value={RetreatRole.CO_LED}
            current={inputs.role}
            label={labels.roleCoLed}
            description={labels.roleCoLedDescription}
            onSelect={() => onChange('role', RetreatRole.CO_LED)}
          />
          <RoleOption
            value={RetreatRole.ORGANIZER_ONLY}
            current={inputs.role}
            label={labels.roleOrganizerOnly}
            description={labels.roleOrganizerOnlyDescription}
            onSelect={() => onChange('role', RetreatRole.ORGANIZER_ONLY)}
          />
        </div>
      </fieldset>

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
      {inputs.role !== RetreatRole.SOLO && (
        <NumberField
          label={labels.facilitatorFeeLabel}
          value={inputs.facilitatorFee}
          unitPrefix="€"
          helper={variant.benchmarks.facilitatorFee[locale]}
          onChange={(v) => onChange('facilitatorFee', v)}
        />
      )}
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
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>
        <span>{label}</span>
        <span className={styles.fieldValue}>
          {unitPrefix}
          {value.toLocaleString()}
          {unitSuffix && ` ${unitSuffix}`}
        </span>
      </label>
      <input
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={step}
        value={value}
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
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>
        <span>{label}</span>
      </label>
      <div className={styles.numberInputWrap}>
        {unitPrefix && <span className={styles.unitPrefix}>{unitPrefix}</span>}
        <input
          type="number"
          className={styles.numberInput}
          value={value}
          step={step}
          min={0}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
        />
        {unitSuffix && <span className={styles.unitSuffix}>{unitSuffix}</span>}
      </div>
      {helper && <p className={styles.fieldHelper}>{helper}</p>}
    </div>
  )
}

interface RoleOptionProps {
  value: RetreatRole
  current: RetreatRole
  label: string
  description: string
  onSelect: () => void
}

function RoleOption({ value, current, label, description, onSelect }: RoleOptionProps) {
  const active = value === current
  return (
    <button
      type="button"
      className={`${styles.roleOption} ${active ? styles.roleOptionActive : ''}`}
      onClick={onSelect}
      aria-pressed={active}
    >
      <span className={styles.roleOptionLabel}>{label}</span>
      <span className={styles.roleOptionDescription}>{description}</span>
    </button>
  )
}
