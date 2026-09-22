import { useState } from 'react'
import EnquireForm from '../components/EnquireForm'
import {
  buildProcess,
  connectivity,
  faqs,
  lifeMoments,
  locationAmenities,
  luxuryVillas,
  media,
  teamExpertise,
  whyHodu,
} from '../data/content'
import useMotion from '../hooks/useMotion'

export default function Home({ ready = true }) {
  const root = useMotion(ready)

  // 1. Villa Tab State
  const [activeVillaTab, setActiveVillaTab] = useState('all')

  // 2. Materiality Studio State
  const [activeMaterial, setActiveMaterial] = useState(0)
  const materialList = [
    {
      id: 'stone',
      name: 'Natural Architectural Stone',
      tag: 'TEXTURE & PERMANENCE',
      image: '/media/hodu-quality-material.png',
      desc: 'Hand-selected natural granite and sandstone with fluted finishes, providing structural thermal mass and timeless geological character to each villa.',
      specs: ['Thermal insulation', 'Natural weathering', 'Hand-chiselled textures'],
    },
    {
      id: 'timber',
      name: 'Seasoned Teak & Accoya Wood',
      tag: 'ORGANIC WARMTH',
      image: '/media/hodu-philosophy-material.png',
      desc: 'Sustainably sourced timber battens and ceiling claddings that soften geometric lines and introduce sensory warmth across private villa suites.',
      specs: ['FSC-Certified hardwood', 'Acoustic dampening', 'Moisture resistant treatment'],
    },
    {
      id: 'glass',
      name: 'Acoustic Low-E Glazing',
      tag: 'NATURAL LIGHT & VIEWS',
      image: '/media/hodu-philosophy-light.png',
      desc: 'Floor-to-ceiling motorized slimline glass panels dissolving the physical boundary between climate-controlled villa interiors and lush private courtyards.',
      specs: ['UV & Heat rejection', 'Acoustic STC 42', 'Minimalist 18mm sightlines'],
    },
    {
      id: 'metal',
      name: 'Titanium & Bronze Finishes',
      tag: 'ENGINEERED PRECISION',
      image: '/media/hodu-philosophy-space.png',
      desc: 'Brushed anodized bronze and titanium accents detailing fenestration reveals, custom ironmongery, and architectural cantilever fascias.',
      specs: ['Corrosion-proof grade', 'Zero maintenance', 'Precision CNC detailing'],
    },
    {
      id: 'landscape',
      name: 'Private Biophilic Courtyards',
      tag: 'NATIVE ECOSYSTEM',
      image: '/media/hodu-philosophy-landscape.png',
      desc: 'Native flora, private water reflection ponds, and stepped landscape verandas designed to cool ambient microclimate naturally.',
      specs: ['Drip irrigation system', 'Indigenous shade trees', 'Reflecting rainwater ponds'],
    },
  ]

  // 3. Milestone Active Step State
  const [activeStep, setActiveStep] = useState(0)

  // 4. FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Filtered villas
  const filteredVillas =
    activeVillaTab === 'all'
      ? luxuryVillas
      : luxuryVillas.filter((v) => v.id === activeVillaTab)

  return (
    <main ref={root} className="lux-main">
      {/* ========================================================
          1. HERO SECTION: CINEMATIC LUXURY VILLA SHOWCASE
          (EYEBROWS & SCROLLING TICKER REMOVED AS REQUESTED)
      ======================================================== */}
      <section className="lux-hero" id="top">
        <div className="lux-hero__backdrop">
          <img
            src={media.hero}
            alt="HODU Bespoke Luxury Villa"
            className="lux-hero__img"
            fetchPriority="high"
          />
          <div className="lux-hero__overlay" />
        </div>

        <div className="lux-wrap lux-hero__content">
          <h1 className="lux-hero__title" data-roll>
            <span className="roll-line">
              <span>SCULPTED BY LIGHT.</span>
            </span>
            <span className="roll-line">
              <span>CRAFTED FOR LUXURY.</span>
            </span>
            <span className="roll-line">
              <span className="lux-gold-gradient">HODU LUXURY VILLAS.</span>
            </span>
          </h1>

          <p className="lux-hero__lead" data-fade>
            Bespoke private luxury villas in Vijayawada, balancing natural light, private green
            courtyards, and timeless materials for an extraordinary way of living.
          </p>

          <div className="lux-hero__actions" data-fade>
            <a href="#villas" className="lux-btn-gold is-large">
              <span>Explore Luxury Villas</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#enquire" className="lux-btn-glass is-large">
              <span>Book Private Visit</span>
            </a>
          </div>

          {/* Quick HUD Metrics */}
          <div className="lux-hero__hud" data-fade>
            <div className="lux-hud-stat">
              <span className="lux-hud-num">100%</span>
              <span className="lux-hud-label">Villa Architecture</span>
            </div>
            <div className="lux-hud-sep" />
            <div className="lux-hud-stat">
              <span className="lux-hud-num">4.2</span>
              <span className="lux-hud-label">Acre Private Enclave</span>
            </div>
            <div className="lux-hud-sep" />
            <div className="lux-hud-stat">
              <span className="lux-hud-num">03</span>
              <span className="lux-hud-label">Curated Villa Typologies</span>
            </div>
            <div className="lux-hud-sep" />
            <div className="lux-hud-stat">
              <span className="lux-hud-num">VIP</span>
              <span className="lux-hud-label">Vijayawada, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. EXCLUSIVE LUXURY VILLAS (COMPACT & BALANCED)
      ======================================================== */}
      <section className="lux-section lux-section--obsidian" id="villas">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div className="lux-section-header__left">
              <span className="lux-tag">THE VILLA COLLECTION</span>
              <h2 className="lux-heading">
                Exclusive Luxury Villas.
                <br />
                <span className="lux-gold-gradient">Individually Sculpted.</span>
              </h2>
            </div>
            <div className="lux-section-header__right">
              <p className="lux-lead">
                Every villa is conceived as a private masterpiece—framing secluded courtyards, private
                pools, and double-height living spaces.
              </p>
              {/* Tab Switcher */}
              <div className="lux-tabs">
                <button
                  type="button"
                  className={`lux-tab-btn ${activeVillaTab === 'all' ? 'is-active' : ''}`}
                  onClick={() => setActiveVillaTab('all')}
                >
                  All Villas
                </button>
                {luxuryVillas.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`lux-tab-btn ${activeVillaTab === v.id ? 'is-active' : ''}`}
                    onClick={() => setActiveVillaTab(v.id)}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Villa Grid */}
          <div className="lux-villa-grid" data-cascade>
            {filteredVillas.map((villa) => (
              <article key={villa.id} className="lux-villa-card">
                <div className="lux-villa-card__media">
                  <img
                    src={villa.image}
                    alt={villa.title}
                    className="lux-villa-card__img"
                    loading="lazy"
                  />
                  <div className="lux-villa-card__overlay" />
                  <div className="lux-villa-card__badges">
                    <span className="lux-badge-gold">Villa {villa.id}</span>
                    <span className="lux-badge-dark">{villa.area}</span>
                  </div>
                </div>

                <div className="lux-villa-card__body">
                  <div className="lux-villa-card__top">
                    <h3 className="lux-villa-card__title">{villa.title}</h3>
                    <span className="lux-villa-card__type">{villa.typology}</span>
                  </div>

                  <p className="lux-villa-card__desc">{villa.description}</p>

                  <div className="lux-villa-card__specs">
                    <div className="lux-spec-item">
                      <span className="lux-spec-label">Suites</span>
                      <span className="lux-spec-val">{villa.suites}</span>
                    </div>
                    <div className="lux-spec-item">
                      <span className="lux-spec-label">Pool & Water</span>
                      <span className="lux-spec-val">{villa.pool}</span>
                    </div>
                  </div>

                  <div className="lux-villa-card__footer">
                    <a href="#enquire" className="lux-btn-gold is-sm">
                      <span>Inquire on Villa</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="#materiality" className="lux-btn-ghost is-sm">
                      Villa Finishes
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VILLA LIVING & SPATIAL EXPERIENCES (VIVID IMAGES)
      ======================================================== */}
      <section className="lux-section lux-section--surface" id="lifestyle">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div>
              <span className="lux-tag">VILLA LIFESTYLE & SPACES</span>
              <h2 className="lux-heading">
                Life Inside Your Villa.
                <br />
                <span className="lux-gold-gradient">Designed for the Senses.</span>
              </h2>
            </div>
            <p className="lux-lead">
              Villa spaces choreographed for intimate quiet moments and family celebrations. Natural
              light, gentle breezes, and seamless transitions into private gardens.
            </p>
          </div>

          {/* Rich Image Cards Grid */}
          <div className="lux-life-grid" data-cascade>
            {lifeMoments.map((item) => (
              <div key={item.id} className="lux-life-card">
                <div className="lux-life-card__media">
                  <img src={item.image} alt={item.title} className="lux-life-card__img" loading="lazy" />
                  <div className="lux-life-card__overlay" />
                  <span className="lux-life-card__tag">VILLA SPACE 0{item.id}</span>
                </div>
                <div className="lux-life-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHY HODU LUXURY VILLAS (RICH VIBRANT CARDS)
      ======================================================== */}
      <section className="lux-section lux-section--obsidian" id="why-matrix">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div>
              <span className="lux-tag">THE VILLA DISTINCTION</span>
              <h2 className="lux-heading">
                Why HODU Luxury Villas.
                <br />
                <span className="lux-gold-gradient">An Uncompromising Standard.</span>
              </h2>
            </div>
            <p className="lux-lead">
              We reject mass-produced repetition. Every home is a bespoke architectural villa
              rooted in structural integrity, timeless proportions, and uncompromising craft.
            </p>
          </div>

          <div className="lux-matrix-grid" data-cascade>
            {whyHodu.map((item) => (
              <div key={item.id} className="lux-matrix-card">
                <div className="lux-matrix-card__media">
                  <img src={item.image} alt={item.lines.join(' ')} loading="lazy" />
                  <div className="lux-matrix-card__overlay" />
                  <span className="lux-matrix-card__num">{item.id}</span>
                </div>

                <div className="lux-matrix-card__body">
                  <div className="lux-matrix-card__lines">
                    {item.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                  <p className="lux-matrix-card__copy">{item.copy}</p>
                  <div className="lux-matrix-card__pills">
                    {item.overlay.map((w) => (
                      <span key={w} className="lux-matrix-pill">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. VILLA MATERIALITY & FINISHES STUDIO
      ======================================================== */}
      <section className="lux-section lux-section--surface" id="materiality">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div>
              <span className="lux-tag">VILLA FINISHES & MATERIALS</span>
              <h2 className="lux-heading">
                Villa Materials That Age
                <br />
                <span className="lux-gold-gradient">With Grace & Permanence.</span>
              </h2>
            </div>
            <p className="lux-lead">
              Materials give architecture its memory. We curate honest, tactile substances that
              respond to daylight and gain character with time.
            </p>
          </div>

          {/* Interactive Material Studio Dock */}
          <div className="lux-mat-studio" data-fade>
            <div className="lux-mat-studio__nav">
              {materialList.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  className={`lux-mat-tab ${activeMaterial === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveMaterial(idx)}
                >
                  <span className="lux-mat-tab__num">0{idx + 1}</span>
                  <div className="lux-mat-tab__text">
                    <strong>{m.name}</strong>
                    <span>{m.tag}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Material Showcase Display */}
            <div className="lux-mat-studio__display">
              <div className="lux-mat-studio__img-wrap">
                <img
                  src={materialList[activeMaterial].image}
                  alt={materialList[activeMaterial].name}
                  className="lux-mat-studio__img"
                />
                <div className="lux-mat-studio__img-overlay" />
                <span className="lux-mat-studio__badge">
                  {materialList[activeMaterial].tag}
                </span>
              </div>

              <div className="lux-mat-studio__info">
                <h3>{materialList[activeMaterial].name}</h3>
                <p className="lux-mat-studio__desc">
                  {materialList[activeMaterial].desc}
                </p>

                <div className="lux-mat-studio__specs-title">Architectural Villa Specs:</div>
                <ul className="lux-mat-studio__specs-list">
                  {materialList[activeMaterial].specs.map((s) => (
                    <li key={s}>
                      <span className="lux-gold-dot">✦</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <a href="#enquire" className="lux-btn-gold is-sm" style={{ marginTop: '1.2rem' }}>
                  <span>Inquire on Villa Finishes</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. VILLA CONSTRUCTION & ENGINEERING PHASES
      ======================================================== */}
      <section className="lux-section lux-section--obsidian" id="milestones">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div>
              <span className="lux-tag">PRECISION VILLA ENGINEERING</span>
              <h2 className="lux-heading">
                From Substructure
                <br />
                <span className="lux-gold-gradient">To Villa Handover.</span>
              </h2>
            </div>
            <p className="lux-lead">
              A transparent, multi-stage engineering audit ensures that every foundation, column,
              waterproofing membrane, and acoustic seal meets international luxury standards.
            </p>
          </div>

          {/* Stepper Timeline Navigation */}
          <div className="lux-stepper-bar" data-fade>
            {buildProcess.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                className={`lux-step-node ${activeStep === idx ? 'is-active' : ''} ${
                  idx < activeStep ? 'is-completed' : ''
                }`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="lux-step-num">{step.id}</span>
                <span className="lux-step-title">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Highlight Card */}
          <div className="lux-step-card" data-fade>
            <div className="lux-step-card__media">
              <img
                src={buildProcess[activeStep].image}
                alt={buildProcess[activeStep].title}
                className="lux-step-card__img"
              />
              <div className="lux-step-card__overlay" />
            </div>

            <div className="lux-step-card__body">
              <span className="lux-tag">PHASE {buildProcess[activeStep].id} OF 06</span>
              <h3 className="lux-step-card__heading">{buildProcess[activeStep].title} Stage</h3>
              <p className="lux-step-card__copy">{buildProcess[activeStep].copy}</p>

              <div className="lux-step-card__specs">
                <div className="lux-spec-item">
                  <span className="lux-spec-label">Inspection</span>
                  <span className="lux-spec-val">3-Tier Verification</span>
                </div>
                <div className="lux-spec-item">
                  <span className="lux-spec-label">Supervision</span>
                  <span className="lux-spec-val">Resident Senior Architect</span>
                </div>
              </div>

              <div className="lux-step-card__nav">
                <button
                  type="button"
                  className="lux-btn-ghost is-sm"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                >
                  ← Previous Phase
                </button>
                <button
                  type="button"
                  className="lux-btn-gold is-sm"
                  disabled={activeStep === buildProcess.length - 1}
                  onClick={() => setActiveStep((p) => Math.min(buildProcess.length - 1, p + 1))}
                >
                  Next Phase →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. PRIME VILLA ENCLAVE & CONNECTIVITY
      ======================================================== */}
      <section className="lux-section lux-section--surface" id="location">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div>
              <span className="lux-tag">PRIVATE VILLA ENCLAVE</span>
              <h2 className="lux-heading">
                Connected to the City.
                <br />
                <span className="lux-gold-gradient">Protected in Privacy.</span>
              </h2>
            </div>
            <p className="lux-lead">
              Situated in Vijayawada’s most prestigious growth corridor, balancing effortless
              connectivity to commercial centers, premier schools, and Vijayawada Airport.
            </p>
          </div>

          <div className="lux-loc-dashboard" data-fade>
            {/* Left: Travel Gauges & Hotspots */}
            <div className="lux-loc-info">
              <h3 className="lux-loc-info__title">Rapid Transit Corridors</h3>
              <div className="lux-loc-grid">
                {connectivity.map((item) => (
                  <div key={item.name} className="lux-loc-item">
                    <div className="lux-loc-item__time">{item.time}</div>
                    <div className="lux-loc-item__name">{item.name}</div>
                  </div>
                ))}
              </div>

              <h4 className="lux-loc-info__sub">Essential Proximities</h4>
              <div className="lux-amenity-tags">
                {locationAmenities.map((a) => (
                  <div key={a.name} className="lux-amenity-pill">
                    <strong>{a.name}</strong>
                    {a.detail ? <span> · {a.detail}</span> : null}
                  </div>
                ))}
              </div>

              <div className="lux-loc-cta">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vijayawada%2C+Andhra+Pradesh%2C+India"
                  target="_blank"
                  rel="noreferrer"
                  className="lux-btn-gold is-sm"
                >
                  <span>Open Villa Enclave on Google Maps</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Embedded Styled Map */}
            <div className="lux-loc-map-wrap">
              <iframe
                title="HODU Villa Enclave Location — Vijayawada"
                src="https://maps.google.com/maps?q=Vijayawada%2C%20Andhra%20Pradesh%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="lux-loc-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="lux-map-badge">
                <span className="lux-status-dot" />
                <span>HODU PRIVATE VILLA ENCLAVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. THE VILLA ARCHITECTURAL GUILD
      ======================================================== */}
      <section className="lux-section lux-section--obsidian" id="guild">
        <div className="lux-wrap">
          <div className="lux-manifesto-card" data-fade>
            <div className="lux-manifesto-card__media">
              <img
                src="/media/hodu-team-architecture.png"
                alt="HODU Villa Architects & Engineers"
                className="lux-manifesto-card__img"
                loading="lazy"
              />
              <div className="lux-manifesto-card__overlay" />
              <div className="lux-manifesto-card__tag">THE VILLA GUILD</div>
            </div>

            <div className="lux-manifesto-card__body">
              <span className="lux-tag">ARCHITECTURAL LEADERSHIP</span>
              <h2 className="lux-heading">
                Good Villa Architecture
                <br />
                <span className="lux-gold-gradient">Demands Human Vision.</span>
              </h2>
              <p className="lux-lead">
                Our architects, structural engineers, and site artisans share a singular commitment:
                to construct private villas of lasting dignity, proportion, and bespoke perfection.
              </p>

              <div className="lux-guild-grid">
                {teamExpertise.map((item) => (
                  <div key={item.id} className="lux-guild-item">
                    <span className="lux-guild-num">{item.id}</span>
                    <strong className="lux-guild-title">{item.title}</strong>
                    <span className="lux-guild-copy">{item.copy}</span>
                  </div>
                ))}
              </div>

              <div className="lux-quote-box">
                <span className="lux-quote-mark">“</span>
                <p>
                  Luxury is not measured by excess. It is felt in how naturally everything belongs—a
                  ray of light across stone, the silence between villa suites, and a home that breathes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ======================================================== */}
      <section className="lux-section lux-section--surface" id="faq">
        <div className="lux-wrap">
          <div className="lux-section-header" data-fade>
            <div>
              <span className="lux-tag">CLARITY & ASSURANCE</span>
              <h2 className="lux-heading">
                Villa Questions & Answers.
                <br />
                <span className="lux-gold-gradient">Everything Explained.</span>
              </h2>
            </div>
            <p className="lux-lead">
              Clear answers regarding villa specifications, bespoke customizations, legal approvals,
              and private site visit arrangements.
            </p>
          </div>

          <div className="lux-faq-list" data-fade>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.id}
                  className={`lux-faq-item ${isOpen ? 'is-open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <button
                    type="button"
                    className="lux-faq-trigger"
                    aria-expanded={isOpen}
                  >
                    <span className="lux-faq-num">{faq.id}</span>
                    <span className="lux-faq-q">{faq.question}</span>
                    <span className="lux-faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="lux-faq-ans">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. BOOK PRIVATE VILLA VISIT (ENQUIRY)
      ======================================================== */}
      <section className="lux-section lux-section--obsidian" id="enquire">
        <div className="lux-wrap">
          <EnquireForm />
        </div>
      </section>
    </main>
  )
}
