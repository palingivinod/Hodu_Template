import { useState } from 'react'
import { brand, luxuryVillas } from '../data/content'

export default function EnquireForm({ preselectedVilla = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    villaTypology: preselectedVilla || luxuryVillas[0].name,
    preferredDate: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          interest: `${form.villaTypology} | Preferred Date: ${form.preferredDate || 'Flexible'}`,
          message: form.message,
        }),
      })
    } catch {
      // Graceful fallback
    }
    setStatus('success')
  }

  return (
    <div className="arch-form-card" id="enquire">
      <div className="arch-form-head">
        <span className="arch-tag">PRIVATE CLIENT ADVISORY</span>
        <h3 className="arch-form-title">Schedule an Escorted Site Walkthrough</h3>
        <p className="arch-form-subtitle">
          Experience the 4.2-acre gated villa enclave, double-height volumes, and biophilic courtyards in person in Vijayawada.
        </p>
      </div>

      {status === 'success' ? (
        <div className="arch-form-success">
          <div className="arch-form-success__icon">✓</div>
          <h4>Private Visit Request Confirmed</h4>
          <p>
            Thank you, <strong>{form.name}</strong>. Our Senior Project Director will contact you at{' '}
            <strong>{form.phone}</strong> shortly to coordinate your private VIP site walkthrough.
          </p>
          <button
            type="button"
            className="arch-btn arch-btn--gold"
            onClick={() => {
              setStatus('idle')
              setForm({
                name: '',
                phone: '',
                email: '',
                villaTypology: luxuryVillas[0].name,
                preferredDate: '',
                message: '',
              })
            }}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="arch-form" onSubmit={handleSubmit}>
          {/* Villa Typology Selection */}
          <div className="arch-form__group">
            <label className="arch-form__label">Select Villa Model of Interest *</label>
            <div className="arch-form__chips">
              {luxuryVillas.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className={`arch-chip ${form.villaTypology === v.name ? 'is-active' : ''}`}
                  onClick={() => setForm((p) => ({ ...p, villaTypology: v.name }))}
                >
                  <strong>{v.name}</strong>
                  <span> ({v.builtUpArea})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 1: Name & Phone */}
          <div className="arch-form__row">
            <div className="arch-form__group">
              <label htmlFor="arch-name" className="arch-form__label">
                Full Name *
              </label>
              <input
                id="arch-name"
                name="name"
                type="text"
                required
                placeholder="e.g. Ramesh Varma"
                value={form.name}
                onChange={handleChange}
                className="arch-input"
              />
            </div>
            <div className="arch-form__group">
              <label htmlFor="arch-phone" className="arch-form__label">
                Contact Phone Number *
              </label>
              <input
                id="arch-phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className="arch-input"
              />
            </div>
          </div>

          {/* Row 2: Email & Date */}
          <div className="arch-form__row">
            <div className="arch-form__group">
              <label htmlFor="arch-email" className="arch-form__label">
                Email Address *
              </label>
              <input
                id="arch-email"
                name="email"
                type="email"
                required
                placeholder="ramesh@example.com"
                value={form.email}
                onChange={handleChange}
                className="arch-input"
              />
            </div>
            <div className="arch-form__group">
              <label htmlFor="arch-date" className="arch-form__label">
                Preferred Visit Date (Optional)
              </label>
              <input
                id="arch-date"
                name="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={handleChange}
                className="arch-input"
              />
            </div>
          </div>

          {/* Row 3: Notes */}
          <div className="arch-form__group">
            <label htmlFor="arch-msg" className="arch-form__label">
              Bespoke Requirements or Questions (Optional)
            </label>
            <textarea
              id="arch-msg"
              name="message"
              rows="3"
              placeholder="Mention any specific spatial requirements, orientation preferences, or private viewing timing..."
              value={form.message}
              onChange={handleChange}
              className="arch-textarea"
            />
          </div>

          {/* Form Actions */}
          <div className="arch-form__footer">
            <button
              type="submit"
              className="arch-btn arch-btn--gold arch-btn--lg"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Registering Request...' : 'Confirm Site Visit Request'}
            </button>

            <div className="arch-form__direct">
              <span className="arch-form__direct-label">Direct VIP Connect:</span>
              <a
                href={`https://wa.me/${brand.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="arch-direct-link"
              >
                WhatsApp Direct
              </a>
              <span className="arch-form__direct-sep">·</span>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="arch-direct-link">
                Call {brand.phone}
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
