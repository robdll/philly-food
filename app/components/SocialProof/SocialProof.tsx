import Image from 'next/image'
import { logos } from './SocialProof.constants'
import SlideIn from '../shared/SlideIn'

export default function SocialProof() {
  return (
    <section className="py-12 bg-primary-gold">
      <SlideIn direction="bottom">
        <div className="container mx-auto px-4">
        <p className="text-center font-sans text-sm text-text/60 mb-8 uppercase tracking-wider">
          Si fidano di noi
        </p>
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-8 md:gap-12 pb-2">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 h-16 md:h-20 bg-white rounded-neobrutal border-2 border-text/20 shadow-neobrutal opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={132}
                height={66}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
      </SlideIn>
    </section>
  )
}

