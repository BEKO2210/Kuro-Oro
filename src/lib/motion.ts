import type { Variants } from 'framer-motion'

/** Luxury easing — slow settle, used everywhere for cohesion. */
export const easeLux: [number, number, number, number] = [0.16, 1, 0.3, 1]

/** Default reveal: rise + fade. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeLux } },
}

/** Pure fade — used as the reduced-motion fallback. */
export const reducedReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

/** Parent container that staggers its direct children. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

/** Child item for a staggered group. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeLux } },
}
