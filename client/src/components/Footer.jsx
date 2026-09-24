import { footerData } from '../data/content'

export default function Footer() {
  return (
    <footer className="hodu-footer">
      <div className="hodu-container">
        <div className="hodu-footer__top">
          <div>
            <a href="#top" className="hodu-footer__brand">
              {footerData.brandName}
            </a>
            <p className="hodu-footer__desc">{footerData.description}</p>
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
