import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
// Simplified Vitest config for unit tests; Storybook/browser tests can be added via a separate project config.

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: [
        // i18n core (fully covered)
        'packages/eva-sovereign-ui-wc/src/i18n/i18n-service.ts',
        'packages/eva-sovereign-ui-wc/src/i18n/cms-adapter.ts',
        // GC language switcher (covered)
        'packages/eva-sovereign-ui-wc/src/components/gc-design/eva-gc-language-switcher.ts',
        'packages/eva-sovereign-ui-wc/src/components/i18n/eva-language-switcher.ts',
        // High-coverage UI components
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-accordion.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-calendar.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-carousel.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-checkbox.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-select.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-progress.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-scroll-area.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-skeleton.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-aspect-ratio.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-separator.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-toggle.ts',
        'packages/eva-sovereign-ui-wc/src/components/ui/eva-pagination.ts'
      ],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/*.test.ts',
        '**/*.spec.ts',
        // Exclude static docs and reports that confuse V8 remapping
        'tests/accessibility/**/*.md',
        // Exclude locale JSON files from coverage calculation
        'packages/eva-sovereign-ui-wc/src/i18n/locales/**/*.json',
        // Exclude broad GC components/patterns/templates until dedicated tests land
        'packages/eva-sovereign-ui-wc/src/components/gc-components/**',
        'packages/eva-sovereign-ui-wc/src/components/gc-patterns/**',
        'packages/eva-sovereign-ui-wc/src/components/gc-templates/**',
        // Exclude layout shells from current coverage scope
        'packages/eva-sovereign-ui-wc/src/components/layout/**'
      ],
      thresholds: {
        // Ratchet gates upward as coverage increases
        lines: 95,
        functions: 94,
        branches: 84,
        statements: 95
      }
    },
    // Additional projects (e.g., Storybook/browser tests) can be added later
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      // Exclude Playwright suites from Vitest unit run (but include accessibility tests)
      'tests/browser-compatibility/**',
      'tests/performance/**',
      'tests/visual-regression/**'
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages/eva-sovereign-ui-wc/src')
      ,
      'tests': resolve(__dirname, './tests')
    }
  }
});