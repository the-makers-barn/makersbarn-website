'use client'

import { useMemo, type ReactNode } from 'react'

import {
  CALENDAR_LEAD_SOURCES,
  CalendarPhaseId,
  TimelinePreset,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import { resolvePhases } from '@/lib/tools/calendar/presets'
import { Language } from '@/types/common'
import { Route } from '@/types/navigation'
import type { CalendarContent } from '@/types/tools'

import { EmailPlanForm } from './EmailPlanForm'
import { InlinePhaseCta } from './InlinePhaseCta'
import { PhaseCard } from './PhaseCard'
import { PresetSwitcher } from './PresetSwitcher'
import styles from './RetreatLaunchCalendar.module.css'
import { useCalendarState } from './useCalendarState'

export interface RetreatLaunchCalendarProps {
  preset: TimelinePreset
  content: CalendarContent
  locale: Language
  t: Dictionary
}

const ROOT_ARIA_LABEL = 'Retreat launch calendar'

function buildHostHref(
  locale: Language,
  src: typeof CALENDAR_LEAD_SOURCES[keyof typeof CALENDAR_LEAD_SOURCES],
): string {
  const base = getLocalizedPath(Route.HOST_A_RETREAT, locale)
  return `${base}?src=${src}`
}

function inlineCtaForPhase(
  phaseId: CalendarPhaseId,
  locale: Language,
  t: Dictionary,
): ReactNode {
  if (phaseId === CalendarPhaseId.ANCHOR) {
    return (
      <InlinePhaseCta
        title={t.tools.calendar.inlineCta.anchorTitle}
        body={t.tools.calendar.inlineCta.anchorBody}
        linkLabel={t.tools.calendar.inlineCta.anchorLink}
        linkHref={buildHostHref(locale, CALENDAR_LEAD_SOURCES.PHASE_ANCHOR_CTA)}
      />
    )
  }
  if (phaseId === CalendarPhaseId.POST_RETREAT) {
    return (
      <InlinePhaseCta
        title={t.tools.calendar.inlineCta.postRetreatTitle}
        body={t.tools.calendar.inlineCta.postRetreatBody}
        linkLabel={t.tools.calendar.inlineCta.postRetreatLink}
        linkHref={buildHostHref(locale, CALENDAR_LEAD_SOURCES.PHASE_POST_RETREAT_CTA)}
      />
    )
  }
  return null
}

export function RetreatLaunchCalendar(props: RetreatLaunchCalendarProps): ReactNode {
  const { preset, content, locale, t } = props
  const { state, hasHydrated, dispatch } = useCalendarState()
  const phases = useMemo(() => resolvePhases(content, preset), [content, preset])
  const override = content.overrides[preset]
  const impactSubtitle = override?.impactSubtitle[locale]

  const handleReset = (): void => {
    if (!hasHydrated) {
      return
    }
    if (window.confirm(t.tools.calendar.reset.confirm)) {
      dispatch({ type: 'RESET' })
    }
  }

  return (
    <section className={styles.root} aria-label={ROOT_ARIA_LABEL}>
      <PresetSwitcher currentPreset={preset} locale={locale} t={t} />
      {impactSubtitle && (
        <p
          className={styles.impactSubtitle}
          role="note"
          aria-label={t.tools.calendar.impactSubtitleAria}
        >
          {impactSubtitle}
        </p>
      )}
      <ol className={styles.phaseList}>
        {phases.map((phase) => (
          <li key={phase.id} className={styles.phaseListItem}>
            <PhaseCard
              phase={phase}
              state={state}
              customItemsForPhase={state.customItems.filter(
                (c) => c.phaseId === phase.id,
              )}
              locale={locale}
              t={t}
              disabled={!hasHydrated}
              dispatch={dispatch}
              inlineCta={inlineCtaForPhase(phase.id, locale, t)}
            />
          </li>
        ))}
      </ol>
      <EmailPlanForm
        preset={preset}
        locale={locale}
        t={t}
        state={state}
        disabled={!hasHydrated}
      />
      <div className={styles.resetRow}>
        <button
          type="button"
          className={styles.resetButton}
          disabled={!hasHydrated}
          onClick={handleReset}
        >
          {t.tools.calendar.reset.button}
        </button>
      </div>
    </section>
  )
}
