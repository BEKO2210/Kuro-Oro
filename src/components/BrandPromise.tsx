import Reveal from './Reveal'
import './BrandPromise.css'

export default function BrandPromise() {
  return (
    <section className="section promise">
      <div className="container">
        <Reveal className="promise-inner">
          <span className="eyebrow eyebrow--center">Das Versprechen</span>
          <p className="promise-statement">
            Höchste Qualität sollte <span className="gold-italic">nicht</span> in
            der Schublade verschwinden — sie gehört auf die Arbeitsplatte,
            sichtbar, jeden Tag.
          </p>
          <p className="promise-sub lead">
            Kuro &amp; Oro entwirft Küchenobjekte, die so sorgfältig gestaltet
            sind wie das Interieur, in dem sie leben. Werkzeuge, die man gern
            zeigt, statt sie zu verstecken.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
