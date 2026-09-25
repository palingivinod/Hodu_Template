import { natureMomentData } from '../data/content'

export default function NatureMomentSection({ onOpenEnquire }) {
  return (
    <section className="hodu-nature-moment" id="nature-moment">
      <div className="hodu-nature-moment__bg">
        <img
          src={natureMomentData.image}
          alt="HODU Villa Nature Sanctuary"
          className="hodu-nature-moment__img"
          loading="lazy"
        />
        <div className="hodu-nature-moment__overlay" />
      </div>

      <div className="hodu-container hodu-nature-moment__container">
        <div className="hodu-nature-moment__content">
          <h2 className="hodu-nature-moment__heading">{natureMomentData.heading}</h2>
          <p className="hodu-nature-moment__copy">{natureMomentData.copy}</p>
          <button onClick={onOpenEnquire} className="hodu-btn hodu-btn--light">
            START YOUR PROJECT →
          </button>
        </div>
      </div>
    </section>
  )
}
