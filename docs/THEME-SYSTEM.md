# Theme System Documentation

## Overview

EVA-Sovereign-UI provides a comprehensive theming system with support for:

- **Five Eyes Sovereign Themes**: Official government design systems for Canada, USA, UK, Australia, and New Zealand
- **Dark Mode**: Automatic detection with `prefers-color-scheme` support
- **High Contrast Mode**: WCAG AAA compliance with `prefers-contrast` support
- **Custom Themes**: Create and apply custom themes at runtime
- **Persistence**: localStorage support for user preferences
- **Dynamic Switching**: Change themes without page reload

## Quick Start

### Using Default Theme

The system automatically detects user preferences and applies appropriate theme:

```typescript
import { themeEngine } from '@eva-sovereign-ui/wc';

// Theme is automatically initialized based on:
// 1. Saved user preference (localStorage)
// 2. prefers-color-scheme (dark/light)
// 3. prefers-contrast (high)
// 4. Defaults to Canada GC Light
```

### Manual Theme Selection

```typescript
// Apply specific theme
themeEngine.applyTheme('canada-gc-dark');

// Toggle dark mode
themeEngine.toggleDarkMode();

// Get current theme
const current = themeEngine.getCurrentTheme();
console.log(current.name, current.mode);

// Get all available themes
const all = themeEngine.getAllThemes();
```

### Using Theme Switcher Component

```html
<!-- Dropdown variant (default) -->
<eva-theme-switcher></eva-theme-switcher>

<!-- Button group variant with flags -->
<eva-theme-switcher 
  variant="buttons" 
  show-country-flags>
</eva-theme-switcher>

<!-- Dark mode toggle only -->
<eva-theme-switcher 
  variant="toggle" 
  show-dark-toggle>
</eva-theme-switcher>

<!-- Combined: dropdown + dark toggle -->
<eva-theme-switcher 
  variant="combined" 
  show-dark-toggle 
  compact>
</eva-theme-switcher>
```

## Available Themes

### Canada 🇨🇦

**Government of Canada Design System**

```typescript
// Light mode (default)
themeEngine.applyTheme('canada-gc-light');

// Dark mode
themeEngine.applyTheme('canada-gc-dark');

// High contrast
themeEngine.applyTheme('gc-high-contrast');
```

**Colors:**
- Primary: `#26374A` (GC Dark Blue)
- Secondary: `#A62A1E` (GC Red Accent)
- Link: `#284162` (GC Link Blue)
- Typography: Lato (headings), Noto Sans (body)
- Base Font Size: 20px

### United States 🇺🇸

**U.S. Web Design System (USWDS)**

```typescript
// Light mode
themeEngine.applyTheme('usa-gov-light');

// Dark mode
themeEngine.applyTheme('usa-gov-dark');
```

**Colors:**
- Primary: `#002868` (USA Blue)
- Secondary: `#BF0A30` (USA Red)
- Typography: Source Sans Pro
- Base Font Size: 17px

### United Kingdom 🇬🇧

**GOV.UK Design System**

```typescript
// Light mode
themeEngine.applyTheme('uk-gov-light');

// Dark mode
themeEngine.applyTheme('uk-gov-dark');
```

**Colors:**
- Primary: `#012169` (GOV.UK Blue)
- Secondary: `#C8102E` (GOV.UK Red)
- Accent: Yellow (focus indicator)
- Typography: GDS Transport, Arial
- Base Font Size: 19px

### Australia 🇦🇺

**Australian Government Design System (GOLD)**

```typescript
// Light mode
themeEngine.applyTheme('australia-gov-light');

// Dark mode
themeEngine.applyTheme('australia-gov-dark');
```

**Colors:**
- Primary: `#00008B` (Australian Blue)
- Secondary: `#FFCD00` (Australian Gold)
- Accent: Red
- Typography: Montserrat (headings), Open Sans (body)
- Base Font Size: 16px

### New Zealand 🇳🇿

**New Zealand Government Design System**

```typescript
// Light mode
themeEngine.applyTheme('nz-gov-light');

// Dark mode
themeEngine.applyTheme('nz-gov-dark');
```

**Colors:**
- Primary: `#00247D` (NZ Blue)
- Secondary: `#CC142B` (NZ Red)
- Typography: Fira Sans
- Base Font Size: 18px

