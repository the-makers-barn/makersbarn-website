/**
 * Print-ready QR card rendering for welcome book
 * Generates compact cards with platform icons and warm CTAs
 * Hidden on screen, visible only when printing
 */

import { escapeHtml } from '@/lib'
import {
  REDIRECT_CONFIG,
  RedirectSlug,
  PrintCardIcon,
  buildRedirectUrl,
  type RedirectEntry,
} from '@/constants'

const PRINT_ICONS: Record<PrintCardIcon, string> = {
  [PrintCardIcon.INSTAGRAM]: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="18" cy="6" r="1.2" fill="currentColor"/>
  </svg>`,
  [PrintCardIcon.GOOGLE]: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>`,
}

interface PrintCardEntry {
  slug: RedirectSlug
  entry: RedirectEntry
  url: string
}

function getPrintableEntries(): PrintCardEntry[] {
  return Object.values(RedirectSlug)
    .filter((slug) => REDIRECT_CONFIG[slug].printCard)
    .map((slug) => ({
      slug,
      entry: REDIRECT_CONFIG[slug],
      url: buildRedirectUrl(slug),
    }))
}

function renderPrintCard(card: PrintCardEntry): string {
  const { printCard } = card.entry

  if (!printCard) {
    return ''
  }

  const safeSlug = escapeHtml(card.slug)
  const safeUrl = escapeHtml(card.url)
  const safeCta = escapeHtml(printCard.cta).replace(/\n/g, '<br/>')
  const iconSvg = PRINT_ICONS[printCard.icon]

  return `
    <div class="print-card" data-print-slug="${safeSlug}" data-print-base-url="${safeUrl}">
      <canvas class="print-card__qr" data-print-qr-canvas width="120" height="120"></canvas>
      <div class="print-card__label">
        <div class="print-card__icon">${iconSvg}</div>
        <p class="print-card__cta">${safeCta}</p>
      </div>
    </div>`
}

export function renderPrintSection(): string {
  const entries = getPrintableEntries()

  if (entries.length === 0) {
    return ''
  }

  return `
  <div class="print-section" id="print-section">
    <h2 class="print-section__title">Print Preview</h2>
    <div class="print-cards">
      ${entries.map(renderPrintCard).join('')}
    </div>
  </div>`
}

export function renderPrintStyles(): string {
  return `
    .print-section { max-width: 920px; margin: 2.5rem auto 0; padding: 0 1.5rem 3rem; }
    .print-section__title { font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; color: var(--text-muted); margin-bottom: 1.25rem; padding-left: 0.25rem; }
    .print-cards { display: flex; gap: 1rem; flex-wrap: wrap; }
    .print-card { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1rem 1.25rem 0.85rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); }
    .print-card__qr { border-radius: 4px; }
    .print-card__label { display: flex; align-items: center; gap: 0.4rem; }
    .print-card__icon { width: 18px; height: 18px; color: var(--green); flex-shrink: 0; }
    .print-card__icon svg { width: 100%; height: 100%; display: block; }
    .print-card__cta { font-family: var(--font-sans); font-size: 0.75rem; font-weight: 600; color: var(--green); line-height: 1.35; letter-spacing: 0.01em; }

    @media print {
      body { background: white; }
      .page, .toast { display: none !important; }
      .print-section { margin: 0; padding: 0; max-width: none; }
      .print-section__header { display: none; }
      .print-cards { display: flex; gap: 10pt; }
      .print-card { border: 1pt solid #d4c4b0; border-radius: 8pt; padding: 8pt 10pt 6pt; background: #faf8f5; box-shadow: none; width: auto; break-inside: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .print-card__qr { border-radius: 4pt; }
      .print-card__label { display: flex; align-items: center; gap: 4pt; }
      .print-card__icon { width: 14pt; height: 14pt; color: #294b3a; }
      .print-card__cta { font-size: 7.5pt; color: #294b3a; }
    }
    @media (max-width: 640px) { .print-section { padding: 0 1rem 2rem; } .print-cards { flex-direction: column; align-items: center; } }`
}

export function renderPrintScript(): string {
  return `
    var printCards = document.querySelectorAll('.print-card[data-print-slug]');

    function updatePrintCards() {
      var darkColor = qrDarkInput.value;
      var lightColor = qrLightInput.value;
      printCards.forEach(function(card) {
        var baseUrl = card.getAttribute('data-print-base-url');
        var fullUrl = getFullUrl(baseUrl);
        var canvas = card.querySelector('[data-print-qr-canvas]');
        if (canvas && typeof QRCode !== 'undefined') {
          QRCode.toCanvas(canvas, fullUrl, {
            width: 120, margin: 1,
            color: { dark: darkColor, light: lightColor }
          });
        }
      });
    }`
}
