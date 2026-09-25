import { qualityTrustData } from '../data/content'

export default function QualityTrustSection() {
  return (
    <section className="hodu-section hodu-quality-trust" id="quality">
      <div className="hodu-container">
        <div className="hodu-quality-trust__header">
          <span className="hodu-eyebrow">{qualityTrustData.eyebrow}</span>
          <h2 className="hodu-title hodu-title--lg">{qualityTrustData.heading}</h2>
          <p className="hodu-body-lead" style={{ marginTop: '0.75rem' }}>{qualityTrustData.subheading}</p>
        </div>

        <div className="hodu-quality-trust__grid">
          {qualityTrustData.points.map((item, idx) => (
            <div key={item.title} className="hodu-quality-trust__card">
              <span className="hodu-quality-trust__num">0{idx + 1}</span>
              <h3 className="hodu-quality-trust__title">{item.title}</h3>
              <p className="hodu-quality-trust__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
