import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { easeLux } from '../lib/motion'
import './Hero.css'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.35 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeLux } },
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />

      <motion.div
        className="container hero-inner"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="eyebrow" variants={item}>
          Kuro &amp; Oro — Manufaktur für die Küche
        </motion.span>

        <motion.h1 className="hero-title heading-xl" variants={item}>
          Wo Interior Design
          <br />
          auf <span className="gold-italic">Kochkultur</span> trifft.
        </motion.h1>

        {/* Memorable anchor: a gold hairline that draws itself in */}
        <motion.div
          className="hero-rule"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: reduce ? 0 : 1.4,
            ease: easeLux,
            delay: reduce ? 0 : 1.1,
          }}
        />

        <motion.p className="hero-lead lead" variants={item}>
          Premium-Werkzeuge für Küche, Kaffee und Kochen, die alltägliche
          Routinen in ein Hotel-Erlebnis verwandeln. Höchste Qualität sollte
          nicht in der Schublade verschwinden.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a href="#kollektion" className="btn">
            Kollektion ansehen
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#manufaktur" className="btn btn--ghost">
            Premium-Küche entdecken
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 2, duration: 1 }}
      >
        <span>Scrollen</span>
        <span className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
