import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { brand } from '../data/content'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Vijayawada IST (Asia/Kolkata)
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setTime(istString)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="lux-footer" id="site-footer">
      {/* Background ambient watermarks */}
      <div className="lux-footer__bg-text" aria-hidden="true">
        HODU
      </div>

      <div className="lux-wrap">
        {/* Top Newsletter / Concierge Bar */}
        <div className="lux-footer__concierge">
          <div className="lux-footer__concierge-text">
            <span className="lux-tag">PRIVATE ACCESS</span>
            <h3>Request the Exclusive HODU Architectural Portfolio</h3>
            <p>
              Receive high-resolution floor plans, engineering specifications, and private villa pricing.
            </p>
          </div>
          <form
            className="lux-footer__form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your interest. The portfolio will be sent to your inbox.')
            }}
          >
            <input
              type="email"
              placeholder="Enter your private email address"
              required
              className="lux-footer__input"
            />
            <button type="submit" className="lux-btn-gold">
              <span>Request Dossier</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>

        {/* Main Grid */}
        <div className="lux-footer__grid">
          {/* Brand Info */}
          <div className="lux-footer__col lux-footer__col--brand">
            <img src={brand.logoTransparent} alt="HODU" className="lux-footer__logo" />
            <p className="lux-footer__tagline">{brand.tagline}</p>
            <p className="lux-footer__desc">{brand.footerBlurb}</p>

            <div className="lux-footer__clock">
              <span className="lux-footer__clock-dot" />
              <div className="lux-footer__clock-info">
                <strong>{time || '18:45:00 IST'}</strong>
                <span>VIJAYAWADA LOCAL TIME</span>
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lux-footer__col">
            <h4 className="lux-footer__heading">Luxury Villas</h4>
            <nav className="lux-footer__nav" aria-label="Villa Links">
              <a href="/#villas">The Signature Villa</a>
              <a href="/#villas">Cornerstone Villa</a>
              <a href="/#villas">Terrace Pavilion</a>
              <a href="/#lifestyle">Spatial Moments</a>
              <a href="/#materiality">Materiality Studio</a>
            </nav>
          </div>

          <div className="lux-footer__col">
            <h4 className="lux-footer__heading">Architecture</h4>
            <nav className="lux-footer__nav" aria-label="Architecture Links">
              <a href="/#why-matrix">The Why HODU Matrix</a>
              <a href="/#milestones">Construction Milestones</a>
              <a href="/#guild">The Architectural Guild</a>
              <a href="/#location">Enclave Location & Map</a>
              <a href="/#faq">Private Concierge FAQ</a>
            </nav>
          </div>

          {/* Contact Direct */}
          <div className="lux-footer__col">
            <h4 className="lux-footer__heading">VIP Concierge</h4>
            <div className="lux-footer__contact-box">
              <p className="lux-footer__address">
                <span>{brand.location}</span>
                <br />
                Andhra Pradesh, India
              </p>
              <p className="lux-footer__contact-link">
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              </p>
              <p className="lux-footer__contact-link">
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>

              <div className="lux-footer__social">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  IG
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  LN
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  YT
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  FB
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="lux-footer__bottom">
          <div className="lux-footer__copy">
            © {new Date().getFullYear()} HODU Luxury Villa Developments. All architectural rights reserved.
          </div>
          <div className="lux-footer__subline">
            <span>Engineered with Bespoke Intention</span>
            <span className="lux-footer__sep">✦</span>
            <span>Vijayawada, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
