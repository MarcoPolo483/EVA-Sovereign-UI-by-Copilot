# Vue Framework Integration

Complete guide for using EVA Sovereign UI components in Vue 3 applications with Composition API.

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-vue
```

## Quick Start

### Global Registration

Register all components globally in your main app file:

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import EVASovereignUI from '@eva-suite/sovereign-ui-vue';
import '@eva-suite/sovereign-ui/styles';

const app = createApp(App);
app.use(EVASovereignUI);
app.mount('#app');
```

### Component Registration

Register individual components for better tree-shaking:

```vue
<script setup lang="ts">
import { EVAGCButton, EVAInput } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <div>
    <EVAInput v-model="name" placeholder="Enter your name" />
    <EVAGCButton variant="primary" @click="handleSubmit">
      Submit
    </EVAGCButton>
  </div>
</template>
```

## TypeScript Support

Full TypeScript support with prop types and event types:

```vue
<script setup lang="ts">
import { EVAInput, EVAGCButton } from '@eva-suite/sovereign-ui-vue';
import type { 
  EVAInputProps, 
  EVAGCButtonProps, 
  EVAChangeEvent 
} from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const email = ref('');

const inputProps: EVAInputProps = {
  type: 'email',
  required: true,
  placeholder: 'Enter email...'
};

const handleChange = (event: EVAChangeEvent) => {
  console.log('Email changed:', event.detail.value);
};
</script>

<template>
  <EVAInput 
    v-bind="inputProps" 
    v-model="email" 
    @change="handleChange" 
  />
</template>
```

## v-model Support

All form components support two-way data binding with `v-model`:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { 
  EVAInput, 
  EVATextarea, 
  EVACheckbox, 
  EVASwitch, 
  EVASelect, 
  EVARadioGroup, 
  EVASlider,
  EVAInputOTP 
} from '@eva-suite/sovereign-ui-vue';

