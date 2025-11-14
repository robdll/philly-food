export default function PainPoints() {
  const points = [
    'Organizzazione completa del servizio',
    'Staff professionale incluso',
    'Pulizia e allestimento gestiti da noi',
    'Nessun pensiero, solo gusto e divertimento',
  ]

  return (
    <section className="py-16 md:py-24 bg-primary-gold relative overflow-hidden">
      {/* Drippy shapes */}
      <div className="absolute top-0 left-0 right-0 h-16 drippy-shape bg-primary-gold opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 drippy-shape-bottom bg-primary-gold opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-text mb-8">
            Cerchi un servizio chiavi in mano per il tuo evento?
          </h2>
          <div className="bg-white rounded-neobrutal-lg border-4 border-text shadow-neobrutal-lg p-8 md:p-12">
            <ul className="space-y-4 text-left">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-red text-white rounded-full border-2 border-text flex items-center justify-center font-bold font-sans">
                    ✓
                  </span>
                  <span className="font-sans text-lg md:text-xl font-medium text-text">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

