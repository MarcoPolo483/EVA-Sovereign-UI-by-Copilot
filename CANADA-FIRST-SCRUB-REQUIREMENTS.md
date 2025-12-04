# Canada-First Strategic Scrub - Requirements for GitHub Team

**Date**: December 4, 2025  
**Priority**: HIGH  
**Strategic Alignment**: EVA Sovereign - Made in Canada (Dec 3, 2025 decision)  
**Requestor**: Marco Presta (Product Owner)  
**Assigned To**: GitHub AI Team (Copilot Workspace)

---

## 🎯 Executive Summary

Following Marco's strategic decision (Dec 3, 2025) to focus EVA exclusively on Canada, EVA-Sovereign-UI requires systematic removal of Five Eyes references and completion of ESDC→Agency generic scrub.

**What Changed**:
- ❌ **REMOVE**: Five Eyes expansion (US, UK, Australia, New Zealand)
- ❌ **REMOVE**: Multi-nation design system profiles
- ✅ **KEEP**: Canada-only focus (bilingual en-CA/fr-CA)
- ✅ **KEEP**: World-class quality (proof of concept for others to adapt)

**Why**: Eliminates dual-use AI risks, simplifies governance, maintains ethical purity.

---

## 📋 Task Breakdown

### **Task 1: Remove Five Eyes Locale References**

#### **1.1 Locale Files - Keep Canada Only** (9 files)

**Location**: `packages/eva-sovereign-ui-wc/src/i18n/locales/*.json`

**Action**: Remove these locale keys from ALL 9 files:
- `en-US` (United States)
- `en-GB` (United Kingdom)
- `en-AU` (Australia)
- `en-NZ` (New Zealand)

**Keep ONLY**:
- `en-CA` (English Canada)
- `fr-CA` (French Canada)

**Files to Update**:
1. `en-CA.json`
2. `fr-CA.json`
3. `en-US.json` → **DELETE or archive**
4. `en-GB.json` → **DELETE or archive**
5. `en-AU.json` → **DELETE or archive**
6. `en-NZ.json` → **DELETE or archive**
7. `cy-GB.json` (Welsh) → **DELETE or archive**
8. `mi-NZ.json` (Māori) → **DELETE or archive**
9. `iu-CA.json` (Inuktitut) → **KEEP** (Indigenous Canadian language)

**Validation**:
```powershell
# Should return ONLY: en-CA.json, fr-CA.json, iu-CA.json
Get-ChildItem "packages/eva-sovereign-ui-wc/src/i18n/locales/*.json" | Select-Object Name
```

---

#### **1.2 i18n Service Configuration**

**Location**: `packages/eva-sovereign-ui-wc/src/i18n/i18n-service.ts`

**Action**: 
- Update `supportedLocales` array to `['en-CA', 'fr-CA', 'iu-CA']`
- Remove Five Eyes locale loading logic
- Update default locale to `'en-CA'`
- Update fallback locale to `'en-CA'`

**Before**:
```typescript
const supportedLocales = ['en-CA', 'fr-CA', 'en-US', 'en-GB', 'en-AU', 'en-NZ', 'cy-GB', 'mi-NZ', 'iu-CA'];
```

**After**:
```typescript
const supportedLocales = ['en-CA', 'fr-CA', 'iu-CA']; // Canada-first: English, French, Inuktitut
```

---

#### **1.3 Language Switcher Component**

**Location**: `packages/eva-sovereign-ui-wc/src/components/eva-language-switcher/`

**Action**:
- Update component to show ONLY Canadian languages
- Remove Five Eyes country flags/icons
- Update Storybook stories to show only Canada options
- Update tests to validate only Canadian locales

**Dropdown Options**:
- 🇨🇦 English (Canada) - `en-CA`
- 🇨🇦 Français (Canada) - `fr-CA`
- 🇨🇦 ᐃᓄᒃᑎᑐᑦ (Inuktitut) - `iu-CA`

---

### **Task 2: Remove Five Eyes Theme Profiles**

#### **2.1 Sovereign Profiles Configuration**

**Location**: `packages/eva-sovereign-ui-wc/src/themes/sovereign-profiles.ts` (or similar)

