import Link from 'next/link'
import type { ReactNode } from 'react'

import { RetreatAgendaBuilder } from '@/components/client'
import { ToolPageShell } from '@/components/server/ToolPageShell'
import {
  AGENDA_NICHE_ORDER,
  AGENDA_NICHE_ROUTES,
  AgendaNiche,
} from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'
import { getLocalizedPath } from '@/lib/routing'
import type { Language } from '@/types/common'
import { Route } from '@/types/navigation'

import styles from './RetreatAgendaBuilderPage.module.css'

const NICHE_LABEL_PLACEHOLDER = '{nicheLabel}'

interface Props {
  niche: AgendaNiche
  locale: Language
  t: Dictionary
}

function nicheLabelFor(niche: AgendaNiche, t: Dictionary): string {
  return t.tools.agenda.nicheLabels[niche]
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
    label: nicheLabelFor(niche, t),
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
  const nicheLabel = nicheLabelFor(niche, t)
  const heroTitle = agenda.heroTitle.replaceAll(NICHE_LABEL_PLACEHOLDER, nicheLabel)
  const heroIntro = agenda.heroIntro.replaceAll(NICHE_LABEL_PLACEHOLDER, nicheLabel)
  const heroAfterIntro = (
    <p style={HERO_AFTER_INTRO_STYLES}>{agenda.heroAfterIntro}</p>
  )

  const crossLinks = buildCrossLinks(niche, locale, t)
  const faqEntries = agenda.faq.entries.map((e) => ({
    question: e.question,
    answer: e.answer,
  }))

  return (
    <>
      <ToolPageShell
        hero={{
          eyebrow: agenda.heroEyebrow,
          title: heroTitle,
          intro: heroIntro,
          afterIntro: heroAfterIntro,
        }}
        tool={<RetreatAgendaBuilder niche={niche} locale={locale} t={t} />}
        howToHeading={agenda.howTo.heading}
        howToSteps={[...agenda.howTo.steps]}
        guideSections={[]}
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
            href: getLocalizedPath(Route.RETREAT_PROFITABILITY_CALCULATOR, locale),
            title: agenda.related.profitabilityCalculatorTitle,
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
