import { faqs, home } from '../data/content'

export default function FAQ() {
  return (
    <section className="section section--warm" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div data-fade>
          <p className="eyebrow">{home.faqLabel}</p>
          <h2 className="h2" id="faq-title">
            Answers, considered.
          </h2>
        </div>
        <div className="faq" style={{ marginTop: '2rem' }} data-fade>
          {faqs.map((faq) => (
            <details key={faq.id}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
