# EVA-Sovereign-UI: Canada-First Scrub - Dispatch Summary

**Date**: December 4, 2025, 8:45 AM  
**Requestor**: Marco Presta  
**Prepared By**: GitHub Copilot (Scrum Master)  
**Status**: Ready for GitHub Team Assignment

---

## ✅ What Was Completed

### 1. **MARCO-HUB Updated** (eva-orchestrator)
- Updated timestamp: 8:30 AM (Morning Sprint Complete)
- Updated GC Template status: 📦 Submission-Ready (17 documents)
- Updated package contents with global alignment (UK/NIST/ISED)
- Documented business case: $438K Year 1 savings, 548% ROI

### 2. **Requirements Document Created** 
**Location**: `EVA-Sovereign-UI/CANADA-FIRST-SCRUB-REQUIREMENTS.md`

**Comprehensive coverage** (10 tasks, ~250 lines):
- Task 1: Remove Five Eyes locale references (9 files → 3 files)
- Task 2: Remove Five Eyes theme profiles
- Task 3: Update documentation (17+ files)
- Task 4: Complete ESDC→Agency scrub verification
- Task 5: Update package metadata
- Task 6: Configuration files
- Task 7: GitHub Actions & CI/CD
- Task 8: Code quality & bug fixes
- Task 9: Clean up deprecated files
- Task 10: Testing & validation

**Acceptance Criteria**:
- Only 3 locale files: en-CA, fr-CA, iu-CA
- Only GC theme profile
- Zero "Five Eyes" references (validated by grep)
- All tests pass
- All demos build successfully

### 3. **GitHub Issue Template Created**
**Location**: `EVA-Sovereign-UI/.github/ISSUE_TEMPLATE/canada-first-scrub.md`

**Ready for GitHub team** with:
- Strategic context (links to MADE-IN-CANADA-MANIFESTO)
- Task checklist (5 phases: Locales, Themes, Documentation, Code Quality, Validation)
- Quality gate commands (grep validation, test commands)
- Deliverables (PR, test report, migration guide)
- Estimated effort: 4-6 hours

---

## 📋 Context for GitHub Team

### **Strategic Decision** (Dec 3, 2025)
Marco decided to focus EVA exclusively on Canada after deep discussion about dual-use AI risks, Five Eyes complexity, ethical dilemmas.

**What Changed**:
- ❌ REMOVED: Five Eyes expansion (US, UK, AU, NZ) - 433M people, $30T GDP
- ❌ REMOVED: Multi-nation compliance, international certifications
- ✅ FOCUS: Canada (38M people) - bilingual, WCAG 2.1 AA+, PIPEDA, Indigenous protocols
- ✅ POSITIONING: Canadian leadership example - "If it's good enough for Canadians, it's good enough for anyone"

**Why**:
- Ethical: Eliminates weaponization risks, surveillance state scenarios
- Practical: One legal framework, one government culture, manageable scope
- Strategic: Proof of concept - others will adapt (Rails model: DHH → Twitter → Shopify → world)

### **Previous Work** (Yesterday - Dec 3)
- ✅ ESDC→Agency scrub completed (`ESDC-SCRUB-COMPLETE.txt`)
- ✅ Repository inspection report generated (`REPOSITORY-INSPECTION-REPORT-2025-12-03.md`)
- ⏳ Five Eyes references NOT yet removed (awaiting strategic decision)

**Today's Decision**: Proceed with Five Eyes removal (aligns with Canada-first strategy)

---

## 🚀 Dispatch Instructions

### **Option 1: GitHub Issue (Recommended)**

**Command**:
```powershell
# Create issue from template
gh issue create --template canada-first-scrub.md --title "[STRATEGIC] Canada-First Scrub - Remove Five Eyes References" --label "strategic,breaking-change,documentation,i18n,themes" --milestone "Sprint 5" --assignee "@me"
```

**What This Does**:
- Creates tracked issue in EVA-Sovereign-UI repo
- Applies strategic priority labels
- Links to requirements document
- Provides comprehensive checklist
- Establishes quality gates

---

### **Option 2: Copilot Workspace (Alternative)**

**If using Copilot Workspace multi-file editing**:

1. Open `CANADA-FIRST-SCRUB-REQUIREMENTS.md`
2. Select "Task 1: Remove Five Eyes Locale References"
3. Use Copilot Workspace to:
   - Delete files: en-US.json, en-GB.json, en-AU.json, en-NZ.json, cy-GB.json, mi-NZ.json
   - Edit i18n-service.ts (update `supportedLocales`)
   - Edit eva-language-switcher component
4. Repeat for Tasks 2-10

**Advantage**: AI-assisted multi-file editing with context awareness

---

### **Option 3: Manual PR (Traditional)**

**For experienced developers**:

1. Create branch: `git checkout -b feat/canada-first-scrub`
2. Follow `CANADA-FIRST-SCRUB-REQUIREMENTS.md` tasks sequentially
3. Run quality gate commands after each phase
4. Create PR with checklist from issue template
5. Tag @marco for review

---

## 📊 Expected Outcomes