const formData = ref({
  username: '',
  bio: '',
  acceptTerms: false,
  notifications: true,
  country: 'canada',
  language: 'english',
  volume: 50,
  otpCode: ''
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <!-- Text Input -->
    <EVAInput v-model="formData.username" placeholder="Username" />
    
    <!-- Textarea -->
    <EVATextarea v-model="formData.bio" placeholder="Bio" rows="4" />
    
    <!-- Checkbox -->
    <EVACheckbox v-model="formData.acceptTerms">
      I accept the terms and conditions
    </EVACheckbox>
    
    <!-- Switch -->
    <EVASwitch v-model="formData.notifications">
      Enable notifications
    </EVASwitch>
    
    <!-- Select -->
    <EVASelect v-model="formData.country">
      <EVASelectItem value="canada">Canada</EVASelectItem>
      <EVASelectItem value="usa">United States</EVASelectItem>
      <EVASelectItem value="uk">United Kingdom</EVASelectItem>
    </EVASelect>
    
    <!-- Radio Group -->
    <EVARadioGroup v-model="formData.language">
      <EVARadioGroupItem value="english">English</EVARadioGroupItem>
      <EVARadioGroupItem value="french">Français</EVARadioGroupItem>
    </EVARadioGroup>
    
    <!-- Slider -->
    <EVASlider v-model="formData.volume" :min="0" :max="100" />
    <p>Volume: {{ formData.volume }}</p>
    
    <!-- OTP Input -->
    <EVAInputOTP v-model="formData.otpCode" :length="6" />
    
    <EVAGCButton type="submit" variant="primary">Submit</EVAGCButton>
  </form>
</template>
```

## Government of Canada Components

### GC Header with Breadcrumbs

```vue
<script setup lang="ts">
import { EVAGCHeader, EVAGCFooter, EVAContainer } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const breadcrumbs = ref([
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Employment Insurance' }
]);
</script>

<template>
  <EVAGCHeader 
    site-title="Employment and Social Development Canada"
    :breadcrumbs="JSON.stringify(breadcrumbs)"
    locale="en-CA"
    show-language
    show-search
    show-theme
  />
  
  <main>
    <EVAContainer size="lg">
      <h1>Employment Insurance Benefits</h1>
      <!-- Page content -->
    </EVAContainer>
  </main>
  
  <EVAGCFooter locale="en-CA" show-newsletter show-social />
</template>
```

### Language Switcher

```vue
<script setup lang="ts">
import { EVALanguageSwitcher } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';
import type { EVAChangeEvent } from '@eva-suite/sovereign-ui-vue';

const locale = ref<'en-CA' | 'fr-CA'>('en-CA');
const availableLocales = ref(['en-CA', 'fr-CA']);

const handleLanguageChange = (event: EVAChangeEvent) => {
  locale.value = event.detail.value as 'en-CA' | 'fr-CA';
  // Update app locale
};
</script>

<template>
  <EVALanguageSwitcher
    :locale="locale"
    :available-locales="JSON.stringify(availableLocales)"
    @change="handleLanguageChange"
  />
</template>
```

## Dialog & Modal Components

### Controlled Dialog

```vue
<script setup lang="ts">
import { 
  EVADialog, 
  EVADialogHeader, 
  EVADialogTitle, 
  EVADialogDescription, 
  EVADialogFooter,
  EVAGCButton,
  EVAButton
} from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const dialogOpen = ref(false);

const handleConfirm = () => {
  console.log('Confirmed');
  dialogOpen.value = false;
};
</script>

<template>
  <EVAGCButton @click="dialogOpen = true">Open Dialog</EVAGCButton>
  
  <EVADialog :open="dialogOpen" @close="dialogOpen = false" modal>
    <EVADialogHeader>
      <EVADialogTitle>Confirm Action</EVADialogTitle>
      <EVADialogDescription>
        Are you sure you want to proceed? This action cannot be undone.
      </EVADialogDescription>
    </EVADialogHeader>
    
    <EVADialogFooter>
      <EVAButton variant="outline" @click="dialogOpen = false">
        Cancel
      </EVAButton>
      <EVAGCButton variant="primary" @click="handleConfirm">
        Confirm
      </EVAGCButton>
    </EVADialogFooter>
  </EVADialog>
</template>
```

### Drawer Component

```vue
<script setup lang="ts">
import { EVADrawer } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const drawerOpen = ref(false);
</script>

<template>
  <EVAButton @click="drawerOpen = true">Open Menu</EVAButton>
  
  <EVADrawer :open="drawerOpen" @close="drawerOpen = false" side="left">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </EVADrawer>
</template>
```

## Tabs Navigation

```vue
<script setup lang="ts">
import { EVATabs, EVATabsList, EVATabsTrigger, EVATabsContent } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const activeTab = ref('profile');
</script>

<template>
  <EVATabs v-model="activeTab">
    <EVATabsList>
      <EVATabsTrigger value="profile">Profile</EVATabsTrigger>
      <EVATabsTrigger value="settings">Settings</EVATabsTrigger>
      <EVATabsTrigger value="notifications">Notifications</EVATabsTrigger>
    </EVATabsList>
    
    <EVATabsContent value="profile">
      <h2>Profile Information</h2>
      <!-- Profile form -->
    </EVATabsContent>
    
    <EVATabsContent value="settings">
      <h2>Account Settings</h2>
      <!-- Settings form -->
    </EVATabsContent>
    
    <EVATabsContent value="notifications">
      <h2>Notification Preferences</h2>
      <!-- Notifications settings -->
    </EVATabsContent>
  </EVATabs>
</template>
```

## Chat Interface

```vue
<script setup lang="ts">
import { EVAChatPanel, EVAChatMessage } from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

interface Message {
  id: number;
  text: string;
  sender: string;
  role: 'user' | 'assistant';
  timestamp: string;
}

const messages = ref<Message[]>([
  { 
    id: 1, 
    text: 'Hello! How can I help you today?', 
    sender: 'Assistant', 
    role: 'assistant',
    timestamp: new Date().toISOString()
  }
]);

const handleSendMessage = (event: CustomEvent<{ message: string }>) => {
  const newMessage: Message = {
    id: messages.value.length + 1,
    text: event.detail.message,
    sender: 'User',
    role: 'user',
    timestamp: new Date().toISOString()
  };
  messages.value.push(newMessage);
  
  // Simulate assistant response
  setTimeout(() => {
    messages.value.push({
      id: messages.value.length + 1,
      text: 'I understand. Let me help you with that.',
      sender: 'Assistant',
      role: 'assistant',
      timestamp: new Date().toISOString()
    });
  }, 1000);
};
</script>

<template>
  <EVAChatPanel 
    locale="en-CA"
    placeholder="Type your message..."
    show-language-switcher
    @send-message="handleSendMessage"
  >
    <EVAChatMessage
      v-for="msg in messages"
      :key="msg.id"
      :message="msg.text"
      :sender="msg.sender"
      :role="msg.role"
      :timestamp="msg.timestamp"
    />
  </EVAChatPanel>
</template>
```

## Data Tables

```vue
<script setup lang="ts">
import { 
  EVATable, 
  EVATableHeader, 
  EVATableBody, 
  EVATableRow, 
  EVATableHead, 
  EVATableCell,
  EVABadge 
} from '@eva-suite/sovereign-ui-vue';
import { ref } from 'vue';

const users = ref([
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Editor' }
]);
</script>

<template>
  <EVATable>
    <EVATableHeader>
      <EVATableRow>
        <EVATableHead>Name</EVATableHead>
        <EVATableHead>Email</EVATableHead>
        <EVATableHead>Role</EVATableHead>
      </EVATableRow>
    </EVATableHeader>
    <EVATableBody>
      <EVATableRow v-for="user in users" :key="user.id">
        <EVATableCell>{{ user.name }}</EVATableCell>
        <EVATableCell>{{ user.email }}</EVATableCell>
        <EVATableCell>
          <EVABadge :variant="user.role === 'Admin' ? 'default' : 'secondary'">
            {{ user.role }}
          </EVABadge>
        </EVATableCell>
      </EVATableRow>
    </EVATableBody>
  </EVATable>
</template>
```

## Nuxt 3 Integration

### Plugin Setup

Create a Nuxt plugin to register EVA components:

```typescript
// plugins/eva-sovereign-ui.client.ts
import EVASovereignUI from '@eva-suite/sovereign-ui-vue';
import '@eva-suite/sovereign-ui/styles';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(EVASovereignUI);
});
```

### Usage in Pages

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');

const handleSubmit = () => {
  console.log('Form submitted:', name.value);
};
</script>

<template>
  <div>
    <EVAGCHeader site-title="My Nuxt App" />
    
    <main>
      <EVAContainer>
        <h1>Welcome to My Application</h1>
        
        <form @submit.prevent="handleSubmit">
          <EVALabel>Your Name</EVALabel>
          <EVAInput v-model="name" placeholder="Enter your name" />
          <EVAGCButton type="submit" variant="primary">Submit</EVAGCButton>
        </form>
      </EVAContainer>
    </main>
    
    <EVAGCFooter />
  </div>
</template>
```

