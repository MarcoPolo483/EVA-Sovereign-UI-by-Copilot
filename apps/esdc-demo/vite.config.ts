import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  server: {
    port: 5173,
    open: '/apps/esdc-demo/index.html',
  },
  preview: {
    port: 5173,
    open: '/apps/esdc-demo/index.html',
  },
  build: {
    outDir: '../../dist-esdc',
    emptyOutDir: true,
  },
});
