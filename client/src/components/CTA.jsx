import { about, brand, media } from '../data/content'

export default function CTA() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band__media">
        <img src={media.cta} alt="" loading="lazy" />
      </div>
      <div className="cta-band__overlay" aria-hidden="true" />
      <div className="wrap cta-band__content" data-fade>
        <h2 className="h2" id="cta-title">
          {about.ctaLines.join(' ')}
        </h2>
        <p className="lead">
          Let&apos;s discuss a residence designed around the way you want to live.
        </p>
        <div className="cta-band__actions">
          <a className="btn btn--fill" href="#enquire">
            Book a site visit
          </a>
          <a className="btn btn--light" href={`mailto:${brand.email}`}>
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  )
}
