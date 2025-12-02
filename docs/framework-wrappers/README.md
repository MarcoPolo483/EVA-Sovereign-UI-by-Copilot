# Framework Wrappers Documentation

Comprehensive guides for integrating EVA Sovereign UI components across all major JavaScript frameworks.

## Overview

EVA Sovereign UI provides first-class support for **React**, **Vue**, **Angular**, and **Svelte** through dedicated framework wrapper packages. Each wrapper is optimized for its framework's patterns and conventions while maintaining the same core component behavior.

## Available Frameworks

### [React Integration](./React.md)
- **Package**: `@eva-suite/sovereign-ui-react`
- **React Versions**: 18.x, 19.x
- **Bundle Size**: 50.91 KB (gzipped)
- **Key Features**:
  - Full TypeScript support with prop types
  - `useEVAForm` hook for form state management
  - React 19 compatibility (tested)
  - Next.js App Router and Pages Router support
  - Server Components compatibility

**Quick Example**:
```tsx
import { EVAInput, useEVAForm } from '@eva-suite/sovereign-ui-react';

function MyForm() {
  const form = useEVAForm({ email: '' });
  return <EVAInput {...form.bindInput('email')} />;
}
```

---

### [Vue Integration](./Vue.md)
- **Package**: `@eva-suite/sovereign-ui-vue`
- **Vue Version**: 3.3.0+
- **Bundle Size**: 15.40 KB ESM, 20.42 KB CJS
- **Key Features**:
  - Composition API support
  - v-model two-way binding for all form components
  - Full TypeScript definitions
  - Nuxt 3 compatible with SSR support
  - Global or component registration

**Quick Example**:
```vue
<script setup>
import { EVAInput } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const email = ref('');
</script>

<template>
  <EVAInput v-model="email" type="email" />
</template>
```

---

### [Angular Integration](./Angular.md)
- **Package**: `@eva-suite/sovereign-ui-angular`
- **Angular Versions**: 15.x, 16.x, 17.x
- **Bundle Size**: 7.06 KB ESM, 8.91 KB CJS
- **Key Features**:
  - ControlValueAccessor directives for reactive forms
  - Standalone components support (Angular 17+)
  - Full TypeScript autocomplete in templates
  - NgModule and standalone modes
  - Form validation integration

**Quick Example**:
```typescript
import { EVAInputDirective } from '@eva-suite/sovereign-ui-angular';

@Component({
  template: `
    <eva-input formControlName="email" type="email"></eva-input>
  `
})
export class MyComponent {
  form = this.fb.group({ email: ['', Validators.email] });
}
```

---

### [Svelte Integration](./Svelte.md)
- **Package**: `@eva-suite/sovereign-ui-svelte`
- **Svelte Versions**: 4.x, 5.x
- **Bundle Size**: 2.03 KB ESM, 3.12 KB CJS (~1 KB gzipped)
- **Key Features**:
  - Svelte actions for two-way binding
  - SvelteKit SSR/SSG compatibility
  - Stores integration
  - Smallest wrapper package
  - Native reactive patterns

**Quick Example**:
```svelte
<script>
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  let email = '';
</script>

<eva-input use:bind={{ value: email, onUpdate: (v) => email = v }} />
```

## Comparison Matrix

| Feature | React | Vue | Angular | Svelte |
|---------|-------|-----|---------|--------|
| **Bundle Size** | 50.91 KB | 15.40 KB | 7.06 KB | 2.03 KB |
| **TypeScript** | ✅ Full | ✅ Full | ✅ Full | ✅ Full |
| **Form Binding** | Hook | v-model | CVA | Actions |
| **SSR Support** | ✅ Next.js | ✅ Nuxt 3 | ✅ Universal | ✅ SvelteKit |
| **Tree Shaking** | ✅ | ✅ | ✅ | ✅ |
| **Min Version** | 18.0.0 | 3.3.0 | 15.0.0 | 4.0.0 |

## Common Patterns Across Frameworks

