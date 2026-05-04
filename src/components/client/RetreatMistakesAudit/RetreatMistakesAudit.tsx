'use client'

import { useMemo, useState } from 'react'

import { AuditVariant } from '@/constants/tools'
import {
  AUDIT_CATEGORY_LABELS,
  AUDIT_QUESTIONS,
  type AuditQuestion,
} from '@/data/tools'
import { AUDIT_VARIANTS } from '@/data/tools'
import type { Language } from '@/types/common'

import { AuditReport } from './AuditReport'
import styles from './RetreatMistakesAudit.module.css'
import { scoreByCategory, topFlaggedMistakes } from './score'

interface Props {
  variant: AuditVariant
  locale: Language
  restartLabel: string
  reportHeading: string
  resultLeadIn: string
  nextLabel: string
  backLabel: string
}

type AnswerMap = Record<string, string>

function pickQuestionsForVariant(variant: AuditVariant): readonly AuditQuestion[] {
  const config = AUDIT_VARIANTS[variant]
  const hide = new Set(config.hideQuestionIds ?? [])
  return AUDIT_QUESTIONS.filter((q) => !hide.has(q.id))
}

export function RetreatMistakesAudit({
  variant,
  locale,
  restartLabel,
  reportHeading,
  resultLeadIn,
  nextLabel,
  backLabel,
}: Props) {
  const questions = useMemo(() => pickQuestionsForVariant(variant), [variant])
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [index, setIndex] = useState(0)
  const [showReport, setShowReport] = useState(false)

  const total = questions.length
  const answered = Object.keys(answers).length
  const current = questions[index]
  const isLast = index === total - 1
  const hasAnswer = current.id in answers

  const restart = () => {
    setAnswers({})
    setIndex(0)
    setShowReport(false)
  }

  const advance = () => {
    if (isLast) {
      setShowReport(true)
    } else {
      setIndex((i) => Math.min(i + 1, total - 1))
    }
  }

  if (showReport) {
    return (
      <AuditReport
        perCategory={scoreByCategory(questions, answers)}
        flagged={topFlaggedMistakes(questions, answers)}
        locale={locale}
        reportHeading={reportHeading}
        resultLeadIn={resultLeadIn}
        restartLabel={restartLabel}
        onRestart={restart}
      />
    )
  }

  return (
    <section className={styles.root}>
      <div className={styles.progress}>
        <span>
          {answered} / {total}
        </span>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={answered}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${(answered / total) * 100}%` }}
          />
        </div>
      </div>

      <p className={styles.categoryEyebrow}>
        {AUDIT_CATEGORY_LABELS[current.category][locale]}
      </p>
      <h2 className={styles.questionPrompt}>{current.prompt[locale]}</h2>

      <ul className={styles.options}>
        {current.options.map((opt) => {
          const selected = answers[current.id] === opt.id
          return (
            <li key={opt.id}>
              <button
                type="button"
                className={`${styles.option} ${selected ? styles.optionSelected : ''}`}
                onClick={() => {
                  setAnswers((prev) => ({ ...prev, [current.id]: opt.id }))
                  advance()
                }}
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
          disabled={index === 0}
        >
          {backLabel}
        </button>
        <button
          type="button"
          className={styles.navButton}
          onClick={advance}
          disabled={!hasAnswer}
        >
          {nextLabel}
        </button>
      </div>
    </section>
  )
}
