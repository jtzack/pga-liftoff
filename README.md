# Liftoff — Landing Page

A single-page landing page for **Liftoff**, the Ghostwriting Services Accelerator from
**Premium Ghostwriting Academy (PGA)**. It doubles as the CSM "talk track" when selling
Liftoff to PGA alumni, and as a bookmarkable page to reference in emails and the community.

The page is built on the **PGA Design System** (Big Shoulders display type, General Sans body,
PGA Orange / Deep Blue / Neon Yellow palette, editorial hard-shadow cards) and ends with a big
**Join Liftoff Now** button that sends the visitor to SamCart checkout.

## Quick start

It's static HTML/CSS/JS — no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## ⚠️ Before you publish: set the SamCart URL

All "Join Liftoff" buttons read from **one** constant. Edit it in
[`assets/js/landing.js`](assets/js/landing.js):

```js
var SAMCART_URL = "https://YOUR-SUBDOMAIN.samcart.com/products/liftoff";
```

While the placeholder is in place, the buttons simply scroll to the final CTA section. Once you
drop in the real URL, every button links out to SamCart (new tab).

## Structure

```
index.html                     # the page (copy is verbatim from the approved Landing Page Copy)
assets/css/colors_and_type.css # PGA Design System tokens (colors, type, spacing) + self-hosted @font-face
assets/css/landing.css         # page-specific layout/components built on the tokens
assets/js/landing.js           # SamCart wiring, Lucide icons, scroll-reveal
assets/fonts/                  # Big Shoulders (9 weights, self-hosted)
```

## Notes on the design

- **Fonts** — Big Shoulders is self-hosted from `assets/fonts/`. General Sans loads from the
  Fontshare CDN (per the design system).
- **Icons** — [Lucide](https://lucide.dev) via CDN, the icon system specified by the PGA brand
  guide. The copy's section emoji (💬 🚀 🎥 …) are rendered as matching Lucide glyphs to honor
  the brand rule of *no emoji in marketing surfaces* while keeping all wording verbatim.
- **PGA-vs-Liftoff comparison** — the `image_(4).png` referenced in the copy is rendered natively
  as an "Access by Level" grid (C&C / PGA / Liftoff / Continuity / PGA Offboarded), styled in brand
  colors with the Liftoff column emphasized. Edit the access matrix directly in the table markup in
  `index.html`.
