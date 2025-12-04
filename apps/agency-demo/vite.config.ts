import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: __dirname,
  server: {
    port: 5173,
    open: '/apps/agency-demo/index.html',
  },
  preview: {
    port: 5173,
    open: '/apps/agency-demo/index.html',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../../packages/eva-sovereign-ui-wc/src', import.meta.url)),
      'packages': fileURLToPath(new URL('../../packages', import.meta.url)),
    },
  },
  build: {
    outDir: '../../dist-agency',
    emptyOutDir: true,
  },
});
