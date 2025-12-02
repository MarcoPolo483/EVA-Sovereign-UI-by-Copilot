# Svelte Framework Integration

Complete guide for using EVA Sovereign UI components in Svelte 4/5 and SvelteKit applications.

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-svelte
```

## Quick Start

### Svelte 4/5 Setup

```svelte
<!-- App.svelte -->
<script lang="ts">
  import '@eva-suite/sovereign-ui';
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  let name = '';
</script>

<eva-input use:bind={{ value: name, onUpdate: (v) => name = v }} placeholder="Your name" />
<eva-gc-button variant="primary">Submit</eva-gc-button>
```

### SvelteKit Setup

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { browser } from '$app/environment';
  
  if (browser) {
    import('@eva-suite/sovereign-ui');
  }
</script>

<slot />
```

## TypeScript Support

Full TypeScript definitions with component props and autocomplete:

```svelte
<script lang="ts">
  import type { 
    EVAInputProps, 
    EVAGCButtonProps 
  } from '@eva-suite/sovereign-ui-svelte';
  
  const inputProps: EVAInputProps = {
    type: 'email',
    required: true,
    placeholder: 'Enter email...'
  };
</script>

<eva-input {...inputProps} />
```

## Reactive Bindings with Actions

### Two-Way Value Binding

The `bind` action provides seamless two-way data binding for input components:

```svelte
<script lang="ts">
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  let username = '';
  let email = '';
  let bio = '';
  let country = 'canada';
  let volume = 50;
  let otpCode = '';
</script>

<!-- Text Input -->
<eva-input use:bind={{ value: username, onUpdate: (v) => username = v }} 
  placeholder="Username" />

<!-- Email Input -->
<eva-input use:bind={{ value: email, onUpdate: (v) => email = v }} 
  type="email" placeholder="Email" />

<!-- Textarea -->
<eva-textarea use:bind={{ value: bio, onUpdate: (v) => bio = v }} 
  rows="5" placeholder="Your bio..." />

<!-- Select -->
<eva-select use:bind={{ value: country, onUpdate: (v) => country = v }}>
  <eva-select-item value="canada">Canada</eva-select-item>
  <eva-select-item value="usa">United States</eva-select-item>
  <eva-select-item value="uk">United Kingdom</eva-select-item>
</eva-select>

<!-- Slider -->
<eva-slider use:bind={{ value: volume, onUpdate: (v) => volume = v }} 
  min="0" max="100" />
<p>Volume: {volume}</p>

<!-- OTP Input -->
<eva-input-otp use:bind={{ value: otpCode, onUpdate: (v) => otpCode = v }} 
  length="6" />
```

### Two-Way Checked Binding

The `bindChecked` action handles checkbox and switch components:

```svelte
<script lang="ts">
  import { bindChecked } from '@eva-suite/sovereign-ui-svelte';
  
  let acceptTerms = false;
  let notifications = true;
</script>

<!-- Checkbox -->
<eva-checkbox use:bindChecked={{ checked: acceptTerms, onUpdate: (v) => acceptTerms = v }}>
  I accept the terms and conditions
</eva-checkbox>

<!-- Switch -->
<eva-switch use:bindChecked={{ checked: notifications, onUpdate: (v) => notifications = v }}>
  Enable notifications
</eva-switch>
```

### Event Forwarding

The `forwardEvents` action allows you to listen to custom events:

```svelte
<script lang="ts">
  import { forwardEvents } from '@eva-suite/sovereign-ui-svelte';
  
  function handleOpen() {
    console.log('Dialog opened');
  }
  
  function handleClose() {
    console.log('Dialog closed');
  }
</script>

<eva-dialog use:forwardEvents={['open', 'close']} on:open={handleOpen} on:close={handleClose}>
  <!-- Dialog content -->
</eva-dialog>
```

## Government of Canada Components

### GC Header with Breadcrumbs

```svelte
<script lang="ts">
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Employment Insurance' }
  ];
</script>

<eva-gc-header 
  site-title="Employment and Social Development Canada"
  breadcrumbs={JSON.stringify(breadcrumbs)}
  locale="en-CA"
  show-language
  show-search
  show-theme
/>

<main>
  <eva-container size="lg">
    <h1>Employment Insurance Benefits</h1>
    <!-- Page content -->
  </eva-container>
</main>

<eva-gc-footer locale="en-CA" show-newsletter show-social />
```

