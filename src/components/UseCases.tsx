import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { stagger, staggerItem } from '../lib/motion'
import './UseCases.css'

const cases = [
  {
    label: 'Neue Küche',
    text: 'Das letzte Detail, das eine frisch geplante Küche vollendet — Werkzeuge auf dem Niveau der Architektur.',
  },
  {
    label: 'Design-Liebhaber',
    text: 'Für alle, deren Küchenobjekte so durchdacht sein sollen wie ihr Interieur. Keine Kompromisse, kein Plastik.',
  },
  {
    label: 'Airbnb-Gastgeber',
    text: 'Ein Detail, das Gäste sofort spüren. Bewertungen, die von „wie im Hotel“ sprechen.',
  },
  {
    label: 'Hotellerie',
    text: 'Konsistente Premium-Ausstattung für Suiten und Apartments — langlebig, edel, repräsentativ.',
  },
]

export default function UseCases() {
  const reduce = useReducedMotion()

  return (
    <section className="section usecases" id="fuer-wen">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Für wen"
          title="Geschaffen für anspruchsvolle Räume."
          align="center"
        >
          Von der privaten Designküche bis zur Hotelsuite — überall, wo Qualität
          gesehen werden soll.
        </SectionHeading>

        <motion.div
          className="usecases-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: reduce ? 0 : 0.2 }}
        >
          {cases.map((item, i) => (
            <motion.article key={item.label} className="usecase" variants={staggerItem}>
              <span className="usecase-no">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="usecase-title">{item.label}</h3>
              <p className="usecase-text">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
