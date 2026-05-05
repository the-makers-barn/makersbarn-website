'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import styles from './ChefStickyHeader.module.css'

const REVEAL_THRESHOLD_PX = 360

interface Props {
  chefName: string
  avatarSrc: string
  avatarAlt: string
  ctaLabel: string
  inquiryHref: string
}

export function ChefStickyHeader({ chefName, avatarSrc, avatarAlt, ctaLabel, inquiryHref }: Props) {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > REVEAL_THRESHOLD_PX)
  })

  return (
    <motion.div
      className={styles.bar}
      initial={{ y: '-100%' }}
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!visible}
    >
      <div className={styles.inner}>
        <div className={styles.identity}>
          <span className={styles.thumb}>
            <Image src={avatarSrc} alt={avatarAlt} fill sizes="44px" />
          </span>
          <span className={styles.nameWrap}>
            <span className={styles.kicker}>Retreat chef</span>
            <span className={styles.name}>{chefName}</span>
          </span>
        </div>
        <a href={inquiryHref} className={styles.cta} tabIndex={visible ? 0 : -1}>
          {ctaLabel}
          <span aria-hidden="true" className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </motion.div>
  )
}
