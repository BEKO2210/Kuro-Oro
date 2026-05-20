import { motion } from 'framer-motion'
import { easeLux } from '../lib/motion'
import './Nav.css'

const links = [
  { label: 'Kollektion', href: '#kollektion' },
  { label: 'Manufaktur', href: '#manufaktur' },
  { label: 'Für wen', href: '#fuer-wen' },
]

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: easeLux, delay: 0.1 }}
    >
      <div className="container nav-inner">
        <a className="nav-brand" href="#top" aria-label="Kuro & Oro — Startseite">
          <span className="nav-mark" aria-hidden="true">
            K<span className="nav-amp">&amp;</span>O
          </span>
          <span className="nav-wordmark">Kuro&nbsp;&amp;&nbsp;Oro</span>
        </a>

        <nav className="nav-links" aria-label="Hauptnavigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#shop" className="btn btn--ghost nav-cta">
          Jetzt im Shop kaufen
        </a>
      </div>
    </motion.header>
  )
}
