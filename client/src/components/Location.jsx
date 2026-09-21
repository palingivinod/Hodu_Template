import { brand, connectivity, locationAmenities } from '../data/content'

export default function Location() {
  return (
    <section className="section section--soft" id="connect" aria-labelledby="loc-title">
      <div className="wrap">
        <div data-fade>
          <p className="eyebrow">Location</p>
          <h2 className="h2" id="loc-title">
            Connected to everything.
            <br />
            Designed for privacy.
          </h2>
        </div>
        <div className="location" style={{ marginTop: '2.5rem' }}>
          <div className="location__map" data-fade>
            <div className="location__pin">
              <strong>{brand.location}</strong>
              <span>HODU villa developments</span>
            </div>
          </div>
          <div>
            <div className="location__list" data-cascade>
              {locationAmenities.map((item) => (
                <div key={item.name} className="location__item">
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>
            <div className="location__list" style={{ marginTop: '1.5rem' }} data-cascade>
              {connectivity.map((item) => (
                <div key={item.name} className="location__item">
                  <strong>{item.name}</strong>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
