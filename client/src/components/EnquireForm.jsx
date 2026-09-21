import { useState } from 'react'
import { brand, home } from '../data/content'

const initial = {
  name: '',
  email: '',
  phone: '',
  interest: home.interestOptions[0],
  message: '',
}

export default function EnquireForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('fail')
      setStatus('success')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="sec sec--warm" id="contact" aria-labelledby="enquire-title">
      <div className="wrap enquire">
        <div data-fade>
          <p className="eyebrow">{home.enquireLabel}</p>
          <h2 className="heading" id="enquire-title">
            {home.enquireTitle}
          </h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            {home.enquireSupport}
          </p>
          <p className="lead" style={{ marginTop: '1.25rem' }}>
            {brand.location}
            <br />
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <br />
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
          </p>
        </div>
        <form className="enquire__form" onSubmit={onSubmit} data-fade>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={form.phone} onChange={onChange} autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="interest">Interested in</label>
            <select id="interest" name="interest" value={form.interest} onChange={onChange}>
              {home.interestOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={onChange} />
          </div>
          <button className="btn btn--solid" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Send enquiry'}
          </button>
          {status === 'success' && <p className="status" role="status">{home.formSuccess}</p>}
          {status === 'error' && (
            <p className="status is-error" role="alert">
              {home.formError}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
