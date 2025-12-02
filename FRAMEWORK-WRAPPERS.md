# Framework Wrapper Documentation

Complete integration guides for using EVA-Sovereign-UI with React, Vue, Angular, and Svelte frameworks.

## Table of Contents

- [React Integration](#react-integration)
- [Vue Integration](#vue-integration)
- [Angular Integration](#angular-integration)
- [Svelte Integration](#svelte-integration)
- [Common Patterns](#common-patterns)
- [Accessibility](#accessibility)
- [Troubleshooting](#troubleshooting)

---

## React Integration

### Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-react
```

### Basic Setup

```tsx
import React from 'react';
import { EVAGCButton, EVAInput, EVACard } from '@eva-suite/sovereign-ui-react';

function App() {
  const [value, setValue] = React.useState('');
  
  return (
    <EVACard>
      <EVAInput 
        value={value}
        onInput={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <p>Value: {value}</p>
      <EVAGCButton variant="primary" onClick={() => console.log(value)}>
        Submit
      </EVAGCButton>
    </EVACard>
  );
}
```

### Form Integration

```tsx
import { EVAInput, EVACheckbox, EVAGCButton } from '@eva-suite/sovereign-ui-react';

function LoginForm() {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    remember: false
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', form);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <EVAInput 
        type="email"
        value={form.email}
        onInput={(e) => setForm({...form, email: e.target.value})}
        placeholder="Email"
      />
      
      <EVAInput 
        type="password"
        value={form.password}
        onInput={(e) => setForm({...form, password: e.target.value})}
        placeholder="Password"
      />
      
      <EVACheckbox 
        checked={form.remember}
        onChange={(e) => setForm({...form, remember: e.target.checked})}
      >
        Remember me
      </EVACheckbox>
      
      <EVAGCButton type="submit" variant="primary">Log In</EVAGCButton>
    </form>
  );
}
```

### Ref Forwarding

```tsx
import { useRef } from 'react';
import { EVAInput, EVAGCButton } from '@eva-suite/sovereign-ui-react';
import type { EVACardRef } from '@eva-suite/sovereign-ui-react';

function RefExample() {
  const inputRef = useRef<HTMLElement>(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return (
    <div>
      <EVAInput ref={inputRef} placeholder="Focus me" />
      <EVAGCButton onClick={focusInput}>Focus Input</EVAGCButton>
    </div>
  );
}
```

### TypeScript Support

```tsx
import type { EVAGCButtonProps, EVAInputProps } from '@eva-suite/sovereign-ui-react';

const buttonProps: EVAGCButtonProps = {
  variant: 'primary',
  size: 'large',
  disabled: false
};
```

---

## Vue Integration

### Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-vue
```

### Basic Setup

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { EVAGCButton, EVAInput, EVACard } from '@eva-suite/sovereign-ui-vue';

const inputValue = ref('');
const count = ref(0);
</script>

<template>
  <EVACard>
    <EVAInput 
      v-model="inputValue"
      placeholder="Enter text"
    />
    <p>Value: {{ inputValue }}</p>
    <EVAGCButton 
      variant="primary"
      @click="count++"
    >
      Clicked {{ count }} times
    </EVAGCButton>
  </EVACard>
</template>
```

### Form Integration

```vue
<script setup lang="ts">
import { reactive } from 'vue';
import { EVAInput, EVACheckbox, EVASwitch, EVAGCButton } from '@eva-suite/sovereign-ui-vue';

const form = reactive({
  username: '',
  password: '',
  rememberMe: false,
  notifications: true
});

const handleSubmit = () => {
  console.log('Form data:', form);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <EVAInput v-model="form.username" placeholder="Username" />
    <EVAInput v-model="form.password" type="password" placeholder="Password" />
    <EVACheckbox v-model="form.rememberMe">Remember me</EVACheckbox>
    <EVASwitch v-model="form.notifications">Enable notifications</EVASwitch>
    <EVAGCButton type="submit" variant="primary">Submit</EVAGCButton>
  </form>
</template>
```

### Global Registration

```typescript
// main.ts
import { createApp } from 'vue';
import EVASovereignUI from '@eva-suite/sovereign-ui-vue';
import App from './App.vue';

const app = createApp(App);
app.use(EVASovereignUI);
app.mount('#app');
```

### Composition API

```vue
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { EVAInput, EVABadge } from '@eva-suite/sovereign-ui-vue';

const searchQuery = ref('');
const resultsCount = ref(0);

const badgeVariant = computed(() => 
  resultsCount.value > 0 ? 'default' : 'secondary'
);

watch(searchQuery, async (newQuery) => {
  // Simulate API call
  resultsCount.value = newQuery.length * 3;
});
</script>

<template>
  <div>
    <EVAInput v-model="searchQuery" placeholder="Search..." />
    <EVABadge :variant="badgeVariant">
      {{ resultsCount }} results
    </EVABadge>
  </div>
</template>
```

---

## Angular Integration

### Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-angular
```

### Module Setup

```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EVASovereignUIModule } from '@eva-suite/sovereign-ui-angular';

import '@eva-suite/sovereign-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EVASovereignUIModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Template-Driven Forms

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <eva-input 
        name="name"
        [(ngModel)]="model.name"
        placeholder="Full Name"
        required
      ></eva-input>
      
      <eva-input 
        name="email"
        [(ngModel)]="model.email"
        type="email"
        placeholder="Email"
        required
      ></eva-input>
      
      <eva-textarea 
        name="message"
        [(ngModel)]="model.message"
        placeholder="Your message"
        required
      ></eva-textarea>
      
      <eva-checkbox 
        name="subscribe"
        [(ngModel)]="model.subscribe"
      >
        Subscribe to newsletter
      </eva-checkbox>
      
      <eva-gc-button 
        type="submit" 
        variant="primary"
        [disabled]="form.invalid"
      >
        Send Message
      </eva-gc-button>
      
      <p *ngIf="form.submitted && form.valid">✓ Form is valid</p>
    </form>
  `
})
export class ContactFormComponent {
  model = {
    name: '',
    email: '',
    message: '',
    subscribe: false
  };
  
  onSubmit() {
    console.log('Form submitted:', this.model);
  }
}
```

### Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <eva-input 
        formControlName="username"
        placeholder="Username"
      ></eva-input>
      <div *ngIf="form.get('username')?.invalid && form.get('username')?.touched">
        Username is required
      </div>
      
      <eva-input 
        formControlName="email"
        type="email"
        placeholder="Email"
      ></eva-input>
      
      <eva-input 
        formControlName="password"
        type="password"
        placeholder="Password"
      ></eva-input>
      
      <eva-switch formControlName="terms">
        I agree to the terms
      </eva-switch>
      
      <eva-gc-button 
        type="submit" 
        variant="primary"
        [disabled]="form.invalid"
      >
        Register
      </eva-gc-button>
    </form>
  `
})
export class RegistrationComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log('Registration data:', this.form.value);
    }
  }
}
```

### Standalone Components

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EVAInputDirective, EVACheckboxDirective } from '@eva-suite/sovereign-ui-angular';

import '@eva-suite/sovereign-ui';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, EVAInputDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <eva-input 
      [(ngModel)]="query"
      placeholder="Search..."
      type="search"
    ></eva-input>
    <p>Searching for: {{ query }}</p>
  `
})
export class SearchComponent {
  query = '';
}
```

---

## Svelte Integration

### Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-svelte
```

