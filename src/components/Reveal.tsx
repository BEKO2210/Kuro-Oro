import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, reducedReveal } from '../lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Portion of the element that must be visible before it animates in. */
  amount?: number
}

/**
 * Scroll-triggered reveal. Animates once on enter and respects the user's
 * reduced-motion preference by falling back to a plain fade.
 */
export default function Reveal({ children, className, amount = 0.25 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduce ? reducedReveal : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  )
}
