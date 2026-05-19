# Raimo Geisel's Blog

Moderner Jekyll-Blog mit Glassmorphism-Design, Dark Mode und interaktiven Features.

## 🎨 Features

- **Modernes Design**: Glassmorphism-Effekte und subtile Animationen
- **Dark/Light/Auto Mode**: Theme-Switching mit System-Präferenz-Erkennung
- **Dual Content**: Separate Feeds für Blog-Posts und Kurzgeschichten
- **Interaktiv**: Like/Dislike-Funktionen und Kommentarsystem (Giscus)
- **Responsive**: Optimiert für alle Geräte
- **SEO-optimiert**: Mit Jekyll-SEO-Plugin

## 🚀 Quick Start

### Voraussetzungen

- Ruby >= 2.7
- Bundler (`gem install bundler`)
- Git

### Lokale Installation

```bash
# Repository klonen
git clone https://github.com/Pommersche92/Pommersche92.github.io.git
cd Pommersche92.github.io

# Dependencies installieren
bundle install

# Entwicklungsserver starten
bundle exec jekyll serve

# Website öffnen unter http://localhost:4000
```

### Mit Live-Reload

```bash
bundle exec jekyll serve --livereload
```

## 📝 Content erstellen

### Neuer Blog-Post

Erstelle eine neue Datei in `_posts/` mit dem Format `YYYY-MM-DD-titel.md`:

```markdown
---
layout: post
title: "Mein neuer Artikel"
date: 2026-05-19
description: "Kurze Beschreibung des Artikels"
tags: [Tag1, Tag2, Tag3]
---

Dein Markdown-Content hier...
```

### Neue Kurzgeschichte

Erstelle eine neue Datei in `_stories/` mit dem Format `YYYY-MM-DD-titel.md`:

```markdown
---
layout: story
title: "Meine Geschichte"
date: 2026-05-19
description: "Kurze Beschreibung der Geschichte"
tags: [Genre, Thema]
---

Deine Geschichte hier...
```

## ⚙️ Konfiguration

### Basis-Einstellungen

Bearbeite `_config.yml`:

```yaml
title: Dein Name
description: Deine Beschreibung
author: Dein Name
email: deine@email.de
url: "https://username.github.io"
```

### Kommentarsystem einrichten

1. Aktiviere GitHub Discussions in deinem Repository (Settings > Features)
2. Installiere die Giscus App: https://github.com/apps/giscus
3. Gehe zu https://giscus.app/ und hole dir deine IDs
4. Bearbeite `assets/js/comments.js` und ersetze die Platzhalter:
   - `data-repo`: Dein Repository (z.B. `username/username.github.io`)
   - `data-repo-id`: Deine Repo-ID
   - `data-category-id`: Deine Category-ID

### Impressum aktualisieren

Bearbeite `impressum.md` und fülle deine persönlichen Daten ein:
- Name und Adresse
- Kontaktdaten
- Weitere rechtlich erforderliche Angaben

## 📁 Projektstruktur

```
.
├── _config.yml              # Jekyll-Konfiguration
├── _layouts/                # Layout-Templates
│   ├── default.html         # Basis-Layout
│   ├── post.html            # Blog-Post-Layout
│   └── story.html           # Kurzgeschichten-Layout
├── _posts/                  # Blog-Artikel
├── _stories/                # Kurzgeschichten
├── assets/
│   ├── css/
│   │   └── style.css        # Haupt-Stylesheet
│   └── js/
│       ├── theme.js         # Theme-Switcher
│       ├── interactions.js  # Like/Dislike
│       └── comments.js      # Kommentar-System
├── index.html               # Homepage (merged feed)
├── blog.html                # Blog-Feed
├── stories.html             # Stories-Feed
├── impressum.md             # Impressum
└── README.md                # Diese Datei
```

## 🎨 Customization

### Farben anpassen

Bearbeite die CSS-Variablen in `assets/css/style.css`:

```css
:root {
  --accent: #6366f1;          /* Akzentfarbe */
  --accent-hover: #4f46e5;    /* Hover-Farbe */
  /* ... weitere Farben */
}
```

### Schriftarten ändern

Die Website nutzt Google Fonts (Inter & JetBrains Mono). Ändere in `_layouts/default.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=DEINE-FONT&display=swap" rel="stylesheet">
```

## 📄 Lizenz

Dieses Repository verwendet eine Dual-Lizenz:

- **Website-Code** (HTML, CSS, JS): GPL v3
- **Content** (Blog-Posts, Stories): Proprietary © Raimo Geisel

Siehe [LICENSE](LICENSE) für Details.

## 🤝 Beitragen

Dies ist mein persönlicher Blog. Fehler-Reports und Verbesserungsvorschläge sind willkommen! Öffne einfach ein Issue.

## 📞 Kontakt

- GitHub: [@Pommersche92](https://github.com/Pommersche92)
- Website: https://pommersche92.github.io

---

Erstellt mit ❤️ und Jekyll