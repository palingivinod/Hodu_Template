import { archNatureData } from '../data/content'

export default function ArchitectureSection() {
  return (
    <section className="hodu-section hodu-arch-nature">
      <div className="hodu-container">
        <div className="hodu-arch-nature__grid">
          <div className="hodu-arch-nature__media">
            <img
              src={archNatureData.image}
              alt="HODU Villa Architecture Belonging to its Natural Setting"
              className="hodu-arch-nature__img"
              loading="lazy"
            />
          </div>

          <div className="hodu-arch-nature__content">
            <span className="hodu-eyebrow">{archNatureData.eyebrow}</span>
            <h2 className="hodu-arch-nature__title">{archNatureData.heading}</h2>
            <p className="hodu-arch-nature__copy">{archNatureData.copy}</p>

            <div className="hodu-arch-nature__features">
              {archNatureData.features.map((item, idx) => (
                <div key={idx} className="hodu-arch-nature__feat-item">
                  <span className="hodu-arch-nature__check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
