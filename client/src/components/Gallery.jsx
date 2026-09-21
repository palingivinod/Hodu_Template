import { useCallback, useEffect, useState } from 'react'
import { media } from '../data/content'

export default function Gallery() {
  const images = [
    media.interiors[0],
    media.interiors[1],
    media.interiors[2],
    media.interiors[3],
    media.interiors[4],
    media.interiors[5],
  ]
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const show = (i) => {
    setIndex(i)
    setOpen(true)
  }

  const close = useCallback(() => setOpen(false), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, prev, next])

  return (
    <section className="section section--soft" id="interiors" aria-labelledby="gallery-title">
      <div className="wrap">
        <div data-fade>
          <p className="eyebrow">Interiors</p>
          <h2 className="h2" id="gallery-title">
            Step inside.
          </h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            Architecture sets the frame. Interiors give it life.
          </p>
        </div>
        <div className="gallery" style={{ marginTop: '2.5rem' }} data-cascade>
          <button type="button" className="gallery__main media" onClick={() => show(0)} aria-label="Open gallery image 1">
            <img src={images[0]} alt="Villa interior living space" loading="lazy" />
          </button>
          <div className="gallery__mid">
            <button type="button" className="media" onClick={() => show(1)} aria-label="Open gallery image 2">
              <img src={images[1]} alt="Villa interior detail" loading="lazy" />
            </button>
            <button type="button" className="media" onClick={() => show(2)} aria-label="Open gallery image 3">
              <img src={images[2]} alt="Villa bedroom" loading="lazy" />
            </button>
          </div>
          <div className="gallery__thumbs">
            {images.slice(3).map((src, i) => (
              <button
                key={src}
                type="button"
                className="media"
                onClick={() => show(i + 3)}
                aria-label={`Open gallery image ${i + 4}`}
              >
                <img src={src} alt={`Interior detail ${i + 4}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`lightbox ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Image lightbox">
        <button type="button" className="lightbox__close" onClick={close} aria-label="Close lightbox">
          Close
        </button>
        <button type="button" className="lightbox__prev" onClick={prev} aria-label="Previous image">
          Prev
        </button>
        <img className="lightbox__img" src={images[index]} alt={`Gallery image ${index + 1}`} />
        <button type="button" className="lightbox__next" onClick={next} aria-label="Next image">
          Next
        </button>
        <p className="lightbox__count">
          {index + 1} / {images.length}
        </p>
      </div>
    </section>
  )
}
