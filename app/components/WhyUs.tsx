export default function WhyUs() {
  const reasons = [
    {
      icon: '📅',
      text: 'Esperienza nella ristorazione da oltre 15 anni',
    },
    {
      icon: '🚚',
      text: 'Due truck completamente attrezzati + carretto hot dog',
    },
    {
      icon: '⚡',
      text: 'Cucina veloce, di qualità e personalizzabile',
    },
    {
      icon: '👥',
      text: 'Staff professionale e affidabile',
    },
  ]

  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Perché scegliere Philly Food
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-neobrutal text-center"
            >
              <div className="text-6xl mb-4">{reason.icon}</div>
              <p className="font-sans text-lg font-medium text-text">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

