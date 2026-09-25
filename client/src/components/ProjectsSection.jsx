import { projectsData } from '../data/content'

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section className="hodu-section hodu-projects" id="villas">
      <div className="hodu-container">
        <div className="hodu-projects__head">
          <span className="hodu-eyebrow">{projectsData.eyebrow}</span>
          <h2 className="hodu-title hodu-title--lg">{projectsData.heading}</h2>
          <p className="hodu-projects__sub">{projectsData.subheading}</p>
        </div>

        <div className="hodu-projects__list">
          {projectsData.list.map((proj, idx) => (
            <article
              key={proj.id}
              className={`hodu-project-card ${idx % 2 !== 0 ? 'hodu-project-card--alt' : ''}`}
            >
              <div className="hodu-project-card__media">
                <img src={proj.image} alt={proj.title} className="hodu-project-card__img" loading="lazy" />
              </div>

              <div className="hodu-project-card__content">
                <span className="hodu-project-card__tag">{proj.tag}</span>
                <h3 className="hodu-project-card__title">{proj.title}</h3>
                <p className="hodu-project-card__subtitle">{proj.subtitle}</p>

                {proj.natureFeature && (
                  <div className="hodu-nature-tag" style={{ marginBottom: '1.25rem' }}>
                    <span className="hodu-nature-tag__icon">🌿</span>
                    <span>{proj.natureFeature}</span>
                  </div>
                )}

                <div className="hodu-project-card__meta">
                  <div>
                    <span className="hodu-project-card__label">Location</span>
                    <span className="hodu-project-card__val">{proj.location}</span>
                  </div>
                  <div>
                    <span className="hodu-project-card__label">Built-up Area</span>
                    <span className="hodu-project-card__val">{proj.area}</span>
                  </div>
                  <div>
                    <span className="hodu-project-card__label">Scope</span>
                    <span className="hodu-project-card__val">{proj.scope}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProject(proj)}
                  className="hodu-project-card__cta"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <span>VIEW PROJECT</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
