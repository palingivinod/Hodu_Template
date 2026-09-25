import { naturePillarsData } from '../data/content'

export default function NaturePillars() {
  return (
    <section className="hodu-section hodu-biophilic-section" id="biophilic">
      {/* Background Soft Photographic Landscape Layer */}
      <div className="hodu-biophilic__bg">
        <img
          src={naturePillarsData.bgImage}
          alt="HODU Biophilic Villa Landscape"
          className="hodu-biophilic__bg-img"
          loading="lazy"
        />
        <div className="hodu-biophilic__bg-overlay" />
      </div>

      <div className="hodu-container hodu-biophilic__container">
        {/* Top Header Area */}
        <div className="hodu-biophilic__head">
          <div className="hodu-biophilic-pill">
            <span className="hodu-biophilic-pill__icon">🌿</span>
            <span>{naturePillarsData.eyebrow}</span>
          </div>

          <h2 className="hodu-biophilic__heading">
            {naturePillarsData.heading}
          </h2>

          <p className="hodu-biophilic__desc">
            {naturePillarsData.subheading}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="hodu-biophilic__grid">
          {naturePillarsData.pillars.map((card) => (
            <article key={card.num} className="hodu-biophilic-card">
              <div className="hodu-biophilic-card__media">
                <img
                  src={card.image}
                  alt={card.title}
                  className="hodu-biophilic-card__img"
                  loading="lazy"
                />
                <span className="hodu-biophilic-card__num">{card.num}</span>
              </div>

              <div className="hodu-biophilic-card__body">
                <h3 className="hodu-biophilic-card__title">{card.title}</h3>
                <div className="hodu-biophilic-card__divider" />
                <p className="hodu-biophilic-card__desc">{card.desc}</p>

                <div className="hodu-biophilic-card__footer">
                  <button
                    className="hodu-biophilic-card__arrow"
                    aria-label={`Explore ${card.title}`}
                  >
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
