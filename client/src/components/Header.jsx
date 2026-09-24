import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Transparent Architectural Header */}
      <header className={`arch-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="arch-container arch-header__inner">
          {/* Logo Only (Increased Size) */}
          <Link to="/" className="arch-header__logo-link" aria-label="HODU Home">
            <img
              src={brand.logo}
              alt="HODU"
              className="arch-header__logo-img"
            />
          </Link>

          {/* Clean Navigation: Home & Contact */}
          <nav className="arch-nav" aria-label="Primary Navigation">
            <NavLink to="/" end className={({ isActive }) => `arch-nav__link ${isActive ? 'is-active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `arch-nav__link ${isActive ? 'is-active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Header Action Button / Burger */}
          <div className="arch-header__actions">
            <button
              type="button"
              className={`arch-burger ${open ? 'is-active' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="arch-mobile-menu">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </>
  )
}
