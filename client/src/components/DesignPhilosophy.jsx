import { philosophyData } from '../data/content'

export default function DesignPhilosophy() {
  return (
    <section className="hodu-section hodu-philosophy" id="philosophy">
      <div className="hodu-container hodu-philosophy__container">
        <div className="hodu-philosophy__header">
          <span className="hodu-eyebrow">{philosophyData.eyebrow}</span>
          <h2 className="hodu-title hodu-title--lg">{philosophyData.heading}</h2>
          <p className="hodu-body-lead">{philosophyData.subheading}</p>
        </div>

        <div className="hodu-philosophy__grid">
          {philosophyData.features.map((item) => (
            <div key={item.num} className="hodu-philosophy__card">
              <span className="hodu-philosophy__num">{item.num}</span>
              <h3 className="hodu-philosophy__card-title">{item.title}</h3>
              <p className="hodu-philosophy__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
