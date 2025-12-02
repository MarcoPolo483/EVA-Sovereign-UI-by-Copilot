# Distribution Assessment Report 01: Repository & Package Structure

**Date:** December 2, 2025  
**Repository:** EVA-Sovereign-UI-by-Copilot  
**Assessment Purpose:** External expert evaluation for distribution strategy

---

## Executive Summary

EVA-Sovereign-UI is a **monorepo architecture** containing:
- **1 core Web Components package** (`packages/eva-sovereign-ui-wc`)
- **4 framework wrapper packages** (React, Vue, Angular, Svelte)
- **4 demo applications** (Dev Kit, ESDC Portal, Performance Dashboard, Legacy Demo)
- **Comprehensive accessibility & i18n utilities** embedded in the core package
- **Government of Canada Design System** implementation with Five Eyes sovereign profiles

---

## High-Level Folder Structure

```
EVA-Sovereign-UI/
│
├── packages/                    # NPM packages (publishable)
│   ├── eva-sovereign-ui-wc/     # Core Web Components (NOT a separate package)
│   ├── eva-sovereign-ui-react/  # React wrappers (@eva-suite/sovereign-ui-react)
│   ├── eva-sovereign-ui-vue/    # Vue 3 wrappers (@eva-suite/sovereign-ui-vue)
│   ├── eva-sovereign-ui-angular/# Angular wrappers (@eva-suite/sovereign-ui-angular)
│   └── eva-sovereign-ui-svelte/ # Svelte wrappers (@eva-suite/sovereign-ui-svelte)
│
├── apps/                        # Demo applications (non-publishable)
│   ├── dev-kit-demo/            # Component gallery & Five Eyes showcase
│   ├── esdc-demo/               # ESDC government portal demo
│   ├── performance-dashboard/   # Performance metrics dashboard
│   └── demo/ (legacy)           # Deprecated: original demo app
│
├── src/                         # Shared application code (dev-kit & ESDC demos)
│   ├── components/              # Demo-specific React components
│   ├── lib/                     # Shared utilities for demos
│   │   ├── i18n/                # I18n service for demos (9 locales)
│   │   ├── tokens/              # GC Design System tokens
│   │   ├── eva/                 # EVA chat response logic
│   │   └── sovereign-profiles.ts# Five Eyes profile definitions
│   ├── pages/                   # Demo application pages
│   └── App.tsx                  # Main demo application entry
│
├── dist/                        # Built Web Components bundle
│   ├── eva-sovereign-ui.es.js   # ESM bundle (12.28 KB gzip)
│   ├── eva-sovereign-ui.umd.js  # UMD bundle (10.96 KB gzip)
│   ├── eva-sovereign-ui.css     # Compiled styles
│   └── index.d.ts               # TypeScript definitions
│
├── dist-devkit/                 # Built Dev Kit demo (static site)
├── dist-esdc/                   # Built ESDC demo (static site)
├── dist-performance/            # Built performance dashboard
│
├── docs/                        # Documentation
│   ├── EVENT-MODEL.md
│   └── THEMING-AND-TOKENS.md
│
├── tests/                       # Integration & E2E tests
│   ├── accessibility/           # Axe accessibility audits
│   └── visual-regression/       # Playwright visual tests
│
├── scripts/                     # Build & utility scripts
│   ├── audit-components.mjs
│   ├── perf-benchmark.mjs
│   └── size-guard.mjs
│
├── .storybook/                  # Storybook configuration
├── storybook-static/            # Built Storybook docs
├── vscode-extension/            # VS Code snippets extension
│
└── [Configuration Files]
    ├── package.json             # Root package (workspace coordinator)
    ├── vite.config.ts           # Web Components build
    ├── vitest.config.ts         # Testing configuration
    ├── playwright.config.ts     # E2E testing
    ├── .releaserc.json          # Semantic release automation
    └── tsconfig.json            # TypeScript configuration
```

