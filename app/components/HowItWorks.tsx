export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '📞',
      title: 'Contattaci',
      description: 'Tramite modulo o WhatsApp',
    },
    {
      number: '2',
      icon: '💬',
      title: 'Raccontaci',
      description: 'Il tuo evento',
    },
    {
      number: '3',
      icon: '📋',
      title: 'Ricevi',
      description: 'Un preventivo personalizzato',
    },
    {
      number: '4',
      icon: '🎉',
      title: 'Rilassati',
      description: 'Noi portiamo gusto e stile al tuo evento!',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary-gold">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Come funziona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-neobrutal text-center relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-red text-white rounded-full border-4 border-text shadow-neobrutal flex items-center justify-center font-bold font-sans text-xl">
                {step.number}
              </div>
              <div className="text-5xl mb-4 mt-4">{step.icon}</div>
              <h3 className="font-brush text-2xl font-bold mb-2 text-text">
                {step.title}
              </h3>
              <p className="font-sans text-text/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

