# GreenOrRed reusable UI skills

These are **React components/design tokens**, not executable ChatGPT Skills. Use the exact imports below in this repository. The source of truth for the homepage styles and layout is this directory.

- `tokens.js`: colors, gradients, nav and catalog fixture data.
- `ui.jsx`: BrandMark, IconButton, ActionButton, PlatformBadge, SectionHeading, Sparkline, MarketChart, HandNote.
- `sections.jsx`: Header, HeroSection, CategoryCards, PromotionalBanners, FeaturedProducts, Testimonials, ConversionCard, BrandTrustBar and Footer.

The fixture numbers, testimonial and products are illustrative design placeholders, **not live business statistics or verified performance**. Links are navigation placeholders; connect them to real routes and back-end services before production.

Run the Vite app in the repository root using `npm install && npm run dev`. Keep new UI components in this directory and import them from `src/App.jsx` rather than copying markup.
