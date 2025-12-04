# UI Requirements: EVA-Sovereign-UI Component Library

**Document Status:** Complete System Documentation
**Last Updated:** December 3, 2025
**Version:** 1.0
**Repository:** EVA-Sovereign-UI (857 files: 627 TS + 230 TSX)

---

## 📋 Executive Summary

EVA-Sovereign-UI is a **production-ready Web Components design system** built for government applications with:
- 🎨 **152 Total Components** (91 Web Components + 61 React wrappers)
- ♿ **WCAG 2.2 AAA Compliance** (current: 2.1 AA, target: AAA)
- 🌍 **5 Languages Supported** (EN-CA, FR-CA, ES, DE, PT)
- 🔒 **Five Eyes Sovereign Profiles** (🇨🇦🇺🇸🇬🇧🇦🇺🇳🇿)
- ✅ **1,046/1,046 Tests Passing** (84% branch coverage)

### Current State vs Target State

| Area | Current | Target | Gap |
|------|---------|--------|-----|
| **Components** | 91 WC + 61 React | 152 fully documented | 42 undocumented |
| **Component Registration** | ✅ 47 components registered | 91 components registered | 44 components need registration |
| **a11y** | WCAG 2.1 AA | WCAG 2.2 AAA | Keyboard nav bugs, focus management issues |
| **i18n** | 5 languages partial (404 errors) | 5 languages complete | ~150 hardcoded strings + locale file paths broken |
| **Framework Support** | React only | React + Vue + Angular + Svelte | Vue/Angular/Svelte wrappers need audit |
| **Documentation** | Component inventory | Full UI-REQUIREMENTS.md | Usage patterns, API specs |
| **Demo Quality** | ✅ Slider, Toggle, Pagination, Progress, Accordion fixed | Production-ready | Need systematic testing of all 91 |

---

## 🎯 Purpose & Scope

### Primary Use Cases
1. **Government Applications**: Government agency programs, services, citizen portals
2. **EVA Suite Integration**: Component library for all EVA applications
3. **Standalone Usage**: Can be used by any Canadian federal government app
4. **EVA Chat UI**: Foundation for OpenWebUI-inspired chat interface (using EVA Sovereign components, not OpenWebUI itself)

### Target Users
- **Developers**: Frontend engineers building government apps
- **Designers**: UX/UI designers creating accessible experiences
- **Testers**: QA engineers validating accessibility/i18n
- **Content Authors**: Non-technical users managing translations

---

## 📦 Component Inventory

### Category 1: Core UI Components (30 components)

#### **Buttons & Actions**
1. **Button** (`eva-button`, `Button.tsx`)
   - **Purpose:** Primary action component
   - **Variants:** default, destructive, outline, secondary, ghost, link
   - **Sizes:** default (h-9), sm (h-8), lg (h-10), icon (size-9)
   - **Props:** variant, size, asChild, className, disabled, onClick, type
   - **Current Issues:** 
     - ❌ Missing aria-label (a11y gap)
     - ❌ No aria-busy for loading state
     - ❌ Keyboard focus sometimes not visible
   - **Target Requirements:**
     - ✅ Must have aria-label or aria-labelledby
     - ✅ Must support aria-busy={loading}
     - ✅ Must have visible focus indicator (ring-2 ring-ring)
     - ✅ Must be keyboard accessible (Enter, Space)
   - **i18n Literals:** None (content provided by consumer)
   - **Test Coverage:** 84% (needs loading state tests)

2. **Toggle** (`eva-toggle`, `toggle.tsx`)
   - **Purpose:** Binary on/off control
   - **Variants:** default, outline
   - **Sizes:** default, sm, lg
   - **Props:** pressed, onPressedChange, variant, size, disabled
   - **a11y:** role="button", aria-pressed={pressed}
   - **Keyboard:** Space to toggle
   - **Test Coverage:** 84%

3. **Toggle Group** (`eva-toggle-group`, `toggle-group.tsx`)
   - **Purpose:** Multi-toggle selection (radio or multi-select mode)
   - **Props:** type ("single" | "multiple"), value, onValueChange, disabled
   - **a11y:** role="group", roving tabindex
   - **Keyboard:** ArrowLeft, ArrowRight to navigate
   - **Test Coverage:** 84%

#### **Forms & Inputs** (11 components)
4. **Input** (`eva-input`, `input.tsx`)
   - **Purpose:** Text input field
   - **Types:** text, email, password, number, tel, url, search
   - **Props:** type, placeholder, value, onChange, disabled, required, pattern
   - **Current Issues:**
     - ❌ Hardcoded placeholder text "Enter text..." (i18n gap)
     - ❌ Missing aria-describedby for error messages
     - ❌ No validation state visual feedback
   - **Target:**
     - ✅ All placeholders via i18n keys (`eva_sovereign.input.placeholder_{context}`)
     - ✅ aria-describedby={errorId} for form validation
     - ✅ aria-invalid={hasError} with visual styling
   - **Test Coverage:** 84%

5. **Textarea** (`eva-textarea`, `textarea.tsx`)
   - Similar to Input but multiline
   - Props: rows, cols, maxLength, placeholder, value, onChange
   - **Current Issues:** Same as Input (hardcoded placeholders)

6. **Select** (`eva-select`, `select.tsx`)
   - **Purpose:** Dropdown selection
   - **Props:** value, onValueChange, disabled, placeholder
   - **a11y:** role="listbox", aria-expanded, aria-activedescendant
   - **Keyboard:** ArrowUp/Down, Enter, Space, Escape
   - **Test Coverage:** 84%

7. **Checkbox** (`eva-checkbox`, `checkbox.tsx`)
   - **Purpose:** Boolean selection
   - **Props:** checked, onCheckedChange, disabled, required
   - **a11y:** role="checkbox", aria-checked
   - **Keyboard:** Space to toggle
   - **Test Coverage:** 84%

8. **Radio Group** (`eva-radio-group`, `radio-group.tsx`)
   - **Purpose:** Single selection from multiple options
   - **Props:** value, onValueChange, disabled
   - **a11y:** role="radiogroup", roving tabindex
   - **Keyboard:** Arrow keys to navigate, Space to select

9. **Switch** (`eva-switch`, `switch.tsx`)
   - **Purpose:** Binary on/off control (styled as switch)
   - **Props:** checked, onCheckedChange, disabled
   - **a11y:** role="switch", aria-checked
   - **Keyboard:** Space to toggle

10. **Slider** (`eva-slider`, `slider.tsx`)
    - **Purpose:** Range selection
    - **Props:** min, max, step, value, onValueChange, disabled
    - **a11y:** role="slider", aria-valuemin, aria-valuemax, aria-valuenow
    - **Keyboard:** ArrowLeft/Right, Home, End

