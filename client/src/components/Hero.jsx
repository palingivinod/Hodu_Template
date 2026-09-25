import { heroData } from '../data/content'

export default function Hero({ onOpenEnquire }) {
  return (
    <section className="hodu-hero" id="top">
      <div className="hodu-hero__bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroData.fallbackImg}
          className="hodu-hero__video"
        >
          <source src={heroData.videoSrc} type="video/mp4" />
          <img src={heroData.fallbackImg} alt="HODU Luxury Villa" className="hodu-hero__img" />
        </video>
      </div>

      <div className="hodu-container hodu-hero__container">
        <div className="hodu-hero__content">
          <span className="hodu-hero__eyebrow">{heroData.eyebrow}</span>
          <h1 className="hodu-hero__title">{heroData.title}</h1>
          <p className="hodu-hero__subtitle">{heroData.subtitle}</p>
        </div>
      </div>

      <a href="#about" className="hodu-hero__scroll" aria-label="Scroll to content">
        <div className="hodu-hero__scroll-icon">
          <div className="hodu-hero__scroll-dot" />
        </div>
        <span>EXPLORE SANCTUARY</span>
      </a>
    </section>
  )
}
