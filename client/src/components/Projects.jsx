import { residences, resolveImage } from '../data/content'

export default function Projects() {
  return (
    <section className="section section--warm" id="villas" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="projects-head" data-fade>
          <p className="eyebrow">Villa projects</p>
          <h2 className="h2" id="projects-title">
            Distinct homes. Thoughtful architecture.
          </h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            Designed for contemporary family life — each villa composed around light, landscape and
            quiet material honesty.
          </p>
        </div>
        <div className="projects-list">
          {residences.map((item) => (
            <article
              key={item.id}
              className={`project project--${item.layout || 'wide'}`}
              data-fade
            >
              <div className="project__media">
                <img src={resolveImage(item.imageKey)} alt={item.title} loading="lazy" />
                <div className="project__shade" aria-hidden="true" />
              </div>
              <div className="project__meta">
                <p className="project__loc">{item.location}</p>
                <h3 className="project__title">{item.title}</h3>
                <p className="project__type">{item.typology}</p>
                <p className="project__desc">{item.description}</p>
                <a className="project__link" href="#enquire">
                  View project <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
