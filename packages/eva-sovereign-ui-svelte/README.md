# @eva-suite/sovereign-ui-svelte

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

All web component tags are fully typed in Svelte templates. The package includes global type declarations for all EVA components.

## SvelteKit

Works seamlessly with SvelteKit. Import web components in your layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import '@eva-suite/sovereign-ui';
</script>

<slot />
```

## Accessibility

All components are WCAG 2.1 AA compliant and include:
- Full keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management
- Reactive state announcements

## Features

- **Reactive Bindings**: Two-way data binding with Svelte actions
- **TypeScript**: Full type definitions for all components
- **Tree-shakeable**: Import only what you need
- **SvelteKit Compatible**: Works with SSR and client-side rendering
- **Stores Integration**: Works seamlessly with Svelte stores
- **Accessibility**: WCAG 2.1 AA compliant components
- **Government Standards**: GC Design System and Five Eyes compliant

## License

MIT © EVA Suite Team
