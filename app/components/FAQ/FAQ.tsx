'use client'

import { useState } from 'react'
import { faqs, type FAQItem } from './FAQ.constants'
import SlideIn from '../shared/SlideIn'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-primary-gold">
      <SlideIn direction="bottom">
        <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Domande Frequenti</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-neobrutal cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-brush text-xl md:text-2xl font-bold text-text pr-4">
                  {faq.question}
                </h3>
                <button
                  className="shrink-0 w-8 h-8 rounded-full border-2 border-text bg-primary-red text-white flex items-center justify-center font-bold transition-transform"
                  aria-label="Toggle FAQ"
                >
                  <span
                    className={`transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
              </div>
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t-2 border-text/20">
                  <p className="font-family-sans text-text/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </SlideIn>
    </section>
  )
}

