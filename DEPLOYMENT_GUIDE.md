# SC Metropolis 25 Berlin — Deployment Guide
## Schritt-für-Schritt: Von Null zur Live-Website

---

## VORAUSSETZUNGEN

Bevor du beginnst, installiere folgendes auf deinem Computer:
- **Node.js** (kostenlos): https://nodejs.org → Version 18 oder höher herunterladen
- **Git** (kostenlos): https://git-scm.com
- Ein **GitHub-Konto** (kostenlos): https://github.com
- Ein **Vercel-Konto** (kostenlos): https://vercel.com
- Ein **Sanity-Konto** (kostenlos): https://sanity.io

---

## SCHRITT 1: GitHub Repository erstellen

1. Geh zu https://github.com und melde dich an
2. Klicke oben rechts auf das **+** → "New repository"
3. Name: `sc-metropolis-25-website`
4. Stell es auf **Private** (privat)
5. Klicke "Create repository"
6. Kopiere die Repository-URL (sieht so aus: `https://github.com/DEINNAME/sc-metropolis-25-website.git`)

---

## SCHRITT 2: Projektdateien hochladen

Öffne ein Terminal (Mac: Spotlight → "Terminal", Windows: Startmenü → "cmd"):

```bash
# Navigiere zum Projektordner (passe den Pfad an)
cd "/Users/atabi/Desktop/M25/Website/Sportclub website"

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial: SC Metropolis 25 Website"

# Repository verbinden (ersetze DEINE_URL mit deiner GitHub URL)
git remote add origin https://github.com/DEINNAME/sc-metropolis-25-website.git

# Hochladen
git push -u origin main
```

---

## SCHRITT 3: Sanity CMS einrichten

### 3.1 Sanity-Projekt erstellen
1. Geh zu https://sanity.io → kostenlos registrieren
2. Klicke "Create new project"
3. Name: `SC Metropolis 25 Berlin`
4. Notiere dir die **Project ID** (wird sofort angezeigt)

### 3.2 Sanity konfigurieren
```bash
# Im Terminal (im Projektordner):
npx sanity@latest init --env

# Folge den Anweisungen:
# - Wähle dein neues Projekt
# - Dataset: "production"
# - Es wird automatisch eine .env.local Datei erstellt
```

### 3.3 CMS testen
```bash
npx sanity@latest dev
# Öffnet das CMS unter http://localhost:3333
```

---

## SCHRITT 4: Website auf Vercel deployen

### 4.1 Vercel verbinden
1. Geh zu https://vercel.com → mit GitHub anmelden
2. Klicke "New Project"
3. Importiere dein `sc-metropolis-25-website` Repository
4. Framework Preset: **Next.js** (wird automatisch erkannt)

### 4.2 Environment Variables eintragen
Klicke auf "Environment Variables" und füge folgendes ein:

| Name | Wert | 
|------|------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Deine Sanity Project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | Aus Sanity Dashboard → API → Tokens |
| `NEXT_PUBLIC_SITE_URL` | `https://sc-metropolis25.de` |

### 4.3 Deployen
1. Klicke "Deploy"
2. Warte ca. 2–3 Minuten
3. Deine Website ist jetzt online! Vercel gibt dir eine URL wie `sc-metropolis-25-website.vercel.app`

---

## SCHRITT 5: Eigene Domain verbinden

### Bei Vercel:
1. Geh zu Project → Settings → Domains
2. Füge `sc-metropolis25.de` hinzu
3. Vercel zeigt dir DNS-Einstellungen

### Bei deinem Domain-Anbieter:
Füge folgende DNS-Records hinzu:
```
A-Record:    @    →  76.76.21.21
CNAME-Record: www →  cname.vercel-dns.com
```

Nach 24–48 Stunden ist die Domain aktiv.

---

## SCHRITT 6: Dependencies installieren (lokal)

```bash
# Im Projektordner:
npm install

# Website lokal starten:
npm run dev
# Öffnet http://localhost:3000
```

---

## UPDATES VERÖFFENTLICHEN

Nach jeder Änderung:
```bash
git add .
git commit -m "Update: Was du geändert hast"
git push
```
Vercel deployt automatisch innerhalb von 2 Minuten.

---

## HÄUFIGE PROBLEME

### "command not found: npm"
→ Node.js nochmal installieren von https://nodejs.org

### "Module not found" Fehler
→ `npm install` im Projektordner ausführen

### Sanity Bilder werden nicht angezeigt
→ Prüfe ob `NEXT_PUBLIC_SANITY_PROJECT_ID` korrekt ist

### Domain zeigt nicht auf Website
→ DNS-Änderungen brauchen bis zu 48 Stunden

---

## SUPPORT

Bei Fragen: info@sc-metropolis25.de
