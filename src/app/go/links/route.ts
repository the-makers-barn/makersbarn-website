import { NextResponse } from 'next/server'

import { escapeHtml } from '@/lib'
import { REDIRECT_CONFIG, RedirectSlug, SITE_CONFIG } from '@/constants'

const BASE_URL = `https://${SITE_CONFIG.domain}/go`

const SCRIPT_CLOSE = '</' + 'script>'

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
      url: `${BASE_URL}/${slug}`,
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

function renderStyles(): string {
  return `<style>
    :root {
      --green: #294b3a; --green-light: #3a6b52;
      --gold: #b8894a; --gold-light: #d4a96a;
      --text: #1f130c; --text-muted: #4c4336; --text-tertiary: #8a7f72;
      --bg: #faf8f5; --bg-card: #ffffff; --bg-warm: #f5f0eb;
      --border: #e8e2db;
      --shadow: 0 1px 3px rgba(31,19,12,0.06), 0 4px 12px rgba(31,19,12,0.04);
      --shadow-hover: 0 2px 8px rgba(31,19,12,0.08), 0 8px 24px rgba(31,19,12,0.06);
      --radius: 12px;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Quicksand', system-ui, sans-serif;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: var(--font-sans); color: var(--text); background: var(--bg); min-height: 100vh; -webkit-font-smoothing: antialiased; }
    .page { max-width: 920px; margin: 0 auto; padding: 3rem 1.5rem 4rem; }
    .header { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
    .header__kicker { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.5rem; }
    .header__title { font-family: var(--font-serif); font-size: clamp(1.75rem, 4vw, 2.25rem); font-weight: 500; color: var(--green); line-height: 1.2; letter-spacing: -0.01em; }
    .header__subtitle { margin-top: 0.6rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; }
    .controls { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; padding: 1.15rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); }
    .control-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .control-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-tertiary); white-space: nowrap; min-width: 70px; }
    .control-input { flex: 1; min-width: 160px; padding: 0.45rem 0.75rem; border: 1px solid var(--border); border-radius: 6px; font-family: var(--font-sans); font-size: 0.88rem; color: var(--text); background: var(--bg); outline: none; transition: border-color 0.2s; }
    .control-input:focus { border-color: var(--gold); }
    .control-input::placeholder { color: var(--text-tertiary); }
    .control-hint { font-size: 0.75rem; color: var(--text-tertiary); margin-left: 78px; }
    .color-group { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .color-pick { display: flex; align-items: center; gap: 0.4rem; }
    .color-pick label { font-size: 0.78rem; color: var(--text-muted); }
    .color-pick input[type="color"] { width: 32px; height: 32px; border: 1px solid var(--border); border-radius: 6px; padding: 2px; cursor: pointer; background: var(--bg); }
    .color-pick input[type="color"]::-webkit-color-swatch-wrapper { padding: 1px; }
    .color-pick input[type="color"]::-webkit-color-swatch { border: none; border-radius: 3px; }
    .counter { display: inline-flex; align-items: center; gap: 0.35rem; margin-top: 1rem; padding: 0.3rem 0.75rem; background: var(--bg-warm); border-radius: 20px; font-size: 0.78rem; font-weight: 500; color: var(--text-muted); }
    .counter__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-light); }
    .section { margin-top: 2.5rem; }
    .section__title { font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; color: var(--text-muted); margin-bottom: 1rem; padding-left: 0.25rem; }
    .grid { display: grid; gap: 1rem; }
    .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem 1.5rem; box-shadow: var(--shadow); transition: box-shadow 0.25s ease, border-color 0.25s ease; }
    .card:hover { box-shadow: var(--shadow-hover); border-color: var(--gold-light); }
    .card--disabled { opacity: 0.5; }
    .card--disabled:hover { box-shadow: var(--shadow); border-color: var(--border); }
    .card__layout { display: flex; gap: 1.5rem; align-items: flex-start; }
    .card__info { flex: 1; min-width: 0; }
    .card__qr { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; flex-shrink: 0; }
    .card__qr canvas { border-radius: 8px; }
    .card__header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; }
    .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); flex-shrink: 0; }
    .status-dot.active { background: #4a9; box-shadow: 0 0 0 3px rgba(68,170,136,0.15); }
    .card__title { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 600; color: var(--text); letter-spacing: -0.005em; }
    .card__body { display: grid; gap: 0.75rem; }
    .card__field { display: flex; flex-direction: column; gap: 0.2rem; }
    .card__label { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-tertiary); }
    .card__url-row { display: flex; align-items: center; gap: 0.5rem; }
    .card__url { font-size: 0.9rem; font-weight: 500; color: var(--green); word-break: break-all; }
    .card__destination { font-size: 0.8rem; color: var(--text-tertiary); word-break: break-all; line-height: 1.5; }
    .copy-btn { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text-muted); cursor: pointer; flex-shrink: 0; transition: all 0.2s ease; }
    .copy-btn:hover { background: var(--bg-warm); border-color: var(--gold); color: var(--gold); }
    .copy-btn.copied { background: var(--green); border-color: var(--green); color: white; }
    .qr-copy-btn { padding: 0.35rem 0.85rem; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text-muted); cursor: pointer; font-family: var(--font-sans); font-size: 0.75rem; font-weight: 500; transition: all 0.2s ease; }
    .qr-copy-btn:hover { background: var(--bg-warm); border-color: var(--gold); color: var(--gold); }
    .qr-copy-btn.copied { background: var(--green); border-color: var(--green); color: white; }
    .toast { position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%) translateY(20px); background: var(--green); color: white; padding: 0.6rem 1.2rem; border-radius: 8px; font-size: 0.82rem; font-weight: 500; box-shadow: 0 4px 16px rgba(41,75,58,0.3); opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease; pointer-events: none; z-index: 10; }
    .toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
    @media (max-width: 640px) { .page { padding: 2rem 1rem 3rem; } .card { padding: 1rem 1.15rem; } .card__layout { flex-direction: column; } .card__qr { align-self: center; } .control-hint { margin-left: 0; } }
  </style>`
}

