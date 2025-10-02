// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const isVercel = process.env.VERCEL === '1';
const defaultSite = 'https://rifqyhazim22.github.io/web_portofolio_with_astro/';
const site = process.env.SITE_URL
  ?? (isVercel && process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : defaultSite);
const base = process.env.SITE_BASE ?? (isVercel ? '/' : '/web_portofolio_with_astro');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  adapter: vercel({ mode: 'static' }),
});
