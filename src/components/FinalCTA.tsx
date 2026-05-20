import Reveal from './Reveal'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="section cta" id="shop">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="cta-inner">
          <span className="eyebrow eyebrow--center">Kuro &amp; Oro</span>
          <h2 className="cta-title heading-xl">
            Bringen Sie Hotel-Qualität
            <br />
            in Ihre <span className="gold-italic">Küche</span>.
          </h2>
          <p className="cta-lead lead">
            Entdecken Sie die Kollektion und sichern Sie sich Premium-Objekte,
            die jeden Tag begleiten.
          </p>
          <div className="cta-actions">
            <a href="#kollektion" className="btn">
              Jetzt im Shop kaufen
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#kollektion" className="btn btn--ghost">
              Kollektion ansehen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
