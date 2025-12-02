# @eva-suite/sovereign-ui-svelte

[![npm version](https://img.shields.io/npm/v/@eva-suite/sovereign-ui-svelte.svg)](https://www.npmjs.com/package/@eva-suite/sovereign-ui-svelte)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Svelte 4/5 wrapper for EVA Sovereign UI** - Complete government-grade component library with reactive bindings.

## ✨ Features

- 🎯 **49 Production-Ready Components** - Complete GC Design System implementation
- ⚡ **Reactive Actions** - Seamless two-way binding with `bind:` and `bindChecked:`
- 📦 **Tiny Bundle** - ~3 KB wrapper (components lazy-load)
- 🔧 **TypeScript First** - Full type definitions and autocomplete
- ♿ **WCAG 2.2 AA** - Government accessibility compliance
- 🌍 **i18n Ready** - 7 locales (en-US/CA/GB/AU/NZ, fr-CA, mi-NZ)
- 🎨 **Themeable** - CSS variables and GC Design tokens
- 🚀 **SvelteKit Compatible** - SSR/SSG support out of the box
- ⚛️ **Svelte 4 & 5** - Works with both major versions
- 🔄 **Event Forwarding** - Automatic CustomEvent handling

---

Svelte wrappers for EVA-Sovereign-UI Web Components, providing native Svelte integration with reactive bindings, two-way data binding, and TypeScript definitions.

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-svelte
```

## Setup

Import the web components in your main app file:

```typescript
// src/main.ts or src/App.svelte
import '@eva-suite/sovereign-ui';
```

## Usage

### Basic Components

```svelte
<script>
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  let count = 0;
  
  function handleClick() {
    count++;
  }
</script>

<eva-card>
  <eva-card-header>
    <eva-card-title>Svelte Integration Example</eva-card-title>
  </eva-card-header>
  <eva-card-content>
    <eva-gc-button 
      variant="primary"
      on:click={handleClick}
    >
      Clicked {count} times
    </eva-gc-button>
  </eva-card-content>
</eva-card>
```

### Two-Way Data Binding

Use the `bind` action for reactive two-way data binding:

```svelte
<script>
  import { bind, bindChecked } from '@eva-suite/sovereign-ui-svelte';
  
  let name = '';
  let email = '';
  let agreed = false;
  let enabled = true;
</script>

<eva-input 
  use:bind={{ 
    value: name, 
    onUpdate: (v) => name = v 
  }}
  placeholder="Enter your name"
/>

<eva-input 
  use:bind={{ 
    value: email, 
    onUpdate: (v) => email = v 
  }}
  type="email"
  placeholder="Enter your email"
/>

<eva-checkbox 
  use:bindChecked={{ 
    checked: agreed, 
    onUpdate: (v) => agreed = v 
  }}
>
  I agree to the terms
</eva-checkbox>

<eva-switch 
  use:bindChecked={{ 
    checked: enabled, 
    onUpdate: (v) => enabled = v 
  }}
>
  Enable notifications
</eva-switch>

<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Agreed: {agreed}</p>
<p>Enabled: {enabled}</p>
```

### Form Example

```svelte
<script lang="ts">
  import { bind, bindChecked } from '@eva-suite/sovereign-ui-svelte';
  
  let formData = {
    username: '',
    password: '',
    rememberMe: false
  };
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }
</script>

<form on:submit={handleSubmit}>
  <eva-label>Username</eva-label>
  <eva-input 
    use:bind={{ 
      value: formData.username, 
      onUpdate: (v) => formData.username = v 
    }}
    placeholder="Enter username"
    required
  />
  
  <eva-label>Password</eva-label>
  <eva-input 
    use:bind={{ 
      value: formData.password, 
      onUpdate: (v) => formData.password = v 
    }}
    type="password"
    placeholder="Enter password"
    required
  />
  
  <eva-checkbox 
    use:bindChecked={{ 
      checked: formData.rememberMe, 
      onUpdate: (v) => formData.rememberMe = v 
    }}
  >
    Remember me
  </eva-checkbox>
  
  <eva-gc-button type="submit" variant="primary">
    Log In
  </eva-gc-button>
</form>
```

### Government of Canada Components

```svelte
<script>
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Current Page' }
  ];
  
  function handleSubmit() {
    console.log('Application submitted');
  }
