import { about } from '../data/content'

export default function BrandStatement() {
  return (
    <section className="section section--warm" id="philosophy" aria-labelledby="statement-title">
      <div className="wrap statement" data-fade>
        <p className="eyebrow">{about.philosophyLabel}</p>
        <h2 className="statement__text" id="statement-title">
          We don&apos;t just build homes.
          <br />
          We create spaces that become part of how you live.
        </h2>
        <p className="statement__body">{about.philosophyBody}</p>
      </div>
    </section>
  )
}