### Language Switcher

```svelte
<script lang="ts">
  import { forwardEvents } from '@eva-suite/sovereign-ui-svelte';
  
  let locale: 'en-CA' | 'fr-CA' = 'en-CA';
  const availableLocales = ['en-CA', 'fr-CA'];
  
  function handleLanguageChange(event: CustomEvent<{ value: string }>) {
    locale = event.detail.value as 'en-CA' | 'fr-CA';
  }
</script>

<eva-language-switcher
  {locale}
  available-locales={JSON.stringify(availableLocales)}
  use:forwardEvents={['change']}
  on:change={handleLanguageChange}
/>
```

## Dialog & Modal Components

### Controlled Dialog

```svelte
<script lang="ts">
  let dialogOpen = false;
  
  function openDialog() {
    dialogOpen = true;
  }
  
  function closeDialog() {
    dialogOpen = false;
  }
  
  function confirmAction() {
    console.log('Action confirmed');
    closeDialog();
  }
</script>

<eva-gc-button on:click={openDialog}>Open Dialog</eva-gc-button>

<eva-dialog open={dialogOpen} on:close={closeDialog} modal>
  <eva-dialog-header>
    <eva-dialog-title>Confirm Action</eva-dialog-title>
    <eva-dialog-description>
      Are you sure you want to proceed? This action cannot be undone.
    </eva-dialog-description>
  </eva-dialog-header>
  
  <eva-dialog-footer>
    <eva-button variant="outline" on:click={closeDialog}>Cancel</eva-button>
    <eva-gc-button variant="primary" on:click={confirmAction}>Confirm</eva-gc-button>
  </eva-dialog-footer>
</eva-dialog>
```

### Drawer Component

```svelte
<script lang="ts">
  let drawerOpen = false;
</script>

<eva-button on:click={() => drawerOpen = true}>Open Menu</eva-button>

<eva-drawer open={drawerOpen} on:close={() => drawerOpen = false} side="left">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</eva-drawer>
```

## Tabs Navigation

```svelte
<script lang="ts">
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  let activeTab = 'profile';
</script>

<eva-tabs use:bind={{ value: activeTab, onUpdate: (v) => activeTab = v }}>
  <eva-tabs-list>
    <eva-tabs-trigger value="profile">Profile</eva-tabs-trigger>
    <eva-tabs-trigger value="settings">Settings</eva-tabs-trigger>
    <eva-tabs-trigger value="notifications">Notifications</eva-tabs-trigger>
  </eva-tabs-list>
  
  <eva-tabs-content value="profile">
    <h2>Profile Information</h2>
    <!-- Profile form -->
  </eva-tabs-content>
  
  <eva-tabs-content value="settings">
    <h2>Account Settings</h2>
    <!-- Settings form -->
  </eva-tabs-content>
  
  <eva-tabs-content value="notifications">
    <h2>Notification Preferences</h2>
    <!-- Notifications settings -->
  </eva-tabs-content>
</eva-tabs>
```

## Chat Interface

```svelte
<script lang="ts">
  import { forwardEvents } from '@eva-suite/sovereign-ui-svelte';
  
  interface Message {
    id: number;
    text: string;
    sender: string;
    role: 'user' | 'assistant';
    timestamp: string;
  }
  
  let messages: Message[] = [
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'Assistant',
      role: 'assistant',
      timestamp: new Date().toISOString()
    }
  ];
  
  function handleSendMessage(event: CustomEvent<{ message: string }>) {
    const newMessage: Message = {
      id: messages.length + 1,
      text: event.detail.message,
      sender: 'User',
      role: 'user',
      timestamp: new Date().toISOString()
    };
    messages = [...messages, newMessage];
    
    // Simulate assistant response
    setTimeout(() => {
      messages = [...messages, {
        id: messages.length + 1,
        text: 'I understand. Let me help you with that.',
        sender: 'Assistant',
        role: 'assistant',
        timestamp: new Date().toISOString()
      }];
    }, 1000);
  }
</script>

<eva-chat-panel 
  locale="en-CA"
  placeholder="Type your message..."
  show-language-switcher
  use:forwardEvents={['sendMessage']}
  on:sendMessage={handleSendMessage}
>
  {#each messages as msg (msg.id)}
    <eva-chat-message
      message={msg.text}
      sender={msg.sender}
      role={msg.role}
      timestamp={msg.timestamp}
    />
  {/each}
</eva-chat-panel>
```