</script>

<eva-gc-header 
  logo-text="Department Name"
  breadcrumbs={JSON.stringify(breadcrumbs)}
/>

<main>
  <eva-container>
    <h1>My Government Application</h1>
    
    <eva-gc-button 
      variant="primary"
      size="large"
      on:click={handleSubmit}
    >
      Submit Application
    </eva-gc-button>
  </eva-container>
</main>

<eva-gc-footer />
```

### Reactive Stores Integration

```svelte
<script>
  import { writable } from 'svelte/store';
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  const searchQuery = writable('');
  
  $: console.log('Search query changed:', $searchQuery);
</script>

<eva-input 
  use:bind={{ 
    value: $searchQuery, 
    onUpdate: (v) => searchQuery.set(v) 
  }}
  placeholder="Search..."
  type="search"
/>

{#if $searchQuery}
  <p>Searching for: {$searchQuery}</p>
{/if}
```

## Actions

### `bind`

Two-way binding for input values:

```svelte
<eva-input use:bind={{ value, onUpdate: (v) => value = v }} />
```

### `bindChecked`

Two-way binding for checkbox/switch checked state:

```svelte
<eva-checkbox use:bindChecked={{ checked, onUpdate: (v) => checked = v }} />
```

### `forwardEvents`

Forward custom events from web components:

```svelte
<script>
  import { forwardEvents } from '@eva-suite/sovereign-ui-svelte';
</script>

<eva-dialog use:forwardEvents={['open', 'close']} on:open on:close>
  <!-- content -->
</eva-dialog>
```

## TypeScript Support

All web component tags are fully typed in Svelte templates. The package includes global type declarations and prop interfaces for all EVA components.

### Component Props

```typescript
import type { 
  EVAInputProps, 
  EVAGCButtonProps, 
  EVADialogProps 
} from '@eva-suite/sovereign-ui-svelte';

const inputProps: EVAInputProps = {
  value: 'hello',
  type: 'text',
  placeholder: 'Enter text...',
  disabled: false
};
```

### Autocomplete in Templates

TypeScript provides full autocomplete for all component attributes:

```svelte
<eva-input 
  value="test"
  type="email"          <!-- Autocompletes: text|password|email|number|tel|url|search -->
  placeholder="..."
  disabled={false}
  required
/>
```

## SvelteKit Integration

Works seamlessly with SvelteKit SSR/SSG. Import web components in your root layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '@eva-suite/sovereign-ui';
  import type { LayoutData } from './$types';
  
  export let data: LayoutData;
</script>

<eva-gc-header site-title="My SvelteKit App" locale={data.locale} />

<main>
  <slot />
</main>

<eva-gc-footer locale={data.locale} />
```

### SSR Compatibility

Web components are client-side only. For SSR, use conditional imports:

```svelte
<script lang="ts">
  import { browser } from '$app/environment';
  
  if (browser) {
    import('@eva-suite/sovereign-ui');
  }
</script>
```

Or use SvelteKit's `onMount`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  
  onMount(async () => {
    await import('@eva-suite/sovereign-ui');
  });
</script>
```

## Component Catalog

### 🏛️ Government of Canada (GC) Components
- `eva-gc-button` - GC Design System primary button
- `eva-gc-header` - Official GC page header with breadcrumbs
- `eva-gc-footer` - Official GC page footer
- `eva-language-switcher` - EN/FR language toggle

### 📝 Form Components
- `eva-input` - Text input with validation
- `eva-textarea` - Multi-line text input
- `eva-checkbox` - Checkbox with label
- `eva-switch` - Toggle switch
- `eva-select` / `eva-select-item` - Dropdown select
- `eva-radio-group` / `eva-radio-group-item` - Radio button group
- `eva-slider` - Range slider
- `eva-label` - Form label
- `eva-input-otp` - One-time password input

### 🎨 UI Components
- `eva-button` - Standard button
- `eva-badge` - Status badge
- `eva-alert` - Alert/notification banner
- `eva-tooltip` - Tooltip overlay
- `eva-popover` - Popover overlay
- `eva-separator` - Horizontal rule
- `eva-progress` - Progress bar
- `eva-skeleton` - Loading skeleton
- `eva-aspect-ratio` - Aspect ratio container

### 🗂️ Layout Components
- `eva-tabs` / `eva-tabs-list` / `eva-tabs-trigger` / `eva-tabs-content` - Tab navigation
- `eva-accordion` / `eva-accordion-item` - Collapsible accordion
- `eva-card` / `eva-card-header` / `eva-card-title` / `eva-card-description` / `eva-card-content` / `eva-card-footer` - Content card
- `eva-page-shell` - Full page layout wrapper
- `eva-container` - Content container with max-width
- `eva-hero-banner` - Hero section with CTA

### 💬 Dialog Components
- `eva-dialog` / `eva-dialog-header` / `eva-dialog-title` / `eva-dialog-description` / `eva-dialog-footer` - Modal dialog
- `eva-alert-dialog` - Confirmation dialog
- `eva-drawer` - Side drawer
- `eva-sheet` - Bottom sheet

### 🧭 Navigation Components
- `eva-breadcrumb` / `eva-breadcrumb-list` / `eva-breadcrumb-item` / `eva-breadcrumb-link` / `eva-breadcrumb-separator` - Breadcrumb navigation
- `eva-skip-link` - Skip to content link
- `eva-dropdown-menu` / `eva-dropdown-menu-item` - Dropdown menu
- `eva-context-menu` / `eva-context-menu-item` - Right-click context menu
- `eva-menubar` / `eva-menubar-menu` / `eva-menubar-item` - Menu bar

### 🎭 Advanced Components
- `eva-chat-panel` / `eva-chat-message` - Chat interface
- `eva-calendar` - Date picker
- `eva-carousel` / `eva-carousel-item` - Image carousel
- `eva-pagination` - Page navigation
- `eva-scroll-area` - Custom scrollbar
- `eva-table` / `eva-table-header` / `eva-table-body` / `eva-table-row` / `eva-table-head` / `eva-table-cell` - Data table
- `eva-avatar` / `eva-avatar-image` / `eva-avatar-fallback` - User avatar
- `eva-hover-card` - Hover card overlay
- `eva-toggle` / `eva-toggle-group` / `eva-toggle-group-item` - Toggle buttons
- `eva-collapsible` / `eva-collapsible-trigger` / `eva-collapsible-content` - Collapsible section

### 🇨🇦 ESDC Components
- `eva-program-card` - Program information card

## Performance

- **Bundle Size**: 2.03 KB ESM / 3.12 KB CJS (gzipped ~1 KB)
- **Tree-shakeable**: Only import what you use
- **Lazy-loaded**: Web components load on-demand
- **Zero runtime overhead**: Minimal wrapper around native web components

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- All modern browsers with Web Components support

## Accessibility

All components are **WCAG 2.2 Level AA** compliant with:
- Semantic HTML structure
- Full keyboard navigation
- ARIA labels and roles
- Screen reader announcements
- Focus management
- High contrast mode support

Tested with:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

## Internationalization

Supports 7 locales out of the box:
- `en-US` - English (United States)
- `en-CA` - English (Canada)
- `en-GB` - English (United Kingdom)
- `en-AU` - English (Australia)
- `en-NZ` - English (New Zealand)
- `fr-CA` - Français (Canada)
- `mi-NZ` - Te Reo Māori (New Zealand)

```svelte
<eva-gc-header locale="fr-CA" />
<eva-language-switcher locale="fr-CA" available-locales='["en-CA", "fr-CA"]' />
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for development setup and guidelines.

## Links

- [EVA Sovereign UI Core](https://www.npmjs.com/package/@eva-suite/sovereign-ui)
- [React Wrapper](https://www.npmjs.com/package/@eva-suite/sovereign-ui-react)
- [Vue Wrapper](https://www.npmjs.com/package/@eva-suite/sovereign-ui-vue)
- [Angular Wrapper](https://www.npmjs.com/package/@eva-suite/sovereign-ui-angular)
- [Documentation](../../README.md)
- [Component Demos](../../apps/demo)

## License

MIT © EVA Suite Team
