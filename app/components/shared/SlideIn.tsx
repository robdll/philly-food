'use client'

import { ReactNode } from 'react'
import { motion, useInView, HTMLMotionProps } from 'framer-motion'
import { useRef } from 'react'

interface SlideInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  direction?: 'left' | 'right' | 'bottom'
  delay?: number
  duration?: number
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer'
}

/**
 * Reusable wrapper component that adds scroll-triggered slide-in animations.
 * Uses Framer Motion's useInView hook to animate elements only once when they appear.
 * 
 * @param direction - Animation direction: 'left', 'right', or 'bottom' (default: 'bottom')
 * @param delay - Animation delay in seconds (default: 0)
 * @param duration - Animation duration in seconds (default: 0.6)
 * @param as - HTML element to render (default: 'div')
 */
export default function SlideIn({
  children,
  direction = 'bottom',
  delay = 0,
  duration = 0.6,
  className = '',
  as: Component = 'div',
  id,
  ...props
}: SlideInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -100, y: 0 }
      case 'right':
        return { x: 100, y: 0 }
      case 'bottom':
        return { x: 0, y: 100 }
      default:
        return { x: 0, y: 100 }
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
  }

  const motionProps = {
    ref,
    initial: 'hidden' as const,
    animate: isInView ? 'visible' : 'hidden',
    variants,
    className,
    id,
    ...props,
  }

  if (Component === 'section') {
    return <motion.section {...motionProps}>{children}</motion.section>
  }
  if (Component === 'article') {
    return <motion.article {...motionProps}>{children}</motion.article>
  }
  if (Component === 'aside') {
    return <motion.aside {...motionProps}>{children}</motion.aside>
  }
  if (Component === 'header') {
    return <motion.header {...motionProps}>{children}</motion.header>
  }
  if (Component === 'footer') {
    return <motion.footer {...motionProps}>{children}</motion.footer>
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}

