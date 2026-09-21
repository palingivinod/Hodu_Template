import { Link } from 'react-router-dom'
import {
  brand,
  buildProcess,
  home,
  lifeMoments,
  locationAmenities,
  media,
  philosophyItems,
  qualityPoints,
  residences,
  resolveImage,
  teamExpertise,
  whyHodu,
} from '../data/content'
import useMotion from '../hooks/useMotion'

export default function Home({ ready = true }) {
  const root = useMotion(ready)

  return (
    <main ref={root}>
      {/* 2. HERO */}
      <section className="hero" id="top">
        <div className="hero__bg pic">
          <img src={media.hero} alt="HODU villa exterior in Vijayawada" fetchPriority="high" />
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <p className="hero__label" data-fade>
              Villa development · Vijayawada
            </p>
            <h1 className="hero__title" data-roll>
              <span className="roll-line">
                <span>Live</span>
              </span>
              <span className="roll-line">
                <span>Beyond</span>
              </span>
              <span className="roll-line">
                <span>Extraordinary</span>
              </span>
            </h1>
            <p className="hero__sub" data-fade>
              {home.heroSub}
            </p>
            <div className="hero__actions" data-fade>
              <a className="btn btn--solid" href="#villas">
                Explore our villas <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--light" href="/contact">
                Book a site visit
              </a>
            </div>
          </div>
          <div className="hero__rail" aria-hidden="true">
            <span>Spaces</span>
            <span>People</span>
            <span>Nature</span>
            <span>A better</span>
            <span>Tomorrow</span>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          Scroll <i />
        </div>
        <div className="hero__place" aria-hidden="true">
          Vijayawada
          <br />
          India
        </div>
      </section>

      {/* 3. HODU STORY */}
      <section className="sec sec--white" id="about-story">
        <div className="wrap story">
          <div>
            <p className="eyebrow" data-fade>
              The HODU story
            </p>
            <h2 className="heading" data-roll>
              <span className="roll-line">
                <span>More than a house.</span>
              </span>
              <span className="roll-line">
                <span>A better way to live.</span>
              </span>
            </h2>
            <p className="lead" style={{ marginTop: '1.35rem' }} data-fade>
              HODU is an architecture-led villa development company creating thoughtfully designed
              homes where modern design, quality construction and everyday living come together in
              perfect balance.
            </p>
            <Link className="text-link" to="/contact" data-fade>
              Discover HODU <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="story__media-wrap" data-fade>
            <div className="pic story__media">
              <img src={media.story} alt="HODU villa interior" loading="lazy" />
            </div>
            <div className="story__card" aria-hidden="true">
              Homes
              <br />
              that
              <br />
              feel
              <br />
              like
              <br />
              you
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY — reference editorial layout */}
      <section className="phil" id="philosophy">
        <div className="phil__wrap">
          <div className="phil__hero">
            <div className="phil__hero-copy" data-fade>
              <div className="phil__eyebrow">
                <span>The HODU philosophy</span>
                <i aria-hidden="true" />
              </div>
              <h2 className="phil__heading">
                We don&apos;t just build homes.
                <br />
                We create spaces that
                <br />
                become part of how you live.
              </h2>
              <p className="phil__support">
                Luxury is not measured by how much a space contains. It is felt in how naturally
                everything belongs — a line of light across stone, the quiet between rooms, a garden
                beyond a window, the texture of timber beneath the hand, and a space that gives life
                room to breathe.
              </p>
            </div>
            <div className="phil__hero-media" data-fade>
              <img
                src={media.philosophyHero}
                alt="Contemporary villa interior opening to landscape"
                loading="lazy"
              />
              <div className="phil__side-label" aria-hidden="true">
                <span>Spaces</span>
                <span>that feel</span>
                <span>like you</span>
              </div>
            </div>
          </div>

          <div className="phil__rows" data-cascade>
            {philosophyItems.map((item) => (
              <a key={item.id} className="phil__row" href="/contact">
                <span className="phil__num">{item.id}</span>
                <span className="phil__sep" aria-hidden="true" />
                <div className="phil__text">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <div className="phil__thumb">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE BUILD */}
      <section className="sec sec--teal" id="process">
        <div className="wrap">
          <div className="build-head" data-fade>
            <div>
              <p className="eyebrow">How we build</p>
              <h2 className="heading">
                From foundation to finishing,
                <br />
                every detail has a purpose.
              </h2>
              <p className="lead" style={{ marginTop: '1.1rem' }}>
                A transparent process. A committed team. Homes built with care at every stage.
              </p>
            </div>
            <div className="build-head__right">
              <p className="eyebrow" style={{ margin: 0 }}>
                Our process
              </p>
            </div>
          </div>
          <div className="build-track" data-cascade>
            {buildProcess.map((step) => (
              <article key={step.id} className="build-step">
                <div className="pic build-step__img">
                  <img src={resolveImage(step.imageKey)} alt={step.title} loading="lazy" />
                </div>
                <p className="build-step__num">{step.id}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUILT TO LAST */}
      <section className="quality" id="quality">
        <div className="quality__wrap">
          <div className="quality__intro" data-fade>
            <p className="quality__eyebrow">Built to last</p>
            <h2 className="quality__heading">Built to last.</h2>
            <p className="quality__stmt">
              Quality is not a final check.
              <br />
              It is part of every stage.
            </p>
          </div>

          <div className="quality__media quality__media--material" data-quality-img>
            <img
              src="/media/hodu-quality-material.png"
              alt="Architectural materials — stone, timber and concrete"
              loading="lazy"
            />
          </div>

          <div className="quality__list" data-cascade>
            {qualityPoints.map((item) => (
              <article key={item.id || item.title} className="quality__item">
                <span className="quality__num">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
            <p className="quality__bridge" aria-hidden="true">
              From material
              <br />
              to home
            </p>
          </div>

          <div className="quality__media quality__media--villa" data-quality-img>
            <img
              src="/media/hodu-quality-villa.png"
              alt="Completed HODU luxury villa"
              loading="lazy"
            />
            <div className="quality__side-label" aria-hidden="true">
              <span>Quality</span>
              <span>Craft</span>
              <span>Detail</span>
              <span>Home</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PEOPLE */}
      <section className="people" id="people">
        <div className="people__wrap">
          <div className="people__left" data-fade>
            <div className="people__eyebrow">
              <span>The people behind HODU</span>
              <i aria-hidden="true" />
            </div>
            <h2 className="people__heading">
              Good architecture requires
              <br />
              good people
              <br />
              behind it.
            </h2>
            <p className="people__desc">
              Our architects, engineers, project managers and site teams work together with a shared
              commitment — to create homes that people are proud to live in.
            </p>
            <Link className="people__btn" to="/contact">
              Meet our team
            </Link>

            <div className="people__grid" data-cascade>
              {teamExpertise.map((item) => (
                <article key={item.id} className="people__skill">
                  <span className="people__num">{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="people__footer-line">
              <i aria-hidden="true" />
              <span>Different expertise. A shared purpose.</span>
              <i aria-hidden="true" />
            </div>
          </div>

          <div className="people__right" data-people-img>
            <div className="people__photo">
              <img
                src="/media/hodu-team-architecture.png"
                alt="HODU architects and team reviewing architectural plans"
                loading="lazy"
              />
              <div className="people__overlay" aria-hidden="true">
                <span>People</span>
                <span>Spaces</span>
                <span>Better</span>
                <span>Tomorrows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FEATURED VILLAS */}
      <section className="sec sec--white" id="villas">
        <div className="wrap">
          <div className="feat-head" data-fade>
            <div>
              <p className="eyebrow">Featured villas</p>
              <h2 className="heading">
                Homes designed differently.
                <br />
                Built with the same commitment.
              </h2>
            </div>
            <a className="text-link" href="#projects" style={{ marginTop: 0 }}>
              View all projects <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>
          <div className="feat-grid" data-cascade>
            {residences.map((item) => (
              <article key={item.id} className="feat-card">
                <div className="pic feat-card__img">
                  <img src={resolveImage(item.imageKey)} alt={item.title} loading="lazy" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.location} · {item.typology}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIFE INSIDE */}
      <section className="sec sec--warm" id="lifestyle">
        <div className="wrap">
          <div className="life-head" data-fade>
            <div>
              <p className="eyebrow">Life inside HODU</p>
              <h2 className="heading">Spaces for every moment.</h2>
            </div>
            <a className="text-link" href="#lifestyle" style={{ marginTop: 0 }}>
              Explore lifestyle <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>
          <p className="life-note" data-fade>
            More than interiors. It is part of the experience.
          </p>
          <div className="life-grid" data-cascade>
            {lifeMoments.map((item) => (
              <article key={item.title} className="life-item">
                <div className="pic life-item__img">
                  <img src={resolveImage(item.imageKey)} alt={item.title} loading="lazy" />
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY HODU */}
      <section className="why" id="projects">
        <div className="why__wrap">
          <div className="why__top">
            <div className="why__copy" data-fade>
              <div className="why__eyebrow">
                <span>Why HODU</span>
                <i aria-hidden="true" />
              </div>
              <h2 className="why__heading">
                A thoughtful approach.
                <br />
                A lasting difference.
              </h2>
              <p className="why__desc">
                Every decision is considered — from the first line of the drawing to the final detail
                of the home.
              </p>
              <a className="why__cta" href="#philosophy">
                <span className="why__cta-circle" aria-hidden="true">
                  →
                </span>
                Our philosophy
              </a>
            </div>

            <div className="why__hero" data-why-hero>
              <img
                src="/media/hodu-why-hero.png"
                alt="HODU luxury contemporary villa"
                loading="lazy"
              />
              <div className="why__hero-labels" aria-hidden="true">
                <p className="why__hero-top">
                  Designed
                  <br />
                  with
                  <br />
                  intention
                </p>
                <div className="why__hero-stack">
                  <span>Spaces</span>
                  <i />
                  <span>People</span>
                  <i />
                  <span>Lives</span>
                  <i />
                  <span>Better</span>
                  <i />
                  <span>Tomorrows</span>
                </div>
              </div>
            </div>
          </div>

          <div className="why__cards" data-cascade>
            {whyHodu.map((item) => (
              <a key={item.id} className="why-card" href="/contact">
                <div className="why-card__media">
                  <img src={item.image} alt={item.lines.join(' ')} loading="lazy" />
                  <div className="why-card__overlay">
                    {item.overlay.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                    <i aria-hidden="true" />
                  </div>
                </div>
                <div className="why-card__body">
                  <span className="why-card__num">{item.id}</span>
                  <h3>
                    {item.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h3>
                  <p>{item.copy}</p>
                  <span className="why-card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 11. LOCATION */}
      <section className="sec sec--warm" id="connect">
        <div className="wrap loc">
          <div data-fade>
            <h2 className="heading">
              Connected to everything.
              <br />
              Designed for privacy.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              A prime location in Vijayawada with easy access to key destinations, while offering a
              peaceful environment for modern family living.
            </p>
            <a
              className="btn btn--dark"
              href="https://www.google.com/maps/search/?api=1&query=Vijayawada%2C+Andhra+Pradesh%2C+India"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: '1.5rem' }}
            >
              View location <span aria-hidden="true">→</span>
            </a>
            <div className="loc__list">
              {locationAmenities.map((item) => (
                <span key={item.name}>
                  {item.name}
                  {item.detail ? ` · ${item.detail}` : ''}
                </span>
              ))}
            </div>
          </div>
          <div className="loc__map" data-fade>
            <iframe
              title="HODU location — Vijayawada, Andhra Pradesh"
              src="https://maps.google.com/maps?q=Vijayawada%2C%20Andhra%20Pradesh%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 12. COMMITMENT */}
      <section className="sec sec--white sec--commit" id="commitment">
        <div className="wrap commit">
          <p className="eyebrow" data-fade>
            Our commitment
          </p>
          <h2 className="heading" data-roll>
            <span className="roll-line">
              <span>Building trust through</span>
            </span>
            <span className="roll-line">
              <span>every home we create.</span>
            </span>
          </h2>
          <div className="commit__rule" aria-hidden="true" />
          <p data-fade>
            From the first conversation to handover, HODU is committed to clarity, craftsmanship and
            architecture that continues to feel right years later. We do not invent testimonials —
            we let the work speak.
          </p>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg">
          <img src={media.cta} alt="" loading="lazy" />
        </div>
        <div className="final-cta__shade" aria-hidden="true" />
        <div className="wrap final-cta__content" data-fade>
          <h2 className="heading">Ready to come home?</h2>
          <p className="lead">
            Let&apos;s discuss a home designed around
            <br />
            the way you want to live.
          </p>
          <div className="final-cta__actions">
            <a className="btn btn--solid" href="/contact">
              Book a site visit
            </a>
            <a className="btn btn--light" href={`mailto:${brand.email}`}>
              Talk to our team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