### Installation
All packages require the core web components library:

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-[framework]
```

### Form Component Support

All frameworks support the same 9 form components with two-way data binding:

1. **EVAInput** - Text input with validation
2. **EVATextarea** - Multi-line text input
3. **EVACheckbox** - Checkbox with label
4. **EVASwitch** - Toggle switch
5. **EVASelect** - Dropdown select
6. **EVARadioGroup** - Radio button group
7. **EVASlider** - Range slider
8. **EVAInputOTP** - One-time password input
9. **EVALabel** - Form labels

### Government of Canada (GC) Components

All frameworks provide identical GC Design System components:

- **EVAGCButton** - Primary GC button
- **EVAGCHeader** - Official header with breadcrumbs
- **EVAGCFooter** - Official footer
- **EVALanguageSwitcher** - EN/FR toggle

### Dialog Components

Modal and overlay components work identically:

- **EVADialog** - Modal dialog
- **EVAAlertDialog** - Confirmation dialog
- **EVADrawer** - Side drawer
- **EVASheet** - Bottom sheet

### All 49 Components Available

Every framework wrapper provides access to the complete component catalog:
- 4 GC Components
- 9 Form Components
- 4 Dialog Components
- 10 Layout Components
- 4 Navigation Components
- 9 UI Components
- 8 Advanced Components
- 1 ESDC Component

## Migration Between Frameworks

### From Vanilla Web Components

All framework wrappers maintain the same component names and props, making migration straightforward:

**Vanilla HTML**:
```html
<eva-input value="test" placeholder="Email"></eva-input>
```

**React**:
```tsx
<EVAInput value="test" placeholder="Email" />
```

**Vue**:
```vue
<EVAInput v-model="email" placeholder="Email" />
```

**Angular**:
```html
<eva-input formControlName="email" placeholder="Email"></eva-input>
```

**Svelte**:
```svelte
<eva-input use:bind={{ value: email, onUpdate: (v) => email = v }} placeholder="Email" />
```

### Component Mapping

| Vanilla | React | Vue | Angular | Svelte |
|---------|-------|-----|---------|--------|
| `<eva-input>` | `<EVAInput>` | `<EVAInput>` | `<eva-input>` | `<eva-input>` |
| `value` attr | `value` prop | `v-model` | `formControlName` | `use:bind` |
| Event listener | `onChange` | `@change` | `(change)` | `on:change` |

## Accessibility

All framework wrappers maintain **WCAG 2.2 Level AA** compliance:

- ✅ Semantic HTML structure
- ✅ Full keyboard navigation
- ✅ ARIA labels and roles
- ✅ Screen reader support (NVDA, JAWS, VoiceOver, TalkBack)
- ✅ Focus management
- ✅ High contrast mode

## Internationalization (i18n)

All frameworks support 7 locales:

- **en-US** - English (United States)
- **en-CA** - English (Canada)
- **en-GB** - English (United Kingdom)
- **en-AU** - English (Australia)
- **en-NZ** - English (New Zealand)
- **fr-CA** - Français (Canada)
- **mi-NZ** - Te Reo Māori (New Zealand)

Set locale via component props:

```tsx
// All frameworks
<EVAGCHeader locale="fr-CA" />
<EVALanguageSwitcher locale="fr-CA" availableLocales='["en-CA", "fr-CA"]' />
```

## Performance

### Bundle Size Optimization

All wrappers support tree-shaking. Import only what you need:

**React**:
```tsx
import { EVAInput, EVAButton } from '@eva-suite/sovereign-ui-react';
```

**Vue**:
```js
import { EVAInput, EVAButton } from '@eva-suite/sovereign-ui-vue';
```

**Angular**:
```typescript
import { EVAInputModule, EVAButtonModule } from '@eva-suite/sovereign-ui-angular';
```

**Svelte**:
```js
// Components are web components, wrapper only provides actions
import { bind } from '@eva-suite/sovereign-ui-svelte';
```

### Lazy Loading

All frameworks support code splitting:

**React**:
```tsx
const EVACalendar = React.lazy(() => 
  import('@eva-suite/sovereign-ui-react').then(m => ({ default: m.EVACalendar }))
);
```

**Vue**:
```vue
<script setup>
const EVACalendar = defineAsyncComponent(() => 
  import('@eva-suite/sovereign-ui-vue').then(m => m.EVACalendar)
);
</script>
```

**Angular**:
```typescript
{
  path: 'calendar',
  loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
}
```

**Svelte**:
```svelte
<script>
  import { onMount } from 'svelte';
  let CalendarComponent;
  
  onMount(async () => {
    CalendarComponent = (await import('$lib/Calendar.svelte')).default;
  });