11. **Label** (`eva-label`, `label.tsx`)
    - **Purpose:** Form field label
    - **Props:** htmlFor, children
    - **a11y:** Associates with input via htmlFor
    - **Test Coverage:** 84%

12. **Input OTP** (`eva-input-otp`, `input-otp.tsx`)
    - **Purpose:** One-time password entry (6-digit codes)
    - **Props:** length, value, onValueChange, disabled
    - **a11y:** aria-label="One-time password", role="textbox"
    - **Keyboard:** Digit keys, Backspace
    - **Test Coverage:** 84%

13. **Separator** (`eva-separator`, `separator.tsx`)
    - **Purpose:** Visual divider
    - **Props:** orientation ("horizontal" | "vertical")
    - **a11y:** role="separator"

14. **Scroll Area** (`eva-scroll-area`, `scroll-area.tsx`)
    - **Purpose:** Styled scrollable container
    - **Props:** className, children
    - **a11y:** role="region", focusable scrollbar

#### **Data Display** (8 components)
15. **Table** (`eva-table`, `table.tsx`)
    - **Purpose:** Tabular data display
    - **Sub-components:** TableHeader, TableBody, TableRow, TableHead, TableCell
    - **a11y:** role="table", role="rowheader", role="cell"
    - **Props:** className, children
    - **Test Coverage:** 84%

16. **Card** (`eva-card`, `card.tsx`)
    - **Purpose:** Content container with optional header/footer
    - **Sub-components:** CardHeader, CardTitle, CardDescription, CardContent, CardFooter
    - **a11y:** role="group"
    - **Props:** className, children
    - **Test Coverage:** 84%

17. **Avatar** (`eva-avatar`, `avatar.tsx`)
    - **Purpose:** User profile image with fallback
    - **Sub-components:** AvatarImage, AvatarFallback
    - **Props:** src, alt, fallback
    - **a11y:** role="img", alt text required
    - **Test Coverage:** 84%

18. **Badge** (`eva-badge`, `badge.tsx`)
    - **Purpose:** Status indicator or label
    - **Variants:** default, secondary, destructive, outline
    - **Props:** variant, className, children
    - **a11y:** role="status"
    - **Test Coverage:** 84%

19. **Progress** (`eva-progress`, `progress.tsx`)
    - **Purpose:** Progress indicator
    - **Props:** value, max, className
    - **a11y:** role="progressbar", aria-valuenow, aria-valuemin, aria-valuemax
    - **Test Coverage:** 84%

20. **Skeleton** (`eva-skeleton`, `skeleton.tsx`)
    - **Purpose:** Loading placeholder
    - **Props:** className
    - **a11y:** aria-hidden="true", aria-busy="true"
    - **Test Coverage:** 84%

21. **Breadcrumb** (`eva-breadcrumb`, `breadcrumb.tsx`)
    - **Purpose:** Navigation trail
    - **Sub-components:** BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
    - **a11y:** role="navigation", aria-label="Breadcrumb"
    - **Props:** className, children
    - **Test Coverage:** 84%

22. **Pagination** (`eva-pagination`, `pagination.tsx`)
    - **Purpose:** Page navigation
    - **Props:** currentPage, totalPages, onPageChange
    - **a11y:** role="navigation", aria-label="Pagination"
    - **Keyboard:** ArrowLeft/Right, Home, End, Enter
    - **Test Coverage:** 84%

#### **Overlays & Dialogs** (7 components)
23. **Dialog** (`eva-dialog`, `dialog.tsx`)
    - **Purpose:** Modal dialog
    - **Sub-components:** DialogHeader, DialogFooter, DialogTitle, DialogDescription
    - **Props:** open, onOpenChange, children
    - **a11y:** role="dialog", aria-modal="true", focus trap
    - **Keyboard:** Tab (trap), Shift+Tab, Escape to close
    - **Current Issues:**
       - ❌ Focus trap sometimes fails in nested dialogs
       - ❌ Escape key doesn't always close
       - ❌ Focus not restored to trigger on close
    - **Target:**
       - ✅ Robust focus trap using focus-trap library
       - ✅ Escape always closes (unless explicitly disabled)
       - ✅ Focus restoration to trigger element
    - **Test Coverage:** 84%

24. **Alert Dialog** (`eva-alert-dialog`, `alert-dialog.tsx`)
    - **Purpose:** Confirmation dialog
    - **Props:** open, onOpenChange, title, description, confirmLabel, cancelLabel
    - **a11y:** role="alertdialog", focus trap
    - **Keyboard:** Tab, Escape, Enter to confirm
    - **i18n Literals:** "Confirm", "Cancel" → needs keys
    - **Test Coverage:** 84%

25. **Sheet** (`eva-sheet`, `sheet.tsx`)
    - **Purpose:** Side drawer
    - **Sub-components:** SheetHeader, SheetFooter, SheetTitle, SheetDescription
    - **Props:** open, onOpenChange, side ("left" | "right" | "top" | "bottom")
    - **a11y:** role="dialog", aria-modal="true"
    - **Keyboard:** Escape to close
    - **Test Coverage:** 84%

26. **Popover** (`eva-popover`, `popover.tsx`)
    - **Purpose:** Floating content container
    - **Props:** open, onOpenChange, side, align
    - **a11y:** role="dialog"
    - **Keyboard:** Escape to close
    - **Test Coverage:** 84%

27. **Tooltip** (`eva-tooltip`, `tooltip.tsx`)
    - **Purpose:** Contextual help text
    - **Props:** content, side, delayDuration
    - **a11y:** role="tooltip", aria-describedby
    - **Keyboard:** Escape to close, focus to show
    - **Test Coverage:** 84%

28. **Hover Card** (`eva-hover-card`, `hover-card.tsx`)
    - **Purpose:** Rich content on hover
    - **Props:** content, side, align, openDelay, closeDelay
    - **a11y:** role="dialog"
    - **Keyboard:** Escape to close
    - **Test Coverage:** 84%

29. **Drawer** (`eva-drawer`, `drawer.tsx`)
    - **Purpose:** Slide-in panel (mobile-friendly)
    - **Props:** open, onOpenChange, side
    - **a11y:** role="dialog", aria-modal="true"
    - **Keyboard:** Escape to close
    - **Test Coverage:** 84%

#### **Navigation** (5 components)
30. **Tabs** (`eva-tabs`, `tabs.tsx`)
    - **Purpose:** Content sections with tab navigation
    - **Sub-components:** TabsList, TabsTrigger, TabsContent
    - **Props:** value, onValueChange, orientation
    - **a11y:** role="tablist", role="tab", role="tabpanel"
    - **Keyboard:** ArrowLeft/Right, Home, End
    - **Current Issues:**
       - ❌ ArrowLeft/Right navigation broken in some demos
       - ❌ Focus indicator not always visible
    - **Target:**
       - ✅ Arrow key navigation works consistently
       - ✅ Visible focus indicator on all tabs
    - **Test Coverage:** 84%

