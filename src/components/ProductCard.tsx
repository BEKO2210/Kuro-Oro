import { motion, useReducedMotion } from 'framer-motion'
import { staggerItem } from '../lib/motion'
import './ProductCard.css'

export type Product = {
  name: string
  category: string
  material: string
  price: string
}

type ProductCardProps = {
  product: Product
  onSelect: () => void
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className="card"
      variants={staggerItem}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`${product.name} – Schnellansicht öffnen`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
    >
      {/* Placeholder image area — real product photography drops in later */}
      <div className="card-media">
        <span className="card-bracket card-bracket--tl" aria-hidden="true" />
        <span className="card-bracket card-bracket--br" aria-hidden="true" />
        <div className="card-sheen" aria-hidden="true" />
        <span className="card-placeholder">Produktbild folgt</span>
        <span className="card-hover-cta" aria-hidden="true">
          Ansehen →
        </span>
      </div>

      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-material">{product.material}</p>
        <span className="card-price">{product.price}</span>
      </div>
    </motion.article>
  )
}
