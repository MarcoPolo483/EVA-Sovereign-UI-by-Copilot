# Component Usage Guidelines

Detailed usage guidelines for all EVA Sovereign UI components with accessibility best practices, responsive design patterns, and government standards compliance.

## Table of Contents

- [Form Components](#form-components)
- [GC Components](#gc-components)
- [Dialog Components](#dialog-components)
- [Layout Components](#layout-components)
- [Best Practices](#best-practices)

---

## Form Components

### EVAInput - Text Input

**When to use:**
- Single-line text entry
- Email addresses, phone numbers, URLs
- Search fields
- Numeric inputs

**Accessibility:**
```html
<!-- Always pair with a label -->
<eva-label for="user-email">Email Address</eva-label>
<eva-input 
  id="user-email"
  type="email"
  required
  aria-required="true"
  aria-describedby="email-hint email-error"
></eva-input>
<span id="email-hint">We'll never share your email</span>
<span id="email-error" role="alert" hidden>Please enter a valid email</span>
```

**Validation:**
- Use `required` for mandatory fields
- Use `pattern` for custom validation
- Display errors with `aria-invalid` and `aria-describedby`
- Show real-time feedback after first blur

**Responsive Design:**
- Use full width on mobile (`width: 100%`)
- Maintain minimum touch target of 44×44px
- Consider virtual keyboard on mobile

**Government Standards:**
- GC: Use "Lato" or "Noto Sans" font
- Label must be visible (no placeholder-only)
- Support bilingual labels (EN/FR)

---

### EVACheckbox - Checkbox Input

**When to use:**
- Multiple selection from options
- Binary yes/no choices
- Opt-in/opt-out preferences
- Terms and conditions acceptance

**Accessibility:**
```html
<eva-checkbox 
  id="terms"
  required
  aria-required="true"
  aria-describedby="terms-description"
>
  I accept the <a href="/terms">terms and conditions</a>
</eva-checkbox>
<span id="terms-description">Required to proceed</span>
```

**Best Practices:**
- Always include descriptive text
- Group related checkboxes with fieldset/legend
- Use indeterminate state for "select all" functionality
- Ensure 44×44px minimum touch target

**Keyboard Navigation:**
- `Space` - Toggle checked state
- `Tab` - Move focus to next element

**Government Standards:**
- GC: Checkboxes must be square (not rounded)
- Provide clear visual indication of checked state
- High contrast mode support

---

### EVARadioGroup - Radio Button Group

**When to use:**
- Single selection from multiple options
- Mutually exclusive choices
- 2-7 options (use select for more)

**Accessibility:**
```html
<fieldset>
  <legend>Select your preferred language</legend>
  <eva-radio-group name="language" required aria-required="true">
    <eva-radio-group-item value="en">English</eva-radio-group-item>
    <eva-radio-group-item value="fr">Français</eva-radio-group-item>
  </eva-radio-group>
</fieldset>
```

**Best Practices:**
- Always use fieldset + legend for grouping
- Pre-select a default option when appropriate
- Vertical layout for 4+ options
- Horizontal layout for 2-3 options

**Keyboard Navigation:**
- `Arrow keys` - Navigate between options
- `Tab` - Move to next group
- `Space` - Select focused option

---

### EVASelect - Dropdown Select

**When to use:**
- 8+ options to choose from
- Limited screen space
- Standard/expected patterns (country, state)

**Accessibility:**
```html
<eva-label for="country">Country</eva-label>
<eva-select 
  id="country"
  name="country"
  required
  aria-required="true"
>
  <eva-select-item value="">Select a country...</eva-select-item>
  <eva-select-item value="ca">Canada</eva-select-item>
  <eva-select-item value="us">United States</eva-select-item>
  <eva-select-item value="uk">United Kingdom</eva-select-item>
</eva-select>
```

**Best Practices:**
- Include a default "Select..." option
- Order options logically (alphabetical, frequency)
- Use optgroups for large lists
- Consider autocomplete for 50+ options

**Government Standards:**
- GC: Province/territory list must follow official order
- Support both official languages in options

---

## GC Components

### EVAGCButton - Government of Canada Button

**When to use:**
- Primary actions (submit, save, continue)
- Secondary actions (cancel, back)
- Dangerous actions (delete, remove)

**Variants:**

**Primary** - Main call-to-action:
```html
<eva-gc-button variant="primary" type="submit">
  Submit Application
</eva-gc-button>
```

**Secondary** - Alternative actions:
```html
<eva-gc-button variant="secondary">
  Save as Draft
</eva-gc-button>
```

**Danger** - Destructive actions:
```html
<eva-gc-button variant="danger" onclick="confirm('Are you sure?')">
  Delete Account
</eva-gc-button>
```

**Link** - Navigation:
```html
<eva-gc-button variant="link" href="/help">
  Learn More
</eva-gc-button>
```

**Accessibility:**
- Use descriptive text (not "Click here")
- Add `aria-label` for icon-only buttons
- Disable during async operations
- Provide loading state feedback

**Government Standards:**
- GC: Use max 1 primary button per screen
- Button text must be action-oriented
- Minimum width: 120px
- Square corners (border-radius: 0)

---

### EVAGCHeader - Official Header

**When to use:**
- Every Government of Canada page
- Public-facing applications
- Internal government tools

**Required Elements:**
```html
<eva-gc-header 
  site-title="Employment and Social Development Canada"
  locale="en-CA"
  show-language
  show-search
  show-theme
>
</eva-gc-header>
```

**Breadcrumbs:**
```html
<eva-gc-header 
  breadcrumbs='[
    {"label": "Home", "href": "/"},
    {"label": "Services", "href": "/services"},
    {"label": "Employment Insurance"}
  ]'
>
</eva-gc-header>
```

**Accessibility:**
- Skip links to main content
- Landmark role="banner"
- Focus management on language switch
- Screen reader announcements

**Government Standards:**
- GC: Must include Government of Canada signature
- Bilingual navigation required
- Theme toggle for dark mode
- Mobile-responsive menu

---

### EVALanguageSwitcher - Language Toggle

**When to use:**
- Every bilingual Government of Canada page
- Must be prominently placed
- Top-right corner or header

**Implementation:**
```html
<eva-language-switcher 
  locale="en-CA"
  available-locales='["en-CA", "fr-CA"]'
>
</eva-language-switcher>
```

**Accessibility:**
- Clear indication of current language
- Toggle text in opposite language ("Français" in English)
- Keyboard accessible
- Maintain page state after switch

**Government Standards:**
- GC: "Français" link on English pages
- "English" link on French pages
- Must update all page content
- Preserve form data on switch

---

## Dialog Components

### EVADialog - Modal Dialog

**When to use:**
- Critical information requiring attention
- Multi-step workflows
- Confirmations before destructive actions
- NOT for: Marketing, non-critical info

**Accessibility:**
```html
<eva-dialog 
  open 
  modal
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <eva-dialog-header>
    <eva-dialog-title id="dialog-title">
      Confirm Submission
    </eva-dialog-title>
    <eva-dialog-description id="dialog-description">
      This will submit your application. You cannot undo this action.
    </eva-dialog-description>
  </eva-dialog-header>
  
  <eva-dialog-footer>
    <eva-button variant="outline">Cancel</eva-button>
    <eva-gc-button variant="primary">Confirm</eva-gc-button>
  </eva-dialog-footer>
</eva-dialog>
```

**Best Practices:**
- Focus first focusable element on open
- Trap focus within dialog
- Close on Escape key
- Restore focus on close
- Disable background scrolling
- Max width: 600px

**Government Standards:**
- GC: Use sparingly (interrupts user flow)
- Must be closeable
- Clear primary action
- Mobile-friendly

---

### EVAAlertDialog - Confirmation Dialog

**When to use:**
- Irreversible actions
- Data loss warnings
- Critical decisions

**Implementation:**
```html
<eva-alert-dialog 
  open
  title="Delete Account?"
  description="This will permanently delete your account and all data."
  action-label="Delete"
  cancel-label="Cancel"
>
</eva-alert-dialog>
```

**Best Practices:**
- Clear, concise warning
- Explain consequences
- Emphasize destructive action
- Provide safe default (Cancel)

---

## Layout Components

### EVATabs - Tab Navigation

**When to use:**
- Organize related content
- Switch between views
- 3-7 tabs (more = dropdown)

**Accessibility:**
```html
<eva-tabs value="profile" aria-label="Account settings">
  <eva-tabs-list role="tablist">
    <eva-tabs-trigger 
      value="profile" 
      role="tab" 
      aria-selected="true"
      aria-controls="profile-panel"
    >
      Profile
    </eva-tabs-trigger>
    <eva-tabs-trigger 
      value="settings" 
      role="tab"
      aria-controls="settings-panel"
    >
      Settings
    </eva-tabs-trigger>
  </eva-tabs-list>
  
  <eva-tabs-content 
    value="profile" 
    role="tabpanel" 
    id="profile-panel"
    aria-labelledby="profile-tab"
  >
    Profile content
  </eva-tabs-content>
  
  <eva-tabs-content 
    value="settings" 
    role="tabpanel" 
    id="settings-panel"
  >
    Settings content
  </eva-tabs-content>
</eva-tabs>
```

**Keyboard Navigation:**
- `Tab` - Focus tab list
- `Arrow Left/Right` - Navigate tabs
- `Home` - First tab
- `End` - Last tab
- `Enter/Space` - Activate tab

**Best Practices:**
- Keep tab labels short (1-2 words)
- Use icons + text for clarity
- Indicate active tab clearly
- Load content on-demand for performance

---

### EVAAccordion - Collapsible Sections

**When to use:**
- Progressive disclosure
- FAQ sections
- Long forms with sections
- Space-constrained layouts

**Accessibility:**
```html
<eva-accordion type="single" collapsible>
  <eva-accordion-item value="item-1">
    <h3>
      <button 
        aria-expanded="false"
        aria-controls="content-1"
      >
        What documents do I need?
      </button>
    </h3>
    <div id="content-1" role="region" aria-labelledby="item-1">
      You will need government-issued ID, proof of address...
    </div>
  </eva-accordion-item>
</eva-accordion>
```

**Best Practices:**
- Use headings for accordion triggers
- Clear expand/collapse icons
- Smooth animations (respect prefers-reduced-motion)
- Support single or multiple open panels

**Government Standards:**
- GC: Use for lengthy content organization
- All content must be accessible
- No critical info hidden by default

---

## Best Practices

### Responsive Design

**Mobile First:**
```css
/* Base styles (mobile) */
eva-input {
  width: 100%;
  font-size: 16px; /* Prevents zoom on iOS */
}

/* Tablet and up */
@media (min-width: 768px) {
  eva-input {
    width: auto;
  }
}
```

**Touch Targets:**
- Minimum 44×44px for all interactive elements
- Add spacing between adjacent buttons
- Use larger tap areas for mobile

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

### Form Validation

**Inline Validation:**
```html
<eva-input 
  id="email"
  type="email"
  required
  aria-invalid="true"
  aria-describedby="email-error"
></eva-input>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

**Timing:**
- Show errors after first blur
- Show success on valid input
- Disable submit until form valid
- Clear errors on input change

**Error Messages:**
- Be specific: "Email required" not "Invalid"
- Suggest solutions: "Use format: name@example.com"
- Avoid jargon
- Bilingual (EN/FR) for GC

---

### Performance

**Code Splitting:**
```javascript
// Lazy load heavy components
const Calendar = () => import('./eva-calendar');
```

**Image Optimization:**
- Use WebP with fallbacks
- Lazy load below-fold images
- Provide width/height attributes

**Bundle Size:**
- Import only needed components
- Tree-shake unused code
- Use CDN for production

---

### Internationalization

**Locale Support:**
```html
<eva-gc-header locale="fr-CA"></eva-gc-header>
<eva-language-switcher 
  locale="fr-CA"
  available-locales='["en-CA", "fr-CA"]'
></eva-language-switcher>
```

**Supported Locales:**
- en-US, en-CA, en-GB, en-AU, en-NZ
- fr-CA
- mi-NZ

**Best Practices:**
- Never hardcode strings
- Use locale-aware date/number formatting
- Test RTL layouts (future)
- Respect user's browser locale

---

### Government Compliance

**GC Design System:**
- Typography: Lato or Noto Sans
- Colors: #26374a (primary), #335075 (secondary)
- Spacing: 8px grid system
- Accessibility: WCAG 2.2 AA minimum

**Required Elements:**
- GC signature in header
- Bilingual navigation
- Skip links
- Official footer
- Privacy statement
- Terms of use

**Prohibited:**
- Third-party advertising
- Non-government branding
- Auto-play media
- Pop-ups (except critical alerts)

---

## Resources

- [API Documentation](../api/README.md)
- [Accessibility Guide](../accessibility/README.md)
- [Migration Guides](../migration/README.md)
- [Framework Integration](../framework-wrappers/README.md)

## License

MIT © EVA Suite Team