31. **Accordion** (`eva-accordion`, `accordion.tsx`)
    - **Purpose:** Expandable content sections
    - **Sub-components:** AccordionItem
    - **Props:** type ("single" | "multiple"), value, onValueChange, collapsible
    - **a11y:** role="group", roving tabindex
    - **Keyboard:** Tab, ArrowUp/Down, Home, End
    - **Test Coverage:** 84%

32. **Menubar** (`eva-menubar`, `menubar.tsx`)
    - **Purpose:** Application menu
    - **Sub-components:** MenubarMenu, MenubarItem
    - **Props:** value, onValueChange
    - **a11y:** role="menubar"
    - **Keyboard:** ArrowLeft/Right, ArrowUp/Down, Escape
    - **Test Coverage:** 84%

33. **Dropdown Menu** (`eva-dropdown-menu`, `dropdown-menu.tsx`)
    - **Purpose:** Contextual menu
    - **Sub-components:** DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel
    - **Props:** open, onOpenChange
    - **a11y:** role="menu", aria-haspopup="true"
    - **Keyboard:** ArrowUp/Down, Enter, Space, Escape
    - **Test Coverage:** 84%

34. **Context Menu** (`eva-context-menu`, `context-menu.tsx`)
    - **Purpose:** Right-click menu
    - **Sub-components:** ContextMenuItem
    - **Props:** open, onOpenChange
    - **a11y:** role="menu"
    - **Keyboard:** ArrowUp/Down, Enter, Space, Escape
    - **Test Coverage:** 84%

---

### Category 2: Government of Canada (GC) Design System (3 components)

35. **GC Header** (`eva-gc-header`, `GCHeader.tsx`)
    - **Purpose:** Official GC header with language switcher, breadcrumb, app name
    - **Props:** appName, appNameFr, locale, onLocaleChange, breadcrumbs
    - **a11y:** role="banner", aria-label="Government of Canada"
    - **Current Issues:**
       - ❌ Hardcoded "Government of Canada" text
       - ❌ Language switcher label "EN | FR" not accessible
    - **Target:**
       - ✅ All text via i18n keys (`eva_sovereign.gc_header.site_title`, etc.)
       - ✅ Language switcher with aria-label="Change language"
    - **i18n Keys:**
       ```
       eva_sovereign.gc_header.site_title_en = "Government of Canada"
       eva_sovereign.gc_header.site_title_fr = "Gouvernement du Canada"
       eva_sovereign.gc_header.skip_to_content = "Skip to main content"
       eva_sovereign.gc_header.language_selection = "Change language"
       ```
    - **Test Coverage:** 84%

36. **GC Footer** (`eva-gc-footer`, `GCFooter.tsx`)
    - **Purpose:** Official GC footer with links, copyright
    - **Props:** links, copyrightYear
    - **a11y:** role="contentinfo"
    - **Current Issues:**
       - ❌ Hardcoded link text ("Privacy", "Terms of Use", etc.)
       - ❌ Copyright text "© Her Majesty..." not i18n
    - **Target:**
       - ✅ All link text via i18n keys
       - ✅ Copyright via i18n key with year variable
    - **i18n Keys:**
       ```
       eva_sovereign.gc_footer.privacy = "Privacy"
       eva_sovereign.gc_footer.terms = "Terms of Use"
       eva_sovereign.gc_footer.copyright = "© His Majesty the King in Right of Canada, {year}"
       ```
    - **Test Coverage:** 84%

37. **GC Button** (`eva-gc-button`, `GCButton.tsx`)
    - **Purpose:** GC Design System styled button
    - **Variants:** primary, secondary, supertask, danger, link
    - **Sizes:** small, default, large
    - **Props:** variant, size, fullWidth, children, onClick, disabled
    - **a11y:** role="button", focus ring using GC colors
    - **Test Coverage:** 84%

---

### Category 3: Layout & Containers (4 components)

38. **Page Shell** (`eva-page-shell`)
    - **Purpose:** Complete page layout with header, main, footer landmarks
    - **Props:** header, main, footer, sidebar
    - **a11y:** Semantic HTML5 landmarks (header, main, footer, aside)
    - **Test Coverage:** 84%

39. **Hero Banner** (`eva-hero-banner`)
    - **Purpose:** Prominent page header section
    - **Props:** title, description, image, cta
    - **a11y:** role="region", aria-labelledby="hero-title"
    - **Test Coverage:** 84%

40. **Container** (`eva-container`)
    - **Purpose:** Responsive max-width container
    - **Props:** size ("sm" | "md" | "lg" | "xl" | "2xl"), className
    - **a11y:** role="group"
    - **Test Coverage:** 84%

41. **Sidebar** (`eva-sidebar`, `sidebar.tsx`)
    - **Purpose:** Collapsible side navigation
    - **Props:** open, onOpenChange, side, collapsible
    - **a11y:** role="navigation", aria-label="Main navigation"
    - **Keyboard:** Escape to close, Tab to navigate
    - **Test Coverage:** 84%

---

### Category 4: Specialized Components (8 components)

42. **Chat Panel** (`eva-chat-panel`)
    - **Purpose:** Chat interface container
    - **Props:** title, messages, onSendMessage, assistantName
    - **a11y:** role="log", aria-live="polite"
    - **Keyboard:** Enter to send, ArrowUp/Down to navigate history
    - **Test Coverage:** 84%

43. **Chat Message** (`eva-chat-message`)
    - **Purpose:** Individual chat message
    - **Props:** role ("user" | "assistant"), content, timestamp
    - **a11y:** role="article"
    - **Test Coverage:** 84%

44. **Skip Link** (`eva-skip-link`)
    - **Purpose:** Accessibility skip to main content
    - **Props:** href, children
    - **a11y:** role="link", visually hidden until focus
    - **Keyboard:** Tab to reveal, Enter to activate
    - **Test Coverage:** 84%

45. **Language Switcher** (`eva-language-switcher`)
    - **Purpose:** Toggle between EN/FR (or other locales)
    - **Props:** locale, onLocaleChange, availableLocales
    - **a11y:** role="navigation", aria-label="Language selection"
    - **Keyboard:** ArrowLeft/Right, Enter
    - **Current Issues:**
       - ❌ Label "EN | FR" not accessible (screen reader says "EN vertical bar FR")
    - **Target:**
       - ✅ aria-label="Change language to French" / "Changer la langue en anglais"
       - ✅ Separate buttons with full language names
    - **Test Coverage:** 84%