## Data Tables

```svelte
<script lang="ts">
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Editor' }
  ];
  
  function editUser(user: typeof users[0]) {
    console.log('Editing user:', user);
  }
</script>

<eva-table>
  <eva-table-header>
    <eva-table-row>
      <eva-table-head>Name</eva-table-head>
      <eva-table-head>Email</eva-table-head>
      <eva-table-head>Role</eva-table-head>
      <eva-table-head>Actions</eva-table-head>
    </eva-table-row>
  </eva-table-header>
  <eva-table-body>
    {#each users as user (user.id)}
      <eva-table-row>
        <eva-table-cell>{user.name}</eva-table-cell>
        <eva-table-cell>{user.email}</eva-table-cell>
        <eva-table-cell>
          <eva-badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
            {user.role}
          </eva-badge>
        </eva-table-cell>
        <eva-table-cell>
          <eva-button variant="outline" size="sm" on:click={() => editUser(user)}>
            Edit
          </eva-button>
        </eva-table-cell>
      </eva-table-row>
    {/each}
  </eva-table-body>
</eva-table>
```

## SvelteKit Integration

### SSR Compatibility

Web components require client-side rendering. Import conditionally:

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  
  if (browser) {
    import('@eva-suite/sovereign-ui');
  }
  
  // Alternative: use onMount
  onMount(async () => {
    await import('@eva-suite/sovereign-ui');
  });
</script>

<slot />
```

### Page Load Data

```typescript
// src/routes/+page.ts
export const ssr = false; // Disable SSR for pages using web components
```

### Dynamic Routes

```svelte
<!-- src/routes/users/[id]/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  export let data: PageData;
  
  let username = data.user.name;
  let email = data.user.email;
</script>

<form on:submit|preventDefault={handleSubmit}>
  <eva-label>Name</eva-label>
  <eva-input use:bind={{ value: username, onUpdate: (v) => username = v }} />
  
  <eva-label>Email</eva-label>
  <eva-input use:bind={{ value: email, onUpdate: (v) => email = v }} type="email" />
  
  <eva-gc-button type="submit" variant="primary">Update</eva-gc-button>
</form>
```

## Stores Integration

### Writable Stores

```svelte
<script lang="ts">
  import { writable } from 'svelte/store';
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  const searchQuery = writable('');
  
  $: console.log('Search query:', $searchQuery);
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

### Derived Stores

```svelte
<script lang="ts">
  import { writable, derived } from 'svelte/store';
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  const users = writable([...]);
  const searchQuery = writable('');
  
  const filteredUsers = derived(
    [users, searchQuery],
    ([$users, $searchQuery]) => 
      $users.filter(user => 
        user.name.toLowerCase().includes($searchQuery.toLowerCase())
      )
  );
</script>

<eva-input use:bind={{ value: $searchQuery, onUpdate: (v) => searchQuery.set(v) }} />

<eva-table>
  <eva-table-body>
    {#each $filteredUsers as user (user.id)}
      <eva-table-row>
        <eva-table-cell>{user.name}</eva-table-cell>
      </eva-table-row>
    {/each}
  </eva-table-body>
</eva-table>
```

### Custom Stores

```typescript
// stores/form.ts
import { writable } from 'svelte/store';

export interface FormData {
  username: string;
  email: string;
  acceptTerms: boolean;
}

function createFormStore() {
  const { subscribe, set, update } = writable<FormData>({
    username: '',
    email: '',
    acceptTerms: false
  });
  
  return {
    subscribe,
    updateField: (field: keyof FormData, value: any) =>
      update(data => ({ ...data, [field]: value })),
    reset: () => set({ username: '', email: '', acceptTerms: false }),
    submit: () => {
      // Submit logic
    }
  };
}

export const formStore = createFormStore();
```