### **Before** (Current State):
```
📁 locales/
  ├── en-CA.json ✅
  ├── fr-CA.json ✅
  ├── iu-CA.json ✅
  ├── en-US.json ❌ DELETE
  ├── en-GB.json ❌ DELETE
  ├── en-AU.json ❌ DELETE
  ├── en-NZ.json ❌ DELETE
  ├── cy-GB.json ❌ DELETE (Welsh)
  └── mi-NZ.json ❌ DELETE (Māori)

📊 Documentation References:
  - "Five Eyes": ~40 matches across 20+ files
  - "international deployment": ~15 matches
  - Theme profiles: 5 (GC, US, UK, AU, NZ)
```

### **After** (Target State):
```
📁 locales/
  ├── en-CA.json ✅ (English Canada)
  ├── fr-CA.json ✅ (French Canada)
  └── iu-CA.json ✅ (Inuktitut Canada)

📁 _archive/five-eyes-locales/ (reference only)
  ├── en-US.json
  ├── en-GB.json
  ├── en-AU.json
  ├── en-NZ.json
  ├── cy-GB.json
  └── mi-NZ.json

📊 Documentation References:
  - "Five Eyes": 0 matches (or only in _archive/)
  - "Canada-first strategy": documented
  - Theme profiles: 1 (Government of Canada only)
```

### **Quality Gates** (All Must Pass):
```powershell
# Zero Five Eyes references
grep -r "Five Eyes" . --exclude-dir=node_modules --exclude-dir=_archive
# Expected: No matches

# Only 3 locale files
Get-ChildItem "packages/eva-sovereign-ui-wc/src/i18n/locales/*.json"
# Expected: en-CA.json, fr-CA.json, iu-CA.json

# All tests pass
npm run test && npm run test:integration && npm run test:accessibility && npm run lint
# Expected: All green ✅
```

---

## 🎯 Success Criteria

### **Phase 1: Locales** ✅
- Only Canadian locales remain (en-CA, fr-CA, iu-CA)
- Language switcher shows 3 options
- i18n service configured correctly
- All locale-related tests pass

### **Phase 2: Themes** ✅
- Only Government of Canada theme exists
- No Five Eyes theme switcher
- Visual regression baselines updated

### **Phase 3: Documentation** ✅
- All 17+ docs updated (Five Eyes → Canada)
- Package metadata reflects Canada-first
- No Five Eyes references in user-facing docs

### **Phase 4: Validation** ✅
- Full test suite passes
- All demos build successfully
- Manual testing complete
- Quality gates validated

---

## 🔗 Related Files

### **In EVA-Sovereign-UI**:
- `CANADA-FIRST-SCRUB-REQUIREMENTS.md` - Comprehensive task breakdown (NEW)
- `.github/ISSUE_TEMPLATE/canada-first-scrub.md` - GitHub issue template (NEW)
- `ESDC-SCRUB-COMPLETE.txt` - Previous scrub completion
- `REPOSITORY-INSPECTION-REPORT-2025-12-03.md` - Baseline state
- `MADE-IN-CANADA-MANIFESTO.md` - ❌ NOT HERE (in eva-orchestrator)

### **In eva-orchestrator**:
- `docs/governance/MADE-IN-CANADA-MANIFESTO.md` - Strategic rationale
- `MARCO-HUB.md` - Updated with morning sprint progress
- `EVA-Audit-Log.jsonl` - Strategic pivot logged (Dec 3, 2025)

---

## 🤝 Assignment Recommendation

**Best Approach**: GitHub Issue → Copilot Workspace → PR

**Rationale**:
1. **GitHub Issue**: Creates trackable work item, links to requirements
2. **Copilot Workspace**: AI-assisted multi-file editing (faster, fewer errors)
3. **PR**: Code review by Marco, validation gates enforced

**Estimated Timeline**:
- Day 1: Locales (Task 1) - 1-2 hours
- Day 2: Themes (Task 2) - 1-2 hours
- Day 3: Documentation (Task 3) - 1-2 hours
- Day 4: Code Quality + Validation (Tasks 4-10) - 2-3 hours

**Total**: 4-6 hours (1 focused sprint)

---

## 💬 Communication

**To GitHub Team**:
> Hey team! 👋
> 
> Following Marco's strategic decision (Dec 3) to focus EVA exclusively on Canada, we need to remove Five Eyes references from EVA-Sovereign-UI.
> 
> **📋 Requirements**: `CANADA-FIRST-SCRUB-REQUIREMENTS.md` (comprehensive)
> **🎫 Issue Template**: `.github/ISSUE_TEMPLATE/canada-first-scrub.md` (ready to create)
> **📊 Estimated Effort**: 4-6 hours (1 focused sprint)
> 
> **What we're doing**:
> - Remove Five Eyes locales (keep Canada only: en-CA, fr-CA, iu-CA)
> - Remove Five Eyes theme profiles (keep GC only)
> - Update all documentation (17+ files)
> - Validate with full test suite + quality gates
> 
> **Why**: Aligns with Canada-first strategy - eliminates dual-use AI risks, simplifies governance, maintains ethical purity.
> 
> Ready to dispatch! 🚀

---

**Approved By**: Marco Presta  
**Prepared By**: GitHub Copilot  
**Date**: December 4, 2025, 8:45 AM  
**Status**: ✅ Ready for GitHub Team Assignment
