# GreenOrRed — React + Tailwind homepage

Responsive source-code interpretation of the supplied homepage image, with shared building blocks committed first to the exact `ChatGPT Skils` directory. The final page imports its components directly from that directory.

## Quick start

```bash
npm install
npm run dev
```

Build with `npm run build`; Vite emits `dist/`.

## Structure

```text
ChatGPT Skils/
  README.md
  tokens.js
  ui.jsx
  sections.jsx
src/
  App.jsx
  main.jsx
  index.css
index.html
package.json
tailwind.config.js
postcss.config.js
```

## Design & engineering notes

- The supplied raster screenshot is a visual reference, not a lossless source of product assets. Laptop, phone, thumbnails and graphs are reproduced in accessible CSS/SVG, not by embedding one giant screenshot.
- Content and numbers are static presentation fixtures, **not actual platform metrics, product inventory, testimonials, verified trades, or financial promises**.
- Links, login, checkout, video, filtering and other actions are UI placeholders until genuine routes/services are connected.
- Replace illustrated platform name badges with officially licensed vendor assets if desired.
- The header is responsive; five category columns are displayed at large desktop breakpoints and stack on mobile.
- Both advertising and chart visual sections are independent reusable components and may later receive content via props and API.
