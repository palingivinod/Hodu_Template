import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`lux-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="lux-header__inner">
          {/* Clean Brand Logo */}
          <Link to="/" className="lux-header__brand" aria-label="HODU Home">
            <img src={brand.logoTransparent} alt="HODU Luxury Villas" className="lux-header__logo" />
          </Link>

          {/* Minimal Clean Navigation */}
          <nav className="lux-header__nav" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `lux-nav-item ${isActive ? 'is-active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `lux-nav-item ${isActive ? 'is-active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Header Actions */}
          <div className="lux-header__actions">
            <button
              type="button"
              className={`lux-burger ${open ? 'is-active' : ''}`}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="lux-burger__bar" />
              <span className="lux-burger__bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`lux-drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation Menu">
        <div className="lux-drawer__backdrop" onClick={() => setOpen(false)} />
        <div className="lux-drawer__panel">
          <div className="lux-drawer__header">
            <img src={brand.logoTransparent} alt="HODU" className="lux-drawer__logo" />
            <button
              type="button"
              className="lux-drawer__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="lux-drawer__nav">
            <NavLink to="/" end onClick={() => setOpen(false)}>
              <span>01</span>
              <strong>Home</strong>
            </NavLink>
            <a href="/#villas" onClick={() => setOpen(false)}>
              <span>02</span>
              <strong>Luxury Villas</strong>
            </a>
            <a href="/#lifestyle" onClick={() => setOpen(false)}>
              <span>03</span>
              <strong>Villa Living</strong>
            </a>
            <a href="/#why-matrix" onClick={() => setOpen(false)}>
              <span>04</span>
              <strong>Why HODU Villas</strong>
            </a>
            <a href="/#materiality" onClick={() => setOpen(false)}>
              <span>05</span>
              <strong>Villa Materiality</strong>
            </a>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <span>06</span>
              <strong>Contact & Concierge</strong>
            </NavLink>
          </nav>

          <div className="lux-drawer__footer">
            <a href="/#enquire" className="lux-btn-gold is-full" onClick={() => setOpen(false)}>
              Book Private Visit
            </a>
            <div className="lux-drawer__direct">
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
