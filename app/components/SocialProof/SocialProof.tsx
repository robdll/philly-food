'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { logos } from './SocialProof.constants'
import SlideIn from '../shared/SlideIn'

export default function SocialProof() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef(0)
  const animationFrameRef = useRef<number>()
  const directionRef = useRef<'forward' | 'backward'>('forward')

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    // Duplicate logos for seamless infinite scroll
    const scrollWidth = scrollContainer.scrollWidth / 2

    const animate = () => {
      if (!scrollContainer) return

      const speed = 1
      // Move forward or backward based on direction
      if (directionRef.current === 'forward') {
        scrollPositionRef.current += speed // Adjust speed here (lower = slower)
        
        // Reverse direction when we've scrolled through one set of logos
        if (scrollPositionRef.current >= scrollWidth) {
          directionRef.current = 'backward'
        }
      } else {
        scrollPositionRef.current -= speed // Adjust speed here (lower = slower)
        
        // Reverse direction when we've reached the beginning
        if (scrollPositionRef.current <= 0) {
          scrollPositionRef.current = 0
          directionRef.current = 'forward'
        }
      }

      scrollContainer.scrollLeft = scrollPositionRef.current
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Duplicate logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="py-12 bg-primary-gold">
      <SlideIn direction="bottom">
        <div className="container mx-auto px-4">
        <p className="text-center font-family-sans text-sm text-text/80 mb-8 uppercase tracking-wider">
          Si fidano di noi
        </p>
        <div className="relative">
          {/* Left fade gradient */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, var(--color-primary-gold), transparent)'
            }}
          />
          {/* Right fade gradient */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, var(--color-primary-gold), transparent)'
            }}
          />
          <div 
            ref={scrollContainerRef}
            className="flex flex-nowrap overflow-x-hidden scrollbar-hide gap-8 md:gap-12 py-2"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-100 hover:scale-105 transition-transform"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={132}
                  height={66}
                  className="object-contain h-16 md:h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </SlideIn>
    </section>
  )
}