### Basic Setup

```svelte
<script lang="ts">
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  import '@eva-suite/sovereign-ui';
  
  let name = '';
  let count = 0;
</script>

<eva-card>
  <eva-input 
    use:bind={{ value: name, onUpdate: (v) => name = v }}
    placeholder="Enter your name"
  />
  <p>Hello, {name}!</p>
  
  <eva-gc-button 
    variant="primary"
    on:click={() => count++}
  >
    Clicked {count} times
  </eva-gc-button>
</eva-card>
```

### Form Integration

```svelte
<script lang="ts">
  import { bind, bindChecked } from '@eva-suite/sovereign-ui-svelte';
  
  let formData = {
    email: '',
    password: '',
    rememberMe: false,
    notifications: true
  };
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log('Form data:', formData);
  }
</script>

<form on:submit={handleSubmit}>
  <eva-input 
    use:bind={{ 
      value: formData.email, 
      onUpdate: (v) => formData.email = v 
    }}
    type="email"
    placeholder="Email"
    required
  />
  
  <eva-input 
    use:bind={{ 
      value: formData.password, 
      onUpdate: (v) => formData.password = v 
    }}
    type="password"
    placeholder="Password"
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
  
  <eva-switch 
    use:bindChecked={{ 
      checked: formData.notifications, 
      onUpdate: (v) => formData.notifications = v 
    }}
  >
    Enable notifications
  </eva-switch>
  
  <eva-gc-button type="submit" variant="primary">
    Log In
  </eva-gc-button>
</form>
```

### Stores Integration

```svelte
<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  const searchQuery = writable('');
  const items = writable(['Apple', 'Banana', 'Cherry', 'Date']);
  
  const filteredItems = derived(
    [searchQuery, items],
    ([$query, $items]) => 
      $items.filter(item => 
        item.toLowerCase().includes($query.toLowerCase())
      )
  );
</script>

<eva-input 
  use:bind={{ 
    value: $searchQuery, 
    onUpdate: (v) => searchQuery.set(v) 
  }}
  placeholder="Search items..."
/>

<ul>
  {#each $filteredItems as item}
    <li>{item}</li>
  {/each}
</ul>
```

### SvelteKit Setup

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import '@eva-suite/sovereign-ui';
  import '@eva-suite/sovereign-ui/styles';
</script>

<eva-gc-header logo-text="My Government App" />

<main>
  <eva-container>
    <slot />
  </eva-container>
</main>

<eva-gc-footer />
```

---

## Common Patterns

### Government of Canada Page Layout

All frameworks support the GC Design System layout:

```html
<eva-gc-header 
  logo-text="Department Name"
  breadcrumbs='[{"label":"Home","href":"/"},{"label":"Services"}]'
