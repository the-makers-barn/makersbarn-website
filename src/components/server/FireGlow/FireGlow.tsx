import type { CSSProperties } from 'react'

import styles from './FireGlow.module.css'

interface FireGlowProps {
  /** Short description for assistive tech; the drawing itself is decorative. */
  label: string
  className?: string
}

interface Ember {
  cx: number
  cy: number
  r: number
  drift: string
  delay: string
}

const EMBERS: Ember[] = [
  { cx: 132, cy: 150, r: 1.6, drift: '-18px', delay: '0s' },
  { cx: 170, cy: 146, r: 1.1, drift: '14px', delay: '1.9s' },
  { cx: 150, cy: 156, r: 2, drift: '-4px', delay: '3.4s' },
  { cx: 196, cy: 158, r: 1.3, drift: '22px', delay: '5.1s' },
  { cx: 112, cy: 160, r: 1.1, drift: '-26px', delay: '6.6s' },
  { cx: 160, cy: 140, r: 0.9, drift: '6px', delay: '8.2s' },
  { cx: 184, cy: 152, r: 1.4, drift: '10px', delay: '9.7s' },
  { cx: 124, cy: 148, r: 1, drift: '-10px', delay: '11.3s' },
]

/**
 * A low, broad campfire at dusk: a bed of coals with several soft tongues of
 * flame of different heights, and embers drifting up and fading. Pure SVG and
 * CSS, no script. Animation is disabled under `prefers-reduced-motion`.
 *
 * Broad and low on purpose. One tall flame on a dark ground reads as a
 * memorial candle; a wide bed of coals with many small flickers reads as
 * people sitting around a fire.
 */
export function FireGlow({ label, className }: FireGlowProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 -60 320 260"
      className={className ? `${styles.fire} ${className}` : styles.fire}
    >
      <defs>
        <radialGradient id="fire-coals" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#f2a54e" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#d9782a" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#8f3f16" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8f3f16" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fire-halo" cx="50%" cy="70%" r="55%">
          <stop offset="0%" stopColor="#e08a3a" stopOpacity="0.32" />
          <stop offset="55%" stopColor="#c9782e" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#c9782e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fire-tongue" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f6c56e" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#e8963f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d9873a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fire-tongue-bright" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#fff1c9" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#f6c56e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f6c56e" stopOpacity="0" />
        </linearGradient>
        <filter id="fire-soft" x="-30%" y="-20%" width="160%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="fire-softer" x="-40%" y="-30%" width="180%" height="160%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* Halo of light around the whole fire */}
      <ellipse className={styles.glow} cx="160" cy="176" rx="170" ry="72" fill="url(#fire-halo)" />

      {/* Tongues, back to front. Bases sit on y=188; heights and lean differ. */}
      <g>
        <path
          className={`${styles.flame} ${styles.flameSlow}`}
          filter="url(#fire-softer)"
          d="M118 108 C 128 124, 140 136, 140 156 C 140 174, 132 186, 118 188 C 104 188, 96 176, 98 160 C 100 144, 110 134, 108 122 C 107 116, 110 112, 118 108 Z"
          fill="url(#fire-tongue)"
        />
        <path
          className={`${styles.flame} ${styles.flameMid}`}
          filter="url(#fire-softer)"
          d="M206 96 C 214 116, 230 130, 228 154 C 226 174, 216 186, 202 188 C 188 188, 178 178, 180 162 C 182 146, 196 138, 196 122 C 196 112, 200 104, 206 96 Z"
          fill="url(#fire-tongue)"
        />
        <path
          className={`${styles.flame} ${styles.flameTall}`}
          filter="url(#fire-softer)"
          d="M158 58 C 170 84, 190 104, 190 138 C 190 164, 180 184, 160 188 C 138 188, 124 172, 126 148 C 128 128, 148 118, 146 98 C 145 84, 150 70, 158 58 Z"
          fill="url(#fire-tongue)"
        />
        <path
          className={`${styles.flame} ${styles.flameQuick}`}
          filter="url(#fire-soft)"
          d="M84 138 C 90 150, 98 158, 96 172 C 95 182, 90 188, 82 188 C 74 188, 68 182, 70 172 C 72 160, 80 154, 80 146 C 80 142, 82 140, 84 138 Z"
          fill="url(#fire-tongue)"
        />
        <path
          className={`${styles.flame} ${styles.flameQuickB}`}
          filter="url(#fire-soft)"
          d="M240 126 C 246 140, 254 150, 252 168 C 251 180, 246 188, 238 188 C 230 188, 224 180, 226 168 C 228 154, 236 148, 236 138 C 236 132, 238 128, 240 126 Z"
          fill="url(#fire-tongue)"
        />
        <path
          className={`${styles.flame} ${styles.flameCore}`}
          filter="url(#fire-soft)"
          d="M160 118 C 168 134, 178 146, 176 166 C 175 180, 168 188, 158 188 C 148 188, 142 180, 142 168 C 142 152, 154 142, 156 130 C 157 124, 158 120, 160 118 Z"
          fill="url(#fire-tongue-bright)"
        />
      </g>

      {/* Bed of coals, on top of the tongues' bases */}
      <ellipse className={styles.coals} cx="160" cy="190" rx="118" ry="16" fill="url(#fire-coals)" />

      <g fill="#f6c26a">
        {EMBERS.map((ember) => (
          <circle
            key={`${ember.cx}-${ember.cy}`}
            className={styles.ember}
            style={{ '--drift': ember.drift, '--delay': ember.delay } as CSSProperties}
            cx={ember.cx}
            cy={ember.cy}
            r={ember.r}
          />
        ))}
      </g>
    </svg>
  )
}
