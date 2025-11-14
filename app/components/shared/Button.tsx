import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({
  type = 'primary',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = `
    px-4 py-3 md:px-8 md:py-4 rounded-neobrutal-lg
    font-badang text-base md:text-lg font-bold
    transition-all duration-200
    border-4 border-text
    shadow-neobrutal-lg
    disabled:opacity-50 disabled:cursor-not-allowed
    tracking-[3px]
    text-center
    inline-block
  `

  const primaryStyles = `
    bg-primary-red text-white
    hover:bg-primary-red hover:shadow-neobrutal-red
  `

  const secondaryStyles = `
    bg-primary-gold text-text
    hover:bg-primary-gold hover:shadow-neobrutal-gold
  `

  const hoverStyles = `
    hover:translate-x-1 hover:translate-y-1
    active:translate-x-2 active:translate-y-2 active:shadow-none
  `

  const combinedStyles = `
    ${baseStyles}
    ${type === 'primary' ? primaryStyles : secondaryStyles}
    ${!disabled ? hoverStyles : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ')

  if (href) {
    return (
      <Link href={href} className={combinedStyles} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  )
}