## CSS Custom Properties

All themes expose CSS custom properties that can be used directly:

```css
.my-component {
  background: var(--eva-background-primary);
  color: var(--eva-text-primary);
  border: 1px solid var(--eva-border-primary);
  font-family: var(--eva-font-family-body);
}

.my-button {
  background: var(--eva-interactive-primary);
  color: var(--eva-text-inverse);
}

.my-button:hover {
  background: var(--eva-interactive-primary-hover);
}

.my-button:disabled {
  background: var(--eva-interactive-primary-disabled);
}
```

### Available CSS Variables

**Background Colors:**
- `--eva-background-primary`: Main background
- `--eva-background-secondary`: Secondary background
- `--eva-background-tertiary`: Tertiary background
- `--eva-background-inverse`: Inverse background (dark on light)
- `--eva-surface-elevated`: Elevated surfaces (cards, modals)
- `--eva-surface-overlay`: Overlay surfaces (dropdowns, tooltips)

**Text Colors:**
- `--eva-text-primary`: Primary text
- `--eva-text-secondary`: Secondary text
- `--eva-text-tertiary`: Tertiary/muted text
- `--eva-text-inverse`: Inverse text (light on dark)
- `--eva-text-link`: Link color
- `--eva-text-link-hover`: Link hover color

**Border Colors:**
- `--eva-border-primary`: Primary borders
- `--eva-border-secondary`: Secondary borders
- `--eva-border-focus`: Focus indicator borders

**Brand Colors:**
- `--eva-brand-primary`: Primary brand color
- `--eva-brand-secondary`: Secondary brand color
- `--eva-brand-accent`: Accent brand color

**Interactive States:**
- `--eva-interactive-primary`: Primary interactive color
- `--eva-interactive-primary-hover`: Hover state
- `--eva-interactive-primary-active`: Active/pressed state
- `--eva-interactive-primary-disabled`: Disabled state

**Feedback Colors:**
- `--eva-feedback-success`: Success messages
- `--eva-feedback-warning`: Warning messages
- `--eva-feedback-error`: Error messages
- `--eva-feedback-info`: Info messages

**Typography:**
- `--eva-font-family-heading`: Heading font stack
- `--eva-font-family-body`: Body font stack
- `--eva-font-family-mono`: Monospace font stack
- `--eva-font-size-base`: Base font size
- `--eva-line-height-base`: Base line height

## Creating Custom Themes

### From Scratch

```typescript
import { themeEngine, Theme } from '@eva-sovereign-ui/wc';

const myCustomTheme: Theme = {
  id: 'my-custom-theme',
  name: 'My Custom Theme',
  description: 'A custom theme for my organization',
  mode: 'light',
  colors: {
    backgroundPrimary: 'oklch(100% 0 0)',
    backgroundSecondary: 'oklch(97% 0.01 250)',
    backgroundTertiary: 'oklch(94% 0.02 250)',
    backgroundInverse: 'oklch(20% 0.04 250)',
    
    textPrimary: 'oklch(20% 0.02 250)',
    textSecondary: 'oklch(40% 0.03 250)',
    textTertiary: 'oklch(55% 0.03 250)',
    textInverse: 'oklch(98% 0 0)',
    textLink: 'oklch(38% 0.16 240)',
    textLinkHover: 'oklch(28% 0.16 240)',
    
    borderPrimary: 'oklch(72% 0.03 240)',
    borderSecondary: 'oklch(84% 0.02 240)',
    borderFocus: 'oklch(52% 0.18 30)',
    
    brandPrimary: 'oklch(38% 0.16 240)',
    brandSecondary: 'oklch(48% 0.22 20)',
    brandAccent: 'oklch(98% 0 0)',
    
    interactivePrimary: 'oklch(38% 0.16 240)',
    interactivePrimaryHover: 'oklch(32% 0.16 240)',
    interactivePrimaryActive: 'oklch(26% 0.16 240)',
    interactivePrimaryDisabled: 'oklch(72% 0.05 240)',
    
    feedbackSuccess: 'oklch(52% 0.16 155)',
    feedbackWarning: 'oklch(68% 0.15 75)',
    feedbackError: 'oklch(48% 0.22 20)',
    feedbackInfo: 'oklch(58% 0.14 215)',
    
    surfaceElevated: 'oklch(100% 0 0)',
    surfaceOverlay: 'oklch(20% 0.04 240 / 0.9)',
  },
  typography: {
    fontFamilyHeading: 'Arial, sans-serif',
    fontFamilyBody: 'Arial, sans-serif',
    fontFamilyMono: 'monospace',
    fontSizeBase: '16px',
    lineHeightBase: '1.5',
  },
};

// Register and apply
themeEngine.registerTheme(myCustomTheme);
themeEngine.applyTheme('my-custom-theme');
```

