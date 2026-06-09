import Link from 'next/link'

import {
  FOOTER_EMAIL,
  FOOTER_ADDRESS,
  SOCIAL_LINKS,
} from '@/constants/footer'
import { SITE_CONFIG } from '@/constants/site'
import { SocialPlatform, Language, Route } from '@/types'
import { getServerTranslations, getServerLanguage } from '@/i18n'
import { getLocalizedPath } from '@/lib/routing'

import { InstagramIcon, FacebookIcon, LinkedInIcon } from './SocialIcons'
import styles from './Footer.module.css'

const ICON_MAP: Record<SocialPlatform, React.ComponentType> = {
  [SocialPlatform.INSTAGRAM]: InstagramIcon,
  [SocialPlatform.FACEBOOK]: FacebookIcon,
  [SocialPlatform.LINKEDIN]: LinkedInIcon,
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function HouseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  )
}

function ToolsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-2.1z" />
    </svg>
  )
}

interface FooterProps {
  locale?: Language
}

export async function Footer({ locale }: FooterProps = {}) {
  const language = locale || await getServerLanguage()
  const t = await getServerTranslations(language)
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <p className={styles.brandMark}>{SITE_CONFIG.name}</p>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.heading}>{t.footer.getInTouch}</h3>
            <p className={styles.email}>
              <a href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a>
            </p>
            <p className={styles.address}>
              {FOOTER_ADDRESS.street}
              <br />
              {FOOTER_ADDRESS.postalCode} {FOOTER_ADDRESS.city}
              {language !== Language.NL && (
                <>
                  <br />
                  {FOOTER_ADDRESS.country}
                </>
              )}
            </p>
            <Link
              href={`${getLocalizedPath(Route.ABOUT, language)}#location`}
              className={styles.link}
            >
              <MapPinIcon />
              {t.footer.viewLocation}
            </Link>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>{t.footer.explore}</h3>
            <Link
              href={getLocalizedPath(Route.HOST_A_RETREAT, language)}
              className={styles.link}
            >
              <HouseIcon />
              {t.footer.hostRetreat}
            </Link>
            <Link
              href={getLocalizedPath(Route.TOOLS, language)}
              className={styles.link}
            >
              <ToolsIcon />
              {t.footer.exploreTools}
            </Link>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>{t.footer.followUs}</h3>
            <div className={styles.social}>
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.platform]
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.ariaLabel}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