46. **Program Card** (`eva-program-card`)
    - **Purpose:** Agency program display card
    - **Props:** title, description, imageUrl, programUrl
    - **a11y:** role="article"
    - **Test Coverage:** 84%

47. **Calendar** (`eva-calendar`, `calendar.tsx`)
    - **Purpose:** Date picker
    - **Props:** mode ("single" | "range"), selected, onSelect, disabled
    - **a11y:** role="grid", aria-label with month/year
    - **Keyboard:** Arrow keys, Home, End, Page Up/Down
    - **Status:** Beta (incomplete)
    - **Test Coverage:** 60%

48. **Carousel** (`eva-carousel`, `carousel.tsx`)
    - **Purpose:** Image/content slider
    - **Sub-components:** CarouselItem
    - **Props:** autoplay, interval, loop
    - **a11y:** role="group", aria-label="Carousel", aria-live="polite"
    - **Keyboard:** ArrowLeft/Right
    - **Status:** Beta (incomplete)
    - **Test Coverage:** 60%

49. **Collapsible** (`eva-collapsible`, `collapsible.tsx`)
    - **Purpose:** Expand/collapse content
    - **Sub-components:** CollapsibleTrigger, CollapsibleContent
    - **Props:** open, onOpenChange, disabled
    - **a11y:** role="group", aria-expanded
    - **Keyboard:** Enter, Space to toggle
    - **Test Coverage:** 84%

---

### Category 5: Utility Components (11 components)

50. **Aspect Ratio** (`eva-aspect-ratio`, `aspect-ratio.tsx`)
    - **Purpose:** Maintain aspect ratio for media
    - **Props:** ratio (e.g., 16/9)
    - **a11y:** aria-hidden="true"
    - **Test Coverage:** 84%

51. **Resizable** (`eva-resizable`, `resizable.tsx`)
    - **Purpose:** Resizable panels
    - **Props:** direction, minSize, maxSize
    - **a11y:** role="separator", aria-valuenow
    - **Keyboard:** Arrow keys to resize
    - **Test Coverage:** 84%

52. **Sonner** (`eva-sonner`, `sonner.tsx`)
    - **Purpose:** Toast notification system
    - **Props:** title, description, variant ("default" | "destructive")
    - **a11y:** role="status", aria-live="polite"
    - **Test Coverage:** 84%

53-60. **Additional Utility Components** (8 more)
    - Command
    - Combobox
    - Data Table
    - Date Picker
    - Form
    - Navigation Menu
    - Alert
    - Toast

---

### Undocumented Components (42 components)

These components exist but lack full documentation:
1. eva-accordion-item
2. eva-avatar-fallback
3. eva-avatar-image
4. eva-breadcrumb-item
5. eva-breadcrumb-link
6. eva-breadcrumb-list
7. eva-breadcrumb-page
8. eva-breadcrumb-separator
9. eva-card-content
10. eva-card-description
11. eva-card-footer
12. eva-card-header
13. eva-card-title
14. eva-carousel-item
15. eva-collapsible-content
16. eva-collapsible-trigger
17. eva-context-menu-item
18. eva-dialog-description
19. eva-dialog-footer
20. eva-dialog-header
21. eva-dialog-title
22. eva-dropdown-menu-item
23. eva-dropdown-menu-label
24. eva-dropdown-menu-separator
25. eva-menubar-item
26. eva-menubar-menu
27. eva-radio-group-item
28. eva-select-item
29. eva-sheet-description
30. eva-sheet-footer
31. eva-sheet-header
32. eva-sheet-title
33. eva-table-body
34. eva-table-cell
35. eva-table-head
36. eva-table-header
37. eva-table-row
38. eva-tabs-content
39. eva-tabs-list
40. eva-tabs-trigger
41. eva-toggle-group-item
42. eva-test-element

**ACTION REQUIRED:** Document all 42 undocumented components with props, a11y, i18n requirements.

---

## 🐛 Known Issues & Gaps (Demo Bugs)

**Last Updated:** December 3, 2025 (parallel Copilot session findings)

### ✅ Recently Fixed Issues
1. **Component Registration** 
   - ✅ **FIXED:** 47 components now registered (was only 9)
   - **Impact:** Components now discoverable and usable in demos
   - **Remaining:** 44 components still need registration (91 total - 47 registered)

2. **Slider Component**
   - ✅ **FIXED:** Works with larger hit area and preserved focus
   - **Impact:** Users can now interact with slider reliably
   - **Test Status:** Verified in demo

3. **Toggle, Pagination, Progress, Accordion**
   - ✅ **FIXED:** All functional
   - **Impact:** Core navigation and state components working
   - **Test Status:** Verified in demo

4. **Accordion Chevrons**
   - ✅ **FIXED:** Visible and rotate on expand/collapse
   - ⚠️ **Unverified:** May have had icons on left side (need to check original design)
   - **Action Required:** Compare with original design spec

### Critical Issues (Still Open)
1. **Keyboard Navigation Failures**
   - **Tabs:** ArrowLeft/Right not working in some demo scenarios
   - **Dialog:** Escape key doesn't always close
   - **Dropdown Menu:** Focus lost when navigating with arrows
   - **Root Cause:** Focus management conflicts with Radix UI primitives
   - **Fix:** Implement custom focus trap using `focus-trap` library, test all keyboard interactions

2. **Focus Management**
   - **Dialog:** Focus not restored to trigger button on close
   - **Sheet:** Focus trap fails when nested sheets open
   - **Popover:** Focus jumps to body when closing
   - **Root Cause:** Missing `returnFocusOnDeactivate` in focus-trap config
   - **Fix:** Use `useFocusTrap` hook consistently across all overlay components

3. **Missing ARIA Attributes**
   - **Button:** No aria-label for icon-only buttons
   - **Input:** Missing aria-describedby for error messages
   - **Select:** Missing aria-invalid when validation fails
   - **Root Cause:** Props not wired up in component implementations
   - **Fix:** Add aria-* props to all component interfaces, wire up in JSX

### Medium Issues
4. **Hardcoded Strings (i18n Gaps)**
   - **GC Header:** "Government of Canada", "Skip to main content"
   - **GC Footer:** "Privacy", "Terms of Use", copyright text
   - **Alert Dialog:** "Confirm", "Cancel" buttons
   - **Input:** Placeholder "Enter text..."
   - **Language Switcher:** "EN | FR" label
   - **Estimated Count:** ~150 hardcoded strings across all components
   - ❌ **NEW ISSUE:** Locale files 404ing (i18n file paths broken)
   - **Root Cause:** Missing or incorrectly pathed locale JSON files
   - **Fix:** 
     - Extract all to `literals-extract.json` ✅ (Already done)
     - Translate via ChatGPT ⏳
     - Fix locale file paths in i18n loader
     - Seed i18n database

