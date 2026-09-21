import { about, home, media } from '../data/content'

export default function Architecture() {
  return (
    <>
      <section className="section section--soft" id="projects" aria-labelledby="quiet-title">
        <div className="wrap">
          <div data-fade>
            <p className="eyebrow">{home.featuresLabel}</p>
            <h2 className="h2" id="quiet-title">
              {home.featuresTitle.replace(/\.$/, '')}
            </h2>
          </div>
          <div className="quiet" style={{ marginTop: '2.5rem' }}>
            <div className="media quiet__media" data-fade>
              <img src={media.living} alt="Quiet luxury interior" loading="lazy" />
            </div>
            <div className="quiet__rows" data-cascade>
              {about.luxuryPrinciples.map((item) => (
                <article key={item.id} className="quiet__row">
                  <span aria-hidden="true">{item.id}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm" aria-labelledby="arch-title">
        <div className="wrap">
          <div data-fade>
            <p className="eyebrow">{about.architectureLabel}</p>
            <h2 className="h2" id="arch-title">
              Architecture, down to the detail.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              {about.architectureBody}
            </p>
          </div>
          <div className="arch-mosaic" data-cascade>
            <div className="media arch-mosaic__main">
              <img src={media.villaNight} alt="Villa architecture at dusk" loading="lazy" />
            </div>
            <div className="arch-mosaic__side">
              <div className="media">
                <img src={media.architecture} alt="Villa exterior geometry" loading="lazy" />
              </div>
              <div className="media">
                <img src={media.material} alt="Material detail" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="arch-topics" data-fade>
            {['Natural Light', 'Warm Materials', 'Landscape', 'Indoor / Outdoor Living', 'Craftsmanship'].map(
              (t) => (
                <span key={t}>{t}</span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
