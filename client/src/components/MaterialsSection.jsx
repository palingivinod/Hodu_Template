import { materialsData } from '../data/content'

export default function MaterialsSection() {
  return (
    <section className="hodu-section hodu-materials" id="craft">
      <div className="hodu-container">
        <div className="hodu-materials__head">
          <span className="hodu-eyebrow">{materialsData.eyebrow}</span>
          <h2 className="hodu-title hodu-title--lg">{materialsData.heading}</h2>
        </div>

        <div className="hodu-materials__grid">
          {materialsData.items.map((mat) => (
            <div key={mat.title} className="hodu-materials__card">
              <div className="hodu-materials__media">
                <img src={mat.image} alt={mat.title} className="hodu-materials__img" loading="lazy" />
              </div>
              <div className="hodu-materials__info">
                <h3 className="hodu-materials__title">{mat.title}</h3>
                <p className="hodu-materials__desc">{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
