import { expertiseData } from '../data/content'

export default function ExpertiseSection() {
  return (
    <section className="hodu-expertise-section" id="expertise">
      <div className="hodu-expertise__container">
        {/* Top Header Area: Eyebrow with Line, Heading, Intro Paragraph */}
        <div className="hodu-expertise__header">
          <div className="hodu-expertise__eyebrow-row">
            <span className="hodu-expertise__eyebrow">{expertiseData.eyebrow}</span>
            <span className="hodu-expertise__eyebrow-line" />
          </div>
          <h2 className="hodu-expertise__heading">
            {expertiseData.headingLine1}
            <br />
            {expertiseData.headingLine2}
          </h2>
          <p className="hodu-expertise__body">{expertiseData.body}</p>
        </div>

        {/* Content Row Below Header: Left Villa Sketch Frame + Right 2 Vertical Cards */}
        <div className="hodu-expertise__content-row">
          {/* LEFT: Large Architectural Villa Sketch in White Frame */}
          <div className="hodu-expertise__left-frame">
            <div className="hodu-expertise__illustration-card">
              <img
                src={expertiseData.mainIllustration}
                alt="Contemporary Luxury Villa Hand-Rendered Architectural Visual"
                className="hodu-expertise__illustration-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Two Equal Vertical Cards Side-by-Side */}
          <div className="hodu-expertise__right-cards">
            {/* CARD 01 */}
            <article className="hodu-expertise-card">
              <div className="hodu-expertise-card__media">
                <img
                  src="/media/hodu-expertise-design.jpg"
                  alt="Design & Engineering - Villa Architect Working at Desk"
                  className="hodu-expertise-card__img"
                  loading="lazy"
                />
              </div>
              <div className="hodu-expertise-card__body">
                <span className="hodu-expertise-card__num">01</span>
                <h3 className="hodu-expertise-card__title">DESIGN & ENGINEERING</h3>
                <p className="hodu-expertise-card__desc">
                  Architecture and engineering are developed together from the beginning, allowing structure, services, spatial planning and construction requirements to work as one coordinated design.
                </p>

                <div className="hodu-expertise-card__footer">
                  <div className="hodu-expertise-card__tags">
                    <div className="hodu-expertise-card__tag-line">
                      <span>ARCHITECTURAL PLANNING</span>
                      <span className="hodu-expertise-card__tag-sep">|</span>
                      <span>STRUCTURAL DESIGN</span>
                    </div>
                    <div className="hodu-expertise-card__tag-line">
                      <span>MEP INTEGRATION</span>
                      <span className="hodu-expertise-card__tag-sep">|</span>
                      <span>APPROVAL SUPPORT</span>
                    </div>
                  </div>
                  <span className="hodu-expertise-card__arrow-btn" aria-label="Learn More">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#344F38" strokeWidth="1.3" />
                      <path d="M10 8L14 12L10 16" stroke="#344F38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>

            {/* CARD 02 */}
            <article className="hodu-expertise-card">
              <div className="hodu-expertise-card__media">
                <img
                  src="/media/hodu-expertise-craft.jpg"
                  alt="Build Quality & Craft - Active Luxury Villa Construction Site"
                  className="hodu-expertise-card__img"
                  loading="lazy"
                />
              </div>
              <div className="hodu-expertise-card__body">
                <span className="hodu-expertise-card__num">02</span>
                <h3 className="hodu-expertise-card__title">BUILD QUALITY & CRAFT</h3>
                <p className="hodu-expertise-card__desc">
                  From structure and masonry to joinery and final finishes, every stage is managed with careful supervision and attention to construction quality.
                </p>

                <div className="hodu-expertise-card__footer">
                  <div className="hodu-expertise-card__tags">
                    <div className="hodu-expertise-card__tag-line">
                      <span>SITE SUPERVISION</span>
                      <span className="hodu-expertise-card__tag-sep">|</span>
                      <span>MATERIAL SELECTION</span>
                    </div>
                    <div className="hodu-expertise-card__tag-line">
                      <span>QUALITY CHECKS</span>
                      <span className="hodu-expertise-card__tag-sep">|</span>
                      <span>TIMELY EXECUTION</span>
                    </div>
                  </div>
                  <span className="hodu-expertise-card__arrow-btn" aria-label="Learn More">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#344F38" strokeWidth="1.3" />
                      <path d="M10 8L14 12L10 16" stroke="#344F38" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
