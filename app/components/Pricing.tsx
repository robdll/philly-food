import Button from './shared/Button'

export default function Pricing() {
  return (
    <section id="noleggio" className="py-16 md:py-24 bg-primary-red">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-8">Preventivi su misura</h2>
          <p className="font-sans text-xl md:text-2xl text-text/80 mb-8">
            Ogni evento è unico — contattaci per ricevere un preventivo su misura. Ti rispondiamo
            entro 24 ore.
          </p>
          <Button
            type="primary"
            href="https://wa.me/393453506693"
            target="_blank"
            rel="noopener noreferrer"
          >
            Richiedi un preventivo
          </Button>
        </div>
      </div>
    </section>
  )
}
