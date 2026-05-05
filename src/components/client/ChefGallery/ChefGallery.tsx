'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Lightbox } from '@/components/client/Lightbox'
import { getImageAltText } from '@/lib'
import type { ChefGallery as ChefGalleryData, Language } from '@/types'

import styles from './ChefGallery.module.css'

type Props = { gallery: ChefGalleryData; lang: Language }

export function ChefGallery({ gallery, lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const all = [gallery.hero, ...gallery.supporting]

  const lightboxImages = all.map((img) => ({
    src: img.src,
    alt: getImageAltText(img.altKey, lang),
  }))

  return (
    <>
      <div className={styles.grid}>
        <button
          type="button"
          className={styles.heroTile}
          onClick={() => setOpenIndex(0)}
          aria-label={getImageAltText(gallery.hero.altKey, lang)}
        >
          <Image
            src={gallery.hero.src}
            alt={getImageAltText(gallery.hero.altKey, lang)}
            fill
            sizes="(max-width: 1023px) 100vw, 60vw"
            priority
          />
        </button>
        <div className={styles.thumbs}>
          {gallery.supporting.slice(0, 4).map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={styles.thumb}
              onClick={() => setOpenIndex(i + 1)}
              aria-label={getImageAltText(img.altKey, lang)}
            >
              <Image
                src={img.src}
                alt={getImageAltText(img.altKey, lang)}
                fill
                sizes="(max-width: 639px) 50vw, 20vw"
              />
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        images={lightboxImages}
        initialIndex={openIndex ?? 0}
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
      />
    </>
  )
}
