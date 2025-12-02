# Legacy Demos - Deprecated

**⚠️ DEPRECATION NOTICE**

The following demo locations are **deprecated** and will be removed in a future release:

## Deprecated Locations

### 1. Root `index.html`
- **Status**: Deprecated
- **Replacement**: Use official demo launcher (see below)
- **Reason**: Scattered demo structure, inconsistent with monorepo architecture

### 2. Root `src/` folder
- **Status**: Deprecated  
- **Replacement**: Framework-specific demos in `apps/dev-kit-demo`
- **Reason**: Legacy React demo, not aligned with Web Components-first approach

### 3. `apps/demo/` folder
- **Status**: Deprecated
- **Replacement**: `apps/esdc-demo` or `apps/dev-kit-demo`
- **Reason**: Redundant, minimal content

### 4. `demos/` folder
- **Status**: Being migrated → `apps/dev-kit-demo`
- **Replacement**: All gallery content moving to Dev Kit
- **Reason**: Consolidate all component demonstrations in single Dev Kit location

---

## Official Demo Structure (v2.0+)

EVA-Sovereign-UI uses a clean monorepo architecture with **two official demos**:

### ✅ 1. ESDC Demo (`apps/esdc-demo/`)
**Purpose**: Full production-style portal demonstration

- Complete Employment and Social Development Canada portal
- Real-world government website patterns
- EVA AI chatbot integration
- GC Design System implementation
- Bilingual EN-CA/FR-CA content

**Run locally**:
```bash
npm run dev:esdc
```

**Build for production**:
```bash
npm run build:esdc
```

---

### ✅ 2. Dev Kit Demo (`apps/dev-kit-demo/`)
**Purpose**: Component gallery and developer showcase

- All 49 Web Components with live previews
- Code examples: HTML, React, Vue, Angular, Svelte
- Accessibility showcase (WCAG 2.2 AA+)
- Five Eyes sovereign profile switcher
- 9-locale internationalization demo
- Property editors and interactive examples

**Run locally**:
```bash
npm run dev:devkit
# or
npm run preview:devkit
```

**Build for production**:
```bash
npm run build:devkit
```

---

## Migration Timeline

| Version | Action |
|---------|--------|
| **v1.0.x** | Legacy demos still accessible, deprecation warnings added |
| **v1.5.0** | Official demos fully functional, migration guide published |
| **v2.0.0** | Legacy demos removed, only official demos available |

---

## Migration Guide

### If you were using `index.html` (root)
**Before**:
```bash
npm run dev  # Opens root index.html
```

**After**:
```bash
npm run dev:devkit  # Opens Dev Kit component gallery
# or
npm run dev:esdc    # Opens ESDC demo portal
```

### If you were using `src/` React demo
**Before**:
```tsx
import { EVAButton } from '../src/components/Button'
```

**After**:
```tsx
// Use official React wrapper package
import { EVAButton } from '@eva-suite/sovereign-ui-react'
```

See `packages/eva-sovereign-ui-react/` for all React wrappers.

### If you were using `apps/demo/`
**Before**:
```
/apps/demo/index.html
```

**After**:
```
/apps/dev-kit-demo/index.html  # Full component gallery
# or
/apps/esdc-demo/index.html     # Portal demo
```

### If you were using `demos/` gallery
**Before**:
```
/demos/all-in-one.html
/demos/forms-validation.html
```

**After**:
```
/apps/dev-kit-demo/index.html  # All gallery content integrated
```

Component categories now available as:
- `/apps/dev-kit-demo/#/components/forms`
- `/apps/dev-kit-demo/#/components/navigation`
- `/apps/dev-kit-demo/#/components/feedback`
- etc.

---

## Questions?

See the main [README.md](./README.md) for updated documentation, or check:
- [QUICKSTART.md](./QUICKSTART.md) - Getting started guide
- [INTEGRATION-GUIDE.md](./INTEGRATION-GUIDE.md) - How to integrate EVA-Sovereign-UI
- [DEVELOPER-KIT-GUIDE.md](./DEVELOPER-KIT-GUIDE.md) - Dev Kit documentation

---

**Last Updated**: December 2, 2025  
**Deprecation Status**: Active  
**Removal Target**: v2.0.0 (Q1 2026)
