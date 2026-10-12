// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://noroof.dev',
  trailingSlash: 'ignore',
  build: {
    // thanks.astro -> /thanks.html (Formspree redirects there), 404.astro -> /404.html
    format: 'preserve',
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/(thanks|404)(\.html)?$/.test(page),
      i18n: { defaultLocale: 'es', locales: { es: 'es-UY', en: 'en' } },
      // GitHub Pages serves /en/ (with the slash); keep the sitemap on the canonical form
      serialize(item) {
        const fix = (url) => url.replace(/\/en$/, '/en/');
        item.url = fix(item.url);
        item.links = item.links?.map((l) => ({ ...l, url: fix(l.url) }));
        return item;
      },
    }),
  ],
});
