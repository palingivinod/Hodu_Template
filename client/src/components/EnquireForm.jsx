import { useState } from 'react'
import { brand } from '../data/content'

const villaOptions = [
  'The Signature Villa (5 BHK)',
  'Cornerstone Villa (4 BHK)',
  'Terrace Pavilion (5 BHK Luxury)',
  'Private Villa Masterplan Consultation',
]

export default function EnquireForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    selectedVilla: villaOptions[0],
    preferredDate: '',
    notes: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleVillaSelect = (villa) => {
    setForm((prev) => ({ ...prev, selectedVilla: villa }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: `${form.selectedVilla} | Date: ${form.preferredDate || 'Flexible'}`,
          message: form.notes,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="lux-enquire-box" id="enquire">
      <div className="lux-enquire-card">
        {/* Card Header */}
        <div className="lux-enquire-card__head">
          <span className="lux-tag">PRIVATE CONCIERGE</span>
          <h3 className="lux-enquire-card__title">
            Arrange a Private Site & Villa Viewing
          </h3>
          <p className="lux-enquire-card__sub">
            Experience the architectural volumes, natural light, and bespoke craftsmanship in person in Vijayawada.
          </p>
        </div>

        {status === 'success' ? (
          <div className="lux-enquire-success">
            <div className="lux-enquire-success__icon">✦</div>
            <h4>Private Viewing Request Confirmed</h4>
            <p>
              Thank you, <strong>{form.name}</strong>. Our Private Client Lead will contact you shortly to coordinate your private VIP site walkthrough.
            </p>
            <button
              type="button"
              className="lux-btn-gold"
              onClick={() => {
                setStatus('idle')
                setForm({
                  name: '',
                  email: '',
                  phone: '',
                  selectedVilla: villaOptions[0],
                  preferredDate: '',
                  notes: '',
                })
              }}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form className="lux-enquire-form" onSubmit={handleSubmit}>
            {/* Villa Selection Chips */}
            <div className="lux-form-group">
              <label className="lux-label">Select Villa Typology of Interest</label>
              <div className="lux-chip-grid">
                {villaOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`lux-chip ${form.selectedVilla === opt ? 'is-selected' : ''}`}
                    onClick={() => handleVillaSelect(opt)}
                  >
                    <span>{opt}</span>
                    {form.selectedVilla === opt && <span className="lux-chip__check">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="lux-form-row">
              <div className="lux-form-group">
                <label htmlFor="concierge-name" className="lux-label">
                  Your Full Name *
                </label>
                <input
                  id="concierge-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Vinod Palingi"
                  value={form.name}
                  onChange={handleChange}
                  className="lux-input"
                />
              </div>

              <div className="lux-form-group">
                <label htmlFor="concierge-phone" className="lux-label">
                  Contact Phone Number *
                </label>
                <input
                  id="concierge-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className="lux-input"
                />
              </div>
            </div>

            <div className="lux-form-row">
              <div className="lux-form-group">
                <label htmlFor="concierge-email" className="lux-label">
                  Private Email Address *
                </label>
                <input
                  id="concierge-email"
                  name="email"
                  type="email"
                  required
                  placeholder="vinod@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="lux-input"
                />
              </div>

              <div className="lux-form-group">
                <label htmlFor="concierge-date" className="lux-label">
                  Preferred Visit Date (Optional)
                </label>
                <input
                  id="concierge-date"
                  name="preferredDate"
                  type="date"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className="lux-input"
                />
              </div>
            </div>

            <div className="lux-form-group">
              <label htmlFor="concierge-notes" className="lux-label">
                Bespoke Requirements or Questions (Optional)
              </label>
              <textarea
                id="concierge-notes"
                name="notes"
                rows="3"
                placeholder="Share any specific spatial requirements, timing, or private viewing preferences..."
                value={form.notes}
                onChange={handleChange}
                className="lux-textarea"
              />
            </div>

            {/* Submit & Fast-Track Line */}
            <div className="lux-form-actions">
              <button
                type="submit"
                className="lux-btn-gold is-large"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span>Securing Invitation…</span>
                ) : (
                  <>
                    <span>Confirm Private Viewing</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              <div className="lux-fast-track">
                <span>Direct VIP Connect:</span>
                <a
                  href={`https://wa.me/${brand.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="lux-quick-link"
                >
                  WhatsApp VIP
                </a>
                <span className="lux-dot-sep">·</span>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="lux-quick-link">
                  {brand.phone}
                </a>
              </div>
            </div>

            {status === 'error' && (
              <p className="lux-form-error" role="alert">
                We encountered an issue submitting your request. Please call our direct line at {brand.phone}.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
