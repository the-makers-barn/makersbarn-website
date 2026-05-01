import styles from './ChefsContentSection.module.css'

interface Props {
  h2: string
  paragraphs: readonly string[]
}

export function ChefsContentSection({ h2, paragraphs }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{h2}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className={styles.paragraph}>{p}</p>
      ))}
    </section>
  )
}
