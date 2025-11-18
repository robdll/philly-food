import SlideIn from './shared/SlideIn'

export default function PainPoints() {
  const points = [
    "Organizzazione completa dall'inizio alla fine",
    'Staff professionale e sempre presente',
    'Allestimento, servizio e pulizia gestiti interamente da noi',
    "Zero pensieri: tu goditi l'evento, noi pensiamo a tutto",
    'Soluzioni personalizzate in base al tipo di festa o occasione',
    'Qualità, gusto e affidabilità garantiti',
  ]

  return (
    <section className="py-16 md:py-24 bg-primary-gold relative overflow-hidden">
      {/* Drippy shapes */}
      <div className="absolute top-0 left-0 right-0 h-16 drippy-shape bg-primary-gold opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 drippy-shape-bottom bg-primary-gold opacity-80"></div>

      <SlideIn direction="bottom">
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-text mb-8">
            Il tuo evento, senza pensieri. Al resto pensiamo noi.
          </h2>
          <div className="bg-white rounded-neobrutal-lg border-4 border-text shadow-neobrutal-lg p-8 md:p-12">
            <ul className="space-y-4 text-left">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 bg-primary-red text-white rounded-full border-2 border-text flex items-center justify-center font-bold font-family-sans">
                    ✓
                  </span>
                  <span className="font-family-sans text-lg md:text-xl font-medium text-text">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </SlideIn>
    </section>
  )
}