### SSR Compatibility

EVA components are web components and work with Nuxt's client-side rendering. For SSR pages, use `<ClientOnly>`:

```vue
<template>
  <div>
    <ClientOnly>
      <EVACalendar v-model="selectedDate" />
    </ClientOnly>
  </div>
</template>
```

## Composition API Patterns

### Composables

```typescript
// composables/useForm.ts
import { ref, computed } from 'vue';
import type { Ref } from 'vue';

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const values = ref(initialValues) as Ref<T>;
  const errors = ref<Partial<Record<keyof T, string>>>({});
  
  const isValid = computed(() => 
    Object.keys(errors.value).length === 0
  );
  
  const validate = (field: keyof T, validator: (value: any) => string | null) => {
    const error = validator(values.value[field]);
    if (error) {
      errors.value[field] = error;
    } else {
      delete errors.value[field];
    }
  };
  
  const reset = () => {
    values.value = { ...initialValues };
    errors.value = {};
  };
  
  return {
    values,
    errors,
    isValid,
    validate,
    reset
  };
}
```

Usage:

```vue
<script setup lang="ts">
import { useForm } from '@/composables/useForm';

const { values, errors, validate, isValid } = useForm({
  email: '',
  password: ''
});

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
    ? null 
    : 'Invalid email address';
};
</script>

<template>
  <form>
    <EVAInput 
      v-model="values.email" 
      @blur="validate('email', validateEmail)"
      :error="errors.email"
    />
    <EVAButton :disabled="!isValid">Submit</EVAButton>
  </form>
</template>
```

### Template Refs

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const inputRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
});
</script>

<template>
  <EVAInput ref="inputRef" placeholder="Auto-focused input" />
