import { aboutData } from '../data/content'

export default function IntroSection() {
  return (
    <section className="hodu-section hodu-intro" id="about">
      {/* Nature-led visual background */}
      <div className="hodu-intro__bg">
        <img
          src={aboutData.bgImage}
          alt="HODU Nature Villa Architecture Landscape"
          className="hodu-intro__bg-img"
          loading="lazy"
        />
        <div className="hodu-intro__bg-overlay" />
      </div>

      <div className="hodu-container hodu-intro__container">
        <div className="hodu-intro__header">
          <div className="hodu-intro__eyebrow-wrapper">
            <span className="hodu-eyebrow">{aboutData.eyebrow}</span>
            <span className="hodu-intro__eyebrow-line" />
          </div>

          <h2 className="hodu-intro__heading">
            {aboutData.headingLine1}
            <br />
            {aboutData.headingLine2}
          </h2>

          <p className="hodu-intro__lead">{aboutData.body}</p>
        </div>

        <div className="hodu-intro__grid">
          {aboutData.blocks.map((block) => (
            <div key={block.num} className="hodu-intro__card">
              <span className="hodu-intro__num">{block.num}</span>
              <h3 className="hodu-intro__card-title">{block.title}</h3>
              <p className="hodu-intro__card-desc">{block.desc}</p>
              <div className="hodu-intro__card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

