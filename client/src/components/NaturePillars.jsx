import { naturePillarsData } from '../data/content'

export default function NaturePillars() {
  return (
    <section className="hodu-section hodu-nature-pillars" id="biophilic">
      <div className="hodu-container">
        <div className="hodu-nature-pillars__head">
          <div className="hodu-nature-tag">
            <span className="hodu-nature-tag__icon">🌿</span>
            <span>BIOPHILIC VILLA DESIGN</span>
          </div>
          <h2 className="hodu-title hodu-title--lg" style={{ marginTop: '0.75rem' }}>
            {naturePillarsData.heading}
          </h2>
          <p className="hodu-body-lead" style={{ marginTop: '1rem' }}>
            {naturePillarsData.subheading}
          </p>
        </div>

        <div className="hodu-nature-pillars__grid">
          {naturePillarsData.pillars.map((item) => (
            <div key={item.num} className="hodu-nature-pillar-card">
              <div className="hodu-nature-pillar-card__top">
                <span className="hodu-nature-pillar-card__icon">{item.icon}</span>
                <span className="hodu-nature-pillar-card__num">{item.num}</span>
              </div>
              <h3 className="hodu-nature-pillar-card__title">{item.title}</h3>
              <p className="hodu-nature-pillar-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
