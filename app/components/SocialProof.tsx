export default function SocialProof() {
  const logos = [
    { name: 'Gardaland', placeholder: 'Gardaland' },
    { name: 'Party Like a Deejay', placeholder: 'Party Like a Deejay' },
    { name: 'Brand 1', placeholder: 'Brand 1' },
    { name: 'Brand 2', placeholder: 'Brand 2' },
    { name: 'Brand 3', placeholder: 'Brand 3' },
  ]

  return (
    <section className="py-12 bg-primary-gold">
      <div className="container mx-auto px-4">
        <p className="text-center font-sans text-sm text-text/60 mb-8 uppercase tracking-wider">
          Si fidano di noi
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-16 md:w-40 md:h-20 bg-white rounded-neobrutal border-2 border-text/20 shadow-neobrutal opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="font-sans font-bold text-text/40 text-sm md:text-base">
                {logo.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

