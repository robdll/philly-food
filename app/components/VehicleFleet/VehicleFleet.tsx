import Image from 'next/image'
import Button from '../shared/Button'
import { features, images } from './VehicleFleet.constants'

export default function VehicleFleet() {
  return (
    <section id="noleggio" className="py-16 md:py-24 bg-primary-gold">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-6">
          Noleggia il tuo mezzo – Parco Veicoli Dedicato
        </h2>
        
        <p className="text-center font-sans text-lg md:text-xl mb-8 text-text/80 max-w-3xl mx-auto">
          Scopri il nostro parco mezzi progettato per rispondere a ogni esigenza operativa.
        </p>

        {/* Images - Horizontal scroll on mobile, grid on desktop */}
        <div className="mb-8">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-80 h-64 rounded-neobrutal border-4 border-text shadow-neobrutal overflow-hidden shrink-0"
                >
                  <Image
                    src={image}
                    alt={`Mezzo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-80 rounded-neobrutal border-4 border-text shadow-neobrutal overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Mezzo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center font-sans text-base md:text-lg mb-12 text-text/70 max-w-2xl mx-auto">
          Offriamo veicoli completamente configurabili, adattabili al tuo tipo di attività e al livello di servizio che vuoi garantire.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card-neobrutal">
              <div className="flex items-start gap-3">
                <span className="text-primary-red font-bold text-xl mt-1 shrink-0">•</span>
                <p className="font-sans text-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-lg md:text-xl font-medium text-text max-w-2xl mx-auto mb-8">
          Scegli la soluzione ideale e mettiti su strada con un veicolo pronto a lavorare per te.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button href="#contatti" type="primary">
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  )
}

