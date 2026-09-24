import { useState } from 'react'
import EnquireForm from '../components/EnquireForm'
import {
  aboutHodu,
  brand,
  connectivity,
  executionPhases,
  faqs,
  luxuryVillas,
  masterSpecs,
  media,
  strategicPillars,
} from '../data/content'

function FeatureIcon({ id }) {
  switch (id) {
    case 'architect':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.5L21.174 6.812z" />
          <path d="m15 5 4 4" />
          <path d="m9 11 4 4" />
        </svg>
      )
    case 'climate':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    case 'structure':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18M3 7h18M12 3L2 7h20L12 3zM6 7v14M10 7v14M14 7v14M18 7v14" />
        </svg>
      )
    case 'location':
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    default:
      return null
  }
}

export default function Home() {
  const [activeVilla, setActiveVilla] = useState(0)
  const currentVilla = luxuryVillas[activeVilla]

  const [openFaq, setOpenFaq] = useState(0)
  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <main className="arch-main">
      {/* =========================================================================
          1. HERO SECTION (Image #1: /media/hero.png)
      ========================================================================= */}
      <section className="arch-hero" id="top">
        <div className="arch-hero__bg">
          <img
            src={media.hero}
            alt="HODU Luxury Villas in Vijayawada"
            className="arch-hero__img"
            fetchPriority="high"
          />
          <div className="arch-hero__overlay" />
        </div>

        <div className="arch-container arch-hero__container">
          <div className="arch-hero__content">
            <div className="arch-tag arch-hero__tag">VIJAYAWADA GATED COMMUNITY</div>
            <h1 className="arch-hero__title">
              Luxury Villas in Vijayawada
            </h1>
            <p className="arch-hero__subtitle">
              Private 4 &amp; 5 BHK custom villas with open courtyards and swimming pools.
            </p>

            <div className="arch-hero__actions">
              <a href="#villas" className="arch-btn arch-btn--gold arch-btn--lg">
                Explore Villa Plans
              </a>
              <a href="#enquire" className="arch-btn arch-btn--outline arch-btn--lg">
                Book a Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT HODU SECTION
      ========================================================================= */}
      <section className="arch-section arch-section--white" id="about">
        <div className="arch-container">
          <div className="arch-about-head">
            <span className="arch-tag">{aboutHodu.tag}</span>
            <h2 className="arch-heading">{aboutHodu.title}</h2>
            <p className="arch-lead">{aboutHodu.lead}</p>
          </div>

          <div className="arch-about-story">
            {aboutHodu.story.map((paragraph, sIdx) => (
              <p key={sIdx} className="arch-about-para">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="arch-about-grid">
            {aboutHodu.features.map((feat) => (
              <div key={feat.id} className="arch-about-card">
                <div className="arch-about-icon">
                  <FeatureIcon id={feat.id} />
                </div>
                <h3 className="arch-about-card-title">{feat.title}</h3>
                <p className="arch-about-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE HODU (Image #2: /media/hodu-team-architecture.png)
      ========================================================================= */}
      <section className="arch-section arch-section--stone" id="strategies">
        <div className="arch-container">
          <div className="arch-section-head">
            <span className="arch-tag">WHY CHOOSE HODU</span>
            <h2 className="arch-heading">What Makes Our Villas Special</h2>
            <p className="arch-lead">
              We design every home around natural light, fresh air, custom floor plans, and solid construction.
            </p>
          </div>

          <div className="arch-strategy-layout">
            {/* Left: Strategic Image #2 */}
            <div className="arch-strategy-media-box">
              <img
                src={media.strategy}
                alt="HODU Architecture and Planning Team"
                className="arch-strategy-img"
                loading="lazy"
              />
              <div className="arch-strategy-media-caption">
                <strong>Architect-Led Construction</strong>
                <span>Work directly with our design and engineering team</span>
              </div>
            </div>

            {/* Right: 4 Pillar Cards in 2 Rows */}
            <div className="arch-strategy-cards-grid">
              {strategicPillars.map((pillar) => (
                <div key={pillar.num} className="arch-pillar-box">
                  <div className="arch-pillar-box__head">
                    <span className="arch-pillar-num">{pillar.num}</span>
                    <div>
                      <h3 className="arch-pillar-title">{pillar.title}</h3>
                      <span className="arch-pillar-sub">{pillar.subtitle}</span>
                    </div>
                  </div>
                  <p className="arch-pillar-desc">{pillar.description}</p>
                  <ul className="arch-pillar-points">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span className="arch-dot">✦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW WE BUILD (Step-by-Step Construction Process)
      ========================================================================= */}
      <section className="arch-section arch-section--white" id="execution">
        <div className="arch-container">
          <div className="arch-section-head arch-section-head--center">
            <span className="arch-tag">HOW WE BUILD</span>
            <h2 className="arch-heading">Our Step-by-Step Construction Process</h2>
            <p className="arch-lead">
              A transparent, 6-step quality process from soil testing to final handover.
            </p>
          </div>

          <div className="arch-roadmap-grid">
            {executionPhases.map((phase) => (
              <div key={phase.phase} className="arch-roadmap-card">
                <div className="arch-roadmap-card__num">STEP {phase.phase}</div>
                <h3 className="arch-roadmap-card__title">{phase.title}</h3>
                <p className="arch-roadmap-card__desc">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. VILLA PLANS & MODELS (Image #3: /media/hodu-quality-villa.png)
      ========================================================================= */}
      <section className="arch-section arch-section--stone" id="villas">
        <div className="arch-container">
          <div className="arch-section-head arch-section-head--center">
            <span className="arch-tag">OUR VILLA PLANS</span>
            <h2 className="arch-heading">Explore 4 &amp; 5 BHK Villa Options</h2>
            <p className="arch-lead">
              Three spacious layouts designed for family comfort, entertaining, and privacy.
            </p>
          </div>

          {/* Model Selector Tabs */}
          <div className="arch-villa-tabs">
            {luxuryVillas.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                className={`arch-villa-tab-btn ${activeVilla === idx ? 'is-active' : ''}`}
                onClick={() => setActiveVilla(idx)}
              >
                <span className="arch-villa-tab-num">OPTION 0{idx + 1}</span>
                <strong className="arch-villa-tab-name">{v.name}</strong>
                <span className="arch-villa-tab-meta">
                  {v.builtUpArea} · {v.bedrooms.split(' ')[0]} BHK
                </span>
              </button>
            ))}
          </div>

          {/* Active Villa Detail Showcase (Clean & Simple) */}
          <div className="arch-villa-display">
            <div className="arch-villa-display__grid">
              {/* Left Column: Image #3 (Villa Elevation) */}
              <div className="arch-villa-display__media">
                <img
                  src={media.villa}
                  alt={currentVilla.name}
                  className="arch-villa-display__img"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Clean Specs & Highlights */}
              <div className="arch-villa-display__body">
                <div className="arch-villa-header-row">
                  <h3 className="arch-villa-display__title">{currentVilla.name}</h3>
                  <span className="arch-tag">{currentVilla.typology}</span>
                </div>
                <p className="arch-villa-display__desc">{currentVilla.description}</p>

                {/* Specs Data Grid */}
                <div className="arch-spec-matrix">
                  <div className="arch-spec-box">
                    <span className="arch-spec-box__label">Built-Up Area</span>
                    <strong className="arch-spec-box__val">{currentVilla.builtUpArea}</strong>
                  </div>
                  <div className="arch-spec-box">
                    <span className="arch-spec-box__label">Plot Size</span>
                    <strong className="arch-spec-box__val">{currentVilla.plotArea}</strong>
                  </div>
                  <div className="arch-spec-box">
                    <span className="arch-spec-box__label">Structure</span>
                    <strong className="arch-spec-box__val">{currentVilla.floors}</strong>
                  </div>
                  <div className="arch-spec-box">
                    <span className="arch-spec-box__label">Bedrooms</span>
                    <strong className="arch-spec-box__val">{currentVilla.bedrooms}</strong>
                  </div>
                  <div className="arch-spec-box">
                    <span className="arch-spec-box__label">Swimming Pool</span>
                    <strong className="arch-spec-box__val">{currentVilla.pool}</strong>
                  </div>
                  <div className="arch-spec-box">
                    <span className="arch-spec-box__label">Car Parking</span>
                    <strong className="arch-spec-box__val">{currentVilla.parking}</strong>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="arch-highlights-block">
                  <h4>Key Features:</h4>
                  <ul>
                    {currentVilla.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <span className="arch-check">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="arch-villa-display__actions">
                  <a href="#enquire" className="arch-btn arch-btn--gold arch-btn--sm">
                    Inquire About {currentVilla.name}
                  </a>
                  <a href="#specifications" className="arch-btn arch-btn--outline-dark arch-btn--sm">
                    View Materials &amp; Specs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. COURTYARD LIVING (Image #4: /media/hodu-why-hero.png)
      ========================================================================= */}
      <section className="arch-section arch-section--white" id="courtyards">
        <div className="arch-container">
          <div className="arch-split-grid">
            {/* Left: Content */}
            <div className="arch-split-text">
              <span className="arch-tag">COURTYARD LIVING</span>
              <h2 className="arch-heading">
                Fresh Air, Natural Light &amp; Total Privacy
              </h2>
              <p className="arch-para">
                Our central open-to-sky courtyards bring the outdoors inside. Large glass windows allow
                sunlight to fill your living and dining rooms while keeping your family space completely
                private from the outside.
              </p>

              <div className="arch-feature-list">
                <div className="arch-feature-box">
                  <div className="arch-feature-icon">01</div>
                  <div>
                    <h4>Natural Breeze &amp; Cooler Rooms</h4>
                    <p>Internal gardens and water features help cool the home naturally during hot summer months.</p>
                  </div>
                </div>

                <div className="arch-feature-box">
                  <div className="arch-feature-icon">02</div>
                  <div>
                    <h4>Soundproof Double Glass Windows</h4>
                    <p>High-quality double-glazed windows block outside street noise and keep heat out.</p>
                  </div>
                </div>

                <div className="arch-feature-box">
                  <div className="arch-feature-icon">03</div>
                  <div>
                    <h4>High-Ceiling Living Rooms</h4>
                    <p>Tall 22-foot ceilings create an open, airy feeling and allow smooth airflow throughout the villa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image #4 */}
            <div className="arch-split-media">
              <img
                src={media.courtyard}
                alt="HODU Villa Courtyard Living"
                className="arch-split-img"
                loading="lazy"
              />
              <div className="arch-strategy-media-caption">
                <strong>Private Courtyard Living</strong>
                <span>Natural light, water ponds &amp; green garden view</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MATERIALS & SPECIFICATIONS
      ========================================================================= */}
      <section className="arch-section arch-section--stone" id="specifications">
        <div className="arch-container">
          <div className="arch-section-head arch-section-head--center">
            <span className="arch-tag">MATERIALS &amp; QUALITY</span>
            <h2 className="arch-heading">Key Materials &amp; Specifications</h2>
            <p className="arch-lead">
              High-grade materials and fittings selected for strength, beauty, and easy maintenance.
            </p>
          </div>

          <div className="arch-specs-grid">
            {masterSpecs.map((group, idx) => (
              <div key={idx} className="arch-spec-card">
                <div className="arch-spec-card__num">0{idx + 1}</div>
                <h3 className="arch-spec-card__title">{group.category}</h3>
                <ul className="arch-spec-card__list">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <span className="arch-dot">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. LOCATION & NEARBY PLACES
      ========================================================================= */}
      <section className="arch-section arch-section--white" id="location">
        <div className="arch-container">
          <div className="arch-section-head">
            <span className="arch-tag">LOCATION</span>
            <h2 className="arch-heading">Easy Access Across Vijayawada</h2>
            <p className="arch-lead">
              Enjoy peaceful living with quick travel times to Benz Circle, NH-16 highway, and the airport.
            </p>
          </div>

          <div className="arch-location-layout">
            {/* Left: Distance Matrix */}
            <div className="arch-location-card">
              <h3 className="arch-location-card__title">Travel Times from Site</h3>
              <div className="arch-transit-table">
                {connectivity.map((c, idx) => (
                  <div key={idx} className="arch-transit-row">
                    <span className="arch-transit-dest">{c.destination}</span>
                    <strong className="arch-transit-time">{c.time}</strong>
                  </div>
                ))}
              </div>

              <div className="arch-address-box">
                <strong>Project Address:</strong>
                <p>{brand.address}</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vijayawada%2C+Andhra+Pradesh%2C+India"
                  target="_blank"
                  rel="noreferrer"
                  className="arch-btn arch-btn--gold arch-btn--full"
                  style={{ marginTop: '1rem' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="arch-map-card">
              <iframe
                title="HODU Villa Location Map"
                src="https://maps.google.com/maps?q=Vijayawada%2C%20Andhra%20Pradesh%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="arch-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="arch-map-bar">
                <span className="arch-live-dot" />
                <span>HODU GATED LUXURY VILLAS · VIJAYAWADA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS
      ========================================================================= */}
      <section className="arch-section arch-section--stone" id="faq">
        <div className="arch-container">
          <div className="arch-section-head arch-section-head--center">
            <span className="arch-tag">COMMON QUESTIONS</span>
            <h2 className="arch-heading">Frequently Asked Questions</h2>
            <p className="arch-lead">
              Simple answers to common questions about customization, approvals, and booking.
            </p>
          </div>

          <div className="arch-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className={`arch-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="arch-faq-trigger"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="arch-faq-num">0{idx + 1}</span>
                    <span className="arch-faq-q">{faq.q}</span>
                    <span className="arch-faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="arch-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. BOOK A PRIVATE SITE VISIT
      ========================================================================= */}
      <section className="arch-section arch-section--white" id="enquire">
        <div className="arch-container">
          <EnquireForm preselectedVilla={currentVilla.name} />
        </div>
      </section>
    </main>
  )
}
