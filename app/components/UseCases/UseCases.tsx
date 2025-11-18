'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCases } from './UseCases.constants'

export default function UseCases() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="eventi" className="py-16 md:py-24 bg-primary-red">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Scopri tutte le situazioni in cui i nostri food truck fanno la differenza
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="card-neobrutal">
              <div className="relative w-full h-68 mb-6 rounded-neobrutal border-2 border-text overflow-hidden">
                <Image src={useCase.image} alt={useCase.title} fill className="object-cover" />
              </div>
              <h3 className="font-brush text-3xl font-bold mb-4 text-text">{useCase.title}</h3>
              <ul className="space-y-2 mb-4 font-sans">
                {useCase.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-red font-bold mt-1">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-text/70">{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="card-neobrutal">
            <div className="relative w-full h-68 mb-6 rounded-neobrutal border-2 border-text overflow-hidden">
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
            <p className="font-sans text-text/70 mb-4">{useCases[currentIndex].description}</p>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrentIndex(prev => (prev === 0 ? useCases.length - 1 : prev - 1))}
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
              onClick={() => setCurrentIndex(prev => (prev === useCases.length - 1 ? 0 : prev + 1))}
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

