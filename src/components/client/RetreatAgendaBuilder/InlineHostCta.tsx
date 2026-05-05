'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  AGENDA_LEAD_SOURCES,
  MAKERSBARN_CTA_QUERY_PARAM,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'

import styles from './RetreatAgendaBuilder.module.css'

export interface InlineHostCtaProps {
  locale: Language
  t: Dictionary
}

export function InlineHostCta({ locale, t }: InlineHostCtaProps): ReactNode {
  const labels = t.tools.agenda.inlineHostCta
  const base = getLocalizedPath(Route.HOST_A_RETREAT, locale)
  const href = `${base}?${MAKERSBARN_CTA_QUERY_PARAM}=${AGENDA_LEAD_SOURCES.ARRIVAL_DAY_CTA}`
  return (
    <aside className={styles.inlineCta}>
      <p className={styles.inlineCtaTitle}>{labels.title}</p>
      <p className={styles.inlineCtaBody}>{labels.body}</p>
      <Link href={href} className={styles.inlineCtaLink}>
        {labels.linkLabel}
      </Link>
    </aside>
  )
}
