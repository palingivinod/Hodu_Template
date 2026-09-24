import { ctaData } from '../data/content'

export default function CTASection({ onOpenEnquire }) {
  return (
    <section className="hodu-cta" id="contact">
      <div className="hodu-container hodu-cta__content">
        <h2 className="hodu-cta__title">
          {ctaData.headingLine1}
          <br />
          {ctaData.headingLine2}
        </h2>
        <p className="hodu-cta__copy">{ctaData.copy}</p>

        <div className="hodu-cta__actions">
          <button onClick={onOpenEnquire} className="hodu-btn hodu-btn--light">
            {ctaData.primaryBtn} →
          </button>
          <a href="mailto:enquiries@hodu.in" className="hodu-btn hodu-btn--outline-light">
            {ctaData.secondaryBtn}
          </a>
        </div>
      </div>
    </section>
  )
}