function renderScript(): string {
  const cdnTag = `<script src="https://cdn.jsdelivr.net/npm/qrcode@1/build/qrcode.min.js">${SCRIPT_CLOSE}`

  return `${cdnTag}
  <script>
    var sourceInput = document.getElementById('source-input');
    var qrDarkInput = document.getElementById('qr-dark');
    var qrLightInput = document.getElementById('qr-light');
    var cards = document.querySelectorAll('.card[data-slug]');
    var toastEl = document.getElementById('toast');
    var toastTimer = null;

    function showToast(msg) {
      toastEl.textContent = msg;
      toastEl.classList.add('visible');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('visible'); }, 1800);
    }

    function getFullUrl(baseUrl) {
      var source = sourceInput.value.trim();
      if (!source) return baseUrl;
      return baseUrl + '?source=' + encodeURIComponent(source);
    }

    function updateAllCards() {
      var darkColor = qrDarkInput.value;
      var lightColor = qrLightInput.value;
      cards.forEach(function(card) {
        var baseUrl = card.getAttribute('data-base-url');
        var fullUrl = getFullUrl(baseUrl);
        var urlDisplay = card.querySelector('[data-url-display]');
        var canvas = card.querySelector('[data-qr-canvas]');
        if (urlDisplay) urlDisplay.textContent = fullUrl;
        if (canvas && typeof QRCode !== 'undefined') {
          QRCode.toCanvas(canvas, fullUrl, {
            width: 180, margin: 2,
            color: { dark: darkColor, light: lightColor }
          });
        }
      });
    }

    sourceInput.addEventListener('input', updateAllCards);
    qrDarkInput.addEventListener('input', updateAllCards);
    qrLightInput.addEventListener('input', updateAllCards);

    document.addEventListener('click', function(e) {
      var copyUrlBtn = e.target.closest('[data-copy-url]');
      if (copyUrlBtn) {
        var card = copyUrlBtn.closest('.card');
        var fullUrl = getFullUrl(card.getAttribute('data-base-url'));
        navigator.clipboard.writeText(fullUrl).then(function() {
          copyUrlBtn.classList.add('copied');
          showToast('Link copied');
          setTimeout(function() { copyUrlBtn.classList.remove('copied'); }, 1800);
        }).catch(function() { showToast('Copy failed'); });
        return;
      }

      var copyQrBtn = e.target.closest('[data-copy-qr]');
      if (copyQrBtn) {
        var qrCard = copyQrBtn.closest('.card');
        var canvas = qrCard.querySelector('[data-qr-canvas]');
        canvas.toBlob(function(blob) {
          if (!blob) { showToast('QR generation failed'); return; }
          navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]).then(function() {
            copyQrBtn.classList.add('copied');
            copyQrBtn.textContent = 'Copied!';
            showToast('QR image copied');
            setTimeout(function() {
              copyQrBtn.classList.remove('copied');
              copyQrBtn.textContent = 'Copy QR';
            }, 1800);
          }).catch(function() { showToast('Copy failed'); });
        });
      }
    });

    window.addEventListener('load', updateAllCards);
  ${SCRIPT_CLOSE}`
}

function renderBody(activeLinks: LinkInfo[], disabledLinks: LinkInfo[]): string {
  const disabledSection = disabledLinks.length > 0
    ? `<div class="section">
         <h3 class="section__title">Inactive Links</h3>
         <div class="grid">${disabledLinks.map(renderCard).join('')}</div>
       </div>`
    : ''

  return `
  <div class="page">
    <header class="header">
      <p class="header__kicker">${SITE_CONFIG.name}</p>
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
  <div class="toast" id="toast">Copied to clipboard</div>`
}

function renderPage(links: LinkInfo[]): string {
  const activeLinks = links.filter((link) => link.enabled)
  const disabledLinks = links.filter((link) => !link.enabled)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="robots" content="noindex,nofollow"/>
  <title>QR Links &mdash; ${SITE_CONFIG.name}</title>
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
