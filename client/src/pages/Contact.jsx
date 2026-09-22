import EnquireForm from '../components/EnquireForm'
import { brand } from '../data/content'
import useMotion from '../hooks/useMotion'

export default function Contact({ ready }) {
  const root = useMotion(ready)

  return (
    <main ref={root} className="lux-main">
      <section className="lux-contact-hero">
        <div className="lux-wrap" data-fade>
          <span className="lux-tag">PRIVATE CONCIERGE</span>
          <h1 className="lux-hero__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}>
            Begin the Conversation.
            <br />
            <span className="lux-gold-gradient">Discover Your Sanctuary.</span>
          </h1>
          <p className="lux-lead" style={{ marginTop: '1.2rem', maxWidth: '42rem' }}>
            Reach the HODU Private Advisory team in {brand.location}. We invite you for a
            confidential discussion and private escorted site walkthrough across our villa enclaves.
          </p>

          <div className="lux-contact-cards-grid" style={{ marginTop: '3rem' }}>
            <div className="lux-contact-card">
              <span className="lux-contact-card__icon">📍</span>
              <h4>Bespoke Studio & Enclave</h4>
              <p>{brand.location}</p>
              <p className="lux-contact-card__sub">Andhra Pradesh, India</p>
            </div>

            <div className="lux-contact-card">
              <span className="lux-contact-card__icon">📞</span>
              <h4>Direct Telephone</h4>
              <p>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              </p>
              <p className="lux-contact-card__sub">Mon – Sun · 9:00 AM – 8:00 PM IST</p>
            </div>

            <div className="lux-contact-card">
              <span className="lux-contact-card__icon">✉️</span>
              <h4>Electronic Mail</h4>
              <p>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
              <p className="lux-contact-card__sub">Private Dossiers & Enquiries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--obsidian" style={{ paddingTop: '2rem' }}>
        <div className="lux-wrap">
          <EnquireForm />
        </div>
      </section>
    </main>
  )
}
