'use client'

import { useMemo } from 'react'

import { type AuditVariant } from '@/constants/tools'
import {
  AUDIT_CATEGORY_LABELS,
  AUDIT_QUESTIONS,
  AUDIT_VARIANTS,
  type AuditQuestion,
} from '@/data/tools'
import type { Language } from '@/types/common'
import type { AuditUiLabels } from '@/types/tools'

import { AuditReport } from './AuditReport'
import { IntroScreen } from './IntroScreen'
import styles from './RetreatMistakesAudit.module.css'
import { scoreByCategory, topFlaggedMistakes } from './score'
import { useAuditState } from './useAuditState'

interface Props {
  variant: AuditVariant
  locale: Language
  labels: AuditUiLabels
}

const AUTO_ADVANCE_DELAY_MS = 250

function pickQuestionsForVariant(
  variant: AuditVariant,
): readonly AuditQuestion[] {
  const config = AUDIT_VARIANTS[variant]
  const hide = new Set(config.hideQuestionIds ?? [])
  return AUDIT_QUESTIONS.filter((q) => !hide.has(q.id))
}

const interpolateProgress = (
  template: string,
  current: number,
  total: number,
  category: string,
): string =>
  template
    .replace('{current}', String(current))
    .replace('{total}', String(total))
    .replace('{category}', category)

export function RetreatMistakesAudit({ variant, locale, labels }: Props) {
  const questions = useMemo(() => pickQuestionsForVariant(variant), [variant])
  const {
    state,
    hasResumable,
    startFresh,
    resume,
    restart,
    setAnswer,
    setIndex,
    showReport: setShowReport,
  } = useAuditState(variant)

  if (!state.started) {
    return (
      <IntroScreen
        labels={labels}
        locale={locale}
        hasResumable={hasResumable}
        onStart={startFresh}
        onResume={resume}
      />
    )
  }

  const total = questions.length
  const current = questions[state.index]
  const isLast = state.index === total - 1
  const hasAnswer = current.id in state.answers

  const advance = () => {
    if (isLast) {
      setShowReport()
    } else {
      setIndex((i) => Math.min(i + 1, total - 1))
    }
  }

  if (state.showReport) {
    return (
      <AuditReport
        perCategory={scoreByCategory(questions, state.answers)}
        flagged={topFlaggedMistakes(questions, state.answers)}
        locale={locale}
        labels={labels}
        onRestart={restart}
      />
    )
  }

  const progressLabel = interpolateProgress(
    labels.progressLabel[locale],
    state.index + 1,
    total,
    AUDIT_CATEGORY_LABELS[current.category][locale],
  )

  const handlePick = (optionId: string) => {
    setAnswer(current.id, optionId)
    // Soft auto-advance — gives the UI a moment to render the selected state
    // before moving on, so the user actually sees their choice register.
    window.setTimeout(advance, AUTO_ADVANCE_DELAY_MS)
  }

  return (
    <section className={styles.root}>
      <div className={styles.progress}>
        <div className={styles.progressLabel}>
          <span>{progressLabel}</span>
        </div>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={state.index + 1}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${((state.index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <h2 className={styles.questionPrompt}>{current.prompt[locale]}</h2>

      <ul className={styles.options}>
        {current.options.map((opt) => {
          const selected = state.answers[current.id] === opt.id
          return (
            <li key={opt.id}>
              <button
                type="button"
                className={`${styles.option} ${selected ? styles.optionSelected : ''}`}
                onClick={() => handlePick(opt.id)}
              >
                {opt.label[locale]}
              </button>
            </li>
          )
        })}
      </ul>

      <div className={styles.nav}>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={state.index === 0}
        >
          {labels.backLabel[locale]}
        </button>
        <button
          type="button"
          className={styles.navButton}
          onClick={advance}
          disabled={!hasAnswer}
        >
          {labels.nextLabel[locale]}
        </button>
      </div>
    </section>
  )
}