**Action**:
- Remove US Federal profile (`usgov`, `us-federal`, etc.)
- Remove UK Government profile (`ukgov`, `gov.uk`, etc.)
- Remove Australia profile (`ausgov`, `australia`, etc.)
- Remove New Zealand profile (`nzgov`, `new-zealand`, etc.)
- Keep ONLY Canada profile (`gc`, `canada`, `government-of-canada`)

**Expected Result**: Single profile object for Government of Canada

---

#### **2.2 Theme Switcher UI**

**Location**: Demo apps that show theme switching

**Action**:
- Remove Five Eyes theme selector dropdown
- Show only "Government of Canada" theme (no switching needed)
- Update Storybook stories to show only GC theme
- Update visual regression tests to test only GC theme

---

### **Task 3: Update Documentation (Five Eyes → Canada)**

#### **3.1 README Files** (17 matches found)

**Files to Update**:
- `README.md` (root)
- `EXECUTIVE-SUMMARY.md`
- `DEMO-GUIDE.md`
- `DEMO-SUMMARY.md`
- `ARCHITECTURE-ANALYSIS-04-GC-DESIGN.md`
- `INTERNATIONAL-DEPLOYMENT-READINESS-REPORT.md`
- `GITHUB-PAGES-DEPLOYMENT-PLAN.md`
- `demos/MIGRATING-TO-DEVKIT.md`
- `DEMO-FIXES-SUMMARY.md`

**Search & Replace**:
- "Five Eyes" → "Canada"
- "five-eyes" → "canada"
- "5 Eyes" → "Canadian"
- "Canada, USA, UK, Australia, and New Zealand" → "Canada"
- "international deployment" → "Canadian federal deployment"
- "Pre-configured for Five Eyes nations" → "Built for Canadian government"

**Add Clarification**:
> **Strategic Focus**: EVA Sovereign UI is built exclusively for Canada (federal, provincial, municipal governments). While the codebase is open-source and others may adapt it to their jurisdictions (Rails model), active development focuses solely on Canadian requirements.

---

### **Task 4: Complete ESDC → Agency Scrub Verification**

**Status**: Mostly complete (see `ESDC-SCRUB-COMPLETE.txt`)

**Remaining Checks**:

#### **4.1 Storybook Static Files**

**Location**: `storybook-static/components/agency/` (was esdc/)

**Action**:
- Verify all built Storybook files reference "agency" not "esdc"
- Rebuild Storybook if any ESDC references remain

```powershell
# Check for lingering ESDC references
grep -r "ESDC" storybook-static/
grep -r "Employment and Social Development" storybook-static/
```

---

#### **4.2 Inventory Files**

**Location**: 
- `_rebuild-inventory/literals-extract.json`
- `_rebuild-inventory/inventory.json`
- `COMPONENT-INVENTORY.json`

**Action**:
- Update any remaining ESDC strings → "Agency" or "Government Services"
- Rebuild inventory if necessary

---

#### **4.3 Test Files**

**Location**: `tests/integration/agency.spec.ts` (was esdc.spec.ts)

**Action**:
- Verify all test assertions use "agency" not "esdc"
- Update test expectations for locale changes (en-CA/fr-CA only)
- Run full test suite to validate

```powershell
npm run test:integration
npm run test:accessibility
npm run test:visual-regression
```

---

### **Task 5: Update Package Metadata**

#### **5.1 package.json (Root)**

**Action**:
- Update description: "Government-grade Web Components for Canadian federal, provincial, and municipal governments"
- Update keywords: Remove "five-eyes", "international", "multi-national"
- Add keywords: "canada", "gc-design", "bilingual", "canadian-government"
- Update homepage/repository URLs if they reference Five Eyes

**Before**:
```json
{
  "description": "Sovereign-grade Web Components for Five Eyes governments",
  "keywords": ["web-components", "five-eyes", "government", "international"]
}
```

**After**:
```json
{
  "description": "Government-grade Web Components for Canadian federal, provincial, and municipal governments",
  "keywords": ["web-components", "canada", "gc-design", "bilingual", "canadian-government", "wcag", "accessibility"]
}
```

---

#### **5.2 Package READMEs**

**Locations**:
- `packages/eva-sovereign-ui-wc/README.md`
- `packages/eva-sovereign-ui-react/README.md`
- `apps/dev-kit-demo/README.md`
- `apps/agency-demo/README.md`

**Action**: Update all package descriptions to reflect Canada-first strategy

