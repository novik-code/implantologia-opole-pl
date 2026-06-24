// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://implantologia.opole.pl',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(tag|kategoria|kategorie|category)\//.test(page),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'pl',
        locales: { pl: 'pl-PL' },
      },
    }),
  ],
});