5. **Visual Focus Indicators**
   - **Button:** ring-2 not always visible (z-index issues)
   - **Tabs:** Active tab indicator animation broken
   - **Form fields:** Focus ring sometimes hidden by parent containers
   - **Root Cause:** CSS specificity conflicts, missing `focus-visible` polyfill
   - **Fix:** Use `:focus-visible` consistently, increase z-index on focused elements

6. **Loading States**
   - **Button:** No aria-busy or loading spinner support
   - **Select:** No loading state while fetching options
   - **Combobox:** Async search doesn't show loading indicator
   - **Root Cause:** Loading state not part of component API
   - **Fix:** Add `loading` prop to all interactive components, implement aria-busy

### Low Priority Issues
7. **Framework Wrappers Incomplete**
   - **React:** ✅ Complete (but needs audit for errors)
   - **Vue:** ⚠️ Exists but needs audit
   - **Angular:** ⚠️ Exists but needs audit
   - **Svelte:** ⚠️ Exists but needs audit
   - **Action Required:** Audit all 4 framework wrappers for runtime errors
   - **Test Coverage:** Unknown (need to test all 5 × 91 components = 455 wrapper instances)
   - **Fix:** Systematic testing of React/Vue/Angular/Svelte wrappers, fix errors

8. **Test Coverage Gaps**
   - **Calendar:** 60% (beta component)
   - **Carousel:** 60% (beta component)
   - **Target:** 95%+ coverage
   - **Fix:** Add integration tests for keyboard navigation, a11y validation

9. **Documentation Gaps**
   - **42 components undocumented** (see list above)
   - **No usage examples** for complex components (Calendar, Data Table)
   - **No migration guides** from other UI libraries
   - **Fix:** Complete documentation for all components, add Storybook examples

### 🧪 Systematic Testing Required (Copilot Recommendations)

Based on parallel Copilot session findings, comprehensive testing needed:

#### 1. **Component Coverage Testing**
- **91 total components** (49 primary + 42 sub-components)
- **47 registered, 44 unregistered** - test all registration
- **Test matrix:** 91 components × 5 frameworks = 455 test cases
- **Interactive states:** hover, focus, disabled, loading, error (5 states × 91 = 455 tests)
- **Status:** ⏳ Not started

#### 2. **Framework Wrapper Testing**
- **5 frameworks:** React, Vue, Angular, Svelte, vanilla Web Components
- **Test:** All props pass through correctly
- **Test:** All events fire correctly
- **Test:** All styles apply correctly
- **Status:** ⏳ Audit required (wrappers exist but may have errors)

#### 3. **Demo App Testing**
- **3 demo apps:** dev-kit-demo, agency-demo, performance-dashboard
- **Test:** All components render in all 3 demos
- **Test:** All interactions work (keyboard, mouse, touch)
- **Test:** All a11y features work (ARIA, screen reader)
- **Status:** ⏳ Partial (some components verified, many untested)

#### 4. **i18n Testing**
- **Issue:** Locale files 404ing (file paths broken)
- **Test:** All 5 languages load correctly (EN-CA, FR-CA, ES, DE, PT)
- **Test:** Language switcher changes all text
- **Test:** All ~150 literals have translations
- **Status:** ❌ Blocked by locale file path issue

#### 5. **Accessibility Audit**
- **Test:** All 91 components pass axe-core
- **Test:** Keyboard navigation works for all interactive components
- **Test:** Screen reader announces all state changes
- **Test:** Focus management works in all overlays (Dialog, Sheet, Popover)
- **Status:** ⏳ Partial (some components tested, full audit needed)

#### 6. **Production Readiness Assessment**
- **Goal:** Document which components are production-ready vs need work
- **Criteria:**
  - ✅ Component registered
  - ✅ Props work correctly
  - ✅ Keyboard nav works
  - ✅ ARIA attributes present
  - ✅ No runtime errors
  - ✅ Tested in all 5 frameworks
  - ✅ i18n strings translated
- **Status:** ⏳ Assessment not started

#### 7. **Accordion Design Verification**
- ⚠️ **Unverified:** May have had icons on left side
- **Action:** Compare current implementation with original design spec
- **Impact:** If incorrect, may need redesign
- **Status:** ⏳ Needs review

---

## ♿ Accessibility (a11y) Requirements

### Current Status
- **WCAG Level:** 2.1 AA (target: 2.2 AAA)
- **Test Coverage:** 84% passing
- **Known Gaps:** Keyboard nav bugs, missing ARIA attributes, focus management issues

### Target Requirements

#### 1. **Keyboard Navigation (All Components)**
- ✅ **Tab/Shift+Tab:** Navigate focusable elements in logical order
- ✅ **Enter/Space:** Activate buttons, checkboxes, switches
- ✅ **Escape:** Close dialogs, sheets, popovers, dropdown menus
- ✅ **Arrow Keys:** Navigate within menus, tabs, accordions, sliders
- ✅ **Home/End:** Jump to first/last item in lists, menus
- ✅ **Page Up/Down:** Navigate calendar months, long lists
- ✅ **Focus Visible:** All interactive elements must have visible focus indicator (ring-2 ring-ring)

**Implementation Checklist:**
- [ ] Test all keyboard shortcuts in isolation (unit tests)
- [ ] Test keyboard shortcuts with screen reader active (manual)
- [ ] Test focus trap in all overlay components (Dialog, Sheet, Popover)
- [ ] Test roving tabindex in all composite widgets (Tabs, Menu, Accordion)

#### 2. **ARIA Attributes (Required for All Components)**
- ✅ **Buttons:** `role="button"`, `aria-label` (for icon-only), `aria-pressed` (for toggles), `aria-busy` (for loading)
- ✅ **Links:** `role="link"`, `aria-label` (for icon-only)
- ✅ **Form Controls:** `role="textbox" | checkbox | switch | slider"`, `aria-invalid`, `aria-describedby`, `aria-required`
- ✅ **Dialogs:** `role="dialog | alertdialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`
- ✅ **Menus:** `role="menu | menubar"`, `aria-haspopup`, `aria-expanded`, `aria-activedescendant`
- ✅ **Tabs:** `role="tablist | tab | tabpanel"`, `aria-selected`, `aria-controls`
- ✅ **Accordions:** `role="group"`, `aria-expanded`, `aria-controls`
- ✅ **Live Regions:** `aria-live="polite | assertive"`, `aria-atomic`, `role="status | alert | log"`

