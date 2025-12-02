# Migrating `demos/` to Dev Kit

**Status**: In Progress  
**Target**: v2.0.0  
**Timeline**: Q1 2026

## Overview

The content in `demos/` folder is being migrated to the official **Dev Kit** (`apps/dev-kit-demo/`) for a unified component gallery experience.

## Current `demos/` Content

| File | Purpose | Migration Status |
|------|---------|------------------|
| `index.html` | Gallery index | ✅ Will become Dev Kit home |
| `overview.html` | Library overview | ✅ Integrating into Dev Kit landing |
| `foundations-theming.html` | Foundations | 🔄 Moving to Dev Kit → Foundations section |
| `navigation-shell.html` | Navigation/Shell | 🔄 Moving to Dev Kit → Navigation category |
| `forms-validation.html` | Forms | 🔄 Moving to Dev Kit → Forms category |
| `feedback-overlays.html` | Feedback/Overlays | 🔄 Moving to Dev Kit → Feedback category |
| `content-data.html` | Content/Data | 🔄 Moving to Dev Kit → Content category |
| `files-media-viz.html` | Files/Media/Viz | 🔄 Moving to Dev Kit → Files category |
| `i18n-cms-templates.html` | i18n/CMS | 🔄 Moving to Dev Kit → i18n showcase |
| `all-in-one.html` | Executive gallery | 🔄 Moving to Dev Kit → Quick tour |

## Migration Plan

### Phase 1: Dev Kit Structure (Current)
- [ ] Create Dev Kit navigation with categories
- [ ] Build landing page with metrics and switchers
- [ ] Set up component page template

### Phase 2: Content Migration
- [ ] Migrate all component demonstrations
- [ ] Add code tabs (HTML, React, Vue, Angular, Svelte)
- [ ] Integrate property editors
- [ ] Add spec tables (props, events, slots)

### Phase 3: Feature Showcases
- [ ] Build Accessibility showcase page
- [ ] Build Five Eyes + i18n showcase page
- [ ] Build EVA Chat showcase page
- [ ] Build Getting Started page

### Phase 4: Cleanup
- [ ] Archive `demos/` folder
- [ ] Update all internal links
- [ ] Remove legacy references

## Using Demos During Migration

**For now**, you can still access:

```
/demos/index.html           → Gallery index
/demos/all-in-one.html      → All-in-one demo
/demos/forms-validation.html → Forms showcase
... etc.
```

**After v2.0.0**, all content will be at:

```
/apps/dev-kit-demo/index.html
```

Access via:
```bash
npm run dev:devkit
```

## Questions?

See the main [LEGACY-DEMOS-DEPRECATED.md](../LEGACY-DEMOS-DEPRECATED.md) for complete migration guidance.

---

**Last Updated**: December 2, 2025  
**Migration Lead**: EVA Suite Team
