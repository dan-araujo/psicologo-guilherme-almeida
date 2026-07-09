import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guilherme-almeida-psicologo.com.br',
  integrations: [react(), sitemap()],
});