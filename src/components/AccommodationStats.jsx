import './AccommodationStats.css'

function AccommodationStats() {
  const stats = [
    {
      number: '60m²+',
      description: 'Open space practice hall.',
    },
    {
      number: '14',
      description: 'Beds across 6 cozy rooms',
    },
    {
      number: '1.3ha+',
      description: 'Of private land, a natural swimming pond, sauna, and fire circle.',
    },
  ]

  return (
    <section className="accommodation-stats">
      {stats.map((stat, index) => (
        <div key={index} className="accommodation-stat-item">
          <div className="accommodation-stat-number">{stat.number}</div>
          <div className="accommodation-stat-description">{stat.description}</div>
        </div>
      ))}
    </section>
  )
}

export default AccommodationStats

