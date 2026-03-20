import { NextResponse } from 'next/server'

import { escapeHtml } from '@/lib'
import { REDIRECT_CONFIG, RedirectSlug, SITE_CONFIG, buildRedirectUrl } from '@/constants'

import { renderPrintSection } from './print-cards'
import { renderScript } from './script'
import { renderStyles } from './styles'

interface LinkInfo {
  slug: string
  label: string
  url: string
  destination: string
  enabled: boolean
}

function getLinks(): LinkInfo[] {
  return Object.values(RedirectSlug).map((slug) => {
    const entry = REDIRECT_CONFIG[slug]
    return {
      slug,
      label: entry.label,
      url: buildRedirectUrl(slug),
      destination: entry.destination,
      enabled: entry.enabled,
    }
  })
}

function renderCard(link: LinkInfo): string {
  const statusDot = link.enabled
    ? '<span class="status-dot active"></span>'
    : '<span class="status-dot"></span>'

  const disabledClass = link.enabled ? '' : ' card--disabled'

  const safeSlug = escapeHtml(link.slug)
  const safeUrl = escapeHtml(link.url)
  const safeLabel = escapeHtml(link.label)
  const safeDest = escapeHtml(link.destination || 'Not configured')

  return `
    <div class="card${disabledClass}" data-slug="${safeSlug}" data-base-url="${safeUrl}">
      <div class="card__layout">
        <div class="card__info">
          <div class="card__header">
            ${statusDot}
            <h2 class="card__title">${safeLabel}</h2>
          </div>
          <div class="card__body">
            <div class="card__field">
              <span class="card__label">QR Link</span>
              <div class="card__url-row">
                <span class="card__url" data-url-display>${safeUrl}</span>
                <button class="copy-btn" data-copy-url title="Copy link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="card__field">
              <span class="card__label">Destination</span>
              <span class="card__destination">${safeDest}</span>
            </div>
          </div>
        </div>
        <div class="card__qr">
          <canvas data-qr-canvas width="180" height="180"></canvas>
          <button class="qr-copy-btn" data-copy-qr title="Copy QR image">Copy QR</button>
        </div>
      </div>
    </div>`
}

function renderBody(activeLinks: LinkInfo[], disabledLinks: LinkInfo[]): string {
  const safeSiteName = escapeHtml(SITE_CONFIG.name)
  const disabledSection = disabledLinks.length > 0
    ? `<div class="section">
         <h3 class="section__title">Inactive Links</h3>
         <div class="grid">${disabledLinks.map(renderCard).join('')}</div>
       </div>`
    : ''

  return `
  <div class="page">
    <header class="header">
      <p class="header__kicker">${safeSiteName}</p>
      <h1 class="header__title">QR Redirect Links</h1>
      <p class="header__subtitle">Stable branded URLs for printed QR codes. Change destinations anytime without reprinting.</p>
      <div class="counter">
        <span class="counter__dot"></span>
        ${activeLinks.length} active link${activeLinks.length !== 1 ? 's' : ''}
      </div>
    </header>
    <div class="controls">
      <div class="control-row">
        <label class="control-label" for="source-input">Source</label>
        <input class="control-input" id="source-input" type="text" placeholder="e.g. welcome-book" spellcheck="false" autocomplete="off"/>
      </div>
      <span class="control-hint">Adds ?source=value to all links for tracking where the QR was scanned</span>
      <div class="control-row">
        <span class="control-label">QR Colors</span>
        <div class="color-group">
          <div class="color-pick">
            <label for="qr-dark">Foreground</label>
            <input type="color" id="qr-dark" value="#294b3a"/>
          </div>
          <div class="color-pick">
            <label for="qr-light">Background</label>
            <input type="color" id="qr-light" value="#ffffff"/>
          </div>
        </div>
      </div>
    </div>
    <div class="grid">${activeLinks.map(renderCard).join('')}</div>
    ${disabledSection}
  </div>
  ${renderPrintSection()}
  <div class="toast" id="toast">Copied to clipboard</div>`
}

function renderPage(links: LinkInfo[]): string {
  const activeLinks = links.filter((link) => link.enabled)
  const disabledLinks = links.filter((link) => !link.enabled)
  const safeSiteName = escapeHtml(SITE_CONFIG.name)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="robots" content="noindex,nofollow"/>
  <title>QR Links &mdash; ${safeSiteName}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet"/>
  ${renderStyles()}
</head>
<body>
  ${renderBody(activeLinks, disabledLinks)}
  ${renderScript()}
</body>
</html>`
}

export function GET(): NextResponse {
  const links = getLinks()
  const html = renderPage(links)

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
