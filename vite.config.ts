import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['packages/eva-sovereign-ui-wc/src/**/*.ts'],
      exclude: ['**/*.test.ts', '**/*.spec.ts', '**/tests/**'],
    }),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'packages/eva-sovereign-ui-wc/src/index.ts'),
      name: 'EVASovereignUI',
      formats: ['es', 'umd'],
      fileName: (format) => `eva-sovereign-ui.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'eva-sovereign-ui.css';
          return assetInfo.name || 'asset';
        },
        // Optimize chunk splitting
        manualChunks: (id) => {
          // Split large component groups
          if (id.includes('eva-data-grid') || id.includes('eva-tree-view')) {
            return 'data-components';
          }
          if (id.includes('eva-chart')) {
            return 'chart-components';
          }
          if (id.includes('eva-media') || id.includes('eva-image') || id.includes('eva-video')) {
            return 'media-components';
          }
        },
      },
      // Tree-shaking optimization
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
    },
    sourcemap: true,
    minify: 'esbuild',
    // Performance optimizations
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 200, // Warn if chunk > 200KB
    reportCompressedSize: true,
  },
  server: {
    port: 5173,
    open: '/apps/esdc-demo/index.html',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages/eva-sovereign-ui-wc/src'),
    },
  },
});
