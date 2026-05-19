# Setup-Anleitung für Ihr Jekyll-Blog

## ✅ Was bereits erledigt ist

- ✓ Jekyll-Blog-Struktur mit modernem Design
- ✓ Glassmorphism-Effekte und Animationen
- ✓ Dark/Light/Auto Theme-Switcher
- ✓ Separate Feeds für Blog und Kurzgeschichten
- ✓ Homepage mit merged Feed (nach Datum sortiert)
- ✓ Like/Dislike-Funktionalität
- ✓ Kommentar-System vorbereitet (Giscus)
- ✓ Impressum-Vorlage nach deutschem Recht
- ✓ Beispiel-Content (1 Blog-Post, 1 Kurzgeschichte)

## 🔧 Was noch zu tun ist

### 1. Persönliche Daten eintragen

#### _config.yml anpassen
Öffnen Sie `_config.yml` und passen Sie folgende Felder an:

```yaml
title: Raimo Geisel              # Ihr Name
description: ...                  # Ihre Beschreibung
email: ihre@email.de             # Ihre E-Mail
url: "https://pommersche92.github.io"  # Ihre GitHub Pages URL
```

#### Impressum ausfüllen
Öffnen Sie `impressum.md` und ersetzen Sie die Platzhalter:

- `[Ihre Straße und Hausnummer]`
- `[Ihre PLZ und Stadt]`
- `[Ihre E-Mail-Adresse]`
- `[Optional: Ihre Telefonnummer]`

### 2. Kommentar-System aktivieren (Optional)

Das Kommentar-System nutzt **Giscus** (GitHub Discussions):

1. **GitHub Discussions aktivieren**:
   - Gehen Sie zu Ihrem Repository auf GitHub
   - Settings → Features → ✓ Discussions aktivieren

2. **Giscus App installieren**:
   - Gehen Sie zu https://github.com/apps/giscus
   - Klicken Sie auf "Install"
   - Wählen Sie Ihr Repository aus

3. **IDs generieren**:
   - Gehen Sie zu https://giscus.app/
   - Geben Sie Ihr Repository ein
   - Wählen Sie "Discussions" als Category
   - Kopieren Sie die generierten Werte

4. **comments.js aktualisieren**:
   - Öffnen Sie `assets/js/comments.js`
   - Ersetzen Sie:
     - `'Pommersche92/Pommersche92.github.io'` → Ihr Repository
     - `'YOUR_REPO_ID'` → Ihre Repo-ID
     - `'YOUR_CATEGORY_ID'` → Ihre Category-ID

### 3. Website lokal testen

```bash
# Server starten
bundle exec jekyll serve --livereload

# Website öffnen unter:
# http://localhost:4000
```

### 4. Zu GitHub pushen

```bash
# Änderungen committen
git add .
git commit -m "Initial blog setup"

# Zu GitHub pushen
git push origin main
```

### 5. GitHub Pages aktivieren

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main` → Ordner: `/ (root)` → Save
5. Warten Sie 1-2 Minuten
6. Ihre Website ist verfügbar unter: `https://pommersche92.github.io`

## 📝 Neue Inhalte erstellen

### Neuer Blog-Post

```bash
# Datei erstellen
touch _posts/2026-05-20-mein-thema.md
```

Inhalt:
```markdown
---
layout: post
title: "Mein Artikel-Titel"
date: 2026-05-20
description: "Kurze Beschreibung"
tags: [Tag1, Tag2]
---

Ihr Markdown-Content...
```

### Neue Kurzgeschichte

```bash
# Datei erstellen
touch _stories/2026-05-20-geschichte-titel.md
```

Inhalt:
```markdown
---
layout: story
title: "Titel der Geschichte"
date: 2026-05-20
description: "Kurze Beschreibung"
tags: [Genre, Thema]
---

Ihre Geschichte...
```

## 🎨 Design anpassen

### Farben ändern

Öffnen Sie `assets/css/style.css` und bearbeiten Sie die Variablen:

```css
:root {
  --accent: #6366f1;          /* Hauptfarbe */
  --accent-hover: #4f46e5;    /* Hover-Farbe */
  /* ... weitere Farben */
}
```

### Schriftarten ändern

Bearbeiten Sie `_layouts/default.html` und ändern Sie den Google Fonts Link:

```html
<link href="https://fonts.googleapis.com/css2?family=IHRE-FONT&display=swap" rel="stylesheet">
```

Dann in `assets/css/style.css`:

```css
:root {
  --font-sans: 'IHRE-FONT', sans-serif;
}
```

## 🔍 Troubleshooting

### Website wird nicht angezeigt

1. Prüfen Sie GitHub Pages Settings
2. Warten Sie 2-3 Minuten nach dem Push
3. Prüfen Sie die Actions-Tab für Build-Fehler

### CSS/JS lädt nicht

1. Prüfen Sie die Pfade in `_config.yml`
2. Stellen Sie sicher, dass `baseurl: ""` leer ist
3. Hard-Refresh im Browser (Ctrl+Shift+R / Cmd+Shift+R)

### Kommentare funktionieren nicht

1. Prüfen Sie, ob Discussions aktiviert ist
2. Prüfen Sie die IDs in `assets/js/comments.js`
3. Öffnen Sie die Browser-Console für Fehler

## 📚 Weitere Ressourcen

- [Jekyll Dokumentation](https://jekyllrb.com/docs/)
- [GitHub Pages Dokumentation](https://docs.github.com/pages)
- [Giscus Dokumentation](https://giscus.app/)
- [Markdown Guide](https://www.markdownguide.org/)

## 🎉 Fertig!

Ihre Website ist jetzt einsatzbereit! Viel Spaß beim Bloggen! 🚀

---

Bei Fragen oder Problemen erstellen Sie ein Issue im Repository.
