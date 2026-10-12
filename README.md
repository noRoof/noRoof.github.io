# noroof.dev

Website for **noRoof development**, built with [Astro](https://astro.build) and published on GitHub Pages at https://noroof.dev.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/
```

Requires Node 22.12 or later.

## Content

The site is bilingual. Spanish is served at `/` and English at `/en/`.

| What | Where |
| --- | --- |
| Products (Biz, Sport Club, Coolturus) | `src/content/products/{es,en}/*.md` |
| Services ("Cómo trabajamos") | `src/content/services/{es,en}/*.md` |
| Industry experience | `src/content/experience/{es,en}/*.md` |
| Pillars ("Por qué noRoof") | `src/content/pillars/{es,en}/*.md` |
| Interface text (nav, hero, form…) | `src/lib/i18n.ts` |

Every content file has a twin in the other language. When you add or edit one, update both.

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository settings, *Settings → Pages → Source* must be set to **GitHub Actions**. The custom domain is configured there; `public/CNAME` is kept as a backup.

The contact form posts to Formspree, which redirects to `/thanks.html` (Spanish) or `/en/thanks.html` (English).

## Design

The product context lives in `PRODUCT.md` and the visual system in `DESIGN.md`. Both are maintained with the [impeccable](https://impeccable.style) skill.
