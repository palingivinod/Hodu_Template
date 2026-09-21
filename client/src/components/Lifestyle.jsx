import { lifestyleMoments, resolveImage } from '../data/content'

export default function Lifestyle() {
  return (
    <section className="section section--warm" id="lifestyle" aria-labelledby="life-title">
      <div className="wrap">
        <div data-fade>
          <p className="eyebrow">Lifestyle</p>
          <h2 className="h2" id="life-title">
            Life, beyond the walls.
          </h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            Homes experienced through light, landscape, gathering and quiet retreat.
          </p>
        </div>
        <div className="life-grid" data-cascade>
          {lifestyleMoments.map((item) => (
            <article key={item.id} className="life-card">
              <div className="media life-card__media">
                <img src={resolveImage(item.imageKey)} alt={item.title} loading="lazy" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
