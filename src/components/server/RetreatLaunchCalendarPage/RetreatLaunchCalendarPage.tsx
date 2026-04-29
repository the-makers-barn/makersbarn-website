import Link from 'next/link'
import type { ReactNode } from 'react'

import { RetreatLaunchCalendar } from '@/components/client'
import { ToolPageShell } from '@/components/server/ToolPageShell'
import {
  CALENDAR_PRESETS_ORDER,
  CALENDAR_ROUTE_BY_PRESET,
  type TimelinePreset,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'
import type { CalendarContent } from '@/types/tools'

import styles from './RetreatLaunchCalendarPage.module.css'

interface Props {
  preset: TimelinePreset
  content: CalendarContent
  locale: Language
  t: Dictionary
}

const MONTHS_PLACEHOLDER = '{months}'

const interpolate = (template: string, months: string): string =>
  template.replaceAll(MONTHS_PLACEHOLDER, months)

const HERO_AFTER_INTRO_STYLES: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--color-text-muted)',
  margin: '0.5rem 0 0',
}

interface CrossLink {
  preset: TimelinePreset
  href: string
  label: string
}

function buildCrossLinks(
  activePreset: TimelinePreset,
  locale: Language,
  linkLabelTemplate: string,
): CrossLink[] {
  return CALENDAR_PRESETS_ORDER.filter((preset) => preset !== activePreset).map((preset) => ({
    preset,
    href: getLocalizedPath(CALENDAR_ROUTE_BY_PRESET[preset], locale),
    label: interpolate(linkLabelTemplate, String(preset)),
  }))
}

export function RetreatLaunchCalendarPage({
  preset,
  content,
  locale,
  t,
}: Props): ReactNode {
  const months = String(preset)
  const calendar = t.tools.calendar
  const heroAfterIntro = (
    <p style={HERO_AFTER_INTRO_STYLES}>{calendar.heroAfterIntro}</p>
  )

  const faqEntries = calendar.faq.entries.map((entry) => ({
    question: entry.question,
    answer: entry.answer,
  }))

  const crossLinks = buildCrossLinks(preset, locale, calendar.crossLinks.linkLabel)

  return (
    <>
      <ToolPageShell
        hero={{
          eyebrow: calendar.heroEyebrow,
          title: interpolate(calendar.heroTitle, months),
          intro: interpolate(calendar.heroIntro, months),
          afterIntro: heroAfterIntro,
        }}
        tool={
          <RetreatLaunchCalendar
            preset={preset}
            content={content}
            locale={locale}
            t={t}
          />
        }
        howToHeading={calendar.howTo.heading}
        howToSteps={[...calendar.howTo.steps]}
        guideSections={[]}
        faqHeading={calendar.faq.heading}
        faqEntries={faqEntries}
        relatedHeading={calendar.related.heading}
        relatedCards={[
          {
            href: getLocalizedPath(Route.HOST_A_RETREAT, locale),
            title: calendar.related.hostARetreatTitle,
            isPrimary: true,
          },
          {
            href: getLocalizedPath(Route.RETREAT_PROFITABILITY_CALCULATOR, locale),
            title: calendar.related.profitabilityCalculatorTitle,
          },
        ]}
      />
      <section className={styles.crossLinks} aria-labelledby="calendar-cross-links">
        <div className={styles.crossLinksInner}>
          <h2 id="calendar-cross-links" className={styles.crossLinksHeading}>
            {calendar.crossLinks.heading}
          </h2>
          <p className={styles.crossLinksIntro}>{calendar.crossLinks.intro}</p>
          <ul className={styles.crossLinksList}>
            {crossLinks.map((link) => (
              <li key={link.preset}>
                <Link href={link.href} className={styles.crossLinksItem}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
