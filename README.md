# etba.ch — Europe-Taiwan Biotech Association

The website for [ETBA](https://etba.ch), a network bridging biotech
across Europe and Taiwan.

Built with **Vite + React + TypeScript** and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev      # local dev server on http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and publishes `/dist` to GitHub Pages. The `CNAME` file maps
the deployment to `etba.ch`.

## Structure

```
src/
├── App.tsx            top-level layout
├── main.tsx           React entry
├── styles.css         design tokens + all section styles
├── hooks/
│   └── useReveal.ts   IntersectionObserver-based scroll reveal
├── data/
│   └── content.ts     copy that's likely to change often
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Pillars.tsx
    ├── Reach.tsx
    ├── Events.tsx
    ├── Membership.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── Brand.tsx
```
