import { reasons } from './WhyUs.constants'
import SlideIn from '../shared/SlideIn'

export default function WhyUs() {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-primary-red">
      <div className="container mx-auto px-4">
        <SlideIn direction="right" delay={0}>
          <h2 className="section-title text-center mb-12">Perché scegliere Philly Food</h2>
        </SlideIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <SlideIn
              key={index}
              direction="right"
              delay={0.1 + index * 0.1}
            >
              <div className="card-neobrutal text-center">
                <div className="text-6xl mb-4">{reason.icon}</div>
                <p className="font-sans text-lg font-medium text-text">
                  {reason.text}
                </p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
}

