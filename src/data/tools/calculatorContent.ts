import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type {
  CalculatorContentMap,
  CalculatorVariantContent,
  LocalizedString,
} from '@/types/tools'

const placeholder = (en: string, nl: string): LocalizedString => ({
  [Language.EN]: en,
  [Language.NL]: nl,
  [Language.DE]: en,
  [Language.ES]: en,
  [Language.FR]: en,
})

const PLACEHOLDER_VARIANT_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    placeholder(
      'Set the number of guests and nights using the sliders.',
      'Stel het aantal gasten en nachten in met de schuifbalken.',
    ),
    placeholder(
      'Set your price per guest, guided by the benchmark range.',
      'Stel je prijs per gast in, met de benchmark als richtlijn.',
    ),
    placeholder(
      'Enter the costs you know — venue, food, your fee, marketing.',
      'Voer de kosten in die je kent — locatie, eten, jouw fee, marketing.',
    ),
    placeholder(
      'Read the live summary for profit, margin, and breakeven.',
      'Lees rechts de live samenvatting voor winst, marge en break-even.',
    ),
  ],
  guideSections: [
    {
      heading: placeholder(
        'What goes into retreat pricing',
        'Wat komt er kijken bij retraiteprijzen',
      ),
      body: [
        placeholder(
          'PLACEHOLDER paragraph — to be replaced by verified content per variant.',
          'PLACEHOLDER alinea — wordt vervangen door geverifieerde content per variant.',
        ),
      ],
    },
    {
      heading: placeholder('Benchmark pricing', 'Benchmarkprijzen'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('How to calculate your breakeven', 'Hoe je break-even berekent'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('Common pricing mistakes', 'Veelgemaakte prijsfouten'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('When to charge more', 'Wanneer je meer kunt vragen'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('Marketing budget rules of thumb', 'Vuistregels voor marketingbudget'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
  ],
  faq: [
    {
      question: placeholder(
        'How long should a first retreat be?',
        'Hoe lang moet een eerste retraite duren?',
      ),
      answer: placeholder(
        'PLACEHOLDER answer to be replaced by verified content.',
        'PLACEHOLDER antwoord wordt vervangen door geverifieerde content.',
      ),
    },
  ],
}

export const CALCULATOR_CONTENT: CalculatorContentMap = {
  [ToolVariant.GENERIC]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.YOGA]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.WELLNESS]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.MEDITATION]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.COACHING]: PLACEHOLDER_VARIANT_CONTENT,
}
