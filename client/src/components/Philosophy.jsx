import { media, philosophyPrinciples } from '../data/content'

export default function Philosophy() {
  return (
    <section className="section section--soft" aria-labelledby="phil-title">
      <div className="wrap philosophy">
        <div className="media philosophy__media" data-fade>
          <img src={media.architect} alt="Architectural villa detail" loading="lazy" />
        </div>
        <div data-fade>
          <p className="eyebrow">Philosophy</p>
          <h2 className="h2" id="phil-title">
            Built around how you live.
          </h2>
          <p className="lead" style={{ marginTop: '1.25rem' }}>
            Every HODU villa begins with an understanding of place — light, landscape, proportion and
            the quiet rituals of everyday life.
          </p>
          <div className="philosophy__list" data-cascade>
            {philosophyPrinciples.map((item) => (
              <article key={item.id} className="philosophy__item">
                <span className="philosophy__num">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
