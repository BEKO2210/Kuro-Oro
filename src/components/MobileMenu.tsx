import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { easeLux } from '../lib/motion'
import './MobileMenu.css'

type NavLink = { label: string; href: string }

type MobileMenuProps = {
  links: NavLink[]
  open: boolean
  onOpen: () => void
  onClose: () => void
}

/**
 * Mobile-only navigation: an animated hamburger that morphs to an X and opens
 * a full-screen overlay with staggered serif links + CTA. Concept from the
 * 21st.dev Magic MCP, re-implemented against the Kuro & Oro tokens with
 * AnimatePresence, a focus trap, Escape/backdrop close and reduced-motion
 * support. Hidden on desktop via CSS — the desktop nav is untouched.
 */
export default function MobileMenu({ links, open, onOpen, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    lastFocused.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

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
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('a[href], button')?.focus()
    }, 60)

    return () => {
      document.removeEventListener('keydown', handleKey)
      window.clearTimeout(focusTimer)
      document.body.style.overflow = ''
      lastFocused.current?.focus?.()
    }
  }, [open, onClose])

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.12,
      },
    },
  }

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeLux } },
      }

  return (
    <>
      <button
        type="button"
        className={`nav-burger${open ? ' is-open' : ''}`}
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={open ? onClose : onOpen}
      >
        <span className="nav-burger-line" aria-hidden="true" />
        <span className="nav-burger-line" aria-hidden="true" />
        <span className="nav-burger-line" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptmenü"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: easeLux }}
          >
            <motion.nav
              className="mobile-menu-inner"
              aria-label="Mobile Navigation"
              variants={container}
              initial="hidden"
              animate="visible"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="mobile-menu-list">
                {links.map((link, i) => (
                  <motion.li key={link.href} variants={item}>
                    <a className="mobile-menu-link" href={link.href} onClick={onClose}>
                      <span className="mobile-menu-index" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                variants={item}
                href="#shop"
                className="btn mobile-menu-cta"
                onClick={onClose}
              >
                Jetzt im Shop kaufen
                <span className="btn-arrow" aria-hidden="true">→</span>
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