---

### **Task 6: Configuration Files**

#### **6.1 Runtime Configuration**

**Location**: `runtime.config.json`

**Action**:
- Update `supportedLocales`: `["en-CA", "fr-CA", "iu-CA"]`
- Update `defaultLocale`: `"en-CA"`
- Remove Five Eyes theme profiles
- Update `theme.profiles` to single GC profile

---

#### **6.2 Vite Configuration**

**Location**: `vite.config.ts`, `apps/*/vite.config.ts`

**Action**:
- Update any environment variables referencing Five Eyes
- Remove unused locale imports for en-US, en-GB, en-AU, en-NZ
- Update build output paths if they reference "international" or "five-eyes"

---

### **Task 7: GitHub Actions & CI/CD**

#### **7.1 Workflow Files**

**Location**: `.github/workflows/*.yml`

**Action**:
- Update any workflow names referencing "Five Eyes" or "International"
- Update test matrix to remove non-Canadian locales
- Update deployment targets (remove international demos)

**Example**:
```yaml
# Before
name: Five Eyes Deployment
strategy:
  matrix:
    locale: [en-CA, fr-CA, en-US, en-GB, en-AU, en-NZ]

# After
name: Canadian Government Deployment
strategy:
  matrix:
    locale: [en-CA, fr-CA, iu-CA]
```

---

#### **7.2 GitHub Pages Deployment**

**Location**: `GITHUB-PAGES-DEPLOYMENT-PLAN.md`

**Action**:
- Update deployment plan to show only Canadian demos
- Remove international showcase pages
- Update index.html to show "Government of Canada" branding only

---

### **Task 8: Code Quality & Bug Fixes**

#### **8.1 TypeScript Type Definitions**

**Action**:
- Remove Five Eyes locale types from `src/types/i18n.ts` (or similar)
- Update `Locale` type: `type Locale = 'en-CA' | 'fr-CA' | 'iu-CA';`
- Update `SovereignProfile` type to remove US/UK/AU/NZ profiles

---

#### **8.2 Storybook Stories**

**Location**: `packages/eva-sovereign-ui-wc/src/components/**/*.stories.ts`

**Action**:
- Update all stories that demonstrate language switching (show only Canadian locales)
- Update all stories that demonstrate theme switching (show only GC theme)
- Remove Five Eyes examples from story annotations

---

#### **8.3 Visual Regression Baselines**

**Location**: `tests/visual-regression/snapshots/`

**Action**:
- Regenerate baseline screenshots for Canadian locales only
- Delete snapshots for en-US, en-GB, en-AU, en-NZ
- Run visual regression suite to establish new baselines

```powershell
npm run test:visual-regression -- --update-snapshots
```

---

### **Task 9: Clean Up Deprecated Files**

#### **9.1 Archive Five Eyes Assets**

**Action**:
- Move deleted locale files to `_archive/five-eyes-locales/` (for reference)
- Move Five Eyes theme profiles to `_archive/five-eyes-themes/`
- Update `.gitignore` to exclude `_archive/` from version control (or keep for history)

**Files to Archive**:
- `locales/en-US.json`
- `locales/en-GB.json`
- `locales/en-AU.json`
- `locales/en-NZ.json`
- `locales/cy-GB.json` (Welsh)
- `locales/mi-NZ.json` (Māori)
- Any Five Eyes theme configuration files

---

#### **9.2 Update .gitignore**

**Action**: Add archive directory if not tracking history
```gitignore
# Archived Five Eyes assets (pre-Canada-first strategy)
_archive/
```

---

### **Task 10: Testing & Validation**

#### **10.1 Full Test Suite**

**Commands**:
```powershell
# Unit tests
npm run test

# Integration tests
npm run test:integration

# Accessibility tests
npm run test:accessibility

# Visual regression tests
npm run test:visual-regression

# Performance tests
npm run test:performance

# Lint & type-check
npm run lint
npm run type-check

# Build all packages
npm run build

# Build all demos
npm run build:demos
```

**Acceptance Criteria**:
- ✅ All tests pass with only Canadian locales
- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ All demos build successfully
- ✅ Storybook builds without errors

---

#### **10.2 Manual Demo Testing**