---

## Package Details

### 1. **Core: Web Components** (NOT a separate npm package)

**Location:** `packages/eva-sovereign-ui-wc/src/`  
**Published As:** `@eva-suite/sovereign-ui` (built from root)  
**Purpose:** Foundation Web Components library

**Structure:**
```
packages/eva-sovereign-ui-wc/src/
├── index.ts                    # Main export file (auto-registers all components)
├── components/                 # 49 Web Components
│   ├── ui/                     # Core UI components (38 shadcn/ui ports)
│   │   ├── eva-button.ts
│   │   ├── eva-input.ts
│   │   ├── eva-accordion.ts
│   │   └── ... (35 more)
│   ├── gc-components/          # GC Design System components (6 components)
│   │   ├── eva-gc-button.ts
│   │   ├── eva-gc-header.ts
│   │   └── ...
│   ├── gc-patterns/            # GC patterns (3 components)
│   ├── gc-templates/           # GC templates (2 components)
│   └── chat/                   # EVA Chat components
│       └── eva-chat.ts
├── a11y/                       # Accessibility utilities
│   ├── roving-tabindex.ts      # Composite keyboard navigation
│   ├── focus-trap.ts           # Modal focus containment
│   ├── keyboard-utils.ts       # Key event handlers
│   └── aria-utils.ts           # ARIA management & live regions
├── i18n/                       # Internationalization engine
│   ├── i18n-service.ts         # Core i18n singleton
│   └── locales/                # Translation resources (7 locales)
│       ├── en-US.json
│       ├── en-CA.json
│       ├── en-GB.json
│       ├── en-AU.json
│       ├── en-NZ.json
│       ├── fr-CA.json
│       └── mi-NZ.json (Te Reo Māori)
├── tokens/                     # Design tokens
│   └── gc-tokens.ts            # GC Design System tokens
├── themes/                     # Theme definitions
│   └── gc-theme.ts             # GC theme implementation
└── styles/                     # Base styles & CSS variables
```

**Component Categories:**
- **UI Components (38):** Button, Input, Select, Checkbox, Radio, Switch, Slider, Textarea, Card, Dialog, Alert, Badge, Tabs, Accordion, Table, Pagination, Progress, Spinner, Tooltip, Popover, etc.
- **GC Components (6):** GC Button, GC Header, GC Footer, GC Breadcrumbs, GC Banner, GC Navigation
- **GC Patterns (3):** GC Form Group, GC Action Bar, GC Info Panel
- **GC Templates (2):** GC Page Template, GC Service Page
- **Chat Components (1):** EVA Chat

**Total:** 49 components

---

### 2. **React Wrappers**

**NPM Package:** `@eva-suite/sovereign-ui-react@1.1.0`  
**Location:** `packages/eva-sovereign-ui-react/`  
**Bundle Size:** 50.04 KB (CJS), 49.16 KB (ESM)

**Purpose:** React-friendly wrappers for all 49 Web Components with:
- TypeScript types for all props/events
- Ref forwarding to underlying Web Components
- React 18+ compatibility
- Prop forwarding & event handling

**Key Files:**
```
packages/eva-sovereign-ui-react/
├── src/
│   ├── index.ts                # Main export (all component wrappers)
│   ├── components/
│   │   ├── EVAButton.tsx
│   │   ├── EVAInput.tsx
│   │   └── ... (49 wrapper components)
│   └── types.ts                # TypeScript definitions
├── dist/                       # Built package
│   ├── index.js (CJS)
│   ├── index.mjs (ESM)
│   └── index.d.ts (types)
├── package.json
└── tsconfig.json
```

**Peer Dependencies:**
- `@eva-suite/sovereign-ui: ^1.0.0`
- `react: ^18.0.0`
- `react-dom: ^18.0.0`

---

### 3. **Vue 3 Wrappers**

