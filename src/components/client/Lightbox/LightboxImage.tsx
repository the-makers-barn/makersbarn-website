'use client'

import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { LIGHTBOX_ANIMATION } from './constants'
import type { LightboxImageProps, NavigationDirection } from './types'
import styles from './Lightbox.module.css'

function getAnimationVariants(direction: NavigationDirection) {
  if (direction === 'next') {
    return LIGHTBOX_ANIMATION.slideNext
  }
  if (direction === 'prev') {
    return LIGHTBOX_ANIMATION.slidePrev
  }
  return LIGHTBOX_ANIMATION.image
}

export const LightboxImage = memo(function LightboxImage({
  image,
  isActive,
  direction,
  onLoad,
  onError,
}: LightboxImageProps) {
  const variants = getAnimationVariants(direction)

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.figure
          key={image.src}
          className={styles.imageContainer}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={LIGHTBOX_ANIMATION.image.transition}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="90vw"
            className={styles.image}
            priority
            onLoad={onLoad}
            onError={onError}
          />
          {image.caption && (
            <figcaption className={styles.caption}>{image.caption}</figcaption>
          )}
        </motion.figure>
      )}
    </AnimatePresence>
  )
})
