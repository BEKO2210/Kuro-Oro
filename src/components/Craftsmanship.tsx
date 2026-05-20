import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { stagger, staggerItem } from '../lib/motion'
import './Craftsmanship.css'

const materials = [
  { name: 'Edelstahl', note: 'Korrosionsfrei, präzise gebürstet' },
  { name: 'Vollmessing', note: 'Warmer Ton, edle Patina' },
  { name: 'Walnuss & Eiche', note: 'Naturgeölt, von Hand veredelt' },
  { name: 'Naturstein', note: 'Schwer, kühl, unverwechselbar' },
]

export default function Craftsmanship() {
  const reduce = useReducedMotion()

  return (
    <section className="section craft" id="manufaktur">
      <div className="container craft-grid">
        <Reveal className="craft-visual-wrap">
          <div className="craft-visual">
            <span className="craft-bracket craft-bracket--tl" aria-hidden="true" />
            <span className="craft-bracket craft-bracket--br" aria-hidden="true" />
            <span className="craft-visual-label">Materialaufnahme folgt</span>
            <span className="craft-visual-sub">Makro · Messing &amp; Edelstahl</span>
          </div>
        </Reveal>

        <div className="craft-content">
          <SectionHeading
            index="04"
            eyebrow="Material & Manufaktur"
            title={<>Ehrliche Materialien, kompromisslos verarbeitet.</>}
          >
            Jedes Objekt beginnt beim Material. Wir wählen Werkstoffe, die sich
            gut anfühlen und mit der Zeit Charakter gewinnen. Detaillierte
            Material- und Fertigungsangaben folgen mit den finalen Produkten.
          </SectionHeading>

          <motion.ul
            className="craft-materials"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: reduce ? 0 : 0.2 }}
          >
            {materials.map((material) => (
              <motion.li key={material.name} className="craft-material" variants={staggerItem}>
                <span className="craft-material-name">{material.name}</span>
                <span className="craft-material-note">{material.note}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
