# Accessibility Documentation

Comprehensive WCAG 2.2 Level AA compliance guide with keyboard navigation patterns, screen reader support, and testing procedures.

## Table of Contents

- [Accessibility Standards](#accessibility-standards)
- [Keyboard Navigation](#keyboard-navigation)
- [Screen Reader Support](#screen-reader-support)
- [ARIA Patterns](#aria-patterns)
- [Testing Procedures](#testing-procedures)
- [VPAT Report](#vpat-report)

---

## Accessibility Standards

### WCAG 2.2 Level AA Compliance

EVA Sovereign UI meets **WCAG 2.2 Level AA** requirements across all components.

#### Perceivable

**1.1 Text Alternatives**
- All images have `alt` text
- Icons have `aria-label` attributes
- Decorative elements have `aria-hidden="true"`

**1.3 Adaptable**
- Semantic HTML structure
- Proper heading hierarchy
- Landmark regions (header, nav, main, footer)
- Meaningful link text

**1.4 Distinguishable**
- Minimum contrast ratio 4.5:1 for text
- Minimum contrast ratio 3:1 for UI components
- Text resizable up to 200% without loss
- Focus indicators visible (3px outline)

#### Operable

**2.1 Keyboard Accessible**
- All interactive elements keyboard accessible
- No keyboard traps
- Skip links provided

**2.2 Enough Time**
- No time limits on forms
- Warning before session timeout
- Ability to extend timeout

**2.4 Navigable**
- Descriptive page titles
- Focus order follows logical sequence
- Link purpose clear from text
- Multiple navigation methods

#### Understandable

**3.1 Readable**
- Language declared (`lang="en"`)
- Complex terms explained
- Clear instructions

**3.2 Predictable**
- Consistent navigation
- Consistent identification
- No unexpected context changes

**3.3 Input Assistance**
- Error identification
- Labels and instructions
- Error prevention
- Suggestions for corrections

#### Robust

**4.1 Compatible**
- Valid HTML
- ARIA attributes correct
- Status messages announced

---

## Keyboard Navigation

### Global Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Move to next focusable element |
| `Shift + Tab` | Move to previous focusable element |
| `Enter` | Activate button/link |
| `Space` | Activate button/toggle |
| `Escape` | Close dialog/dropdown |
| `Arrow Keys` | Navigate within component |
| `Home` | Move to first item |
| `End` | Move to last item |

### Component-Specific Shortcuts

#### Buttons
```html
<eva-gc-button>
  Submit Application
</eva-gc-button>
```
- `Enter` or `Space` - Activate button
- `Tab` - Move to next element

#### Input Fields
```html
<eva-input type="text"></eva-input>
```
- `Tab` - Move to next field
- `Shift + Tab` - Move to previous field
- All standard text editing shortcuts

#### Checkbox/Switch
```html
<eva-checkbox>Accept terms</eva-checkbox>
```
- `Space` - Toggle checked state
- `Tab` - Move to next element

#### Radio Groups
```html
<eva-radio-group>
  <eva-radio-group-item value="yes">Yes</eva-radio-group-item>
  <eva-radio-group-item value="no">No</eva-radio-group-item>
</eva-radio-group>
```
- `Arrow Up/Down` - Navigate options (vertical)
- `Arrow Left/Right` - Navigate options (horizontal)
- `Tab` - Move to next group
- `Space` - Select focused option

#### Select Dropdown
```html
<eva-select>
  <eva-select-item value="1">Option 1</eva-select-item>
  <eva-select-item value="2">Option 2</eva-select-item>
</eva-select>
```
- `Space` / `Enter` - Open dropdown
- `Arrow Up/Down` - Navigate options
- `Enter` - Select option
- `Escape` - Close dropdown
- `Home` - First option
- `End` - Last option
- Type to search options

#### Tabs
```html
<eva-tabs>
  <eva-tabs-list>
    <eva-tabs-trigger value="tab1">Tab 1</eva-tabs-trigger>
    <eva-tabs-trigger value="tab2">Tab 2</eva-tabs-trigger>
  </eva-tabs-list>
</eva-tabs>
```
- `Tab` - Focus tab list
- `Arrow Left/Right` - Navigate tabs (horizontal)
- `Arrow Up/Down` - Navigate tabs (vertical)
- `Home` - First tab
- `End` - Last tab
- `Enter` / `Space` - Activate tab

#### Accordion
```html
<eva-accordion>
  <eva-accordion-item>
    <button>Section 1</button>
    <div>Content</div>
  </eva-accordion-item>
</eva-accordion>
```
- `Tab` - Focus accordion trigger
- `Enter` / `Space` - Toggle section
- `Arrow Down` - Next accordion (when focused)
- `Arrow Up` - Previous accordion

#### Dialog/Modal
```html
<eva-dialog open modal>
  <eva-dialog-header>
    <eva-dialog-title>Title</eva-dialog-title>
  </eva-dialog-header>
</eva-dialog>
```
- `Tab` - Navigate within dialog
- `Escape` - Close dialog
- Focus trapped within dialog
- Focus returns to trigger on close

#### Dropdown Menu
```html
<eva-dropdown-menu>
  <eva-dropdown-menu-item>Item 1</eva-dropdown-menu-item>
  <eva-dropdown-menu-item>Item 2</eva-dropdown-menu-item>
</eva-dropdown-menu>
```
- `Enter` / `Space` - Open menu
- `Arrow Up/Down` - Navigate items
- `Enter` - Select item
- `Escape` - Close menu
- `Home` - First item
- `End` - Last item

---

## Screen Reader Support

### Tested Screen Readers

- **NVDA** (Windows) - Free, most common
- **JAWS** (Windows) - Commercial, government standard
- **VoiceOver** (macOS/iOS) - Built-in Apple
- **TalkBack** (Android) - Built-in Google

### Screen Reader Patterns

#### Forms

**Input with Label:**
```html
<eva-label for="email">Email Address</eva-label>
<eva-input 
  id="email"
  type="email"
  required
  aria-required="true"
  aria-describedby="email-hint"
></eva-input>
<span id="email-hint">We'll never share your email</span>
```

**Announces:**
- "Email Address, required, edit text"
- "We'll never share your email"

**Error State:**
```html
<eva-input 
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
></eva-input>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

**Announces:**
- "Invalid data: Email Address"
- "Please enter a valid email address"

#### Buttons

**Text Button:**
```html
<eva-gc-button>Submit Application</eva-gc-button>
```
**Announces:** "Submit Application, button"

**Icon Button:**
```html
<eva-button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</eva-button>
```
**Announces:** "Close dialog, button"

**Loading State:**
```html
<eva-gc-button aria-busy="true" disabled>
  Submitting...
</eva-gc-button>
```
**Announces:** "Submitting..., button, busy"

#### Dialogs

```html
<eva-dialog 
  open 
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-desc"
  aria-modal="true"
>
  <eva-dialog-header>
    <eva-dialog-title id="dialog-title">
      Confirm Deletion
    </eva-dialog-title>
    <eva-dialog-description id="dialog-desc">
      This action cannot be undone.
    </eva-dialog-description>
  </eva-dialog-header>
</eva-dialog>
```

**Announces:**
- "Confirm Deletion, dialog"
- "This action cannot be undone"

#### Live Regions

**Success Message:**
```html
<eva-alert role="status" aria-live="polite">
  Your changes have been saved
</eva-alert>
```
**Announces:** "Your changes have been saved"

**Error Message:**
```html
<eva-alert variant="destructive" role="alert" aria-live="assertive">
  An error occurred. Please try again.
</eva-alert>
```
**Announces immediately:** "An error occurred. Please try again."

#### Tabs

```html
<eva-tabs aria-label="Account settings">
  <eva-tabs-list role="tablist">
    <eva-tabs-trigger 
      role="tab"
      aria-selected="true"
      aria-controls="profile-panel"
      id="profile-tab"
    >
      Profile
    </eva-tabs-trigger>
  </eva-tabs-list>
  
  <eva-tabs-content 
    role="tabpanel"
    id="profile-panel"
    aria-labelledby="profile-tab"
  >
    Profile content
  </eva-tabs-content>
</eva-tabs>
```

**Announces:**
- "Account settings, tab list"
- "Profile, tab, selected, 1 of 3"

---

## ARIA Patterns

### Form Controls

#### Required Fields
```html
<eva-input 
  required
  aria-required="true"
></eva-input>
```

#### Invalid Fields
```html
<eva-input 
  aria-invalid="true"
  aria-errormessage="error-id"
></eva-input>
<span id="error-id" role="alert">Error message</span>
```

#### Descriptions
```html
<eva-input 
  aria-describedby="hint-id"
></eva-input>
<span id="hint-id">Hint text</span>
```

### Buttons

#### Icon Buttons
```html
<eva-button aria-label="Delete item">
  <svg aria-hidden="true">...</svg>
</eva-button>
```

#### Toggle Buttons
```html
<eva-button 
  role="switch"
  aria-checked="false"
  aria-label="Toggle notifications"
>
</eva-button>
```

### Navigation

#### Landmarks
```html
<eva-gc-header role="banner">...</eva-gc-header>
<nav role="navigation" aria-label="Main navigation">...</nav>
<main role="main">...</main>
<eva-gc-footer role="contentinfo">...</eva-gc-footer>
```

#### Skip Links
```html
<eva-skip-link href="#main-content">
  Skip to main content
</eva-skip-link>
```

### Dialogs

#### Modal Dialog
```html
<eva-dialog 
  role="dialog"
  aria-modal="true"
  aria-labelledby="title"
  aria-describedby="description"
>
  <h2 id="title">Dialog Title</h2>
  <p id="description">Dialog description</p>
</eva-dialog>
```

#### Alert Dialog
```html
<eva-alert-dialog 
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="alert-title"
  aria-describedby="alert-desc"
>
  <h2 id="alert-title">Warning</h2>
  <p id="alert-desc">Destructive action</p>
</eva-alert-dialog>
```

### Live Regions

#### Polite (Non-interrupting)
```html
<div role="status" aria-live="polite" aria-atomic="true">
  3 items added to cart
</div>
```

#### Assertive (Interrupting)
```html
<div role="alert" aria-live="assertive" aria-atomic="true">
  Error: Form submission failed
</div>
```

---

## Testing Procedures

### Manual Testing Checklist

#### Keyboard Testing
- [ ] Tab through all interactive elements
- [ ] No keyboard traps
- [ ] Focus indicators visible
- [ ] Logical tab order
- [ ] All actions keyboard-accessible
- [ ] Escape closes overlays
- [ ] Arrow keys work in menus/lists

#### Screen Reader Testing
- [ ] All images have alt text
- [ ] Form labels announced
- [ ] Error messages announced
- [ ] Button purposes clear
- [ ] Headings properly structured
- [ ] Landmarks identified
- [ ] Live regions working
- [ ] Dialog roles correct

#### Visual Testing
- [ ] Contrast ratio 4.5:1 minimum
- [ ] Text resizable to 200%
- [ ] No information by color alone
- [ ] Focus indicators visible
- [ ] Touch targets 44×44px minimum
- [ ] Works in high contrast mode

### Automated Testing

#### axe-core Integration

```bash
npm install --save-dev @axe-core/cli
```

```bash
# Scan single page
axe https://yourapp.com

# Scan with output
axe https://yourapp.com --save results.json
```

**React Testing Library:**
```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should have no accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

#### Lighthouse CI

```bash
npm install --save-dev @lhci/cli
```

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:accessibility": ["error", {"minScore": 0.95}]
      }
    }
  }
}
```

### Browser Extensions

**Testing Tools:**
- [axe DevTools](https://www.deque.com/axe/devtools/) - Chrome/Firefox
- [WAVE](https://wave.webaim.org/extension/) - Chrome/Firefox
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Chrome
- [Accessibility Insights](https://accessibilityinsights.io/) - Chrome/Edge

---

## VPAT Report

### Voluntary Product Accessibility Template (VPAT)

**Product:** EVA Sovereign UI  
**Version:** 1.1.0  
**Date:** December 2, 2025  
**Conformance Level:** WCAG 2.2 Level AA

#### Summary

| Criteria | Level | Conformance | Remarks |
|----------|-------|-------------|---------|
| 1.1 Text Alternatives | A | Supports | All non-text content has text alternatives |
| 1.2 Time-based Media | A | Not Applicable | No audio/video content |
| 1.3 Adaptable | A | Supports | Semantic HTML, proper structure |
| 1.4 Distinguishable | AA | Supports | Meets contrast requirements |
| 2.1 Keyboard Accessible | A | Supports | Full keyboard navigation |
| 2.2 Enough Time | A | Supports | No time limits |
| 2.3 Seizures | A | Supports | No flashing content |
| 2.4 Navigable | AA | Supports | Skip links, headings, focus |
| 2.5 Input Modalities | A | Supports | Touch, mouse, keyboard |
| 3.1 Readable | A | Supports | Language declared |
| 3.2 Predictable | A | Supports | Consistent behavior |
| 3.3 Input Assistance | AA | Supports | Labels, errors, suggestions |
| 4.1 Compatible | A | Supports | Valid markup, ARIA |

#### Detailed Findings

**Fully Supports:**
- All form components
- Navigation components
- Dialog components
- GC Design System components

**Not Applicable:**
- Audio/video controls (no media)
- Captions (no media)

**Known Issues:**
- None

#### Testing Methods

- Manual keyboard testing
- NVDA screen reader testing
- JAWS screen reader testing (government standard)
- axe-core automated scanning
- Lighthouse accessibility audit
- Color contrast analysis

#### Recommendations

For optimal accessibility:
1. Always include labels for form controls
2. Provide alt text for informational images
3. Use semantic HTML elements
4. Test with keyboard only
5. Validate with screen readers

---

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/resources/)
- [Government of Canada Accessibility](https://www.canada.ca/en/government/publicservice/wellness-inclusion-diversity-public-service/diversity-inclusion-public-service/accessibility-public-service.html)

## License

MIT © EVA Suite Team
