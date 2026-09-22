export default function MarqueeTicker({
  items = [
    'BESPOKE ARCHITECTURE',
    'VIJAYAWADA PRIME ENCLAVE',
    'SCULPTED NATURAL LIGHT',
    'TIMELESS MATERIALITY',
    'CONTEMPORARY LUXURY LIVING',
    'SUSTAINABLE OPULENCE',
    'HIGH-PRECISION ENGINEERING',
  ],
  direction = 'left',
  speed = 'normal',
}) {
  const repeated = [...items, ...items, ...items]

  return (
    <div className={`ticker-container ${direction} ${speed}`} aria-hidden="true">
      <div className="ticker-track">
        {repeated.map((text, i) => (
          <div key={`${text}-${i}`} className="ticker-item">
            <span className="ticker-text">{text}</span>
            <span className="ticker-symbol">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
