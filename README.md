# De Arco Interior Studio

Single-page website of a fictional interior design studio. It shows the studio's projects, services, blog posts, a small product catalogue, client reviews and contact details. The page is available in English, Polish, Spanish, German and French.

Live demo: https://kuchinsk1y.github.io/dearco-interior-studio/

## Stack

- React 19, TypeScript, Vite
- CSS Modules
- i18next / react-i18next
- Lenis (smooth scrolling)
- oxlint

## Getting started

```bash
npm install
npm run dev
```

| Command | Description |
| --- | --- |
| `npm run dev` | development server |
| `npm run build` | type-check and production build into `dist/` |
| `npm run preview` | serve the production build locally |
| `npm run lint` | run oxlint |
| `npm run images` | convert `design-source/images` to WebP in `src/assets/images` |

## Project structure

```
src/
  components/
    layout/    Header, Footer
    ui/        Logo, LanguageSwitcher, Reveal, ParallaxImage, PlayButton, ...
  sections/    page blocks in page order (Hero, Intro, Projects, ...)
  data/        page content: navigation, projects, posts, products, reviews, stats
  hooks/       useParallax, useCountUp, useSmoothScroll
  i18n/        setup and translations (locales/*.ts)
  styles/      reset, design tokens, global styles
  assets/      optimised images and SVG icons
design-source/ original images
scripts/       image optimisation script
```

Each component keeps its styles in a CSS Module next to it. Texts that change per language live in
`src/i18n/locales`, the rest of the content in `src/data`.

## Layout

- From 1200px the design is scaled fluidly from a 1920px layout using the `--u` unit
  (`min(100vw, 1920px) / 1920`), for example `calc(24 * var(--u))`.
- Below 1200px `--u` is `1px` and the sections switch to a stacked layout, with a full-screen menu
  on small screens.

## Languages

The language is taken from `localStorage`, then from the browser, with English as the fallback. The
selected language is saved. `en.ts` defines the shape of the translations and the other locales are
type-checked against it, so a missing key fails the build.

To add a language, create `src/i18n/locales/xx.ts`, register it in `src/i18n/index.ts` and add it to
`src/i18n/languages.ts`.

## Animation

Scroll reveals, parallax on photos, animated counters and smooth scrolling. All of it is turned off
when the user prefers reduced motion.

## Deployment

Pushes to `main` are built and published to GitHub Pages by `.github/workflows/deploy.yml`. In the
repository settings, set **Pages → Source** to **GitHub Actions**.

## Notes

- The headings use the Bebas Neue font. The original design uses Capitol, which is not freely
  available; the `--fit-*` variables in `src/styles/variables.css` adjust heading sizes to the
  substitute font and should be set to `1` if Capitol is added.
- The Play button has no video attached.
- Photos come from Unsplash.
