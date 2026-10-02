'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Lightbox, type LightboxImage } from '@/components/client/Lightbox'
import { cn } from '@/lib/cn'

import styles from './CabinGallery.module.css'

/** Tiles shown next to the hero image; the rest open from "show all". */
const GRID_TILE_COUNT = 4

interface CabinGalleryProps {
  images: readonly LightboxImage[]
  showAllLabel: string
  openPhotoLabel: string
}

/**
 * Listing-style photo grid: one large hero tile with four smaller tiles beside
 * it. Every tile, and the "show all" button, opens the fullscreen lightbox.
 */
export function CabinGallery({ images, showAllLabel, openPhotoLabel }: CabinGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (images.length === 0) {
    return null
  }

  const visibleImages = images.slice(0, GRID_TILE_COUNT + 1)

  return (
    <>
      <div className={styles.gallery}>
        {visibleImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={cn(styles.tile, index === 0 && styles.heroTile)}
            onClick={() => setOpenIndex(index)}
            aria-label={`${openPhotoLabel}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index === 0 ? '(max-width: 767px) 100vw, 50vw' : '25vw'}
              priority={index === 0}
              className={styles.image}
            />
          </button>
        ))}

        <button
          type="button"
          className={styles.showAll}
          onClick={() => setOpenIndex(0)}
        >
          {showAllLabel} ({images.length})
        </button>
      </div>

      <Lightbox
        images={[...images]}
        initialIndex={openIndex ?? 0}
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
      />
    </>
  )
}
