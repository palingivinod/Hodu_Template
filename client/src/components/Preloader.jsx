import { useEffect, useRef, useState } from 'react'
import { brand } from '../data/content'

export default function Preloader({ onDone }) {
  const [percent, setPercent] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('is-locked')

    let current = 0
    const interval = setInterval(() => {
      // Smooth accelerated easing counter
      current += Math.floor(Math.random() * 12) + 6
      if (current >= 100) {
        current = 100
        setPercent(100)
        clearInterval(interval)

        setTimeout(() => {
          setExiting(true)
          setTimeout(() => {
            setHidden(true)
            document.body.classList.remove('is-locked')
            onDone?.()
          }, 850)
        }, 350)
      } else {
        setPercent(current)
      }
    }, 45)

    return () => {
      clearInterval(interval)
      document.body.classList.remove('is-locked')
    }
  }, [onDone])

  if (hidden) return null

  return (
    <div
      ref={rootRef}
      className={`lux-preloader ${exiting ? 'is-exiting' : ''}`}
      aria-busy="true"
      aria-label="Loading HODU Architectural Showcase"
    >
      <div className="lux-preloader__curtain top" />
      <div className="lux-preloader__curtain bottom" />

      <div className="lux-preloader__center">
        <div className="lux-preloader__halo" />

        <div className="lux-preloader__brand-wrap">
          <img
            src={brand.logoTransparent}
            alt="HODU"
            className="lux-preloader__logo"
          />
          <div className="lux-preloader__gold-line" />
        </div>

        <div className="lux-preloader__metric">
          <span className="lux-preloader__num">
            {String(percent).padStart(3, '0')}
          </span>
          <span className="lux-preloader__unit">%</span>
        </div>

        <div className="lux-preloader__bar-track">
          <div
            className="lux-preloader__bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="lux-preloader__label">
          {percent < 40
            ? 'CALIBRATING SPATIAL GEOMETRY'
            : percent < 80
            ? 'CURATING ARCHITECTURAL MATERIALITY'
            : 'REVEALING BESPOKE SANCTUARY'}
        </p>
      </div>
    </div>
  )
}
