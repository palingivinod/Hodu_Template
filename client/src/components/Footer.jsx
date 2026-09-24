import { Link } from 'react-router-dom'
import { brand } from '../data/content'

function SocialIcon({ name }) {
  switch (name) {
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    case 'WhatsApp':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.115.551 4.183 1.6 6.002L.055 24l6.155-1.614c1.761.96 3.754 1.464 5.821 1.464 6.634 0 12.031-5.397 12.031-12.019C24.062 5.397 18.665 0 12.031 0zm0 22.029c-1.802 0-3.568-.484-5.111-1.399l-.367-.218-3.799.996 1.013-3.704-.239-.38a9.988 9.988 0 0 1-1.533-5.293c0-5.528 4.498-10.026 10.036-10.026 5.538 0 10.036 4.498 10.036 10.026 0 5.528-4.498 10.026-10.036 10.026zm5.498-7.514c-.301-.151-1.782-.879-2.058-.979-.276-.1-.477-.151-.678.151-.201.301-.779.979-.955 1.18-.176.201-.351.226-.653.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.151-.678-1.633-.929-2.236-.244-.588-.493-.508-.678-.518-.176-.01-.377-.01-.578-.01s-.527.075-.804.377c-.276.301-1.055 1.03-1.055 2.512s1.08 2.914 1.231 3.115c.151.201 2.126 3.246 5.15 4.553.719.311 1.281.497 1.719.636.723.23 1.381.198 1.901.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.277-.201-.578-.352z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer className="arch-footer" id="site-footer">
      {/* Main Clean Footer */}
      <div className="arch-footer__main">
        <div className="arch-container arch-footer__compact-grid">
          {/* Column 1: Brand */}
          <div className="arch-footer__brand-box">
            <Link to="/" className="arch-footer__logo-wrap" aria-label="HODU Home">
              <img src={brand.logo} alt="HODU" className="arch-footer__logo" />
            </Link>
            <p className="arch-footer__desc">{brand.description}</p>
          </div>

          {/* Column 2: Navigation (Home & Contact) */}
          <div className="arch-footer__nav-box">
            <h4 className="arch-footer__heading">Navigation</h4>
            <ul className="arch-footer__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Original Social Media Logos (No Boxes) */}
          <div className="arch-footer__social-box">
            <h4 className="arch-footer__heading">Follow HODU</h4>
            <div className="arch-footer__social-icons">
              {brand.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arch-social-icon-btn"
                  aria-label={s.name}
                  title={s.name}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="arch-footer__bottom">
        <div className="arch-container arch-footer__bottom-inner">
          <p>© {new Date().getFullYear()} {brand.fullName}. All rights reserved.</p>
          <p className="arch-footer__disclaimer">
            Disclaimer: All architectural perspectives, dimensions, and specifications are conceptual and subject to change by the developer in compliance with regulatory approvals.
          </p>
        </div>
      </div>
    </footer>
  )
}
