import { introData } from '../data/content'

export default function IntroSection() {
  return (
    <section className="hodu-section hodu-intro" id="about">
      <div className="hodu-container">
        <div className="hodu-intro__header">
          <span className="hodu-eyebrow">{introData.eyebrow}</span>
          <h2 className="hodu-intro__heading">
            {introData.headingLine1}
            <br />
            {introData.headingLine2}
          </h2>
          <p className="hodu-intro__lead">{introData.body}</p>
        </div>

        <div className="hodu-intro__grid">
          {introData.blocks.map((block) => (
            <div key={block.num} className="hodu-intro__card">
              <span className="hodu-intro__num">{block.num}</span>
              <h3 className="hodu-intro__card-title">{block.title}</h3>
              <p className="hodu-intro__card-desc">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