### Extending Existing Theme

```typescript
// Create custom theme based on Canada GC theme
const myTheme = themeEngine.createCustomTheme('canada-gc-light', {
  id: 'my-department',
  name: 'My Department',
  description: 'Department-specific theme',
  colors: {
    brandPrimary: 'oklch(45% 0.15 180)', // Custom teal
    brandSecondary: 'oklch(55% 0.18 280)', // Custom purple
    // Other colors inherited from base theme
  },
});

if (myTheme) {
  themeEngine.applyTheme('my-department');
}
```

## Theme Events

Listen for theme changes:

```typescript
document.addEventListener('eva-theme-change', (event) => {
  const theme = event.detail.theme;
  console.log('Theme changed:', theme.name, theme.mode);
  
  // Update UI, analytics, etc.
  if (theme.mode === 'dark') {
    // Do something for dark mode
  }
});
```

## Automatic Detection

The theme system automatically detects and responds to system preferences:

### Dark Mode Detection

```typescript
// Automatically applied when:
// - No saved preference exists
// - User OS is set to dark mode
// - prefers-color-scheme: dark

// System will switch between canada-gc-light and canada-gc-dark
```

### High Contrast Detection

```typescript
// Automatically applied when:
// - No saved preference exists
// - User OS is set to high contrast
// - prefers-contrast: high

// System will apply gc-high-contrast theme
```

### Manual Override

```typescript
// User selection always takes precedence
themeEngine.applyTheme('usa-gov-dark');

// Clear preference to re-enable auto-detection
themeEngine.clearThemePreference();
```

## Theme Persistence

Themes are automatically saved to localStorage:

```typescript
// Save happens automatically on theme change
themeEngine.applyTheme('uk-gov-light');
// Saved to localStorage: 'eva-theme-preference' = 'uk-gov-light'

// On next page load, saved theme is restored
// unless system preferences override (high contrast)

// Clear saved preference
themeEngine.clearThemePreference();
```

## Color System

All themes use the **OKLCH color space** for consistent, perceptually uniform colors:

```typescript
// OKLCH format: oklch(lightness% chroma hue / alpha)
'oklch(45% 0.13 265)'        // GC Blue
'oklch(45% 0.13 265 / 0.9)'  // GC Blue with 90% opacity
```

**Benefits:**
- Perceptually uniform (colors appear equally bright)
- Smooth color transitions and gradients
- Better color mixing with `color-mix()`
- Wider color gamut support
- Easier to maintain consistent contrast ratios

**Conversion from Hex:**
```typescript
// Hex: #26374A
// RGB: rgb(38, 55, 74)
// OKLCH: oklch(45% 0.13 265)
```

## Accessibility

All themes meet **WCAG 2.2 AA** standards:

- Text contrast: ≥ 4.5:1 for normal text
- Large text contrast: ≥ 3:1 for headings
- Interactive elements: ≥ 3:1 contrast
- Focus indicators: ≥ 3:1 contrast, visible on all elements

High contrast theme meets **WCAG AAA**:
- Text contrast: ≥ 7:1
- Enhanced readability for vision impairments

## Best Practices

### 1. Use Semantic Variables

❌ **Don't:**
```css
.button {
  background: oklch(45% 0.13 265);
}
```

✅ **Do:**
```css
.button {
  background: var(--eva-interactive-primary);
}
```

### 2. Support Dark Mode

❌ **Don't:**
```css
.card {
  background: white;
  color: black;
}
```

✅ **Do:**
```css
.card {
  background: var(--eva-background-primary);
  color: var(--eva-text-primary);
}
```

### 3. Maintain Contrast

Always ensure sufficient contrast between text and background:

```css
.alert {
  background: var(--eva-feedback-error);
  color: var(--eva-text-inverse); /* High contrast white text */
}
```

