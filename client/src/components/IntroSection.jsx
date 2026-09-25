import { introData } from '../data/content'

export default function IntroSection() {
  return (
    <section className="hodu-section hodu-intro" id="about">
      {/* Realistic Nature Villa Background Landscape */}
      <div className="hodu-intro__bg">
        <img
          src="/media/hodu-why-hero.png"
          alt="HODU Nature Villa Architecture Landscape"
          className="hodu-intro__bg-img"
          loading="lazy"
        />
        <div className="hodu-intro__bg-overlay" />
      </div>

      <div className="hodu-container hodu-intro__container">
        <div className="hodu-intro__header">
          <div className="hodu-intro__eyebrow-wrapper">
            <span className="hodu-eyebrow">{introData.eyebrow}</span>
            <span className="hodu-intro__eyebrow-line" />
          </div>

          <h2 className="hodu-intro__heading">
            WE DON'T SIMPLY BUILD VILLAS.
            <br />
            WE BUILD PLACES TO LIVE
            <br />
            NATURALLY.
          </h2>

          <p className="hodu-intro__lead">{introData.body}</p>
        </div>

        <div className="hodu-intro__grid">
          {introData.blocks.map((block) => (
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
