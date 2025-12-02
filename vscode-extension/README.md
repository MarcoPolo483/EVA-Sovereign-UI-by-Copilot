# EVA Sovereign UI - VS Code Snippets

**Accelerate development** with comprehensive code snippets for the EVA Sovereign UI design system.

## Features

- 🚀 **20+ snippets** for React components
- 🔧 **Framework-specific** snippets for Vue, Angular, and Svelte
- ♿ **Accessibility-first** - All snippets follow WCAG 2.1 Level AA standards
- 🇨🇦 **Government-grade** - Aligned with Government of Canada design system
- ⌨️ **Tab completion** - Smart tab stops for rapid component configuration

## Supported Frameworks

- **React** (JSX/TSX)
- **Vue 3** (Composition API with v-model)
- **Angular** (ngModel binding)
- **Svelte** (Svelte actions)

## Usage

### React

Type the prefix and press `Tab`:

```jsx
eva-button → 
<EVAButton 
  variant="primary" 
  size="medium"
  onClick={handleClick}
>
  Button Text
</EVAButton>

eva-input →
<EVAInput 
  label="Label"
  value={value}
  onChange={handleChange}
  placeholder="Placeholder"
/>
```

### Vue

```vue
eva-button →
<eva-button
  variant="primary"
  size="medium"
  @click="handleClick"
>
  Button Text
</eva-button>

eva-input →
<eva-input
  v-model="value"
  label="Label"
  placeholder="Placeholder"
/>
```

### Angular

```html
eva-button →
<eva-button
  variant="primary"
  size="default"
  (click)="handleClick()"
>
  Button Text
</eva-button>

eva-input →
<eva-input
  evaInput
  [(ngModel)]="value"
  label="Label"
/>
```

### Svelte

```svelte
eva-button →
<eva-button
  variant="primary"
  size="default"
  on:click={handleClick}
>
  Button Text
</eva-button>

eva-input →
<eva-input
  use:bind={value}
  label="Label"
/>
```

## Available Snippets

| Prefix | Component | Frameworks |
|--------|-----------|------------|
| `eva-button` | Button | React, Vue, Angular, Svelte |
| `eva-gc-button` | GC Button | React |
| `eva-input` | Input | React, Vue, Angular, Svelte |
| `eva-textarea` | Textarea | React |
| `eva-checkbox` | Checkbox | React, Vue, Angular, Svelte |
| `eva-radio-group` | Radio Group | React |
| `eva-select` | Select | React, Vue, Angular, Svelte |
| `eva-switch` | Switch | React |
| `eva-slider` | Slider | React |
| `eva-dialog` | Dialog | React, Vue |
| `eva-alert` | Alert | React |
| `eva-card` | Card | React |
| `eva-tabs` | Tabs | React, Vue |
| `eva-accordion` | Accordion | React |
| `eva-table` | Table | React |
| `eva-progress` | Progress | React |
| `eva-spinner` | Spinner | React |
| `eva-badge` | Badge | React |
| `eva-tooltip` | Tooltip | React |
| `eva-breadcrumbs` | Breadcrumbs | React |

## Setup Snippets

Framework initialization helpers:

- `eva-plugin-setup` (Vue) - Vue plugin configuration
- `eva-module-import` (Angular) - Module import
- `eva-actions-import` (Svelte) - Actions import

## Installation

1. Install from VS Code Marketplace: Search "EVA Sovereign UI"
2. Or install from `.vsix`: `code --install-extension eva-sovereign-ui-1.0.0.vsix`

## Requirements

- VS Code 1.85.0 or higher
- EVA Sovereign UI packages installed in your project:
  - `@eva-suite/sovereign-ui-react`
  - `@eva-suite/sovereign-ui-vue`
  - `@eva-suite/sovereign-ui-angular`
  - `@eva-suite/sovereign-ui-svelte`

## Documentation

For full component API and examples:
- [EVA Sovereign UI Documentation](https://github.com/marcdubs/EVA-Sovereign-UI)
- [Storybook](https://eva-sovereign-ui.netlify.app)

## License

MIT License - See LICENSE file

## Support

Report issues: [GitHub Issues](https://github.com/marcdubs/EVA-Sovereign-UI/issues)

---

**Built with ❤️ for Government of Canada developers**
