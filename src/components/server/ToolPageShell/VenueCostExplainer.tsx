import type { ReactNode } from 'react'

import styles from './ToolPageShell.module.css'

export interface VenueCostExplainerProps {
  heading: string
  paragraphs: string[]
  example?: ReactNode
}

export function VenueCostExplainer({ heading, paragraphs, example }: VenueCostExplainerProps): ReactNode {
  return (
    <aside className={styles.venueExplainer} aria-labelledby="venue-cost-explainer">
      <h2 id="venue-cost-explainer" className={styles.venueExplainerHeading}>{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.venueExplainerParagraph}>{paragraph}</p>
      ))}
      {example && <div className={styles.venueExplainerExample}>{example}</div>}
    </aside>
  )
}
