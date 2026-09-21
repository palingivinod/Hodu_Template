import { NavLink } from 'react-router-dom'
import { brand, nav } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap site-foot__grid">
        <div>
          <p className="site-foot__brand">HODU</p>
          <p className="site-foot__tag">{brand.tagline}</p>
          <p className="site-foot__blurb">{brand.footerBlurb}</p>
          <div className="site-foot__social" aria-label="Social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <div>
          <h4>Navigate</h4>
          <nav aria-label="Footer">
            {nav.map((item) => (
              <NavLink key={item.href} to={item.href} end={item.href === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div>
          <h4>Contact</h4>
          <p style={{ margin: '0 0 0.4rem' }}>
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
          </p>
          <p style={{ margin: '0 0 0.4rem' }}>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>
          <p style={{ margin: 0 }}>{brand.location}</p>
        </div>
      </div>
      <div className="wrap site-foot__bottom">
        <span>© {new Date().getFullYear()} HODU. All rights reserved.</span>
        <div className="site-foot__legal">
          <a href="/#commitment">Privacy Policy</a>
          <a href="/#commitment">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