### 4. Test All Themes

```typescript
// Test component with all Five Eyes themes
const themes = ['canada-gc', 'usa-gov', 'uk-gov', 'australia-gov', 'nz-gov'];
themes.forEach(base => {
  themeEngine.applyTheme(`${base}-light`);
  // Test component appearance
  
  themeEngine.applyTheme(`${base}-dark`);
  // Test component appearance
});
```

### 5. Handle Theme Changes

```typescript
// Components should respond to theme changes
class MyComponent extends BaseElement {
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('eva-theme-change', this.handleThemeChange);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('eva-theme-change', this.handleThemeChange);
  }
  
  private handleThemeChange = (event) => {
    this.render(); // Re-render with new theme
  };
}
```

## Migration Guide

### From Previous Version

If you were using the old GC theme:

```typescript
// Old
themeEngine.applyTheme('gc-canada');
themeEngine.applyTheme('gc-canada-dark');

// New (still works for backward compatibility)
themeEngine.applyTheme('gc-canada');
themeEngine.applyTheme('gc-canada-dark');

// Or use new IDs
themeEngine.applyTheme('canada-gc-light');
themeEngine.applyTheme('canada-gc-dark');
```

### CSS Variables

All CSS variables now use `--eva-` prefix:

```css
/* Old (still supported) */
--gc-primary
--gc-text-white

/* New (recommended) */
--eva-brand-primary
--eva-text-inverse
```

## Performance

- Theme switching: < 16ms (single frame)
- No page reload required
- Minimal CSS payload (~5KB per theme)
- Lazy theme registration
- Efficient CSS variable updates

## Browser Support

- Chrome 111+ (OKLCH support)
- Edge 111+
- Firefox 113+
- Safari 16.4+

**Fallback:** Modern browsers only. Legacy browsers not supported due to OKLCH requirement.

## Troubleshooting

### Theme Not Applying

```typescript
// Check if theme is registered
const theme = themeEngine.getTheme('my-theme-id');
if (!theme) {
  console.error('Theme not found, register it first');
  themeEngine.registerTheme(myTheme);
}
```

### Colors Not Updating

```typescript
// Ensure you're using CSS variables, not hard-coded values
// ❌ background: #26374A;
// ✅ background: var(--eva-brand-primary);
```

### localStorage Issues

```typescript
// Clear saved preference if corrupted
themeEngine.clearThemePreference();

// Check if localStorage is available
try {
  localStorage.getItem('eva-theme-preference');
} catch (e) {
  console.warn('localStorage not available (private browsing?)');
}
```

### Dark Mode Not Working

```typescript
// Check system preference detection
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log('System prefers dark mode:', isDark);

// Manually toggle
themeEngine.toggleDarkMode();
```

## Examples

See full examples in:
- `/apps/demo` - Demo application with all themes
- `/apps/dev-kit-demo` - Developer kit with theme showcase
- `/packages/eva-sovereign-ui-wc/src/components/ui/eva-theme-switcher.stories.ts` - Storybook examples

## API Reference

### ThemeEngine

**Methods:**
- `applyTheme(themeId: string, savePreference?: boolean): boolean`
- `toggleDarkMode(): boolean`
- `getCurrentTheme(): Theme`
- `getAllThemes(): Theme[]`
- `getTheme(themeId: string): Theme | undefined`
- `registerTheme(theme: Theme): void`
- `createCustomTheme(baseId: string, overrides: Partial<Theme>): Theme | null`
- `clearThemePreference(): void`
- `destroy(): void` - Clean up listeners

**Events:**
- `eva-theme-change` - Dispatched when theme changes

### Theme Interface

```typescript
interface Theme {
  id: string;
  name: string;
  description: string;
  mode: 'light' | 'dark' | 'high-contrast';
  colors: ThemeColors;
  typography?: Partial<ThemeTypography>;
  spacing?: Partial<typeof baseSpacing>;
}
```

### ThemeColors Interface

See full interface in `/packages/eva-sovereign-ui-wc/src/themes/theme-engine.ts`

## Support

For issues or questions:
- GitHub Issues: https://github.com/your-org/eva-sovereign-ui/issues
- Documentation: https://eva-sovereign-ui.dev/docs/theming
- Examples: https://eva-sovereign-ui.dev/demos
