/**
 * Typography System Constants
 *
 * Standardized typography scale for consistent text styling across the application.
 * Use CSS variables (--font-size-*, --line-height-*, etc.) in CSS modules.
 * Use these TypeScript constants for programmatic usage in components.
 */

// ============================================================================
// FONT SIZES - Standardized to 10 sizes using fluid clamp() values
// ============================================================================

export const FONT_SIZE = {
  /** 12-14px - Captions, legal text, badges */
  XS: 'var(--font-size-xs)',
  /** 14-16px - Labels, metadata, helper text */
  SM: 'var(--font-size-sm)',
  /** 16-18px - Body text default */
  BASE: 'var(--font-size-base)',
  /** 18-20px - Lead paragraphs, emphasized body */
  MD: 'var(--font-size-md)',
  /** 20-24px - Small headings, section labels */
  LG: 'var(--font-size-lg)',
  /** 24-30px - H4 equivalent */
  XL: 'var(--font-size-xl)',
  /** 30-36px - H3 equivalent */
  '2XL': 'var(--font-size-2xl)',
  /** 36-48px - H2 equivalent */
  '3XL': 'var(--font-size-3xl)',
  /** 48-64px - H1 equivalent */
  '4XL': 'var(--font-size-4xl)',
  /** 60-88px - Hero/display text */
  '5XL': 'var(--font-size-5xl)',
} as const

export type FontSize = (typeof FONT_SIZE)[keyof typeof FONT_SIZE]

// ============================================================================
// FONT WEIGHTS - Standardized to 4 weights
// ============================================================================

export const FONT_WEIGHT = {
  /** 400 - Regular body text */
  REGULAR: 400,
  /** 500 - Emphasized text, navigation, buttons */
  MEDIUM: 500,
  /** 600 - Subheadings, important labels */
  SEMIBOLD: 600,
  /** 700 - Primary headings, strong emphasis */
  BOLD: 700,
} as const

export type FontWeight = (typeof FONT_WEIGHT)[keyof typeof FONT_WEIGHT]

// ============================================================================
// LINE HEIGHTS - Standardized to 4 values
// ============================================================================

export const LINE_HEIGHT = {
  /** 1.2 - Headings, display text */
  TIGHT: 'var(--line-height-tight)',
  /** 1.4 - Subheadings, short paragraphs */
  SNUG: 'var(--line-height-snug)',
  /** 1.6 - Body text default */
  NORMAL: 'var(--line-height-normal)',
  /** 1.8 - Long-form content, relaxed reading */
  RELAXED: 'var(--line-height-relaxed)',
} as const

export type LineHeight = (typeof LINE_HEIGHT)[keyof typeof LINE_HEIGHT]

// ============================================================================
// LETTER SPACING - Standardized to 3 values
// ============================================================================

export const LETTER_SPACING = {
  /** -0.01em - Tight, for large headings */
  TIGHT: 'var(--letter-spacing-tight)',
  /** 0 - Normal, default */
  NORMAL: 'var(--letter-spacing-normal)',
  /** 0.05em - Wide, for uppercase/labels */
  WIDE: 'var(--letter-spacing-wide)',
} as const

export type LetterSpacing = (typeof LETTER_SPACING)[keyof typeof LETTER_SPACING]

// ============================================================================
// FONT FAMILIES
// ============================================================================

export const FONT_FAMILY = {
  /** Playfair Display - Headings, display text */
  SERIF: 'var(--font-playfair)',
  /** Quicksand - Body text, UI elements */
  SANS: 'var(--font-quicksand)',
} as const

export type FontFamily = (typeof FONT_FAMILY)[keyof typeof FONT_FAMILY]

// ============================================================================
// TEXT COLORS - Semantic color tokens
// ============================================================================

export const TEXT_COLOR = {
  /** Primary text - #1f130c */
  PRIMARY: 'var(--color-text)',
  /** Secondary/muted text - #4c4336 */
  SECONDARY: 'var(--color-text-muted)',
  /** Tertiary/subtle text - #5c554c */
  TERTIARY: 'var(--color-text-tertiary)',
  /** Brand green text - #294b3a */
  BRAND: 'var(--color-primary)',
  /** Accent gold text - #b8894a */
  ACCENT: 'var(--color-secondary)',
  /** Light/inverse text on dark backgrounds - #ffffff */
  INVERSE: 'var(--color-text-inverse)',
  /** Muted inverse text - rgba(255,255,255,0.7) */
  INVERSE_MUTED: 'var(--color-text-inverse-muted)',
  /** Error text - #dc2626 */
  ERROR: 'var(--color-text-error)',
} as const

export type TextColor = (typeof TEXT_COLOR)[keyof typeof TEXT_COLOR]

// ============================================================================
// TYPOGRAPHY PRESETS - Common combinations for quick application
// ============================================================================

export const TYPOGRAPHY_PRESET = {
  /** Hero display heading */
  DISPLAY: {
    fontSize: FONT_SIZE['5XL'],
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.TIGHT,
    letterSpacing: LETTER_SPACING.TIGHT,
    fontFamily: FONT_FAMILY.SERIF,
  },
  /** Page title (H1) */
  TITLE: {
    fontSize: FONT_SIZE['4XL'],
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.TIGHT,
    letterSpacing: LETTER_SPACING.TIGHT,
    fontFamily: FONT_FAMILY.SERIF,
  },
  /** Section heading (H2) */
  HEADING: {
    fontSize: FONT_SIZE['3XL'],
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.TIGHT,
    letterSpacing: LETTER_SPACING.TIGHT,
    fontFamily: FONT_FAMILY.SERIF,
  },
  /** Subsection heading (H3) */
  SUBHEADING: {
    fontSize: FONT_SIZE['2XL'],
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.SNUG,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SERIF,
  },
  /** Card/component title (H4) */
  CARD_TITLE: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    lineHeight: LINE_HEIGHT.SNUG,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SERIF,
  },
  /** Lead paragraph */
  LEAD: {
    fontSize: FONT_SIZE.MD,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.RELAXED,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SANS,
  },
  /** Default body text */
  BODY: {
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.NORMAL,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SANS,
  },
  /** Small body text */
  BODY_SMALL: {
    fontSize: FONT_SIZE.SM,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.NORMAL,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SANS,
  },
  /** UI labels, buttons */
  LABEL: {
    fontSize: FONT_SIZE.SM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.SNUG,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SANS,
  },
  /** Captions, metadata */
  CAPTION: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.NORMAL,
    letterSpacing: LETTER_SPACING.NORMAL,
    fontFamily: FONT_FAMILY.SANS,
  },
  /** Uppercase labels/kickers */
  OVERLINE: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.MEDIUM,
    lineHeight: LINE_HEIGHT.NORMAL,
    letterSpacing: LETTER_SPACING.WIDE,
    fontFamily: FONT_FAMILY.SANS,
  },
} as const

export type TypographyPreset = keyof typeof TYPOGRAPHY_PRESET
