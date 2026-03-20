/**
 * Standalone CSS for the /go/links admin page
 *
 * This page renders outside the Next.js layout, so brand tokens from
 * globals.css are not available. Values here mirror the canonical
 * definitions in src/constants/typography.ts and src/app/globals.css.
 */

import { renderPrintStyles } from './print-cards'

export function renderStyles(): string {
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
    ${renderPrintStyles()}
  </style>`
}