</script>
```

## Testing

### Unit Testing

All frameworks provide test utilities:

**React** (Jest/React Testing Library):
```tsx
import { render, screen } from '@testing-library/react';
import { EVAButton } from '@eva-suite/sovereign-ui-react';

test('renders button', () => {
  render(<EVAButton>Click me</EVAButton>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

**Vue** (Vitest/Vue Test Utils):
```js
import { mount } from '@vue/test-utils';
import { EVAButton } from '@eva-suite/sovereign-ui-vue';

test('renders button', () => {
  const wrapper = mount(EVAButton, { slots: { default: 'Click me' } });
  expect(wrapper.text()).toBe('Click me');
});
```

**Angular** (Jasmine/Karma):
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MyComponent', () => {
  let fixture: ComponentFixture<MyComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(MyComponent);
  });
});
```

**Svelte** (Vitest/@testing-library/svelte):
```js
import { render } from '@testing-library/svelte';
import MyComponent from './MyComponent.svelte';

test('renders button', () => {
  const { getByText } = render(MyComponent);
  expect(getByText('Click me')).toBeInTheDocument();
});
```

## Server-Side Rendering (SSR)

All frameworks support SSR with caveats (web components are client-side):

### React (Next.js)
```tsx
// Use dynamic imports with ssr: false
import dynamic from 'next/dynamic';

const EVACalendar = dynamic(
  () => import('@eva-suite/sovereign-ui-react').then(m => m.EVACalendar),
  { ssr: false }
);
```

### Vue (Nuxt 3)
```vue
<!-- Use ClientOnly wrapper -->
<template>
  <ClientOnly>
    <EVACalendar />
  </ClientOnly>
</template>
```

### Angular Universal
```typescript
// Check platform before importing
import { isPlatformBrowser } from '@angular/common';

if (isPlatformBrowser(this.platformId)) {
  // Use web components
}
```

### Svelte (SvelteKit)
```svelte
<script>
  import { browser } from '$app/environment';
  
  if (browser) {
    import('@eva-suite/sovereign-ui');
  }
</script>
```

## Best Practices

### 1. Import Styles Once
```tsx
// In your root component/layout
import '@eva-suite/sovereign-ui/styles';
```

### 2. Use TypeScript
All wrappers provide comprehensive TypeScript definitions.

### 3. Follow Framework Patterns
- React: Use hooks and controlled components
- Vue: Use Composition API and v-model
- Angular: Use reactive forms and services
- Svelte: Use stores and actions

### 4. Leverage Tree Shaking
Import only the components you need.

### 5. Accessibility First
Always include proper labels, ARIA attributes, and keyboard support.

## Resources

- [Core Web Components](https://www.npmjs.com/package/@eva-suite/sovereign-ui)
- [React Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-react)
- [Vue Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-vue)
- [Angular Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-angular)
- [Svelte Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-svelte)
- [GitHub Repository](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot)
- [Component Demos](../../apps/demo)

## Support

For framework-specific questions:
- React: See [React Integration Guide](./React.md)
- Vue: See [Vue Integration Guide](./Vue.md)
- Angular: See [Angular Integration Guide](./Angular.md)
- Svelte: See [Svelte Integration Guide](./Svelte.md)

## License

MIT © EVA Suite Team
