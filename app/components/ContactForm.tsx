'use client'

import { useState } from 'react'
import Button from './shared/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <section id="contatti" className="py-16 md:py-24 bg-primary-red">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Contattaci
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="card-neobrutal">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-brush text-3xl font-bold mb-4 text-text">
                  Messaggio inviato!
                </h3>
                <p className="font-sans text-lg text-text/70">
                  Ti risponderemo entro 24 ore.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-sans font-medium mb-2 text-text">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans font-medium mb-2 text-text">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-sans font-medium mb-2 text-text">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block font-sans font-medium mb-2 text-text">
                      Tipo di evento *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow bg-white"
                    >
                      <option value="">Seleziona...</option>
                      <option value="festa-privata">Festa privata / Matrimonio</option>
                      <option value="evento-aziendale">Evento aziendale / Team building</option>
                      <option value="festival">Festival / Fiera</option>
                      <option value="noleggio">Noleggio truck</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block font-sans font-medium mb-2 text-text">
                      Data evento
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block font-sans font-medium mb-2 text-text">
                      Numero ospiti
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans font-medium mb-2 text-text">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-neobrutal border-4 border-text shadow-neobrutal font-sans focus:outline-none focus:shadow-neobrutal-lg transition-shadow resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-neobrutal-lg font-badang text-lg font-bold transition-all duration-200 border-4 border-text shadow-neobrutal-lg bg-primary-red text-white hover:bg-primary-red hover:shadow-neobrutal-red hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                  </button>
                  <Button
                    type="secondary"
                    href="https://wa.me/393453506693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    💬 Contattaci su WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

