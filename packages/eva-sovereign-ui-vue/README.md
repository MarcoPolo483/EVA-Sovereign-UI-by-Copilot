# @eva-suite/sovereign-ui-vue

Vue 3 wrappers for EVA-Sovereign-UI Web Components, providing native Vue integration with v-model support, reactive props, and TypeScript definitions.

## Installation

```bash
npm install @eva-suite/sovereign-ui @eva-suite/sovereign-ui-vue
```

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { EVAGCButton, EVAInput, EVACard } from '@eva-suite/sovereign-ui-vue';

const inputValue = ref('');
const count = ref(0);

const handleClick = () => {
  count.value++;
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

## v-model Support

All input components support Vue's `v-model` directive for two-way data binding:

```vue
<script setup>
import { ref } from 'vue';
import { EVAInput, EVACheckbox, EVASwitch, EVASelect } from '@eva-suite/sovereign-ui-vue';

const text = ref('');
const checked = ref(false);
const enabled = ref(true);
const selected = ref('option1');
</script>

<template>
  <EVAInput v-model="text" />
  <EVACheckbox v-model="checked" />
  <EVASwitch v-model="enabled" />
  <EVASelect v-model="selected">
    <eva-select-item value="option1">Option 1</eva-select-item>
    <eva-select-item value="option2">Option 2</eva-select-item>
  </EVASelect>
</template>
```

## Government of Canada Components

```vue
<template>
  <EVAGCHeader 
    logo-text="Department Name"
    :breadcrumbs="breadcrumbs"
  />
  
  <EVAGCButton 
    variant="primary"
    size="large"
    @click="handleSubmit"
  >
    Submit Application
  </EVAGCButton>
  
  <EVAGCFooter />
</template>
```

## TypeScript Support

All components include full TypeScript definitions:

```vue
<script setup lang="ts">
import type { EVAGCButtonProps } from '@eva-suite/sovereign-ui-vue';

const buttonProps: EVAGCButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};
</script>
```

## Accessibility

All components are WCAG 2.1 AA compliant and include:
- Full keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management

## Features

- **Vue 3 Composition API**: Modern reactive API with `<script setup>` support
- **v-model Support**: Two-way data binding for form components
- **TypeScript**: Full type definitions for all components
- **Tree-shakeable**: Import only the components you need
- **SSR Compatible**: Works with Nuxt 3 and server-side rendering
- **Accessibility**: WCAG 2.1 AA compliant components
- **Government Standards**: GC Design System and Five Eyes compliant

## License

MIT © EVA Suite Team
