'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from './Navbar.constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-sky border-b-4 border-text shadow-neobrutal">
      {/* Drippy top edge */}
      <div className="absolute -top-4 left-0 right-0 h-4 drippy-shape bg-primary-sky"></div>

      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="hover:scale-115 transition-transform"
          >
            <Image
              src="/images/logo_circular.png"
              alt="Philly Food Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-badang text-lg hover:text-primary-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-text rounded-neobrutal shadow-neobrutal bg-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <span
                className={`block h-0.5 bg-text transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span
                className={`block h-0.5 bg-text transition-all ${isOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 bg-text transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-4 border-text">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-badang text-lg hover:text-primary-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