</template>
```

## Accessibility Best Practices

### Form Labeling

```vue
<template>
  <div>
    <EVALabel for="email">Email Address</EVALabel>
    <EVAInput 
      id="email"
      v-model="email"
      type="email"
      required
      aria-required="true"
      :aria-invalid="hasError"
      :aria-describedby="hasError ? 'email-error' : undefined"
    />
    <span v-if="hasError" id="email-error" role="alert">
      Please enter a valid email address
    </span>
  </div>
</template>
```

### Focus Management

```vue
<script setup lang="ts">
import { ref, watch } from 'vue';

const dialogOpen = ref(false);
const dialogRef = ref<HTMLElement | null>(null);

watch(dialogOpen, (isOpen) => {
  if (isOpen && dialogRef.value) {
    dialogRef.value.focus();
  }
});
</script>

<template>
  <EVADialog ref="dialogRef" :open="dialogOpen" />
</template>
```

## Performance Optimization

### Lazy Loading Components

```vue
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { EVASkeleton } from '@eva-suite/sovereign-ui-vue';

const EVACalendar = defineAsyncComponent({
  loader: () => import('@eva-suite/sovereign-ui-vue').then(m => m.EVACalendar),
  loadingComponent: EVASkeleton,
  delay: 200
});
</script>

<template>
  <Suspense>
    <template #default>
      <EVACalendar v-model="date" />
    </template>
    <template #fallback>
      <EVASkeleton count="3" />
    </template>
  </Suspense>
</template>
```

### Computed Properties

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';

const users = ref([...]);
const searchQuery = ref('');

const filteredUsers = computed(() => 
  users.value.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<template>
  <EVAInput v-model="searchQuery" placeholder="Search users..." />
  <EVATable>
    <EVATableBody>
      <EVATableRow v-for="user in filteredUsers" :key="user.id">
        <!-- ... -->
      </EVATableRow>
    </EVATableBody>
  </EVATable>
</template>
```

## Theming

```vue
<script setup lang="ts">
import { ref } from 'vue';

const customTheme = ref({
  '--eva-primary': '#1E3A8A',
  '--eva-secondary': '#64748B',
  '--eva-success': '#059669',
  '--eva-error': '#DC2626'
});
</script>

<template>
  <div :style="customTheme">
    <EVAGCButton variant="primary">Themed Button</EVAGCButton>
  </div>
</template>
```

## Complete Component List

All 49 components available with full v-model support where applicable:

### GC Components (4)
`EVAGCButton`, `EVAGCHeader`, `EVAGCFooter`, `EVALanguageSwitcher`

### Form Components (9)  
`EVAInput`, `EVATextarea`, `EVACheckbox`, `EVASwitch`, `EVASelect`, `EVASelectItem`, `EVARadioGroup`, `EVARadioGroupItem`, `EVASlider`, `EVALabel`, `EVAInputOTP`

### Dialog Components (13)
`EVADialog`, `EVADialogHeader`, `EVADialogTitle`, `EVADialogDescription`, `EVADialogFooter`, `EVAAlertDialog`, `EVADrawer`, `EVASheet`

### Layout Components (10)
`EVATabs`, `EVAAccordion`, `EVACard`, `EVACardHeader`, `EVACardTitle`, `EVACardContent`, `EVACardFooter`, `EVAPageShell`, `EVAContainer`, `EVAHeroBanner`, `EVASkipLink`

### Navigation Components (4)
`EVABreadcrumb`, `EVADropdownMenu`, `EVAContextMenu`, `EVAMenubar`

### UI Components (9)
`EVAButton`, `EVABadge`, `EVAAlert`, `EVATooltip`, `EVAPopover`, `EVASeparator`, `EVAProgress`, `EVASkeleton`, `EVAAspectRatio`

### Advanced Components (9)
`EVAChatPanel`, `EVAChatMessage`, `EVACalendar`, `EVACarousel`, `EVACarouselItem`, `EVAPagination`, `EVAScrollArea`, `EVATable`, `EVAAvatar`, `EVAHoverCard`, `EVAToggle`, `EVACollapsible`

### ESDC Components (1)
`EVAProgramCard`

## Resources

- [NPM Package](https://www.npmjs.com/package/@eva-suite/sovereign-ui-vue)
- [GitHub Repository](https://github.com/MarcoPolo483/EVA-Sovereign-UI-by-Copilot)
- [Component Demos](../../apps/demo)
- [Core Web Components](https://www.npmjs.com/package/@eva-suite/sovereign-ui)

## License

MIT © EVA Suite Team
