import { natureFeatureData } from '../data/content'

export default function NatureFeatureSection() {
  return (
    <section className="hodu-nature-feature">
      <div className="hodu-nature-feature__bg">
        <img
          src={natureFeatureData.image}
          alt="HODU Villa surrounded by lush natural landscape"
          className="hodu-nature-feature__img"
          loading="lazy"
        />
        <div className="hodu-nature-feature__overlay" />
      </div>

      <div className="hodu-container hodu-nature-feature__content">
        <h2 className="hodu-nature-feature__title">{natureFeatureData.heading}</h2>
        <p className="hodu-nature-feature__copy">{natureFeatureData.copy}</p>
      </div>
    </section>
  )
}
