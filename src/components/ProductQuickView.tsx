import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Product } from './ProductCard'
import { easeLux } from '../lib/motion'
import './ProductQuickView.css'

type ProductQuickViewProps = {
  /** The product to display, or null when the drawer is closed. */
  product: Product | null
  onClose: () => void
}

/**
 * Premium right-side quick-view drawer. Concept generated via the 21st.dev
 * Magic MCP, then re-implemented against the Kuro & Oro token system with
 * AnimatePresence exit animations, a focus trap and reduced-motion support.
 */
export default function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const reduce = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!product) return

    // Remember what had focus so we can restore it on close.
    lastFocused.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      // Trap focus inside the drawer.
      const panel = panelRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)

    return () => {
      document.removeEventListener('keydown', handleKey)
      window.clearTimeout(focusTimer)
      document.body.style.overflow = ''
      lastFocused.current?.focus?.()
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="qv-overlay"
          role="presentation"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: easeLux }}
        >
          <motion.div
            ref={panelRef}
            className="qv-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qv-title"
            aria-describedby="qv-desc"
            onClick={(e) => e.stopPropagation()}
            initial={reduce ? { opacity: 0 } : { x: '100%' }}
            animate={reduce ? { opacity: 1 } : { x: '0%' }}
            exit={reduce ? { opacity: 0 } : { x: '100%' }}
            transition={{ duration: reduce ? 0 : 0.55, ease: easeLux }}
          >
            <button
              ref={closeRef}
              type="button"
              className="qv-close"
              onClick={onClose}
              aria-label="Schnellansicht schließen"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="qv-scroll">
              {/* Image placeholder — real product photography drops in later */}
              <div className="qv-media">
                <span className="qv-bracket qv-bracket--tl" aria-hidden="true" />
                <span className="qv-bracket qv-bracket--br" aria-hidden="true" />
                <span className="qv-media-label">Produktbild folgt</span>
              </div>

              <div className="qv-body">
                <span className="eyebrow qv-category">{product.category}</span>
                <h2 id="qv-title" className="qv-name">
                  {product.name}
                </h2>

                <p id="qv-desc" className="qv-desc">
                  Ein Objekt, das Handwerk und Zurückhaltung vereint. Gestaltet,
                  um sichtbar zu bleiben — und mit den Jahren schöner zu werden.
                  Finale Produktdetails folgen.
                </p>

                <dl className="qv-specs">
                  <div className="qv-spec">
                    <dt className="qv-spec-label">Material</dt>
                    <dd className="qv-spec-value">{product.material}</dd>
                  </div>
                  <div className="qv-spec">
                    <dt className="qv-spec-label">Pflege &amp; Detail</dt>
                    <dd className="qv-spec-value">
                      Pflegehinweise und Maße folgen mit dem finalen Produkt.
                    </dd>
                  </div>
                </dl>

                <div className="qv-price-row">
                  <span className="qv-price-label">Preis</span>
                  <span className="qv-price">Preis auf Anfrage</span>
                </div>

                <div className="qv-actions">
                  <a href="#shop" className="btn qv-btn">
                    Zum Produkt
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="#manufaktur" className="btn btn--ghost qv-btn">
                    Materialien ansehen
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
