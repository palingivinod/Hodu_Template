import { home, media } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="HODU hero">
      <div className="hero__media media">
        <video
          src={media.heroVideo}
          poster={media.heroStill}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="wrap hero__content" data-fade>
        <p className="hero__meta">Vijayawada · India</p>
        <h1 className="hero__brand">{home.heroEyebrow}</h1>
        <p className="hero__title">{home.heroTitle}</p>
        <p className="hero__sub">{home.heroSub}</p>
        <div className="hero__actions">
          <a className="btn btn--fill" href="#villas">
            View projects
          </a>
          <a className="btn btn--ghost" href="#enquire">
            Enquire now
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        Scroll
        <span />
      </div>
    </section>
  )
}
