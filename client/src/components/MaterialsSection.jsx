import { materialsData } from '../data/content'

// Custom thin-line architectural vector illustrations designed specifically for HODU
// Style matches the line-art cartoon illustrations in Reference Image 2

function ArchitecturalBlueprintIcon() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="hodu-materials__svg">
      {/* Blueprint scroll background */}
      <rect x="25" y="15" width="70" height="55" rx="3" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 22C20 18.134 23.134 15 27 15H95" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 70C20 66.134 23.134 63 27 63H95" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 22V70" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M95 15V70" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 3" />
      
      {/* Architectural floor plan layout lines inside blueprint */}
      <rect x="35" y="25" width="22" height="20" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="62" y="25" width="23" height="32" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="35" y="49" width="22" height="12" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Door arc indicator */}
      <path d="M57 45A12 12 0 0 0 45 45" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
      
      {/* Drafting T-square ruler resting diagonally */}
      <line x1="15" y1="78" x2="105" y2="78" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="22" y1="68" x2="22" y2="84" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SiteEngineerIcon() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="hodu-materials__svg">
      {/* Construction safety hard-hat / helmet */}
      <path d="M38 38C38 25.8497 47.8497 16 60 16C72.1503 16 82 25.8497 82 38H38Z" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 38H88V41C88 42.1046 87.1046 43 86 43H34C32.8954 43 32 42.1046 32 41V38Z" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 16V22H65V16" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Worker head / face contour */}
      <path d="M46 43C46 50.732 52.268 57 60 57C67.732 57 74 50.732 74 43" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />

      {/* Shoulders & high-vis construction vest collar */}
      <path d="M30 78C30 68 40 64 50 62L60 67L70 62C80 64 90 68 90 78" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 62V78" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3" />
      <path d="M70 62V78" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3" />

      {/* Architectural blueprint roll in pocket or background */}
      <line x1="24" y1="52" x2="34" y2="75" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="28" y1="50" x2="38" y2="73" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function VillaElevationsIcon() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="hodu-materials__svg">
      {/* Primary Gabled / Modern Villa Elevation */}
      <path d="M22 68V42L44 26L66 42V68H22Z" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="36" y="50" width="16" height="18" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="30" y="36" width="10" height="10" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="48" y="36" width="10" height="10" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />

      {/* Adjacent Villa Form (Flat roof contemporary villa extension) */}
      <path d="M66 68V34H98V68H66Z" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="74" y="40" width="16" height="12" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="74" y1="46" x2="90" y2="46" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />

      {/* Ground line */}
      <line x1="14" y1="68" x2="106" y2="68" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />

      {/* Natural landscape tree element beside villa */}
      <path d="M102 68V54" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="102" cy="48" r="7" stroke="#344F38" strokeWidth="1.4" />
    </svg>
  )
}

function MaterialSamplesIcon() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="hodu-materials__svg">
      {/* Architectural Column / Material Sample Block */}
      <rect x="46" y="16" width="28" height="56" rx="2" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Column Capital & Base */}
      <line x1="40" y1="16" x2="80" y2="16" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="42" y1="22" x2="78" y2="22" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="42" y1="66" x2="78" y2="66" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="40" y1="72" x2="80" y2="72" stroke="#344F38" strokeWidth="1.6" strokeLinecap="round" />

      {/* Fluting / Stone & Wood Grain texture lines */}
      <line x1="53" y1="22" x2="53" y2="66" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="60" y1="22" x2="60" y2="66" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="67" y1="22" x2="67" y2="66" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />

      {/* Material Palette Swatch Plates flanking column */}
      <rect x="22" y="32" width="16" height="34" rx="1" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="26" y1="42" x2="34" y2="42" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="26" y1="52" x2="34" y2="52" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />

      <rect x="82" y="32" width="16" height="34" rx="1" stroke="#344F38" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="86" y1="42" x2="94" y2="42" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="86" y1="52" x2="94" y2="52" stroke="#344F38" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function renderCardIcon(iconKey) {
  switch (iconKey) {
    case 'blueprint':
      return <ArchitecturalBlueprintIcon />
    case 'engineer':
      return <SiteEngineerIcon />
    case 'villas':
      return <VillaElevationsIcon />
    case 'materials':
      return <MaterialSamplesIcon />
    default:
      return <ArchitecturalBlueprintIcon />
  }
}

export default function MaterialsSection() {
  return (
    <section className="hodu-section hodu-materials" id="craft">
      <div className="hodu-container hodu-materials__container">
        {/* Section Header */}
        <div className="hodu-materials__head">
          <span className="hodu-eyebrow hodu-materials__eyebrow">{materialsData.eyebrow}</span>
          <h2 className="hodu-title hodu-materials__heading">{materialsData.heading}</h2>
          <p className="hodu-materials__intro">{materialsData.introduction}</p>
        </div>

        {/* 4 Equal Information Cards Row */}
        <div className="hodu-materials__grid">
          {materialsData.cards.map((card) => (
            <article key={card.id} className="hodu-materials__card">
              {/* Card Category Title */}
              <h3 className="hodu-materials__card-title">{card.title}</h3>

              {/* Large Thin-Line Cartoon / Illustration Icon */}
              <div className="hodu-materials__icon-container">
                {renderCardIcon(card.iconKey)}
              </div>

              {/* Strong Informative Subheading */}
              <h4 className="hodu-materials__card-subheading">{card.subheading}</h4>

              {/* Supporting Description */}
              <p className="hodu-materials__card-desc">{card.desc}</p>

              {/* Bottom "Learn More" Link with Circular Arrow */}
              <div className="hodu-materials__card-footer">
                <a href="#contact" className="hodu-materials__link">
                  <span className="hodu-materials__link-text">{card.linkText || 'Learn More'}</span>
                  <span className="hodu-materials__arrow-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#344F38" strokeWidth="1.5" />
                      <path d="M10 8L14 12L10 16" stroke="#344F38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