**NPM Package:** `@eva-suite/sovereign-ui-vue@1.0.0`  
**Location:** `packages/eva-sovereign-ui-vue/`  
**Bundle Size:** 19.24 KB (CJS), 18.89 KB (ESM)

**Purpose:** Vue 3 Composition API wrappers with:
- `v-model` binding support
- Slot forwarding
- Reactive prop updates
- `createEVAPlugin()` for global registration

**Key Files:**
```
packages/eva-sovereign-ui-vue/
├── src/
│   ├── index.ts                # Main export & plugin
│   ├── components/             # Vue component wrappers
│   └── composables/            # Vue composables for web components
├── dist/
├── package.json
└── tsconfig.json
```

---

### 4. **Angular Wrappers**

**NPM Package:** `@eva-suite/sovereign-ui-angular@1.0.0`  
**Location:** `packages/eva-sovereign-ui-angular/`  
**Bundle Size:** 8.91 KB (CJS), 8.76 KB (ESM)

**Purpose:** Angular module with:
- `CUSTOM_ELEMENTS_SCHEMA` integration
- `ngModel` binding directives
- `ControlValueAccessor` for forms
- `EVASovereignUIModule` for easy import

**Key Files:**
```
packages/eva-sovereign-ui-angular/
├── src/
│   ├── index.ts                # Public API
│   ├── module.ts               # EVASovereignUIModule
│   └── directives/             # ngModel directives
├── dist/
├── package.json
└── tsconfig.json
```

---

### 5. **Svelte Wrappers**

**NPM Package:** `@eva-suite/sovereign-ui-svelte@1.0.0`  
**Location:** `packages/eva-sovereign-ui-svelte/`  
**Bundle Size:** 3.12 KB (CJS), 3.07 KB (ESM)

**Purpose:** Svelte actions for two-way binding:
- `bind` action for value binding
- `bindChecked` action for checkbox/radio binding
- `forwardEvents` action for event delegation
- Writable store integration

**Key Files:**
```
packages/eva-sovereign-ui-svelte/
├── src/
│   ├── index.ts                # Main export (actions)
│   ├── actions/
│   │   ├── bind.ts
│   │   ├── bindChecked.ts
│   │   └── forwardEvents.ts
│   └── stores/
├── dist/
├── package.json
└── tsconfig.json
```

---

## Demo Applications (Non-Publishable)

### 1. **Dev Kit / Component Gallery**

**Location:** `apps/dev-kit-demo/`  
**Purpose:** Interactive component showcase with Five Eyes profiles

**Features:**
- Live preview of all 49 components
- Code tabs: HTML, React, Vue, Angular, Svelte
- Interactive property editors
- Five Eyes sovereign profile switcher (🇨🇦🇺🇸🇬🇧🇦🇺🇳🇿)
- 9-locale i18n demo (en-CA, fr-CA, en-US, en-GB, en-AU, en-NZ, mi-NZ, es-US, cy-GB)
- Accessibility documentation per component
- Spec tables (props, events, slots, WCAG notes)

**Dev Command:** `npm run dev:devkit` (or `npm run dev`)  
**Build Output:** `dist-devkit/` (static site)

---

### 2. **ESDC Government Portal Demo**

**Location:** `apps/esdc-demo/`  
**Purpose:** Full-scale Employment and Social Development Canada portal

**Features:**
- Realistic government portal UI
- Integrated EVA AI chatbot assistant
- Bilingual EN-CA / FR-CA content
- GC Design System header/footer/breadcrumbs
- Program pages (Employment Insurance, Old Age Security, CPP)
- Service navigation
- Accessibility-first templates (WCAG 2.2 AA)

**Dev Command:** `npm run dev:esdc`  
**Build Output:** `dist-esdc/` (static site)

---

### 3. **Performance Dashboard**

**Location:** `apps/performance-dashboard/`  
**Purpose:** Real-time performance metrics & bundle analysis

