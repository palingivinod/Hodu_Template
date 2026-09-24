import { processData } from '../data/content'

export default function ProcessSection() {
  return (
    <section className="hodu-section hodu-process" id="process">
      <div className="hodu-container">
        <div className="hodu-process__head">
          <span className="hodu-eyebrow">{processData.eyebrow}</span>
          <h2 className="hodu-title hodu-title--lg">{processData.heading}</h2>
        </div>

        <div className="hodu-process__grid">
          {processData.steps.map((item) => (
            <div key={item.step} className="hodu-process__card">
              <div>
                <span className="hodu-process__step">{item.step}</span>
                <h3 className="hodu-process__card-title">{item.title}</h3>
              </div>
              <p className="hodu-process__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
