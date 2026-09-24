import EnquireForm from '../components/EnquireForm'
import { brand } from '../data/content'

export default function Contact() {
  return (
    <main className="arch-main">
      <section className="arch-page-head">
        <div className="arch-container">
          <span className="arch-tag">PROJECT SALES &amp; ADVISORY</span>
          <h1 className="arch-page-title">Contact HODU Luxury Villas</h1>
          <p className="arch-page-lead">
            Connect with our Vijayawada project office for high-resolution floor plans, engineering specifications, and private site visit bookings.
          </p>
        </div>
      </section>

      <section className="arch-section arch-section--stone">
        <div className="arch-container">
          <div className="arch-contact-grid">
            <div className="arch-contact-card">
              <span className="arch-contact-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <h3>Project Sales Gallery</h3>
              <p>{brand.address}</p>
              <span className="arch-contact-sub">Escorted Site Visits Available</span>
            </div>

            <div className="arch-contact-card">
              <span className="arch-contact-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <h3>Direct Telephone</h3>
              <p>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              </p>
              <span className="arch-contact-sub">{brand.officeHours}</span>
            </div>

            <div className="arch-contact-card">
              <span className="arch-contact-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <h3>Official Email</h3>
              <p>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
              <span className="arch-contact-sub">Sales Dossiers &amp; Legal Verification</span>
            </div>
          </div>

          <div style={{ marginTop: '3.5rem' }}>
            <EnquireForm />
          </div>
        </div>
      </section>
    </main>
  )
}
