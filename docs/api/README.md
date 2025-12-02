# EVA Sovereign UI - API Documentation

Complete API reference for all 49 components, props, events, methods, slots, and CSS custom properties.

## Table of Contents

- [Component Categories](#component-categories)
- [Common Props](#common-props)
- [Common Events](#common-events)
- [CSS Custom Properties](#css-custom-properties)
- [TypeScript Interfaces](#typescript-interfaces)

## Component Categories

### Government of Canada (GC) Components
- [EVAGCButton](#evagcbutton)
- [EVAGCHeader](#evagcheader)
- [EVAGCFooter](#evagcfooter)
- [EVALanguageSwitcher](#evalanguageswitcher)

### Form Components
- [EVAInput](#evainput)
- [EVATextarea](#evatextarea)
- [EVACheckbox](#evacheckbox)
- [EVASwitch](#evaswitch)
- [EVASelect](#evaselect)
- [EVARadioGroup](#evaradiogroup)
- [EVASlider](#evaslider)
- [EVALabel](#evalabel)
- [EVAInputOTP](#evainputotp)

### Dialog Components
- [EVADialog](#evadialog)
- [EVAAlertDialog](#evaalertdialog)
- [EVADrawer](#evadrawer)
- [EVASheet](#evasheet)

### Layout Components
- [EVATabs](#evatabs)
- [EVAAccordion](#evaaccordion)
- [EVACard](#evacard)
- [EVAPageShell](#evapageshell)
- [EVAContainer](#evacontainer)
- [EVAHeroBanner](#evaherobanner)
- [EVASkipLink](#evaskiplink)

### Navigation Components
- [EVABreadcrumb](#evabreadcrumb)
- [EVADropdownMenu](#evadropdownmenu)
- [EVAContextMenu](#evacontextmenu)
- [EVAMenubar](#evamenubar)

### UI Components
- [EVAButton](#evabutton)
- [EVABadge](#evabadge)
- [EVAAlert](#evaalert)
- [EVATooltip](#evatooltip)
- [EVAPopover](#evapopover)
- [EVASeparator](#evaseparator)
- [EVAProgress](#evaprogress)
- [EVASkeleton](#evaskeleton)
- [EVAAspectRatio](#evaaspectratio)

### Advanced Components
- [EVAChatPanel](#evachatpanel)
- [EVAChatMessage](#evachatmessage)
- [EVACalendar](#evacalendar)
- [EVACarousel](#evacarousel)
- [EVAPagination](#evapagination)
- [EVAScrollArea](#evascrollarea)
- [EVATable](#evatable)
- [EVAAvatar](#evaavatar)
- [EVAHoverCard](#evahovercard)
- [EVAToggle](#evatoggle)
- [EVACollapsible](#evacollapsible)

### ESDC Components
- [EVAProgramCard](#evaprogramcard)

---

## Common Props

All components support these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `''` | CSS class name(s) |
| `id` | `string` | - | Element ID |
| `style` | `string` | - | Inline CSS styles |
| `aria-label` | `string` | - | Accessibility label |
| `aria-describedby` | `string` | - | ID of description element |
| `data-*` | `string` | - | Custom data attributes |

## Common Events

Most interactive components emit these events:

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `{ value: any }` | Value changed |
| `input` | `{ value: any }` | Input received |
| `focus` | `FocusEvent` | Element focused |
| `blur` | `FocusEvent` | Element blurred |
| `click` | `MouseEvent` | Element clicked |

---

## EVAGCButton

Official Government of Canada Design System button component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'link'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable interactions |
| `href` | `string` | - | Renders as link if provided |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `click` | `MouseEvent` | Button clicked |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Button content |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--eva-gc-button-primary-bg` | `#26374a` | Primary background |
| `--eva-gc-button-primary-text` | `#ffffff` | Primary text color |
| `--eva-gc-button-secondary-bg` | `#ffffff` | Secondary background |
| `--eva-gc-button-secondary-text` | `#26374a` | Secondary text color |
| `--eva-gc-button-padding` | `0.75rem 1.5rem` | Button padding |
| `--eva-gc-button-border-radius` | `0` | Border radius (GC: 0) |

### Example

```html
<eva-gc-button variant="primary" size="lg">
  Submit Application
</eva-gc-button>
```

---

## EVAInput

Text input component with validation support.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Input value |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |
| `readonly` | `boolean` | `false` | Make read-only |
| `required` | `boolean` | `false` | Required field |
| `name` | `string` | - | Form field name |
| `autocomplete` | `string` | - | Autocomplete hint |
| `maxlength` | `number` | - | Maximum length |
| `minlength` | `number` | - | Minimum length |
| `pattern` | `string` | - | Validation pattern |
| `error` | `string` | - | Error message |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ value: string }` | Value changed |
| `input` | `{ value: string }` | Input received |
| `focus` | `FocusEvent` | Input focused |
| `blur` | `FocusEvent` | Input blurred |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--eva-input-bg` | `#ffffff` | Background color |
| `--eva-input-border` | `#d1d5db` | Border color |
| `--eva-input-border-focus` | `#2563eb` | Focus border color |
| `--eva-input-text` | `#111827` | Text color |
| `--eva-input-placeholder` | `#9ca3af` | Placeholder color |
| `--eva-input-padding` | `0.5rem 0.75rem` | Input padding |
| `--eva-input-border-radius` | `0.375rem` | Border radius |
| `--eva-input-height` | `2.5rem` | Input height |

### Example

```html
<eva-input 
  type="email" 
  placeholder="Enter your email"
  required
  aria-label="Email address"
></eva-input>
```

---

## EVADialog

Modal dialog component with backdrop and focus management.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Dialog visibility |
| `modal` | `boolean` | `true` | Modal behavior (blocks background) |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `open` | - | Dialog opened |
| `close` | - | Dialog closed |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Dialog content |

### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `show()` | - | Open dialog |
| `hide()` | - | Close dialog |
| `toggle()` | - | Toggle dialog |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--eva-dialog-bg` | `#ffffff` | Dialog background |
| `--eva-dialog-backdrop` | `rgba(0, 0, 0, 0.5)` | Backdrop color |
| `--eva-dialog-width` | `32rem` | Dialog width |
| `--eva-dialog-padding` | `1.5rem` | Dialog padding |
| `--eva-dialog-border-radius` | `0.5rem` | Border radius |
| `--eva-dialog-shadow` | `0 20px 25px rgba(0,0,0,0.15)` | Box shadow |

### Example

```html
<eva-dialog open modal>
  <eva-dialog-header>
    <eva-dialog-title>Confirm Action</eva-dialog-title>
    <eva-dialog-description>
      Are you sure you want to proceed?
    </eva-dialog-description>
  </eva-dialog-header>
  
  <eva-dialog-footer>
    <eva-button variant="outline">Cancel</eva-button>
    <eva-gc-button variant="primary">Confirm</eva-gc-button>
  </eva-dialog-footer>
</eva-dialog>
```

---

## EVATabs

Tab navigation component with keyboard support.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Active tab value |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab orientation |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `{ value: string }` | Active tab changed |

### Child Components

- `eva-tabs-list` - Tab button container
- `eva-tabs-trigger` - Individual tab button
- `eva-tabs-content` - Tab panel content

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--eva-tabs-border` | `#e5e7eb` | Border color |
| `--eva-tabs-bg` | `transparent` | Tab background |
| `--eva-tabs-active-bg` | `#ffffff` | Active tab background |
| `--eva-tabs-active-border` | `#2563eb` | Active tab indicator |
| `--eva-tabs-text` | `#6b7280` | Tab text color |
| `--eva-tabs-active-text` | `#111827` | Active tab text color |

### Example

```html
<eva-tabs value="profile">
  <eva-tabs-list>
    <eva-tabs-trigger value="profile">Profile</eva-tabs-trigger>
    <eva-tabs-trigger value="settings">Settings</eva-tabs-trigger>
  </eva-tabs-list>
  
  <eva-tabs-content value="profile">
    Profile content
  </eva-tabs-content>
  
  <eva-tabs-content value="settings">
    Settings content
  </eva-tabs-content>
</eva-tabs>
```

---

## EVAChatPanel

Chat interface with message history and input.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | `string` | `'en-US'` | Interface locale |
| `placeholder` | `string` | `'Type a message...'` | Input placeholder |
| `show-language-switcher` | `boolean` | `false` | Show language toggle |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `sendMessage` | `{ message: string }` | User sent message |
| `languageChange` | `{ locale: string }` | Language changed |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Chat messages (eva-chat-message) |

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--eva-chat-bg` | `#ffffff` | Panel background |
| `--eva-chat-border` | `#e5e7eb` | Border color |
| `--eva-chat-input-bg` | `#f9fafb` | Input background |
| `--eva-chat-height` | `600px` | Panel height |

### Example

```html
<eva-chat-panel locale="en-CA" show-language-switcher>
  <eva-chat-message 
    message="Hello! How can I help?" 
    sender="Assistant" 
    role="assistant"
  ></eva-chat-message>
  <eva-chat-message 
    message="I need assistance" 
    sender="User" 
    role="user"
  ></eva-chat-message>
</eva-chat-panel>
```

---

## TypeScript Interfaces

### Component Props Interfaces

```typescript
export interface EVAGCButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface EVAInputProps {
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  name?: string;
  autocomplete?: string;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  error?: string;
}

export interface EVADialogProps {
  open?: boolean;
  modal?: boolean;
}

export interface EVATabsProps {
  value?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface EVAChatPanelProps {
  locale?: string;
  placeholder?: string;
  'show-language-switcher'?: boolean;
}
```

### Event Detail Interfaces

```typescript
export interface EVAChangeEvent extends CustomEvent {
  detail: {
    value: any;
  };
}

export interface EVAInputEvent extends CustomEvent {
  detail: {
    value: string;
  };
}

export interface EVAClickEvent extends CustomEvent {
  detail: {
    originalEvent: MouseEvent;
  };
}

export interface EVASendMessageEvent extends CustomEvent {
  detail: {
    message: string;
  };
}
```

---

## Global CSS Custom Properties

These apply to all components:

```css
:root {
  /* Colors */
  --eva-primary: #2563eb;
  --eva-secondary: #64748b;
  --eva-success: #059669;
  --eva-warning: #d97706;
  --eva-error: #dc2626;
  --eva-info: #0891b2;
  
  /* GC Colors */
  --eva-gc-primary: #26374a;
  --eva-gc-secondary: #335075;
  --eva-gc-accent: #af3c43;
  
  /* Typography */
  --eva-font-family: system-ui, -apple-system, sans-serif;
  --eva-font-size-sm: 0.875rem;
  --eva-font-size-base: 1rem;
  --eva-font-size-lg: 1.125rem;
  --eva-font-size-xl: 1.25rem;
  
  /* Spacing */
  --eva-spacing-xs: 0.25rem;
  --eva-spacing-sm: 0.5rem;
  --eva-spacing-md: 1rem;
  --eva-spacing-lg: 1.5rem;
  --eva-spacing-xl: 2rem;
  
  /* Border Radius */
  --eva-radius-sm: 0.25rem;
  --eva-radius-md: 0.375rem;
  --eva-radius-lg: 0.5rem;
  --eva-radius-xl: 0.75rem;
  
  /* Shadows */
  --eva-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --eva-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --eva-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --eva-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Transitions */
  --eva-transition-fast: 150ms ease;
  --eva-transition-base: 200ms ease;
  --eva-transition-slow: 300ms ease;
  
  /* Z-Index */
  --eva-z-dropdown: 1000;
  --eva-z-sticky: 1020;
  --eva-z-fixed: 1030;
  --eva-z-modal-backdrop: 1040;
  --eva-z-modal: 1050;
  --eva-z-popover: 1060;
  --eva-z-tooltip: 1070;
}
```

## Accessibility APIs

All components support standard ARIA attributes:

- `aria-label` - Accessible label
- `aria-describedby` - Description element ID
- `aria-labelledby` - Label element ID
- `aria-required` - Required field indicator
- `aria-invalid` - Invalid state indicator
- `aria-disabled` - Disabled state indicator
- `aria-expanded` - Expanded state (dropdowns, accordions)
- `aria-selected` - Selected state (tabs, options)
- `aria-checked` - Checked state (checkboxes, radios)
- `aria-hidden` - Hidden from screen readers
- `aria-live` - Live region announcements
- `role` - ARIA role override

## Browser Support

All components work in:

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Modern browsers with Web Components support

Polyfills available for older browsers.

## Resources

- [Component Guidelines](../components/README.md)
- [Framework Integration](../framework-wrappers/README.md)
- [Accessibility Guide](../accessibility/README.md)
- [GitHub Repository](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot)

## License

MIT © EVA Suite Team
