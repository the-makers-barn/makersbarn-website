'use client'

import type { Dispatch, ReactNode } from 'react'

import { MilestoneStatus, type CalendarPhaseId } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import type { CalendarAction } from '@/lib/tools/calendar/state'
import { Language } from '@/types/common'
import type { CalendarPhase, CalendarState, CustomMilestone } from '@/types/tools'

import { CustomItemInput } from './CustomItemInput'
import { CustomItemRow } from './CustomItemRow'
import { MilestoneItem } from './MilestoneItem'
import styles from './RetreatLaunchCalendar.module.css'

export interface PhaseCardProps {
  phase: CalendarPhase
  state: CalendarState
  customItemsForPhase: CustomMilestone[]
  locale: Language
  t: Dictionary
  disabled: boolean
  dispatch: Dispatch<CalendarAction>
  inlineCta?: ReactNode
}

function resolveStatus(
  state: CalendarState,
  milestoneId: string,
): MilestoneStatus {
  return state.itemStates[milestoneId] ?? MilestoneStatus.PENDING
}

function countCustomItemsInPhase(
  customItems: CustomMilestone[],
  phaseId: CalendarPhaseId,
): number {
  return customItems.filter((c) => c.phaseId === phaseId).length
}

export function PhaseCard(props: PhaseCardProps): ReactNode {
  const {
    phase,
    state,
    customItemsForPhase,
    locale,
    t,
    disabled,
    dispatch,
    inlineCta,
  } = props
  const milestoneLabels = t.tools.calendar.milestoneItem
  const customLabels = {
    remove: t.tools.calendar.customItem.remove,
    dismiss: milestoneLabels.dismiss,
    restore: milestoneLabels.restore,
    markDone: milestoneLabels.markDone,
    markPending: milestoneLabels.markPending,
  }

  return (
    <article className={styles.phaseCard}>
      <div className={styles.phaseRail} aria-hidden="true">
        <span className={styles.phaseRailRange}>{phase.range[locale]}</span>
      </div>
      <div className={styles.phaseContent}>
        <span className={styles.phaseEyebrow}>{phase.eyebrow[locale]}</span>
        <h3 className={styles.phaseTitle}>{phase.title[locale]}</h3>
        <ul className={styles.milestoneList}>
          {phase.milestones.map((milestone) => (
            <MilestoneItem
              key={milestone.id}
              text={milestone.text[locale]}
              status={resolveStatus(state, milestone.id)}
              labels={milestoneLabels}
              disabled={disabled}
              onToggleDone={() =>
                dispatch({ type: 'TOGGLE_DONE', milestoneId: milestone.id })
              }
              onToggleDismissed={() =>
                dispatch({ type: 'TOGGLE_DISMISSED', milestoneId: milestone.id })
              }
            />
          ))}
        </ul>
        {customItemsForPhase.length > 0 && (
          <ul className={styles.customItemList}>
            {customItemsForPhase.map((item) => (
              <CustomItemRow
                key={item.id}
                item={item}
                labels={customLabels}
                disabled={disabled}
                onToggleDone={() =>
                  dispatch({ type: 'TOGGLE_CUSTOM_DONE', localId: item.id })
                }
                onToggleDismissed={() =>
                  dispatch({ type: 'TOGGLE_CUSTOM_DISMISSED', localId: item.id })
                }
                onRemove={() =>
                  dispatch({ type: 'REMOVE_CUSTOM', localId: item.id })
                }
              />
            ))}
          </ul>
        )}
        <CustomItemInput
          phaseId={phase.id}
          placeholder={t.tools.calendar.customItem.placeholder}
          addLabel={t.tools.calendar.customItem.addLabel}
          disabled={disabled}
          currentCount={countCustomItemsInPhase(state.customItems, phase.id)}
          onAdd={(text) =>
            dispatch({ type: 'ADD_CUSTOM', phaseId: phase.id, text })
          }
        />
        {inlineCta}
      </div>
    </article>
  )
}
