import { Link } from 'react-router-dom'
import useMotion from '../hooks/useMotion'
import { about, media, resolveImage } from '../data/content'

export default function About({ ready = true }) {
  const root = useMotion(ready)

  return (
    <main ref={root}>
      <section className="about-hero">
        <div className="wrap" data-fade>
          <p className="eyebrow">{about.heroLabel}</p>
          <h1 className="heading">{about.heroLines.join(' ')}</h1>
          <p className="lead" style={{ marginTop: '1.25rem' }}>
            {about.heroDesc}
          </p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap about-split">
          <div data-fade>
            <p className="eyebrow">{about.introLabel}</p>
            <h2 className="heading">{about.introLines.join(' ')}</h2>
            <p className="lead" style={{ marginTop: '1.25rem' }}>
              {about.introBody}
            </p>
            <p className="lead" style={{ marginTop: '1rem' }}>
              {about.introBody2}
            </p>
          </div>
          <div className="pic about-split__media" data-fade>
            <img src={media.architect} alt="Architectural detail" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="sec sec--teal">
        <div className="wrap" data-fade>
          <h2 className="heading">{about.bridgeLines.join(' ')}</h2>
        </div>
      </section>

      <section className="sec sec--warm">
        <div className="wrap">
          <div data-fade>
            <p className="eyebrow">{about.processLabel}</p>
            <h2 className="heading">{about.processLines.join(' ')}</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              {about.processCollab}
            </p>
          </div>
          <div className="process" data-cascade>
            {about.processSteps.map((s) => (
              <article key={s.id} className="process__item">
                <span>{s.id}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div data-fade>
            <p className="eyebrow">{about.materialsLabel}</p>
            <h2 className="heading">{about.materialsLines.join(' ')}</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              {about.materialsIntro}
            </p>
          </div>
          <div className="life-grid" style={{ marginTop: '2rem' }} data-cascade>
            {about.materials.map((m) => (
              <article key={m.title} className="life-item">
                <div className="pic life-item__img">
                  <img src={resolveImage(m.imageKey)} alt={m.alt} loading="lazy" />
                </div>
                <h3>{m.title}</h3>
                <p className="lead" style={{ marginTop: '0.35rem', fontSize: '0.92rem' }}>
                  {m.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--warm">
        <div className="wrap">
          <div data-fade>
            <p className="eyebrow">{about.promiseLabel}</p>
            <h2 className="heading">{about.promiseLines.join(' ')}</h2>
          </div>
          <div className="values" data-cascade>
            {about.values.map((v) => (
              <article key={v.title} className="values__item">
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }} data-fade>
            <Link className="btn btn--solid" to="/#villas">
              {about.workCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
