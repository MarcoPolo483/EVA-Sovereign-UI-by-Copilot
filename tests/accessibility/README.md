# Accessibility Testing Guide

## Overview

EVA Sovereign UI includes comprehensive accessibility testing to ensure WCAG 2.1 Level AA compliance across all components, templates, and patterns.

## Running Tests

### All Accessibility Tests
```bash
npm run test:a11y
```

### Component Tests Only
```bash
npm run test:a11y:components
```

### Template Tests Only
```bash
npm run test:a11y:templates
```

### Generate Full Report
```bash
npm run test:a11y:report
```

## Test Structure

### Automated Testing (axe-core)
- **Tool:** axe-core 4.8+ via jest-axe
- **Coverage:** All 33 elements (15 components + 12 templates + 6 patterns)
- **Rules:** 50+ WCAG 2.1 Level A & AA rules
- **Integration:** Vitest + @open-wc/testing

### Manual Testing Checklist

#### Keyboard Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Focus indicator visible (3px outline minimum)
- [ ] Logical tab order
- [ ] Escape closes modals/dropdowns
- [ ] Arrow keys navigate within components
- [ ] Home/End keys navigate to first/last item

#### Screen Reader Testing
- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] Test with VoiceOver (macOS)
- [ ] All interactive elements announced correctly
- [ ] State changes announced (expanded, selected, etc.)
- [ ] Error messages announced
- [ ] Form labels associated correctly

#### Color Contrast
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text contrast ratio ≥ 3:1 (large text 18pt+)
- [ ] Interactive element contrast ≥ 3:1
- [ ] Focus indicator contrast ≥ 3:1
- [ ] Use color contrast analyzer tool

#### Mobile/Touch
- [ ] Touch targets ≥ 44x44px
- [ ] Adequate spacing between targets
- [ ] Content reflows at 320px width
- [ ] No horizontal scrolling required
- [ ] Pinch-to-zoom enabled

#### Forms
- [ ] All inputs have associated labels
- [ ] Required fields indicated (visually + aria-required)
- [ ] Error messages associated (aria-describedby)
- [ ] Error messages clear and specific
- [ ] Helper text associated properly
- [ ] Invalid state indicated (aria-invalid)

## Common Issues and Fixes

### Missing ARIA Labels
```html
<!-- ❌ Bad -->
<button>
  <svg>...</svg>
</button>

<!-- ✅ Good -->
<button aria-label="Close dialog">
  <svg>...</svg>
</button>
```

### Insufficient Color Contrast
```css
/* ❌ Bad - 3.2:1 contrast */
color: #767676;
background: #ffffff;

/* ✅ Good - 4.5:1 contrast */
color: #666666;
background: #ffffff;
```

### Missing Form Labels
```html
<!-- ❌ Bad -->
<input type="text" placeholder="Name" />

<!-- ✅ Good -->
<label for="name">Name</label>
<input id="name" type="text" />
```

### Keyboard Trap
```javascript
// ❌ Bad - no Escape handler
modal.addEventListener('keydown', (e) => {
  // Trap focus but no way to escape
});

// ✅ Good - Escape closes modal
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
```

## WCAG 2.1 Success Criteria

### Level A (Must Have)
- 1.1.1 Non-text Content
- 1.3.1 Info and Relationships
- 2.1.1 Keyboard
- 2.4.1 Bypass Blocks
- 2.4.2 Page Titled
- 3.1.1 Language of Page
- 4.1.2 Name, Role, Value

### Level AA (Required)
- 1.4.3 Contrast (Minimum)
- 1.4.5 Images of Text
- 2.4.6 Headings and Labels
- 2.4.7 Focus Visible
- 3.2.3 Consistent Navigation
- 3.3.3 Error Suggestion

## Tools

### Automated Testing
- **axe-core:** Automated accessibility testing engine
- **jest-axe:** Axe integration for Vitest/Jest
- **@open-wc/testing:** Web Component testing utilities
- **Lighthouse:** Chrome DevTools audit

### Manual Testing
- **NVDA:** Free screen reader (Windows)
- **JAWS:** Professional screen reader (Windows)
- **VoiceOver:** Built-in screen reader (macOS/iOS)
- **Color Contrast Analyzer:** Colour Contrast Analyser by TPGi
- **Browser DevTools:** Chrome, Firefox accessibility inspectors

### Browser Extensions
- **axe DevTools:** Free Chrome/Firefox extension
- **WAVE:** WebAIM evaluation tool
- **Lighthouse:** Chrome audit tool
- **Accessibility Insights:** Microsoft extension

## Resources

### Official Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Government Standards
- [GC Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html)
- [Standard on Web Accessibility](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=23601)
- [Accessible Canada Act](https://laws-lois.justice.gc.ca/eng/acts/A-0.6/)

### Testing Guides
- [WebAIM](https://webaim.org/)
- [Deque University](https://dequeuniversity.com/)
- [A11Y Project](https://www.a11yproject.com/)

## Continuous Integration

### GitHub Actions
```yaml
name: Accessibility Tests
on: [push, pull_request]
jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run test:a11y
```

### Pre-commit Hook
```bash
# .husky/pre-commit
npm run test:a11y:components
```

## Reporting Issues

If you discover an accessibility issue:

1. **Check existing issues:** [GitHub Issues](https://github.com/EVA-Sovereign-UI/issues)
2. **Create new issue:** Use the "Accessibility Issue" template
3. **Include:**
   - Component/template name
   - WCAG criterion violated
   - Steps to reproduce
   - Screenshots/recordings
   - Assistive technology used
   - Suggested fix (if known)

## Accessibility Statement

EVA Sovereign UI is committed to meeting WCAG 2.1 Level AA standards. All components, templates, and patterns are tested for accessibility compliance before release.

**Last Audit:** December 1, 2024  
**Next Review:** June 1, 2025  
**Status:** COMPLIANT ✅

For questions or concerns, contact: accessibility@eva-sovereign-ui.gov
