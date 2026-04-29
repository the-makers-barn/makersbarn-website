'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

import styles from './RetreatLaunchCalendar.module.css'

export interface InlinePhaseCtaProps {
  title: string
  body: string
  linkLabel: string
  linkHref: string
}

export function InlinePhaseCta(props: InlinePhaseCtaProps): ReactNode {
  const { title, body, linkLabel, linkHref } = props
  return (
    <aside className={styles.inlineCta}>
      <p className={styles.inlineCtaTitle}>{title}</p>
      <p className={styles.inlineCtaBody}>{body}</p>
      <Link href={linkHref} className={styles.inlineCtaLink}>
        {linkLabel}
      </Link>
    </aside>
  )
}
