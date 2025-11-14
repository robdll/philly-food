import Image from 'next/image'
import Button from './shared/Button'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-primary-red relative overflow-hidden">
      {/* Drippy shapes at top */}
      <div className="absolute top-0 left-0 right-0 h-20 drippy-shape bg-primary-gold opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-up">
            <h1 className="section-title mb-6">
              Rendiamo unico il tuo evento con il gusto del nostro food truck!
            </h1>
            <p className="font-sans text-xl md:text-2xl mb-4 text-text/80">
              Il catering che sorprende: arriviamo ovunque con i nostri food truck.
            </p>
            <p className="font-sans text-lg mb-8 text-text/70">
              Il gusto che unisce le persone nei tuoi eventi
            </p>
            <Button
              type="secondary"
              href="https://wa.me/393453506693"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richiedi un preventivo gratuito
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative fade-up">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-neobrutal-lg border-4 border-text shadow-neobrutal-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/png?text=Food+Truck"
                alt="Philly Food Truck"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-red rounded-full border-4 border-text shadow-neobrutal opacity-80"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-gold rounded-full border-4 border-text shadow-neobrutal opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