**Features:**
- Component render performance
- Bundle size tracking (Chart.js visualizations)
- Memory usage monitoring
- Lighthouse scores
- WCAG audit results

**Dev Command:** `npm run dev:perf`  
**Build Output:** `dist-performance/`

---

### 4. **Legacy Demo (Deprecated)**

**Location:** `apps/demo/` & `src/` (partially shared)  
**Status:** Deprecated (see `LEGACY-DEMOS-DEPRECATED.md`)

Migration guidance provided for users to switch to Dev Kit or ESDC demos.

---

## Package Dependency Graph

```
┌─────────────────────────────────────────────────────────────┐
│  @eva-suite/sovereign-ui (Web Components Core)              │
│  - 49 components                                            │
│  - A11y utilities (roving-tabindex, focus-trap, etc.)      │
│  - I18n engine (7 locales)                                  │
│  - GC Design System tokens & themes                         │
│  - Five Eyes sovereign profiles                             │
└────────────────────┬────────────────────────────────────────┘
                     │ (peer dependency)
                     │
      ┌──────────────┼──────────────┬────────────────┐
      │              │               │                │
      ▼              ▼               ▼                ▼
┌───────────┐  ┌───────────┐  ┌────────────┐  ┌───────────┐
│  React    │  │   Vue 3   │  │  Angular   │  │  Svelte   │
│  Wrappers │  │  Wrappers │  │  Wrappers  │  │  Wrappers │
└───────────┘  └───────────┘  └────────────┘  └───────────┘
    50 KB          19 KB          9 KB           3 KB
```

**Notes:**
- All framework wrappers have `@eva-suite/sovereign-ui` as a **peer dependency**
- No cross-dependencies between framework packages
- Each wrapper is independently publishable
- Core Web Components must be loaded before framework wrappers

---

## Shared Code Between Packages

### 1. **A11y Utilities** (in core, used by all components)
- `roving-tabindex.ts` - Composite keyboard navigation (213 lines, 87 tests)
- `focus-trap.ts` - Modal focus containment (167 lines, 52 tests)
- `keyboard-utils.ts` - Key event handling (261 lines, 35 tests)
- `aria-utils.ts` - ARIA management & live regions (260+ lines, 31 tests)

**Test Coverage:** 205 unit tests, 185 passing (90.2%)

### 2. **I18n Engine** (in core, used by all components)
- `i18n-service.ts` - Singleton translation service
- 7 locale files (en-US, en-CA, en-GB, en-AU, en-NZ, fr-CA, mi-NZ)
- 64 translation keys per locale
- Intl.DateTimeFormat / NumberFormat / Currency wrappers

### 3. **GC Design System Integration** (in core)
- Design tokens (colors, typography, spacing, breakpoints)
- GC-specific components (header, footer, breadcrumbs, etc.)
- Official Lato + Noto Sans typography
- canada.ca color palette

### 4. **Five Eyes Profiles** (in demos, not in core Web Components)
- `src/lib/sovereign-profiles.ts` - Profile definitions
- Theme colors for Canada, USA, UK, Australia, New Zealand
- Government branding customizations
- Locale mappings per country

---

## Build Tooling

### Root Package Build System

**Build Tool:** Vite 5.4.21  
**TypeScript:** 5.3.3  
**Bundler:** Rollup (via Vite)

**Build Targets:**
1. **Web Components Core:** `npm run build:wc`
   - Input: `packages/eva-sovereign-ui-wc/src/index.ts`
   - Output: `dist/eva-sovereign-ui.{es,umd}.js`
   - Formats: ESM, UMD
   - Minification: esbuild
   - Source maps: Yes

2. **Framework Wrappers:** `npm run build:react|vue|angular|svelte`
   - Tool: tsup 8.0.1
   - Formats: CJS, ESM
   - TypeScript declarations: Yes

