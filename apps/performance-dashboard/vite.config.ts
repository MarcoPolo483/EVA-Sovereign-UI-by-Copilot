import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname),
  build: {
    outDir: resolve(__dirname, '../../dist-performance'),
    emptyOutDir: true,
  },
  server: {
    port: 5175,
  },
});
