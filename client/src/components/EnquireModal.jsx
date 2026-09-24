import { useState } from 'react'

export default function EnquireModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    plotSize: '4000-6000 sq.ft.',
    timeline: 'Within 3 months',
    notes: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2800)
  }

  return (
    <div className={`hodu-modal-backdrop ${isOpen ? 'hodu-modal-backdrop--open' : ''}`} onClick={onClose}>
      <div className="hodu-modal" onClick={(e) => e.stopPropagation()}>
        <button className="hodu-modal__close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <h3 className="hodu-modal__title">Project Enquiry Received</h3>
            <p className="hodu-modal__subtitle">
              Thank you, {formData.name || 'friend'}. Our principal architect will contact you within 24 hours to review your site details.
            </p>
          </div>
        ) : (
          <>
            <h3 className="hodu-modal__title">Start Your Project</h3>
            <p className="hodu-modal__subtitle">
              Tell us about your site, your vision and the home you wish to build with HODU.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="hodu-form__group">
                <label className="hodu-form__label">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anish Varma"
                  className="hodu-form__input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="hodu-form__group">
                  <label className="hodu-form__label">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="hodu-form__input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="hodu-form__group">
                  <label className="hodu-form__label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    className="hodu-form__input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="hodu-form__group">
                  <label className="hodu-form__label">Site Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vijayawada / Guntur"
                    className="hodu-form__input"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <div className="hodu-form__group">
                  <label className="hodu-form__label">Expected Villa Size</label>
                  <select
                    className="hodu-form__select"
                    value={formData.plotSize}
                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                  >
                    <option value="3000-4000 sq.ft.">3,000 – 4,000 sq.ft.</option>
                    <option value="4000-6000 sq.ft.">4,000 – 6,000 sq.ft.</option>
                    <option value="6000+ sq.ft.">6,000+ sq.ft.</option>
                  </select>
                </div>
              </div>

              <div className="hodu-form__group">
                <label className="hodu-form__label">Project Vision / Notes</label>
                <textarea
                  rows="3"
                  placeholder="Share any specific requirements e.g. courtyard focus, vastu preference..."
                  className="hodu-form__textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="hodu-btn hodu-btn--primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                SUBMIT PROJECT ENQUIRY
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
