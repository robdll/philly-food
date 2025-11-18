import Link from 'next/link'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-brush text-3xl font-bold mb-4">PHILLY FOOD</h3>
            <p className="font-sans text-sm opacity-90 mb-4">
              Il gusto autentico di Philadelphia direttamente nelle strade della tua città.
            </p>
            <Button
              type="secondary"
              href="https://wa.me/393453506693"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span>💬</span> WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-brush text-xl font-bold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 font-sans">
              <li>
                <Link href="#home" className="hover:text-primary-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#eventi" className="hover:text-primary-gold transition-colors">
                  Eventi & Catering
                </Link>
              </li>
              <li>
                <Link href="#noleggio" className="hover:text-primary-gold transition-colors">
                  Noleggio Truck
                </Link>
              </li>
              <li>
                <Link href="#chi-siamo" className="hover:text-primary-gold transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-brush text-xl font-bold mb-4">Contatti</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="tel:+393382663963" className="hover:text-primary-gold transition-colors">
                  📞 +39 338 266 3963
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@phillyfood.net"
                  className="hover:text-primary-gold transition-colors"
                >
                  ✉️ info@phillyfood.it
                </a>
              </li>
              <li className="opacity-90">🚚 Operiamo in tutta Italia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-4 border-white pt-8 mt-8">
          <p className="text-center font-sans text-sm opacity-75">
            © {new Date().getFullYear()} Philly Food. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