3. **Demo Apps:** `npm run build:devkit|esdc|perf`
   - Tool: Vite
   - Output: `dist-devkit/`, `dist-esdc/`, `dist-performance/`
   - Static sites (HTML + JS + CSS)

4. **Storybook:** `npm run build-storybook`
   - Output: `storybook-static/`

---

## Module Formats

### Core Web Components
- **ESM:** `dist/eva-sovereign-ui.es.js` (12.28 KB gzip)
- **UMD:** `dist/eva-sovereign-ui.umd.js` (10.96 KB gzip)
- **Types:** `dist/index.d.ts`
- **Styles:** `dist/eva-sovereign-ui.css`

### Framework Wrappers
- **CJS:** `dist/index.js` (CommonJS for Node/SSR)
- **ESM:** `dist/index.mjs` (for modern bundlers)
- **Types:** `dist/index.d.ts`

---

## Versioning & Release Strategy

**System:** Semantic Versioning 2.0.0 via `semantic-release`

**Configuration:** `.releaserc.json`

**Release Workflow:**
1. Commit analysis (conventional commits)
2. Automated version bumping:
   - `feat:` → minor version
   - `fix:` / `perf:` → patch version
   - `breaking:` → major version
3. CHANGELOG.md generation
4. NPM package publishing
5. GitHub release creation
6. Git tag creation

**Branches:**
- `main` - stable releases
- `next` - prerelease versions

**Automated CI/CD:** GitHub Actions (see `.github/workflows/release.yml`)

---

## NPM Package Names & Scopes

| Package | NPM Name | Current Version |
|---------|----------|-----------------|
| Web Components Core | `@eva-suite/sovereign-ui` | 1.1.0 |
| React Wrappers | `@eva-suite/sovereign-ui-react` | 1.1.0 |
| Vue 3 Wrappers | `@eva-suite/sovereign-ui-vue` | 1.0.0 |
| Angular Wrappers | `@eva-suite/sovereign-ui-angular` | 1.0.0 |
| Svelte Wrappers | `@eva-suite/sovereign-ui-svelte` | 1.0.0 |

**Scope:** `@eva-suite` (organization scope)

---

## Key Observations for Distribution

### Strengths
1. **Clear separation** between publishable packages and demo apps
2. **Consistent naming** (`@eva-suite/sovereign-ui-*`)
3. **Automated releases** with semantic-release
4. **Multiple demo apps** for different use cases (component gallery vs government portal)
5. **Comprehensive documentation** (750+ lines in FRAMEWORK-WRAPPERS.md)
6. **Type definitions** for all packages

### Potential Improvements
1. **Core Web Components** is built from root, not as a standalone package in `packages/` (unconventional monorepo structure)
2. **Shared code** (`src/lib/`) is primarily for demos, not extracted as reusable utilities
3. **No workspace manager** (no Lerna, Nx, or Turborepo) - manual build coordination via npm scripts
4. **Multiple build outputs** (dist, dist-devkit, dist-esdc, dist-performance) could be consolidated
5. **VS Code extension** in repo but not integrated into release workflow

---

## Conclusion

EVA-Sovereign-UI follows a **hybrid monorepo architecture** with:
- **1 core package** (Web Components) published from root
- **4 framework adapters** published as separate scoped packages
- **4 demo applications** for showcasing capabilities
- **Embedded utilities** (a11y, i18n) within the core package rather than separate libraries

This structure is **production-ready** but could benefit from:
1. Moving core Web Components to `packages/eva-sovereign-ui-wc/package.json` as a proper package
2. Extracting a11y & i18n utilities as standalone packages (`@eva-suite/a11y`, `@eva-suite/i18n`)
3. Implementing a workspace manager (pnpm workspaces, Turborepo) for better monorepo orchestration

---

**Report Prepared By:** GitHub Copilot (Claude Sonnet 4.5)  
**Date:** December 2, 2025  
**Next Report:** Accessibility Implementation (02)
