# Lumident – Zahnarzt-Demo-Website

Hochwertige, SEO-optimierte Multi-Page-Demo für **Zahnarztpraxen**.
Gedacht als Verkaufs-Mockup: einer Praxis zeigen → in Minuten auf deren Namen, Farben und Inhalte umstellen.

## Tech-Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (Design-Tokens: „Clean Medical Premium")
- **Framer Motion** (sanfte Scroll-Animationen, respektiert `prefers-reduced-motion`)

## Starten
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production-Build
```

## Seiten
| Route | Inhalt |
|-------|--------|
| `/` | Hero, Stats, Leistungen, Praxis, Ablauf, Bewertungen, FAQ, CTA |
| `/leistungen` | Alle Leistungen inkl. Detailbereichen (mit Ankerlinks) |
| `/team` | Team-Porträts, Werte, Praxisbild |
| `/kontakt` | Infokarten, Öffnungszeiten, Karte, Anfrageformular |

## Pro Kunde anpassen — nur **eine** Datei
Praktisch alle Inhalte liegen zentral in [`lib/site.ts`](lib/site.ts):
- Praxisname, Claim, **NAP** (Name/Adresse/Telefon), Geo-Koordinaten
- Öffnungszeiten, Leistungen, Team, Bewertungen, FAQ, Kennzahlen

Farben/Schriften: [`tailwind.config.ts`](tailwind.config.ts) (Palette `teal`, Fonts Inter + Fraunces).
Bilder: aktuell Unsplash-Platzhalter — gegen Praxisfotos austauschen (in `lib/site.ts` und den Page-Dateien).

## SEO – integriert
- Pro Seite eigene `title` / `description` / `canonical` (Open Graph + Twitter Cards)
- **JSON-LD `Dentist`-Schema** (Adresse, Geo, Öffnungszeiten, Bewertung) → Rich Results & Local SEO
- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`
- Semantisches HTML, Alt-Texte, sichtbarer Fokus-Ring, Skip-Link, `lang="de-CH"`
- Statisch vorgerendert → exzellente Core Web Vitals

## Scroll-Sequenz (Scrollytelling-Hero)
Auf der Startseite läuft eine scroll-gesteuerte Bildsequenz ([`components/scroll-sequence.tsx`](components/scroll-sequence.tsx)):
Der Scroll-Fortschritt steuert framegenau ein `<canvas>`. Frames liegen unter `public/generated/hero-scroll/`,
gesteuert über `manifest.json`. Textebenen (Beats) liegen als HTML darüber. `prefers-reduced-motion` zeigt
ein statisches Posterbild.

**Aus einem neuen Video Frames erzeugen** (ffmpeg-static ist als devDependency installiert):
```bash
node_modules/ffmpeg-static/ffmpeg.exe -y -i mein-video.mp4 -an \
  -c:v libwebp -quality 76 -compression_level 5 \
  public/generated/hero-scroll/frame_%04d.webp
```
Danach in `public/generated/hero-scroll/manifest.json` nur `frameCount` (Anzahl erzeugter Frames) anpassen.
Beats/Texte stehen in `DEFAULT_BEATS` in `scroll-sequence.tsx`.
Hinweis: `npm audit` meldet Findings in einer Transitiv-Abhängigkeit von `ffmpeg-static` – rein devseitig,
nicht Teil der ausgelieferten Website.

## Vor dem Livegang pro Praxis
1. `site.url` in `lib/site.ts` auf die echte Domain setzen
2. Praxis-Inhalte & echte Fotos eintragen
3. Formular an E-Mail/CRM anbinden (`components/contact-form.tsx`)
4. Impressum/Datenschutz verlinken (Footer)
5. OG-Bild `public/og.jpg` ergänzen
