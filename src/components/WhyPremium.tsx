import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { stagger, staggerItem } from '../lib/motion'
import './WhyPremium.css'

const points = [
  {
    no: '01',
    title: 'Werkzeug wird Ritual',
    text: 'Ein Objekt, das gut in der Hand liegt, verändert die Art, wie man kocht. Aus Routine wird ein bewusster Moment.',
  },
  {
    no: '02',
    title: 'Sichtbare Qualität',
    text: 'Materialien, die altern wie gute Möbel — Messing, Edelstahl, Holz und Stein, die mit der Zeit nur schöner werden.',
  },
  {
    no: '03',
    title: 'Teil des Interieurs',
    text: 'Gestaltet, um auf der Arbeitsplatte zu bleiben. Die Küche wirkt aufgeräumt, hochwertig und durchdacht.',
  },
  {
    no: '04',
    title: 'Eine Sprache',
    text: 'Eine konsistente Designlinie über alle Objekte hinweg — vom Besteck bis zum Espresso-Zubehör.',
  },
]

export default function WhyPremium() {
  const reduce = useReducedMotion()

  return (
    <section className="section why">
      <div className="container why-grid">
        <div className="why-head">
          <SectionHeading
            index="02"
            eyebrow="Warum Premium"
            title={<>Warum gutes Werkzeug den Unterschied macht.</>}
          >
            Premium-Küchenobjekte sind keine Dekoration. Sie sind der stille
            Standard, der ein Zuhause wie ein Hotel wirken lässt.
          </SectionHeading>
        </div>

        <motion.ul
          className="why-list"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: reduce ? 0 : 0.2 }}
        >
          {points.map((point) => (
            <motion.li key={point.no} className="why-item" variants={staggerItem}>
              <span className="why-no">{point.no}</span>
              <div className="why-text">
                <h3 className="why-title">{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
