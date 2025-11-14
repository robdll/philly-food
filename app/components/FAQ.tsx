'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'Fate catering anche per eventi privati?',
      answer:
        'Sì, organizziamo servizi di catering per eventi privati di ogni tipo: matrimoni, compleanni, anniversari, feste in giardino e molto altro. Il nostro servizio è completamente personalizzabile in base alle tue esigenze.',
    },
    {
      question: 'In quali zone operate?',
      answer:
        'Operiamo in tutta Italia. I nostri food truck possono raggiungere qualsiasi località per il tuo evento. Contattaci per verificare la disponibilità nella tua zona specifica.',
    },
    {
      question: 'Posso personalizzare il menù?',
      answer:
        "Assolutamente sì! Offriamo menu completamente personalizzabili. Possiamo adattare le proposte alle tue preferenze, intolleranze alimentari o temi dell'evento. Discutiamo insieme le opzioni durante la fase di preventivo.",
    },
    {
      question: 'Cosa è incluso nel noleggio del truck?',
      answer:
        "Il noleggio include il food truck completamente attrezzato, tutto il necessario per la preparazione e il servizio, supporto tecnico durante l'evento, e opzionalmente lo staff. Possiamo anche personalizzare la grafica del truck per il tuo brand.",
    },
    {
      question: 'Quanto tempo prima devo prenotare?',
      answer:
        'Consigliamo di prenotare con almeno 2-3 settimane di anticipo, specialmente per eventi nei weekend o durante la stagione estiva. Per eventi urgenti, contattaci comunque e valuteremo la disponibilità.',
    },
    {
      question: 'Fornite anche bevande?',
      answer:
        'Sì, possiamo fornire una selezione di bevande analcoliche. Per bevande alcoliche, possiamo organizzarci in base alle normative locali e alle tue esigenze specifiche.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-primary-gold">
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
                  className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-text bg-primary-red text-white flex items-center justify-center font-bold transition-transform"
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
                  <p className="font-sans text-text/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