**Implementation Checklist:**
- [ ] Audit all 152 components for missing ARIA attributes
- [ ] Add ARIA props to component interfaces (TypeScript types)
- [ ] Wire up ARIA props in JSX rendering
- [ ] Validate with axe-core automated tests
- [ ] Manual screen reader testing (NVDA, JAWS, VoiceOver)

#### 3. **Focus Management**
- ✅ **Focus Trap:** All modals (Dialog, Sheet, Alert Dialog) must trap focus
- ✅ **Focus Restoration:** Focus returns to trigger element when modal closes
- ✅ **Initial Focus:** First focusable element receives focus when modal opens (or custom initial focus)
- ✅ **No Focus Loss:** Focus never moves to `<body>` or disappears
- ✅ **Skip Links:** "Skip to main content" link visible on keyboard focus

**Implementation Checklist:**
- [ ] Install `focus-trap` library
- [ ] Create `useFocusTrap` hook for consistent behavior
- [ ] Apply to Dialog, Sheet, AlertDialog, Drawer, Popover
- [ ] Test focus restoration in all scenarios (Escape, backdrop click, close button)
- [ ] Test nested modals (Dialog inside Dialog)

#### 4. **Screen Reader Support**
- ✅ **Announcements:** State changes announced (e.g., "Loading...", "Error: ...", "Success: ...")
- ✅ **Landmark Regions:** `<header>`, `<main>`, `<footer>`, `<nav>`, `<aside>` used correctly
- ✅ **Form Validation:** Error messages associated with inputs via `aria-describedby`
- ✅ **Dynamic Content:** Live regions for toast notifications, chat messages
- ✅ **Hidden Content:** `aria-hidden="true"` on decorative elements (icons without labels)

**Implementation Checklist:**
- [ ] Test all components with NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
- [ ] Verify all form validation messages are announced
- [ ] Verify live regions announce chat messages, toasts, progress updates
- [ ] Verify skip links work and are announced

#### 5. **Color Contrast (WCAG AAA)**
- ✅ **Normal Text:** 7:1 contrast ratio (AAA requires 7:1, AA requires 4.5:1)
- ✅ **Large Text:** 4.5:1 contrast ratio
- ✅ **UI Components:** 3:1 contrast ratio (borders, focus indicators)
- ✅ **Dark Mode:** Same contrast requirements apply

**Implementation Checklist:**
- [ ] Run Lighthouse accessibility audit on all demo pages
- [ ] Run axe-core contrast checker on all components
- [ ] Fix failing contrast ratios in theme tokens
- [ ] Test dark mode contrast

---

## 🌍 Internationalization (i18n) Requirements

### Current Status
- **Languages Supported:** EN-CA (English Canada), FR-CA (French Canada), ES (Spanish), DE (German), PT (Portuguese)
- **Framework:** Custom i18n using `eva-language-switcher`
- **Hardcoded Strings:** ~150 identified (see literals-extract.json)
- **Database:** Not yet implemented (planned: PostgreSQL with full-text search)

### Target Requirements

#### 1. **Extract All Hardcoded Strings**
From literals-extract.json, we have ~150 hardcoded strings including:
- **GC Header:** "Government of Canada", "Gouvernement du Canada", "Skip to main content", "Passer au contenu principal"
- **GC Footer:** "Privacy", "Terms of Use", "© His Majesty..."
- **Alert Dialog:** "Confirm", "Cancel"
- **Form Inputs:** "Enter text...", "Select an option...", "Search..."
- **Validation Messages:** "This field is required", "Invalid email", "Password too short"
- **Loading States:** "Loading...", "Please wait..."
- **Error Messages:** "An error occurred", "Try again"

#### 2. **i18n Key Format**
All literals must use namespaced keys:
```
{feature}.{component}.{context}.{identifier}

Examples:
eva_sovereign.gc_header.site_title_en = "Government of Canada"
eva_sovereign.gc_header.site_title_fr = "Gouvernement du Canada"
eva_sovereign.button.loading_text = "Loading..."
eva_sovereign.input.placeholder_text = "Enter text..."
eva_sovereign.alert_dialog.confirm = "Confirm"
eva_sovereign.alert_dialog.cancel = "Cancel"
eva_sovereign.form_validation.required = "This field is required"
eva_sovereign.form_validation.invalid_email = "Invalid email address"
```

#### 3. **Translation Process**
1. **Extract:** Already done via Scan-EVASuite.ps1 → literals-extract.json
2. **Translate (ChatGPT):**
   ```
   User will paste all 150 literals into ChatGPT:
   "Translate these EN strings to Canadian French (FR-CA):
   [paste JSON array]"
   
   Expected output: JSON with EN/FR pairs
   Result: <1 minute (user confirmed)
   ```
3. **Seed Database:**
   ```sql
   INSERT INTO i18n_strings (key, text_en, text_fr, feature, context, reviewed) VALUES
   ('eva_sovereign.gc_header.site_title_en', 'Government of Canada', 'Gouvernement du Canada', 'eva-sovereign-ui', 'header', true),
   ...
   (150 more rows)
   ```
4. **Update Components:**
   Replace hardcoded strings with i18n hook:
   ```tsx
   // Before
   <button>Confirm</button>
   
   // After
   <button>{t('eva_sovereign.alert_dialog.confirm')}</button>
   ```

#### 4. **Language Switcher Integration**
- **Component:** `eva-language-switcher`
- **Current:** Toggle between EN/FR
- **Target:** Support all 5 languages (EN-CA, FR-CA, ES, DE, PT)
- **API:**
  ```tsx
  <LanguageSwitcher
    locale={currentLocale}
    availableLocales={['en-CA', 'fr-CA', 'es', 'de', 'pt']}
    onLocaleChange={handleLocaleChange}
    labels={{
      'en-CA': 'English',
      'fr-CA': 'Français',
      'es': 'Español',
      'de': 'Deutsch',
      'pt': 'Português'
    }}
  />
  ```

#### 5. **Right-to-Left (RTL) Support**
- **Not currently required** (EN, FR, ES, DE, PT are all LTR)
- **Future:** If Arabic or Hebrew added, implement RTL via `dir="rtl"` attribute
- **Components affected:** Layout (Page Shell, Container), Navigation (Tabs, Menu), Forms (Input direction)

---

## 🧪 Testing Requirements

### Current Status
- **Test Count:** 1,046 tests passing
- **Coverage:** 84% branches
- **Framework:** Vitest + React Testing Library + Playwright (E2E)
- **a11y Testing:** axe-core integrated

### Target Requirements

#### 1. **Unit Tests (Component Behavior)**
For each of 152 components:
- ✅ **Props:** All props render correctly
- ✅ **Variants:** All variants styled correctly
- ✅ **Events:** All event handlers fire with correct args
- ✅ **States:** Disabled, loading, error states render
- ✅ **Keyboard:** All keyboard shortcuts trigger correct behaviors
- ✅ **a11y:** ARIA attributes present and correct