**Test Checklist**:
- [ ] Open dev-kit-demo: Language switcher shows only en-CA, fr-CA, iu-CA
- [ ] Open agency-demo: All components render with Canadian locales
- [ ] Switch language en-CA ↔ fr-CA: All UI text updates correctly
- [ ] Verify no Five Eyes flags/icons/references in any demo
- [ ] Verify "Government of Canada" branding only
- [ ] Test all GC-specific components (gc-header, gc-footer, gc-button)

---

#### **10.3 Documentation Review**

**Checklist**:
- [ ] README.md accurately describes Canada-first strategy
- [ ] EXECUTIVE-SUMMARY.md reflects Canadian focus
- [ ] No references to "Five Eyes" in user-facing docs
- [ ] All examples use Canadian context (not international)
- [ ] MADE-IN-CANADA-MANIFESTO.md linked from README

---

## 🚀 Acceptance Criteria

### **Phase 1: Locales (Day 1)**
- ✅ Only 3 locale files exist: en-CA.json, fr-CA.json, iu-CA.json
- ✅ i18n service configured for Canadian locales only
- ✅ Language switcher shows 3 options (English, Français, ᐃᓄᒃᑎᑐᑦ)
- ✅ All tests pass with Canadian locales

### **Phase 2: Themes (Day 2)**
- ✅ Only Government of Canada theme profile exists
- ✅ No Five Eyes theme switcher in demos
- ✅ All visual regression baselines updated for GC theme only

### **Phase 3: Documentation (Day 3)**
- ✅ All 17+ documentation files updated (Five Eyes → Canada)
- ✅ Package metadata reflects Canada-first strategy
- ✅ No "Five Eyes" references in codebase (validated by grep)

### **Phase 4: Validation (Day 4)**
- ✅ Full test suite passes
- ✅ All demos build and deploy successfully
- ✅ Manual testing checklist complete
- ✅ Code review by Marco approved

---

## 📦 Deliverables

1. **Pull Request**: "feat: Canada-first strategic scrub - remove Five Eyes"
2. **Updated Documentation**: All markdown files reflect Canada-only focus
3. **Test Report**: Full test suite results (unit, integration, a11y, visual regression)
4. **Demo Links**: Updated GitHub Pages with Canadian demos only
5. **Migration Guide**: `FIVE-EYES-TO-CANADA-MIGRATION.md` (for reference/history)

---

## 🔗 Related Documents

- `MADE-IN-CANADA-MANIFESTO.md` - Strategic rationale (Dec 3, 2025)
- `ESDC-SCRUB-COMPLETE.txt` - Previous scrub completion status
- `REPOSITORY-INSPECTION-REPORT-2025-12-03.md` - Current state baseline
- `MARCO-HUB.md` - Strategic context in eva-orchestrator

---

## 🎯 Success Metrics

**Before**:
- 9 locale files (5 Five Eyes + 2 Canada + 2 Indigenous)
- ~40 "Five Eyes" references across 20+ files
- Multi-nation theme profiles
- International deployment messaging

**After**:
- 3 locale files (Canada only: en-CA, fr-CA, iu-CA)
- 0 "Five Eyes" references in codebase
- Single Government of Canada theme
- Canadian government deployment messaging

**Quality Gate**:
```powershell
# Must return NO results
grep -r "Five Eyes" . --exclude-dir=node_modules --exclude-dir=_archive
grep -r "five-eyes" . --exclude-dir=node_modules --exclude-dir=_archive
grep -r "en-US" packages/eva-sovereign-ui-wc/src/i18n/ --exclude=*.test.ts
grep -r "ESDC" . --exclude-dir=node_modules --exclude-dir=storybook-static --exclude=ESDC-SCRUB*.txt
```

---

## 🤝 GitHub Team Assignment

**Workflow**: Copilot Workspace Multi-File Editing

**Suggested Approach**:
1. Start with Task 1 (Locales) - foundational change
2. Move to Task 2 (Themes) - depends on locale changes
3. Complete Task 3 (Documentation) - can parallelize
4. Finish with Tasks 4-10 (Validation) - sequential

**Estimated Effort**: 4-6 hours (1 focused sprint)

**Questions**: Tag @marco in PR or post in #eva-sovereign-ui channel

---

**Approved By**: Marco Presta (Product Owner)  
**Date**: December 4, 2025  
**Priority**: HIGH - Aligns with strategic pivot (Dec 3, 2025)
