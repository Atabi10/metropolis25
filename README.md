# SC Metropolis 25 Berlin e.V. — Offizielle Website

> **Wo Berlin pulsiert, wächst unsere Stärke.**

Das offizielle digitale Zuhause von Sport-Club Metropolis 25 Berlin e.V.

---

## PROJEKT-ÜBERBLICK

| | |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Sprache** | TypeScript |
| **Styling** | Tailwind CSS |
| **CMS** | Sanity |
| **Hosting** | Vercel |
| **Sprachen** | Deutsch (primär), Englisch, Französisch |

---

## SCHNELLSTART

```bash
# 1. Dependencies installieren
npm install

# 2. Umgebungsvariablen einrichten
cp .env.example .env.local
# Öffne .env.local und trage deine Werte ein

# 3. Website lokal starten
npm run dev
# Website: http://localhost:3000

# 4. CMS lokal starten
npx sanity@latest dev
# CMS: http://localhost:3333
```

---

## ORDNERSTRUKTUR

```
sc-metropolis-25-website/
├── src/
│   ├── app/                    # Alle Seiten (Next.js App Router)
│   │   ├── page.tsx            # Startseite
│   │   ├── verein/             # Über uns
│   │   ├── teams/              # Mannschaften
│   │   ├── spielbetrieb/       # Spielplan & Ergebnisse
│   │   ├── akademie/           # Jugendakademie
│   │   ├── news/               # News & Berichte
│   │   ├── galerie/            # Bildergalerie
│   │   ├── sponsoren/          # Sponsoren
│   │   ├── mitmachen/          # Probetraining/Anmeldung
│   │   ├── mitgliedschaft/     # Mitglied werden
│   │   ├── kontakt/            # Kontakt
│   │   ├── impressum/          # Impressum
│   │   └── datenschutz/        # Datenschutzerklärung
│   │
│   ├── components/
│   │   ├── home/               # Homepage-Sektionen
│   │   ├── layout/             # Navbar, Footer, Cookie-Banner
│   │   └── ui/                 # Wiederverwendbare UI-Komponenten
│   │
│   ├── lib/
│   │   └── sanity.ts           # Sanity Client & Queries
│   │
│   └── styles/
│       └── globals.css         # Globale Styles & Design System
│
├── sanity/
│   └── schemas/                # CMS-Datenschemas
│       ├── news.ts             # News-Artikel
│       ├── fixture.ts          # Spiele & Ergebnisse
│       ├── sponsor.ts          # Sponsoren
│       └── player.ts           # Spieler & Kader
│
├── tailwind.config.ts          # Design System (Farben, Fonts, etc.)
├── sanity.config.ts            # Sanity CMS Konfiguration
├── .env.example                # Vorlage für Umgebungsvariablen
├── DEPLOYMENT_GUIDE.md         # Schritt-für-Schritt Deployment
├── MAINTENANCE_HANDBOOK.md     # Wartungshandbuch
└── SEO_STRATEGY.md             # SEO-Strategie
```

---

## SEITEN-ÜBERSICHT

| Seite | URL | Status |
|-------|-----|--------|
| Startseite | `/` | ✅ |
| Über uns | `/verein` | ✅ |
| Teams | `/teams` | ✅ |
| Spielbetrieb | `/spielbetrieb` | ✅ |
| Akademie | `/akademie` | ✅ |
| News | `/news` | ✅ |
| Galerie | `/galerie` | ✅ |
| Sponsoren | `/sponsoren` | ✅ |
| Mitmachen | `/mitmachen` | ✅ |
| Mitgliedschaft | `/mitgliedschaft` | ✅ |
| Kontakt | `/kontakt` | ✅ |
| Impressum | `/impressum` | ✅ |
| Datenschutz | `/datenschutz` | ✅ |

---

## DESIGNSYSTEM

### Farben
| Name | HEX | Verwendung |
|------|-----|-----------|
| Navy | `#002855` | Primärfarbe, Backgrounds |
| Gold | `#E0A106` | Akzente, CTAs, Highlights |
| Ivory | `#EDE4CD` | Texte auf Navy |
| Dark BG | `#0a0d14` | Haupthintergrund |

### Schriftarten
- **Display:** Bebas Neue (Große Headlines)
- **Heading:** Oswald (Zwischenüberschriften, Nav)
- **Body:** Inter (Fließtext)

---

## NÄCHSTE SCHRITTE

1. **Logo einfügen:** Datei `public/logo.png` ersetzen
2. **Bilder:** Echte Fotos über Sanity CMS hochladen
3. **Inhalte:** Texte im CMS anpassen (Trainernamen, Spielzeiten, etc.)
4. **Domain:** `sc-metropolis25.de` in Vercel verbinden
5. **E-Mail:** Kontaktformular mit E-Mail-Service verbinden
6. **Analytics:** Google Analytics oder Plausible einrichten
7. **SEO:** Google Business Profile erstellen

---

## KONTAKT & SUPPORT

- E-Mail: info@sc-metropolis25.de
- Website: https://sc-metropolis25.de
- Instagram: @scmetropolis25

---

*Sport-Club Metropolis 25 Berlin e.V. — Die Stärke aus der Hauptstadt.*
