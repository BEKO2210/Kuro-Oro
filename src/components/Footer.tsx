import './Footer.css'

const columns = [
  {
    title: 'Kollektion',
    links: ['Besteck', 'Espresso-Zubehör', 'Kaffee-Werkzeuge', 'Küchenobjekte'],
  },
  {
    title: 'Marke',
    links: ['Manufaktur', 'Materialien', 'Nachhaltigkeit', 'Kontakt'],
  },
  {
    title: 'Service',
    links: ['Versand', 'Pflegehinweise', 'B2B & Hotellerie', 'FAQ'],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-mark">
              K<span className="footer-amp">&amp;</span>O
            </span>
            <p className="footer-tagline">
              Wo Interior Design auf Kochkultur trifft.
            </p>
          </div>

          <nav className="footer-cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title} className="footer-col">
                <span className="footer-col-title">{col.title}</span>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#shop">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className="rule footer-rule" />

        <div className="footer-bottom">
          <span>© {year} Kuro &amp; Oro — Premium Kitchen Objects</span>
          <div className="footer-legal">
            <a href="#shop">Impressum</a>
            <a href="#shop">Datenschutz</a>
            <a href="#shop">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
