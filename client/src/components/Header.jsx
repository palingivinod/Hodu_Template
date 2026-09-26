import { useState, useEffect } from 'react'
import { brand } from '../data/content'

export default function Header({ onOpenEnquire }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className={`hodu-header ${scrolled ? 'hodu-header--scrolled' : ''}`}>
        <div className="hodu-container hodu-header__inner">
          <a href="#top" className="hodu-header__brand" aria-label="HODU Home">
            <img src="/brand/logo-transparent.png" alt="HODU" className="hodu-header__logo-img" />
          </a>

          <nav className="hodu-header__nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hodu-header__link">
                {link.name}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenEnquire}
              className="hodu-btn hodu-btn--primary hodu-header__btn"
            >
              START YOUR PROJECT
            </button>

            <button
              className="hodu-header__burger"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileNavOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`hodu-mobile-nav ${mobileNavOpen ? 'hodu-mobile-nav--open' : ''}`}>
        <div className="hodu-mobile-nav__links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hodu-mobile-nav__link"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => {
            setMobileNavOpen(false)
            onOpenEnquire()
          }}
          className="hodu-btn hodu-btn--primary"
          style={{ width: '100%' }}
        >
          START YOUR PROJECT
        </button>
      </div>
    </>
  )
}
