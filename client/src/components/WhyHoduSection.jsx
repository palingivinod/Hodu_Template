import { whyHoduData } from '../data/content'

export default function WhyHoduSection() {
  return (
    <section className="hodu-section hodu-why">
      <div className="hodu-container">
        <div className="hodu-why__header">
          <span className="hodu-eyebrow">{whyHoduData.eyebrow}</span>
          <h2 className="hodu-title hodu-title--lg">
            {whyHoduData.headingLine1}
            <br />
            {whyHoduData.headingLine2}
          </h2>
          <p className="hodu-why__statement">{whyHoduData.statement}</p>
        </div>

        <div className="hodu-why__grid">
          {whyHoduData.points.map((pt) => (
            <div key={pt.num} className="hodu-why__card">
              <span className="hodu-why__num">{pt.num}</span>
              <h3 className="hodu-why__title">{pt.title}</h3>
              <p className="hodu-why__desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