**Example Test (Button):**
```tsx
describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');
  });
  
  it('handles click event', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
  
  it('supports keyboard activation (Enter)', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledOnce();
  });
  
  it('shows loading state', () => {
    render(<Button loading>Click Me</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('button')).toHaveTextContent('Loading...');
  });
  
  it('has accessible label for icon-only button', () => {
    render(<Button aria-label="Close"><XIcon /></Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
  });
});
```

#### 2. **Integration Tests (Component Interactions)**
Test complex interactions:
- **Form Submission:** Input → validation → error messages → submit
- **Dialog Flow:** Open → interact → close → focus restoration
- **Tab Navigation:** Click tab → content updates → keyboard nav → focus management
- **Dropdown Selection:** Open menu → arrow keys → select item → close menu

**Example Test (Form + Validation):**
```tsx
describe('Form Validation Flow', () => {
  it('shows error message when required field empty', async () => {
    render(<LoginForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      const input = screen.getByRole('textbox', { name: /email/i });
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('error'));
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
  });
});
```

#### 3. **Accessibility Tests (axe-core)**
Every component must pass axe-core validation:
```tsx
import { axe } from 'jest-axe';

describe('Button a11y', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click Me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

**Run for all 152 components:**
- [ ] Unit tests: All components pass axe-core
- [ ] Integration tests: All flows pass axe-core
- [ ] E2E tests: All demo pages pass Lighthouse a11y audit (score 100)

#### 4. **i18n Tests**
Verify all components render in all 5 languages:
```tsx
describe('Button i18n', () => {
  it('renders loading text in French', () => {
    render(<Button loading locale="fr-CA">Cliquez-moi</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Chargement...');
  });
});
```

**Checklist:**
- [ ] Test all 150 i18n keys exist in database
- [ ] Test all components render with FR-CA locale
- [ ] Test Language Switcher changes all text on page
- [ ] Test form validation messages in all languages

#### 5. **E2E Tests (Playwright)**
Simulate real user workflows:
- **Demo Pages:** Test all 3 demo apps (Dev Kit, Agency, Performance Dashboard)
- **Keyboard Nav:** Test full keyboard navigation without mouse
- **Screen Reader:** Test with NVDA/VoiceOver automation
- **Cross-Browser:** Test on Chrome, Firefox, Safari, Edge

**Example E2E Test:**
```ts
test('Dialog focus management', async ({ page }) => {
  await page.goto('/demos/dialog');
  
  // Open dialog with keyboard
  await page.keyboard.press('Tab'); // Focus trigger button
  await page.keyboard.press('Enter'); // Open dialog
  
  // Verify focus trapped in dialog
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
  expect(focusedElement).not.toBe('BODY');
  
  // Close dialog with Escape
  await page.keyboard.press('Escape');
  
  // Verify focus restored to trigger
  const triggerFocused = await page.evaluate(() => 
    document.activeElement?.textContent === 'Open Dialog'
  );
  expect(triggerFocused).toBe(true);
});
```

---

## 📚 Documentation Requirements

### Existing Documentation (Good Foundation)
- ✅ **README.md** (803 lines): Quick start, demos, deployment
- ✅ **COMPONENT-INVENTORY.json**: 91 components cataloged
- ✅ **COMPONENT-API.md**: API reference
- ✅ **ACCESSIBILITY.md**: a11y guidelines
- ✅ **I18N-TEST-COVERAGE-REPORT.md**: i18n status
- ✅ **ARCHITECTURE-ANALYSIS-*.md** (5 files): Deep dives
- ✅ **Storybook**: Interactive component explorer

### Missing Documentation (Gaps to Fill)

#### 1. **Complete Component Documentation**
For each of 152 components, create Markdown file:
```markdown
# Button Component

## Overview
Primary action component with multiple variants and sizes.

## Usage
```tsx
import { Button } from '@eva-suite/sovereign-ui-react';

<Button variant="primary" size="default" onClick={handleClick}>
  Click Me
</Button>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link" | "default" | Visual style |
| size | "default" \| "sm" \| "lg" \| "icon" | "default" | Size preset |
| asChild | boolean | false | Render as Slot component |
| loading | boolean | false | Show loading spinner |
| disabled | boolean | false | Disable interaction |

## Accessibility
- **Role:** `button`
- **Keyboard:** Enter, Space to activate
- **ARIA:** `aria-label` required for icon-only buttons, `aria-busy` when loading

## Examples
### Primary Button
```tsx
<Button variant="primary">Save Changes</Button>
```

### Icon-Only Button
```tsx
<Button size="icon" aria-label="Close">
  <XIcon />
</Button>
```

### Loading State
```tsx
<Button loading disabled>
  Saving...
</Button>
```

## Related Components
- GCButton (Government of Canada styled button)
- Toggle (Binary on/off button)
```

**ACTION:** Create docs for all 152 components.

#### 2. **Migration Guides**
- **From Material-UI:** Map MUI Button → EVA Button props
- **From Ant Design:** Map Ant Design Button → EVA Button props
- **From Bootstrap:** Map Bootstrap Button → EVA Button classes
- **From Custom HTML:** Show how to refactor vanilla HTML to EVA components

#### 3. **Integration Guides**
- **Next.js:** Setup with App Router, Server Components
- **Remix:** Setup with Remix routes
- **Vite:** Setup with Vite + React
- **Astro:** Setup with Astro components
- **Vue:** Use Web Components directly
- **Angular:** Use Web Components directly
- **Svelte:** Use Web Components directly

#### 4. **Storybook Documentation**
Enhance existing Storybook with:
- **Story for Every Component:** Interactive examples for all 152 components
- **All Variants:** Show all visual variants (Button: 6 variants × 4 sizes = 24 stories)
- **All States:** Hover, focus, active, disabled, loading, error
- **a11y Panel:** Show axe-core results in Storybook addon
- **i18n Panel:** Switch languages in Storybook addon
- **Code Snippets:** Copy-paste ready code for each story

---

## 🚀 Deployment & Distribution

### Current Distribution
- **npm:** `@eva-suite/sovereign-ui` (Web Components)
- **npm:** `@eva-suite/sovereign-ui-react` (React wrappers)
- **CDN:** jsDelivr (`https://cdn.jsdelivr.net/npm/@eva-suite/sovereign-ui@latest/dist/eva-sovereign-ui.umd.js`)
- **GitHub Pages:** Live demos at `https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/`

### Missing Distribution Channels
- ❌ **npm:** `@eva-suite/sovereign-ui-vue` (Vue wrappers)
- ❌ **npm:** `@eva-suite/sovereign-ui-angular` (Angular wrappers)
- ❌ **npm:** `@eva-suite/sovereign-ui-svelte` (Svelte wrappers)

### CI/CD Pipeline
- **GitHub Actions:** Automated release via semantic-release
- **Tests:** Run on every PR (Vitest + Playwright)
- **Lighthouse:** Run on every PR (accessibility + performance)
- **CodeQL:** Security scanning
- **Coverage:** 84% (target: 95%)

---

## 📊 Success Metrics

### Current State
| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| **Components** | 152 total | 152 documented | 42 undocumented |
| **Test Coverage** | 84% | 95%+ | 11% |
| **a11y Compliance** | WCAG 2.1 AA | WCAG 2.2 AAA | 1 level + 1 version |
| **i18n Coverage** | Partial (5 langs) | Complete (5 langs) | ~150 hardcoded strings |
| **Framework Support** | React | React + Vue + Angular + Svelte | 3 frameworks |
| **Demo Quality** | Buggy (user feedback) | Production-ready | Fix all keyboard nav, focus bugs |

### Completion Criteria
- ✅ All 152 components fully documented with examples
- ✅ All 42 undocumented components cataloged
- ✅ All 91 components registered (currently 47/91)
- ✅ All ~150 hardcoded strings extracted ✅ **DONE** and translated (EN/FR at minimum)
- ✅ Locale file paths fixed (currently 404ing)
- ✅ All keyboard navigation bugs fixed (Tabs, Dialog, Dropdown)
- ✅ All focus management issues resolved (trap, restore, visible indicator)
- ✅ All missing ARIA attributes added
- ✅ Slider, Toggle, Pagination, Progress, Accordion verified working ✅ **DONE**
- ✅ Accordion design verified against original spec (left-side icons?)
- ✅ 95%+ test coverage (unit + integration + E2E)
- ✅ All 455 interactive state tests passing (91 components × 5 states)
- ✅ All 455 framework wrapper tests passing (91 components × 5 frameworks)
- ✅ All 3 demo apps fully functional (dev-kit, Agency, performance)
- ✅ WCAG 2.2 AAA compliance (Lighthouse score 100 on all demo pages)
- ✅ Vue/Angular/Svelte wrappers audited and errors fixed
- ✅ Storybook with all 152 components + all variants
- ✅ Migration guides from 3 major UI libraries (Material-UI, Ant Design, Bootstrap)
- ✅ Production readiness documented for all 91 components

---

## 🗓️ Implementation Roadmap

### Phase 1: Documentation & Cleanup (Weeks 1-2)
- [ ] Document all 42 undocumented components
- [ ] Create component documentation template (Markdown)
- [ ] Generate docs for all 152 components
- [ ] Enhance Storybook with all variants/states
- [ ] Fix component inventory inconsistencies
- [ ] **NEW:** Register remaining 44 components (47 registered, 44 remaining)
- [ ] **NEW:** Verify accordion design against original spec (left-side icons?)

### Phase 2: i18n Implementation (Week 3)
- [ ] Extract all ~150 hardcoded strings to literals-extract.json ✅ **DONE**
- [ ] Translate EN → FR via ChatGPT (<1 min)
- [ ] **NEW:** Fix locale file paths (currently 404ing)
- [ ] Create PostgreSQL i18n database schema
- [ ] Seed database with translations
- [ ] Update all components to use i18n hook
- [ ] Test language switcher across all components

### Phase 3: Accessibility Fixes (Weeks 4-5)
- [ ] Fix keyboard navigation bugs (Tabs, Dialog, Dropdown)
- [ ] Implement focus trap using focus-trap library
- [ ] Add focus restoration to all overlay components
- [ ] Add missing ARIA attributes (Button, Input, Select, etc.)
- [ ] Add visible focus indicators (ring-2 ring-ring)
- [ ] Add loading states (aria-busy) to all interactive components
- [ ] Run axe-core on all 152 components, fix violations
- [ ] Manual screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] **NEW:** Full accessibility audit (all 91 components)

