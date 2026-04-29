import type { ReactNode } from 'react'

import { RetreatLaunchCalendar } from '@/components/client'
import { ToolPageShell } from '@/components/server/ToolPageShell'
import { type TimelinePreset } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'
import type { CalendarContent } from '@/types/tools'

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

  return (
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
  )
}
