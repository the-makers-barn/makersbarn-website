import Link from 'next/link'
import type { ReactNode } from 'react'

import { RetreatAgendaBuilder } from '@/components/client'
import { ToolPageShell } from '@/components/server/ToolPageShell'
import {
  AGENDA_NICHE_ORDER,
  AGENDA_NICHE_ROUTES,
  AGENDA_NICHE_TO_CALCULATOR,
  AgendaNiche,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'

import styles from './RetreatAgendaBuilderPage.module.css'

interface Props {
  niche: AgendaNiche
  locale: Language
  t: Dictionary
}

interface CrossLink {
  niche: AgendaNiche
  href: string
  label: string
}

function buildCrossLinks(
  active: AgendaNiche,
  locale: Language,
  t: Dictionary,
): CrossLink[] {
  return AGENDA_NICHE_ORDER.filter((niche) => niche !== active).map((niche) => ({
    niche,
    href: getLocalizedPath(AGENDA_NICHE_ROUTES[niche], locale),
    label: t.tools.agenda.niches[niche].shortLabel,
  }))
}

const HERO_AFTER_INTRO_STYLES: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--color-text-muted)',
  margin: '0.5rem 0 0',
}

export function RetreatAgendaBuilderPage({
  niche,
  locale,
  t,
}: Props): ReactNode {
  const agenda = t.tools.agenda
  const nicheCopy = agenda.niches[niche]
  const heroAfterIntro = (
    <p style={HERO_AFTER_INTRO_STYLES}>{nicheCopy.heroAfterIntro}</p>
  )

  const crossLinks = buildCrossLinks(niche, locale, t)
  const faqEntries = [
    ...nicheCopy.faqExtras.map((e) => ({ question: e.question, answer: e.answer })),
    ...agenda.faq.entries.map((e) => ({ question: e.question, answer: e.answer })),
  ]
  const guideSections = nicheCopy.guideSections.map((section) => ({
    heading: section.heading,
    paragraphs: [...section.paragraphs],
  }))

  return (
    <>
      <ToolPageShell
        hero={{
          eyebrow: nicheCopy.heroEyebrow,
          title: nicheCopy.heroTitle,
          intro: nicheCopy.heroIntro,
          afterIntro: heroAfterIntro,
        }}
        tool={<RetreatAgendaBuilder niche={niche} locale={locale} t={t} />}
        howToHeading={agenda.howTo.heading}
        howToSteps={[...agenda.howTo.steps]}
        guideSections={guideSections}
        faqHeading={agenda.faq.heading}
        faqEntries={faqEntries}
        relatedHeading={agenda.related.heading}
        relatedCards={[
          {
            href: getLocalizedPath(Route.HOST_A_RETREAT, locale),
            title: agenda.related.hostARetreatTitle,
            isPrimary: true,
          },
          {
            href: getLocalizedPath(AGENDA_NICHE_TO_CALCULATOR[niche], locale),
            title: nicheCopy.relatedCalculatorTitle,
          },
          {
            href: getLocalizedPath(Route.TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR, locale),
            title: agenda.related.launchCalendarTitle,
          },
        ]}
      />
      {crossLinks.length > 0 && (
        <section className={styles.crossLinks} aria-labelledby="agenda-cross-links">
          <div className={styles.crossLinksInner}>
            <h2 id="agenda-cross-links" className={styles.crossLinksHeading}>
              {agenda.crossLinks.heading}
            </h2>
            <p className={styles.crossLinksIntro}>{agenda.crossLinks.intro}</p>
            <ul className={styles.crossLinksList}>
              {crossLinks.map((link) => (
                <li key={link.niche}>
                  <Link href={link.href} className={styles.crossLinksItem}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