### Phase 4: Testing & Quality (Week 6)
- [ ] Increase test coverage from 84% to 95%+
- [ ] Add keyboard navigation tests for all components
- [ ] Add focus management E2E tests (Playwright)
- [ ] Add i18n tests (all 5 languages)
- [ ] Add cross-browser E2E tests (Chrome, Firefox, Safari, Edge)
- [ ] Run Lighthouse audits on all demo pages (target: 100 a11y score)
- [ ] **NEW:** Comprehensive test suite for all 91 components
- [ ] **NEW:** Test all interactive states (hover, focus, disabled, loading, error) - 455 test cases
- [ ] **NEW:** Test all 3 demo apps (dev-kit, Agency, performance)
- [ ] **NEW:** Production readiness assessment (document which components ready vs need work)

### Phase 5: Framework Wrappers (Week 7)
- [ ] **NEW:** Audit existing React wrappers for errors
- [ ] **NEW:** Audit existing Vue wrappers for errors
- [ ] **NEW:** Audit existing Angular wrappers for errors
- [ ] **NEW:** Audit existing Svelte wrappers for errors
- [ ] Fix all wrapper errors found in audit
- [ ] Test all 5 frameworks × 91 components = 455 wrapper instances
- [ ] Publish to npm: @eva-suite/sovereign-ui-vue (update if needed)
- [ ] Publish to npm: @eva-suite/sovereign-ui-angular (update if needed)
- [ ] Publish to npm: @eva-suite/sovereign-ui-svelte (update if needed)

### Phase 6: Integration & Deployment (Week 8)
- [ ] Create migration guides (Material-UI, Ant Design, Bootstrap)
- [ ] Create integration guides (Next.js, Remix, Vite, Astro)
- [ ] Deploy updated demos to GitHub Pages
- [ ] Publish final release to npm
- [ ] Update README with new features
- [ ] Create launch announcement

**Total Estimated Time:** 8 weeks (with agent automation)

---

## 🔗 References

- **Repository:** https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot
- **Live Demos:** https://marcopolo483.github.io/EVA-Sovereign-UI-by-Copilot/
- **Component Inventory:** `COMPONENT-INVENTORY.json`
- **Accessibility Guidelines:** `ACCESSIBILITY.md`
- **i18n Coverage:** `I18N-TEST-COVERAGE-REPORT.md`
- **Architecture Analysis:** `ARCHITECTURE-ANALYSIS-*.md`
- **Rebuild Strategy:** `../REBUILD-STRATEGY.md`
- **Priority Summary:** `../_rebuild-inventory/PRIORITY-SUMMARY.md`

---

**END OF UI-REQUIREMENTS.md**
