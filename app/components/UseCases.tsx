'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function UseCases() {
  const useCases = [
    {
      title: 'Feste private e matrimoni',
      bullets: [
        'Menu personalizzabile per ogni esigenza',
        'Servizio completo chiavi in mano',
        'Atmosfera unica e memorabile',
      ],
      description: 'Rendi il tuo evento speciale con il gusto autentico dei nostri panini. Perfetto per matrimoni, compleanni e celebrazioni private.',
      image: 'https://placehold.co/600x400/png?text=Feste+Private',
    },
    {
      title: 'Eventi aziendali e team building',
      bullets: [
        'Soluzione innovativa per il tuo team',
        'Break pranzo o cena aziendale',
        'Esperienza coinvolgente e gustosa',
      ],
      description: 'Sorprendi i tuoi dipendenti con un\'esperienza culinaria unica. Ideale per team building, meeting aziendali e eventi corporate.',
      image: 'https://placehold.co/600x400/png?text=Eventi+Aziendali',
    },
    {
      title: 'Festival e fiere',
      bullets: [
        'Presenza fissa o itinerante',
        'Alta capacità di servizio',
        'Menu adatti a grandi volumi',
      ],
      description: 'Porta il gusto di Philadelphia ai tuoi eventi pubblici. Perfetto per festival, fiere, sagre e manifestazioni di piazza.',
      image: 'https://placehold.co/600x400/png?text=Festival',
    },
    {
      title: 'Noleggio truck per brand o operatori food',
      bullets: [
        'Truck completamente attrezzati',
        'Supporto tecnico incluso',
        'Personalizzazione grafica disponibile',
      ],
      description: 'Noleggia i nostri food truck per il tuo brand o attività. Soluzione ideale per operatori del settore food e marketing esperienziale.',
      image: 'https://placehold.co/600x400/png?text=Noleggio+Truck',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="eventi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Scopri tutte le situazioni in cui i nostri food truck fanno la differenza
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="card-neobrutal">
              <div className="relative w-full h-48 mb-6 rounded-neobrutal border-2 border-text overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-brush text-3xl font-bold mb-4 text-text">
                {useCase.title}
              </h3>
              <ul className="space-y-2 mb-4 font-sans">
                {useCase.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-red font-bold mt-1">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-text/70">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="card-neobrutal">
            <div className="relative w-full h-48 mb-6 rounded-neobrutal border-2 border-text overflow-hidden">
              <Image
                src={useCases[currentIndex].image}
                alt={useCases[currentIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-brush text-2xl font-bold mb-4 text-text">
              {useCases[currentIndex].title}
            </h3>
            <ul className="space-y-2 mb-4 font-sans">
              {useCases[currentIndex].bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-red font-bold mt-1">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-text/70 mb-4">
              {useCases[currentIndex].description}
            </p>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full border-4 border-text shadow-neobrutal bg-white hover:bg-primary-gold transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <div className="flex gap-2 items-center">
              {useCases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full border-2 border-text transition-all ${
                    i === currentIndex ? 'bg-primary-red' : 'bg-white'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex((prev) => (prev === useCases.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 rounded-full border-4 border-text shadow-neobrutal bg-white hover:bg-primary-gold transition-colors flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

