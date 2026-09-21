import EnquireForm from '../components/EnquireForm'
import useMotion from '../hooks/useMotion'
import { brand } from '../data/content'

export default function Contact({ ready }) {
  const root = useMotion(ready)

  return (
    <main ref={root}>
      <section className="about-hero">
        <div className="wrap" data-fade>
          <p className="eyebrow">Contact</p>
          <h1 className="heading">
            Let&apos;s talk about
            <br />
            your future home.
          </h1>
          <p className="lead" style={{ marginTop: '1.1rem' }}>
            Reach the HODU team in {brand.location} — we&apos;ll help you plan a site visit and walk
            through the villas with care.
          </p>
        </div>
      </section>
      <EnquireForm />
    </main>
  )
}
