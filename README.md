# Kuro & Oro — Premium Kitchen Objects

Eine Premium-Landingpage für die Luxus-Küchenmarke **Kuro & Oro** —
*Wo Interior Design auf Kochkultur trifft.*

Schwarz-Gold, luxuriös-editorial, Japanese-clean & Italian-elegant.
Gebaut mit **Vite + React 19 + TypeScript + Framer Motion**.

## Live

Deployt über GitHub Pages: <https://beko2210.github.io/Kuro-Oro/>
(Wird bei jedem Push auf `main` automatisch neu gebaut — siehe
`.github/workflows/deploy.yml`.)

## Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server mit HMR (http://localhost:5173)
npm run build    # Type-Check + Production-Build nach dist/
npm run lint     # ESLint
npm run preview  # gebautes dist/ lokal ansehen
```

## Struktur

Die Seite wird in `src/App.tsx` aus Section-Komponenten in `src/components/`
zusammengesetzt: `Nav → Hero → BrandPromise → CollectionPreview → WhyPremium
→ UseCases → Craftsmanship → FinalCTA → Footer`.

- **Design-Tokens** (Farben, Fonts, Easing) liegen als CSS-Custom-Properties
  in `src/index.css`. Jede Komponente importiert ihr eigenes `.css`.
- **Animationen**: gemeinsame Framer-Motion-Varianten in `src/lib/motion.ts`;
  Scroll-Reveals über `Reveal`, alles mit `prefers-reduced-motion`-Fallback.
- **Quick-View**: Klick auf eine Produktkarte öffnet ein Drawer
  (`ProductQuickView`) — reiner lokaler State, kein Routing.

Produktbilder & Materialdetails sind aktuell elegante Platzhalter und werden
später durch echte Inhalte ersetzt.