/>

<main>
  <eva-container>
    <eva-skip-links />
    <eva-breadcrumbs />
    
    <!-- Your content -->
    
    <eva-gc-button variant="primary">Primary Action</eva-gc-button>
  </eva-container>
</main>

<eva-gc-footer />
```

### Bilingual Language Switching

```html
<eva-language-switcher 
  current-lang="en-CA"
  available-langs='["en-CA","fr-CA"]'
/>
```

### Accessible Form Validation

All frameworks support native HTML5 validation with ARIA announcements:

```html
<eva-input 
  type="email"
  required
  aria-invalid="false"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert"></span>
```

### Dialog/Modal Management

```html
<eva-alert-dialog>
  <eva-alert-dialog-trigger>
    <eva-gc-button>Delete Account</eva-gc-button>
  </eva-alert-dialog-trigger>
  
  <eva-alert-dialog-content>
    <eva-alert-dialog-header>
      <eva-alert-dialog-title>Are you sure?</eva-alert-dialog-title>
      <eva-alert-dialog-description>
        This action cannot be undone.
      </eva-alert-dialog-description>
    </eva-alert-dialog-header>
    
    <eva-alert-dialog-footer>
      <eva-alert-dialog-cancel>
        <eva-button>Cancel</eva-button>
      </eva-alert-dialog-cancel>
      <eva-alert-dialog-action>
        <eva-gc-button variant="destructive">Delete</eva-gc-button>
      </eva-alert-dialog-action>
    </eva-alert-dialog-footer>
  </eva-alert-dialog-content>
</eva-alert-dialog>
```

---

## Accessibility

All framework wrappers maintain WCAG 2.1 AA compliance:

### Keyboard Navigation
- Tab/Shift+Tab: Navigate between focusable elements
- Enter/Space: Activate buttons and controls
- Arrow keys: Navigate composite widgets (tabs, menus, radio groups)
- Escape: Close dialogs and dropdowns

### Screen Reader Support
- All components have proper ARIA labels and roles
- Form controls announce validation states
- Dynamic content changes are announced via live regions
- Focus management respects user preferences

### Focus Management
```typescript
// React example
import { useRef, useEffect } from 'react';

function Dialog({ isOpen }: { isOpen: boolean }) {
  const dialogRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);
  
  return <eva-dialog ref={dialogRef}>...</eva-dialog>;
}
```

---

## Troubleshooting

### Web Components Not Registered

**Problem**: `Uncaught TypeError: Failed to construct 'HTMLElement'`

**Solution**: Import the base package before using components:

```typescript
// React
import '@eva-suite/sovereign-ui';
import { EVAGCButton } from '@eva-suite/sovereign-ui-react';

// Vue
import '@eva-suite/sovereign-ui';
import { EVAGCButton } from '@eva-suite/sovereign-ui-vue';

// Angular
import '@eva-suite/sovereign-ui';
import { EVASovereignUIModule } from '@eva-suite/sovereign-ui-angular';

// Svelte
import '@eva-suite/sovereign-ui';
import { bind } from '@eva-suite/sovereign-ui-svelte';
```

### TypeScript Errors

**Problem**: `Property 'eva-gc-button' does not exist`

**Solution**: Add CUSTOM_ELEMENTS_SCHEMA (Angular) or extend JSX types:

```typescript
// React: global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'eva-gc-button': any;
    'eva-input': any;
    // ... etc
  }
}

// Angular: module
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

### SSR/Hydration Issues

**Problem**: Components not rendering on server side

**Solution**: Import components client-side only:

```typescript
// Next.js
import dynamic from 'next/dynamic';
const EVAGCButton = dynamic(() => import('@eva-suite/sovereign-ui-react').then(m => m.EVAGCButton), {
  ssr: false
});

// Nuxt 3
<ClientOnly>
  <EVAGCButton variant="primary">Click me</EVAGCButton>
</ClientOnly>

// SvelteKit
<script>
  import { browser } from '$app/environment';
  import '@eva-suite/sovereign-ui';
</script>

{#if browser}
  <eva-gc-button variant="primary">Click me</eva-gc-button>
{/if}
```

### Form Validation Not Working

**Problem**: Native HTML5 validation not triggering

**Solution**: Use framework-specific validation hooks:

```typescript
// React
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (e.currentTarget.checkValidity()) {
    // Submit form
  }
};

// Angular
onSubmit() {
  if (this.form.valid) {
    // Submit form
  }
}

// Vue
const handleSubmit = () => {
  if (formRef.value?.checkValidity()) {
    // Submit form
  }
};
```

---

## Additional Resources

- [EVA-Sovereign-UI Documentation](../README.md)
- [Web Components Best Practices](https://web.dev/custom-elements-best-practices/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GC Design System](https://design.canada.ca/)

## Support

For issues, questions, or contributions:
- GitHub Issues: [eva-suite/EVA-Sovereign-UI-by-Copilot](https://github.com/eva-suite/EVA-Sovereign-UI-by-Copilot/issues)
- Email: support@eva-suite.com

## License

MIT © EVA Suite Team
