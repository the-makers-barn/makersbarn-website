'use client'

import { useMemo, type ReactNode } from 'react'

import {
  AgendaLength,
  AgendaNiche,
} from '@/constants/tools'
import { getAgendaPlan } from '@/data/tools'
import type { Dictionary } from '@/i18n/types'
import { resolveAgenda } from '@/lib/tools/agenda/resolve'
import { buildAgendaWarnings } from '@/lib/tools/agenda/validation'
import type { Language } from '@/types/common'

import { DayCard } from './DayCard'
import { EmailAgendaForm } from './EmailAgendaForm'
import { LengthSwitcher } from './LengthSwitcher'
import styles from './RetreatAgendaBuilder.module.css'
import { useAgendaState } from './useAgendaState'
import { WarningsPanel } from './WarningsPanel'

export interface RetreatAgendaBuilderProps {
  niche: AgendaNiche
  locale: Language
  t: Dictionary
}

export function RetreatAgendaBuilder(props: RetreatAgendaBuilderProps): ReactNode {
  const { niche, locale, t } = props
  const { state, hasHydrated, dispatch } = useAgendaState(niche)

  const plan = useMemo(() => getAgendaPlan(niche, state.length), [niche, state.length])
  const resolved = useMemo(
    () => resolveAgenda({ plan, state, locale }),
    [plan, state, locale],
  )
  const warnings = useMemo(
    () => buildAgendaWarnings(resolved.days, { niche }),
    [resolved.days, niche],
  )

  const handleLengthChange = (length: AgendaLength): void => {
    dispatch({ type: 'SET_LENGTH', length })
  }

  const handleReset = (): void => {
    if (!hasHydrated) {
      return
    }
    if (window.confirm(t.tools.agenda.reset.confirm)) {
      dispatch({ type: 'RESET' })
    }
  }

  const handlePrint = (): void => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <section className={styles.root} aria-label={t.tools.agenda.rootAriaLabel}>
      <LengthSwitcher
        current={state.length}
        onChange={handleLengthChange}
        disabled={!hasHydrated}
        t={t}
      />

      <WarningsPanel warnings={warnings} t={t} />

      <ol className={styles.dayList}>
        {resolved.days.map((day) => {
          const defaultDay = plan.days.find((d) => d.dayIndex === day.dayIndex)
          return (
            <DayCard
              key={day.dayIndex}
              day={day}
              defaultDay={defaultDay}
              state={state}
              disabled={!hasHydrated}
              dispatch={dispatch}
              locale={locale}
              t={t}
            />
          )
        })}
      </ol>

      <EmailAgendaForm state={state} disabled={!hasHydrated} t={t} />

      <div className={styles.footerRow}>
        <button
          type="button"
          className={styles.printButton}
          onClick={handlePrint}
          disabled={!hasHydrated}
        >
          {t.tools.agenda.print.button}
        </button>
        <button
          type="button"
          className={styles.resetButton}
          onClick={handleReset}
          disabled={!hasHydrated}
        >
          {t.tools.agenda.reset.button}
        </button>
      </div>
    </section>
  )
}