## Form Validation

```svelte
<script lang="ts">
  import { bind } from '@eva-suite/sovereign-ui-svelte';
  
  let email = '';
  let emailError = '';
  
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError = emailRegex.test(email) ? '' : 'Invalid email address';
  }
</script>

<eva-label for="email">Email</eva-label>
<eva-input 
  id="email"
  use:bind={{ value: email, onUpdate: (v) => { email = v; emailError = ''; } }}
  type="email"
  on:blur={validateEmail}
  aria-invalid={!!emailError}
  aria-describedby={emailError ? 'email-error' : undefined}
/>

{#if emailError}
  <span id="email-error" role="alert" style="color: red;">
    {emailError}
  </span>
{/if}
```

## Accessibility Best Practices

### Focus Management

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  
  let inputElement: HTMLElement;
  
  onMount(() => {
    inputElement?.focus();
  });
</script>

<eva-input bind:this={inputElement} placeholder="Auto-focused" />
```

### Keyboard Navigation

```svelte
<script lang="ts">
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeDialog();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<eva-dialog open={dialogOpen}>
  <!-- Dialog content -->
</eva-dialog>
```

## Performance Optimization

### Component Lazy Loading

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  
  let CalendarComponent: any;
  
  onMount(async () => {
    // Lazy load heavy components
    await import('@eva-suite/sovereign-ui');
    CalendarComponent = (await import('$lib/Calendar.svelte')).default;
  });
</script>

{#if CalendarComponent}
  <svelte:component this={CalendarComponent} />
{:else}
  <eva-skeleton count="3" />
{/if}
```

### Reactive Statements

```svelte
<script lang="ts">
  let count = 0;
  
  // Only recomputes when count changes
  $: doubled = count * 2;
  $: console.log('Count changed:', count);
</script>

<eva-slider use:bind={{ value: count, onUpdate: (v) => count = v }} />
<p>Count: {count}, Doubled: {doubled}</p>
```

## Theming

```svelte
<script lang="ts">
  const customTheme = {
    '--eva-primary': '#1E3A8A',
    '--eva-secondary': '#64748B',
    '--eva-success': '#059669',
    '--eva-error': '#DC2626'
  };
</script>

<div style={Object.entries(customTheme).map(([k, v]) => `${k}: ${v}`).join('; ')}>
  <eva-gc-button variant="primary">Themed Button</eva-gc-button>
</div>
```

## Complete Component List

All 49 components available with Svelte actions:

### GC Components (4)
`eva-gc-button`, `eva-gc-header`, `eva-gc-footer`, `eva-language-switcher`

### Form Components (9)
`eva-input`, `eva-textarea`, `eva-checkbox`, `eva-switch`, `eva-select`, `eva-select-item`, `eva-radio-group`, `eva-radio-group-item`, `eva-slider`, `eva-label`, `eva-input-otp`

### Dialog Components (8)
`eva-dialog`, `eva-alert-dialog`, `eva-drawer`, `eva-sheet`

### Layout Components (10)
`eva-tabs`, `eva-accordion`, `eva-card`, `eva-page-shell`, `eva-container`, `eva-hero-banner`, `eva-skip-link`

### Navigation Components (4)
`eva-breadcrumb`, `eva-dropdown-menu`, `eva-context-menu`, `eva-menubar`

### UI Components (9)
`eva-button`, `eva-badge`, `eva-alert`, `eva-tooltip`, `eva-popover`, `eva-separator`, `eva-progress`, `eva-skeleton`, `eva-aspect-ratio`

### Advanced Components (9)
`eva-chat-panel`, `eva-chat-message`, `eva-calendar`, `eva-carousel`, `eva-pagination`, `eva-scroll-area`, `eva-table`, `eva-avatar`, `eva-hover-card`, `eva-toggle`, `eva-collapsible`

### ESDC Components (1)
`eva-program-card`

## Resources

- [NPM Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-svelte)
- [GitHub Repository](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot)
- [Component Demos](../../apps/demo)
- [Core Web Components](https://www.npmjs.com/package/@eva-suite/sovereign-ui)

## License

MIT © EVA Suite Team
