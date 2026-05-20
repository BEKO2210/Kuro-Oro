import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import ProductQuickView from './ProductQuickView'
import type { Product } from './ProductCard'
import { stagger } from '../lib/motion'
import './CollectionPreview.css'

const products: Product[] = [
  {
    name: 'Tafelbesteck No. 1',
    category: 'Besteck',
    material: 'Edelstahl · PVD-Gold',
    price: 'ab € —',
  },
  {
    name: 'Knoblauchpresse Aria',
    category: 'Koch-Werkzeuge',
    material: 'Vollmessing · poliert',
    price: 'ab € —',
  },
  {
    name: 'Espresso-Set Nero',
    category: 'Espresso-Zubehör',
    material: 'Edelstahl · Walnuss',
    price: 'ab € —',
  },
  {
    name: 'Kaffee-Werkzeuge Oro',
    category: 'Kaffee',
    material: 'Messing · Mattschwarz',
    price: 'ab € —',
  },
  {
    name: 'Kochlöffel-Serie Terra',
    category: 'Kochen',
    material: 'Eiche · Naturöl',
    price: 'ab € —',
  },
  {
    name: 'Küchenobjekt Monolith',
    category: 'Objekte',
    material: 'Stein · Edelstahl',
    price: 'ab € —',
  },
]

export default function CollectionPreview() {
  const reduce = useReducedMotion()
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  return (
    <section className="section collection" id="kollektion">
      <div className="container">
        <SectionHeading index="01" eyebrow="Die Kollektion" title="Objekte, die man gerne zeigt.">
          Eine kuratierte Auswahl für Küche, Kaffee und Kochen. Reale
          Produktfotos und Materialdetails folgen — die Form bleibt.
        </SectionHeading>

        <motion.div
          className="collection-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: reduce ? 0 : 0.15 }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onSelect={() => setActiveProduct(product)}
            />
          ))}
        </motion.div>

        <div className="collection-foot">
          <a href="#shop" className="btn btn--ghost">
            Premium-Küche entdecken
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <ProductQuickView
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  )
}
