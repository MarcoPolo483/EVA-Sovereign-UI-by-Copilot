# @eva-suite/sovereign-ui-vue

Vue 3 wrappers for EVA-Sovereign-UI Web Components, providing native Vue integration with v-model support, reactive props, and TypeScript definitions.

[![npm version](https://img.shields.io/npm/v/@eva-suite/sovereign-ui-vue.svg)](https://www.npmjs.com/package/@eva-suite/sovereign-ui-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ✅ **49 Components** - Complete suite of government-grade UI components
- ✅ **Vue 3 Composition API** - Modern reactive API with `<script setup>` support
- ✅ **v-model Support** - Two-way data binding for all form components
- ✅ **TypeScript** - Full type definitions for all components and props
- ✅ **Tree-shakeable** - Import only the components you need
- ✅ **SSR Compatible** - Works with Nuxt 3 and server-side rendering
- ✅ **WCAG 2.2 AA** - Full accessibility compliance
- ✅ **Government Standards** - GC Design System and Five Eyes compliant
- ✅ **Zero Dependencies** - Lightweight wrapper (19.24 KB CJS, 14.50 KB ESM)

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-vue
```

## Quick Start

### Global Registration (Plugin)

```typescript
// main.ts
import { createApp } from 'vue';
import EVASovereignUI from '@eva-suite/sovereign-ui-vue';
import App from './App.vue';

const app = createApp(App);
app.use(EVASovereignUI);
app.mount('#app');
```

### Component Registration

```typescript
// Individual imports (recommended for tree-shaking)
import { EVAGCButton, EVAInput, EVACard } from '@eva-suite/sovereign-ui-vue';

export default {
  components: {
    EVAGCButton,
    EVAInput,
    EVACard
  }
}
```

## Usage

### Basic Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { EVAGCButton, EVAInput, EVACard } from '@eva-suite/sovereign-ui-vue';

const inputValue = ref('');
const count = ref(0);

const handleClick = () => {
  count.value++;
  console.log('Button clicked!', count.value);
};
</script>

<template>
  <EVACard>
    <h2>Vue 3 Integration Example</h2>
    
    <EVAInput 
      v-model="inputValue"
      placeholder="Enter text..."
      type="text"
    />
    
    <p>Input value: {{ inputValue }}</p>
    
    <EVAGCButton 
      variant="primary"
      @click="handleClick"
    >
      Clicked {{ count }} times
    </EVAGCButton>
  </EVACard>
</template>
```

### Composition API with TypeScript

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { EVAGCButtonProps } from '@eva-suite/sovereign-ui-vue';
import { EVAGCButton, EVAInput } from '@eva-suite/sovereign-ui-vue';

const email = ref('');
const password = ref('');

const isValid = computed(() => 
  email.value.includes('@') && password.value.length >= 8
);

const buttonProps: EVAGCButtonProps = {
  variant: 'primary',
  size: 'large',
  disabled: !isValid.value
};

const handleSubmit = () => {
  console.log('Submitting...', { email: email.value });
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <EVAInput 
      v-model="email"
      type="email"
      placeholder="Email"
      required
    />
    
    <EVAInput 
      v-model="password"
      type="password"
      placeholder="Password"
      required
    />
    
    <EVAGCButton v-bind="buttonProps" @click="handleSubmit">
      Sign In
    </EVAGCButton>
  </form>
</template>
```

## v-model Support

All input components support Vue's `v-model` directive for two-way data binding:

### Form Components

```vue
<script setup lang="ts">
import { ref } from 'vue';
import {
  EVAInput,
  EVATextarea,
  EVACheckbox,
  EVASwitch,
  EVASelect,
  EVASelectItem,
  EVARadioGroup,
  EVARadioGroupItem,
  EVASlider
} from '@eva-suite/sovereign-ui-vue';

const text = ref('');
const description = ref('');
const checked = ref(false);
const enabled = ref(true);
const selected = ref('option1');
const radioValue = ref('a');
const sliderValue = ref(50);
</script>

<template>
  <!-- Text Input -->
  <EVAInput v-model="text" placeholder="Enter text..." />
  
  <!-- Textarea -->
  <EVATextarea v-model="description" :rows="4" />
  
  <!-- Checkbox -->
  <EVACheckbox v-model="checked">Accept terms</EVACheckbox>
  
  <!-- Switch -->
  <EVASwitch v-model="enabled">Enable notifications</EVASwitch>
  
  <!-- Select -->
  <EVASelect v-model="selected">
    <EVASelectItem value="option1">Option 1</EVASelectItem>
    <EVASelectItem value="option2">Option 2</EVASelectItem>
    <EVASelectItem value="option3">Option 3</EVASelectItem>
  </EVASelect>
  
  <!-- Radio Group -->
  <EVARadioGroup v-model="radioValue">
    <EVARadioGroupItem value="a">Option A</EVARadioGroupItem>
    <EVARadioGroupItem value="b">Option B</EVARadioGroupItem>
  </EVARadioGroup>
  
  <!-- Slider -->
  <EVASlider v-model="sliderValue" :min="0" :max="100" />
</template>
```

### Custom v-model Events

```vue
<script setup>
import { ref } from 'vue';

const value = ref('');

// Listen to update:modelValue event
const handleInput = (newValue) => {
  console.log('Value changed:', newValue);
};
</script>

<template>
  <EVAInput 
    v-model="value"
    @update:modelValue="handleInput"
  />
</template>
```

## Government of Canada Components

### GC Header & Footer

```vue
<script setup lang="ts">
import { EVAGCHeader, EVAGCFooter } from '@eva-suite/sovereign-ui-vue';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Current Page' }
];
</script>

<template>
  <EVAGCHeader 
    logo-text="Department Name"
    app-name="My Application"
    :breadcrumbs="breadcrumbs"
    lang="en-CA"
  />
  
  <!-- Your content -->
  
  <EVAGCFooter />
</template>
```

### GC Buttons

```vue
<template>
  <!-- Primary Action -->
  <EVAGCButton variant="primary" size="large">
    Submit Application
  </EVAGCButton>
  
  <!-- Secondary Action -->
  <EVAGCButton variant="secondary">
    Save as Draft
  </EVAGCButton>
  
  <!-- Danger Action -->
  <EVAGCButton variant="danger" @click="handleDelete">
    Delete Record
  </EVAGCButton>
  
  <!-- Disabled State -->
  <EVAGCButton variant="primary" disabled>
    Processing...
  </EVAGCButton>
  
  <!-- Loading State -->
  <EVAGCButton variant="primary" loading>
    Loading...
  </EVAGCButton>
</template>
```

### Language Switcher

```vue
<script setup>
import { ref } from 'vue';
import { EVALanguageSwitcher } from '@eva-suite/sovereign-ui-vue';

const currentLocale = ref('en-CA');

const handleLanguageChange = (event) => {
  currentLocale.value = event.detail.locale;
  console.log('Language changed to:', currentLocale.value);
  
  // Update application locale
  // ...
};
</script>

<template>
  <EVALanguageSwitcher 
    :locale="currentLocale"
    :locales="['en-CA', 'fr-CA']"
    @languageChange="handleLanguageChange"
  />
</template>
```

## Advanced Components

### Dialog

```vue
<script setup>
import { ref } from 'vue';
import {
  EVADialog,
  EVADialogHeader,
  EVADialogTitle,
  EVADialogDescription,
  EVADialogFooter,
  EVAGCButton
} from '@eva-suite/sovereign-ui-vue';

const isOpen = ref(false);

const handleConfirm = () => {
  console.log('Confirmed!');
  isOpen.value = false;
};
</script>

<template>
  <EVAGCButton @click="isOpen = true">
    Open Dialog
  </EVAGCButton>

  <EVADialog :open="isOpen" @close="isOpen = false">
    <EVADialogHeader>
      <EVADialogTitle>Confirm Action</EVADialogTitle>
      <EVADialogDescription>
        Are you sure you want to proceed?
      </EVADialogDescription>
    </EVADialogHeader>
    
    <div class="dialog-content">
      <p>This action cannot be undone.</p>
    </div>
    
    <EVADialogFooter>
      <EVAGCButton variant="secondary" @click="isOpen = false">
        Cancel
      </EVAGCButton>
      <EVAGCButton variant="primary" @click="handleConfirm">
        Confirm
      </EVAGCButton>
    </EVADialogFooter>
  </EVADialog>
</template>
```

### Tabs

```vue
<script setup>
import { ref } from 'vue';
import {
  EVATabs,
  EVATabsList,
  EVATabsTrigger,
  EVATabsContent
} from '@eva-suite/sovereign-ui-vue';

const activeTab = ref('profile');
</script>

<template>
  <EVATabs v-model="activeTab">
    <EVATabsList>
      <EVATabsTrigger value="profile">Profile</EVATabsTrigger>
      <EVATabsTrigger value="settings">Settings</EVATabsTrigger>
      <EVATabsTrigger value="security">Security</EVATabsTrigger>
    </EVATabsList>
    
    <EVATabsContent value="profile">
      <h3>Profile Information</h3>
      <p>Manage your profile details here.</p>
    </EVATabsContent>
    
    <EVATabsContent value="settings">
      <h3>Application Settings</h3>
      <p>Configure your preferences.</p>
    </EVATabsContent>
    
    <EVATabsContent value="security">
      <h3>Security Settings</h3>
      <p>Update your security options.</p>
    </EVATabsContent>
  </EVATabs>
</template>
```

### Accordion

```vue
<script setup>
import {
  EVAAccordion,
  EVAAccordionItem
} from '@eva-suite/sovereign-ui-vue';
</script>

<template>
  <EVAAccordion type="single" collapsible>
    <EVAAccordionItem value="item-1">
      <template #trigger>
        <h3>Frequently Asked Question 1</h3>
      </template>
      <template #content>
        <p>Answer to the first question goes here...</p>
      </template>
    </EVAAccordionItem>
    
    <EVAAccordionItem value="item-2">
      <template #trigger>
        <h3>Frequently Asked Question 2</h3>
      </template>
      <template #content>
        <p>Answer to the second question goes here...</p>
      </template>
    </EVAAccordionItem>
  </EVAAccordion>
</template>
```

### Chat Panel

```vue
<script setup>
import { ref } from 'vue';
import { EVAChatPanel } from '@eva-suite/sovereign-ui-vue';

const messages = ref([
  {
    role: 'assistant',
    content: 'Hello! How can I help you today?',
    timestamp: new Date().toISOString()
  }
]);

const loading = ref(false);

const handleMessage = (event) => {
  const userMessage = event.detail.content;
  
  messages.value.push({
    role: 'user',
    content: userMessage,
    timestamp: new Date().toISOString()
  });
  
  loading.value = true;
  
  // Simulate API call
  setTimeout(() => {
    messages.value.push({
      role: 'assistant',
      content: 'Thank you for your message! This is a demo response.',
      timestamp: new Date().toISOString()
    });
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <EVAChatPanel 
    :messages="messages"
    :loading="loading"
    assistant-name="EVA Assistant"
    @sendMessage="handleMessage"
  />
</template>
```

## TypeScript Support

All components include full TypeScript definitions with prop interfaces, event types, and type guards.

### Prop Types

```typescript
import type {
  EVAGCButtonProps,
  EVAInputProps,
  EVADialogProps,
  EVATabsProps,
  ComponentProps
} from '@eva-suite/sovereign-ui-vue';

const buttonProps: EVAGCButtonProps = {
  variant: 'primary',
  size: 'large',
  disabled: false,
  loading: false
};

const inputProps: EVAInputProps = {
  modelValue: '',
  type: 'email',
  placeholder: 'Enter email...',
  required: true
};
```

### Event Types

```typescript
import type {
  EVAChangeEvent,
  EVAClickEvent,
  EVAInputEvent,
  EVASubmitEvent
} from '@eva-suite/sovereign-ui-vue';

const handleChange = (event: EVAChangeEvent) => {
  console.log('Value changed:', event.detail?.value);
};

const handleClick = (event: EVAClickEvent) => {
  console.log('Button clicked');
};

const handleInput = (event: EVAInputEvent) => {
  console.log('Input value:', event.detail?.value);
};
```

### Component Refs

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { EVAInput } from '@eva-suite/sovereign-ui-vue';

const inputRef = ref<InstanceType<typeof EVAInput>>();

onMounted(() => {
  // Access the native element
  const element = inputRef.value?.$el;
  console.log('Input element:', element);
});
</script>

<template>
  <EVAInput ref="inputRef" v-model="value" />
</template>
```

## Nuxt 3 Integration

### Plugin Setup

```typescript
// plugins/eva-sovereign-ui.ts
import EVASovereignUI from '@eva-suite/sovereign-ui-vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(EVASovereignUI);
});
```

### Component Auto-imports

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/node_modules/@eva-suite/sovereign-ui-vue/dist',
      extensions: ['js'],
      prefix: ''
    }
  ]
});
```

### SSR Compatibility

All components are SSR-compatible and work seamlessly with Nuxt 3:

```vue
<template>
  <div>
    <ClientOnly>
      <EVAChatPanel :messages="messages" @sendMessage="handleMessage" />
    </ClientOnly>
  </div>
</template>
```

## Accessibility

All components are WCAG 2.2 AA compliant and include:

- ✅ **Full Keyboard Navigation** - Arrow keys, Tab, Enter, Space, Escape
- ✅ **Screen Reader Support** - ARIA labels, roles, and live regions
- ✅ **Focus Management** - Visible focus indicators and focus trapping
- ✅ **High Contrast Mode** - Compatible with Windows High Contrast
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion`
- ✅ **Color Contrast** - Meets AAA standards (7:1 for text)

```vue
<template>
  <!-- Accessible form with proper labeling -->
  <form @submit.prevent="handleSubmit">
    <EVALabel for="email-input">Email Address</EVALabel>
    <EVAInput 
      id="email-input"
      v-model="email"
      type="email"
      aria-required="true"
      aria-describedby="email-help"
    />
    <span id="email-help">We'll never share your email.</span>
    
    <EVAGCButton type="submit" aria-label="Submit form">
      Submit
    </EVAGCButton>
  </form>
</template>
```

## Component Catalog

### Form Components (8)
- `EVAInput` - Text input with v-model
- `EVATextarea` - Multi-line text input
- `EVACheckbox` - Checkbox with v-model
- `EVASwitch` - Toggle switch
- `EVASelect` / `EVASelectItem` - Dropdown select
- `EVARadioGroup` / `EVARadioGroupItem` - Radio buttons
- `EVASlider` - Range slider
- `EVALabel` - Form label

### UI Components (20+)
- `EVACard` / `EVACardHeader` / `EVACardTitle` / `EVACardDescription` / `EVACardContent` / `EVACardFooter`
- `EVADialog` / `EVADialogHeader` / `EVADialogTitle` / `EVADialogDescription` / `EVADialogFooter`
- `EVAAlert` / `EVAAlertDialog`
- `EVATabs` / `EVATabsList` / `EVATabsTrigger` / `EVATabsContent`
- `EVAAccordion` / `EVAAccordionItem`
- `EVADrawer` / `EVASheet`
- `EVATooltip` / `EVAPopover` / `EVAHoverCard`
- `EVABadge` / `EVAProgress` / `EVASkeleton` / `EVAAspectRatio`
- `EVAAvatar` / `EVAAvatarImage` / `EVAAvatarFallback`
- `EVASeparator` / `EVAScrollArea`

### Navigation Components (10+)
- `EVABreadcrumb` / `EVABreadcrumbList` / `EVABreadcrumbItem` / `EVABreadcrumbLink`
- `EVAMenubar` / `EVAMenubarMenu` / `EVAMenubarItem`
- `EVADropdownMenu` / `EVADropdownMenuItem` / `EVAContextMenu` / `EVAContextMenuItem`
- `EVAPagination`

### Government of Canada Components (4)
- `EVAGCHeader` - Official GC header with logo and navigation
- `EVAGCFooter` - Official GC footer with copyright
- `EVAGCButton` - GC Design System button
- `EVALanguageSwitcher` - EN/FR language toggle

### Custom Components (5)
- `EVAChatPanel` / `EVAChatMessage` - Government chat interface
- `EVAPageShell` - Page layout template
- `EVAHeroBanner` - Hero section
- `EVAContainer` - Content container
- `EVASkipLink` - Accessibility skip navigation

### Advanced Components (5)
- `EVATable` / `EVATableHeader` / `EVATableBody` / `EVATableRow` / `EVATableHead` / `EVATableCell`
- `EVACalendar` - Date picker
- `EVACarousel` - Image carousel
- `EVACollapsible` - Expandable content
- `EVAToggleGroup` / `EVAToggle`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Bundle Size**: 19.24 KB CJS, 14.50 KB ESM (gzipped)
- **Tree-shakeable**: Import only what you need
- **Zero Runtime Dependencies**: Pure Vue 3 wrappers
- **Lazy Loading**: Use dynamic imports for code splitting

```typescript
// Lazy load components
const EVAChatPanel = defineAsyncComponent(() =>
  import('@eva-suite/sovereign-ui-vue').then(m => m.EVAChatPanel)
);
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

MIT © EVA Suite Team

## Links

- [GitHub Repository](https://github.com/eva-suite/EVA-Sovereign-UI-by-Copilot)
- [Documentation](https://eva-suite.github.io/EVA-Sovereign-UI-by-Copilot)
- [Issue Tracker](https://github.com/eva-suite/EVA-Sovereign-UI-by-Copilot/issues)
- [NPM Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-vue)

---

**Made with ❤️ for Government of Canada by the EVA Suite Team**
