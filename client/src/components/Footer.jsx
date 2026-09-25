import { footerData } from '../data/content'

const socialIcons = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  whatsapp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="hodu-footer">
      <div className="hodu-container">
        <div className="hodu-footer__top">
          <div>
            <a href="#top" className="hodu-footer__brand" aria-label="HODU Home">
              <img src="/media/hodu-logo.jpg" alt="HODU" className="hodu-footer__logo-img" />
            </a>
            <p className="hodu-footer__desc">{footerData.description}</p>

            {/* Social Media Links */}
            <div className="hodu-footer__socials">
              {footerData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hodu-footer__social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  {socialIcons[social.key]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="hodu-footer__heading">NAVIGATION</h4>
            <div className="hodu-footer__links">
              {footerData.navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hodu-footer__link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="hodu-footer__heading">CONTACT</h4>
            <div className="hodu-footer__contact-item">
              <strong>Phone:</strong> {footerData.contact.phone}
            </div>
            <div className="hodu-footer__contact-item">
              <strong>Email:</strong> {footerData.contact.email}
            </div>
            <div className="hodu-footer__contact-item">
              <strong>Location:</strong> {footerData.contact.location}
            </div>
          </div>
        </div>

        <div className="hodu-footer__bottom">
          <span>{footerData.copyright}</span>
          <span>Architectural Villa Construction</span>
        </div>
      </div>
    </footer>
  )
}
