import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="stats" aria-label="Project specifications">
      <div className="wrap stats__row" data-cascade>
        {stats.map((item) => (
          <div key={item.label} className="stats__item">
            <p className="stats__value">{item.value}</p>
            <p className="stats__label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
