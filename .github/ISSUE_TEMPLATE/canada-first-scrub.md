---
name: Canada-First Strategic Scrub
about: Remove Five Eyes references, align with Canada-first strategy (Dec 3, 2025)
title: '[STRATEGIC] Canada-First Scrub - Remove Five Eyes References'
labels: ['strategic', 'breaking-change', 'documentation', 'i18n', 'themes']
assignees: ['']
priority: HIGH
---

## 🎯 Strategic Context

Following Marco's decision (Dec 3, 2025) to focus EVA exclusively on Canada, this issue tracks systematic removal of Five Eyes references from EVA-Sovereign-UI.

**Related**: `MADE-IN-CANADA-MANIFESTO.md` (eva-orchestrator/docs/governance/)

---

## 📋 Requirements Document

See comprehensive requirements: `CANADA-FIRST-SCRUB-REQUIREMENTS.md`

---

## 🚀 Quick Summary

### What We're Removing:
- ❌ Five Eyes locales (en-US, en-GB, en-AU, en-NZ, cy-GB, mi-NZ)
- ❌ Five Eyes theme profiles (US Federal, UK Gov, Australia, NZ)
- ❌ International deployment messaging
- ❌ Multi-nation examples and documentation

### What We're Keeping:
- ✅ Canadian locales (en-CA, fr-CA, iu-CA)
- ✅ Government of Canada theme only
- ✅ Canadian government deployment focus
- ✅ World-class quality (others can adapt via fork)

---

## ✅ Task Checklist

### Phase 1: Locales (Day 1)
- [ ] Remove locale files: en-US.json, en-GB.json, en-AU.json, en-NZ.json, cy-GB.json, mi-NZ.json
- [ ] Keep: en-CA.json, fr-CA.json, iu-CA.json
- [ ] Update i18n-service.ts `supportedLocales` array
- [ ] Update eva-language-switcher component (3 options only)
- [ ] Update Storybook stories for language switcher
- [ ] Run tests: `npm run test && npm run test:integration`

### Phase 2: Themes (Day 2)
- [ ] Remove Five Eyes theme profiles (sovereign-profiles.ts or similar)
- [ ] Keep only Government of Canada theme
- [ ] Remove theme switcher UI from demos
- [ ] Update Storybook stories (GC theme only)
- [ ] Regenerate visual regression baselines: `npm run test:visual-regression -- --update-snapshots`

### Phase 3: Documentation (Day 3)
- [ ] Update README.md (remove Five Eyes, add Canada-first)
- [ ] Update EXECUTIVE-SUMMARY.md
- [ ] Update DEMO-GUIDE.md
- [ ] Update DEMO-SUMMARY.md
- [ ] Update ARCHITECTURE-ANALYSIS-04-GC-DESIGN.md
- [ ] Update INTERNATIONAL-DEPLOYMENT-READINESS-REPORT.md → CANADIAN-DEPLOYMENT-READINESS-REPORT.md
- [ ] Update GITHUB-PAGES-DEPLOYMENT-PLAN.md
- [ ] Update package.json descriptions and keywords
- [ ] Update all package READMEs

### Phase 4: Code Quality (Day 4)
- [ ] Update TypeScript types (Locale type, SovereignProfile type)
- [ ] Update runtime.config.json
- [ ] Update Vite configurations
- [ ] Update GitHub Actions workflows (.github/workflows/)
- [ ] Complete ESDC→Agency scrub verification (storybook-static, inventory files)
- [ ] Archive deprecated files (_archive/five-eyes-locales/, _archive/five-eyes-themes/)

### Phase 5: Validation (Day 4)
- [ ] Run full test suite: `npm run test && npm run test:integration && npm run test:accessibility && npm run test:visual-regression`
- [ ] Build all packages: `npm run build`
- [ ] Build all demos: `npm run build:demos`
- [ ] Manual demo testing (dev-kit-demo, agency-demo)
- [ ] Verify zero "Five Eyes" references: `grep -r "Five Eyes" . --exclude-dir=node_modules --exclude-dir=_archive`
- [ ] Verify zero en-US/en-GB/en-AU/en-NZ references: `grep -r "en-US\|en-GB\|en-AU\|en-NZ" packages/eva-sovereign-ui-wc/src/i18n/`

---

## 🎯 Acceptance Criteria

- ✅ Only 3 locale files remain: en-CA.json, fr-CA.json, iu-CA.json
- ✅ Language switcher shows 3 options (English, Français, ᐃᓄᒃᑎᑐᑦ)
- ✅ Only Government of Canada theme exists
- ✅ No "Five Eyes" references in codebase (validated by grep)
- ✅ All tests pass (unit, integration, a11y, visual regression)
- ✅ All demos build and deploy successfully
- ✅ Documentation reflects Canada-first strategy

---

## 📦 Deliverables

1. **Pull Request**: Title: "feat: Canada-first strategic scrub - remove Five Eyes"
2. **Test Report**: Full test suite results attached to PR
3. **Migration Guide**: `FIVE-EYES-TO-CANADA-MIGRATION.md` (for history)
4. **Updated Demos**: Links to deployed Canadian demos

---

## 🔍 Quality Gate Commands

```powershell
# Must return NO results (or only from _archive/)
grep -r "Five Eyes" . --exclude-dir=node_modules --exclude-dir=_archive
grep -r "five-eyes" . --exclude-dir=node_modules --exclude-dir=_archive
grep -r "en-US" packages/eva-sovereign-ui-wc/src/i18n/locales/
grep -r "ESDC" . --exclude-dir=node_modules --exclude=ESDC-SCRUB*.txt --exclude=CANADA-FIRST-SCRUB-REQUIREMENTS.md

# Must show only 3 locale files
Get-ChildItem "packages/eva-sovereign-ui-wc/src/i18n/locales/*.json"

# All tests must pass
npm run test
npm run test:integration
npm run test:accessibility
npm run lint
npm run type-check
```

---

## 🤝 Need Help?

- **Requirements Doc**: `CANADA-FIRST-SCRUB-REQUIREMENTS.md` (comprehensive)
- **Strategic Context**: `MADE-IN-CANADA-MANIFESTO.md` (eva-orchestrator/docs/governance/)
- **Previous Scrub**: `ESDC-SCRUB-COMPLETE.txt` (reference)
- **Questions**: Tag @marco in PR comments

---

**Estimated Effort**: 4-6 hours (1 focused sprint)  
**Priority**: HIGH - Strategic alignment with Dec 3, 2025 decision  
**Labels**: strategic, breaking-change, documentation, i18n, themes
