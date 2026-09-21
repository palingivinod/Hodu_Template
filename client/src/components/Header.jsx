import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [onHero, setOnHero] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => setOpen(false), [location])
  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 48)
      if (isHome) {
        const hero = document.getElementById('top')
        setOnHero(hero ? y < hero.offsetHeight - 80 : y < 500)
      } else {
        setOnHero(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const solid = !isHome || scrolled || !onHero || open

  return (
    <>
      <header className={`site-header ${solid ? 'is-solid' : 'is-hero'}`}>
        <div className="wrap nav">
          <Link to="/" className="nav__logo" aria-label="HODU home">
            <img src={brand.logoTransparent} alt="HODU" />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                to={item.href}
                end={item.href === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <button type="button" className="drawer__close" onClick={() => setOpen(false)}>
          Close
        </button>
        <nav>
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
