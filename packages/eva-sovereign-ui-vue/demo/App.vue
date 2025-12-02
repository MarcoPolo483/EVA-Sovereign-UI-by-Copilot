<script setup lang="ts">
import { ref } from 'vue';
import {
  EVAGCHeader,
  EVAGCFooter,
  EVAGCButton,
  EVACard,
  EVACardHeader,
  EVACardTitle,
  EVACardDescription,
  EVACardContent,
  EVACardFooter,
  EVAInput,
  EVATextarea,
  EVACheckbox,
  EVASwitch,
  EVASelect,
  EVASelectItem,
  EVARadioGroup,
  EVARadioGroupItem,
  EVASlider,
  EVADialog,
  EVADialogHeader,
  EVADialogTitle,
  EVADialogDescription,
  EVADialogFooter,
  EVATabs,
  EVATabsList,
  EVATabsTrigger,
  EVATabsContent,
  EVAAccordion,
  EVAAccordionItem,
  EVAAlert,
  EVABadge,
  EVAProgress,
  EVATooltip,
  EVASkeleton,
  EVABreadcrumb,
  EVABreadcrumbList,
  EVABreadcrumbItem,
  EVABreadcrumbLink,
  EVAPagination,
  EVALanguageSwitcher,
  EVAChatPanel,
} from '@eva-suite/sovereign-ui-vue';

// Form state
const textInput = ref('');
const emailInput = ref('');
const textarea = ref('');
const checkbox = ref(false);
const switchValue = ref(true);
const select = ref('option1');
const radioGroup = ref('option1');
const slider = ref(50);

// Dialog state
const dialogOpen = ref(false);

// Tab state
const activeTab = ref('tab1');

// Pagination state
const currentPage = ref(1);

// Locale state
const locale = ref('en-CA');

// Chat state
const chatMessages = ref([
  { role: 'assistant' as const, content: 'Welcome! How can I help you today?', timestamp: new Date().toISOString() },
]);
const chatLoading = ref(false);

const handleSubmit = () => {
  console.log('Form submitted:', {
    textInput: textInput.value,
    emailInput: emailInput.value,
    textarea: textarea.value,
    checkbox: checkbox.value,
    switch: switchValue.value,
    select: select.value,
    radioGroup: radioGroup.value,
    slider: slider.value,
  });
};

const handleChatMessage = (event: Event) => {
  const content = (event as any).detail?.content;
  if (content) {
    chatMessages.value.push({
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    });
    
    chatLoading.value = true;
    setTimeout(() => {
      chatMessages.value.push({
        role: 'assistant',
        content: 'Thank you for your message! This is a demo response.',
        timestamp: new Date().toISOString(),
      });
      chatLoading.value = false;
    }, 1000);
  }
};

const handleLanguageChange = (event: Event) => {
  const newLocale = (event as any).detail?.locale;
  if (newLocale) {
    locale.value = newLocale;
    console.log('Language changed to:', newLocale);
  }
};
</script>

<template>
  <div class="demo-app">
    <!-- GC Header -->
    <EVAGCHeader 
      logo-text="Demo Application"
      app-name="EVA Sovereign UI Vue Demo"
      :lang="locale"
    />

    <main class="demo-content">
      <!-- Hero Section -->
      <section class="hero">
        <h1>EVA Sovereign UI Vue 3 Demo</h1>
        <p>Complete demonstration of all Vue components with v-model support, reactive props, and TypeScript definitions.</p>
        
        <EVALanguageSwitcher 
          :locale="locale"
          @languageChange="handleLanguageChange"
        />
      </section>

      <!-- Breadcrumb -->
      <EVABreadcrumb>
        <EVABreadcrumbList>
          <EVABreadcrumbItem>
            <EVABreadcrumbLink href="/">Home</EVABreadcrumbLink>
          </EVABreadcrumbItem>
          <EVABreadcrumbItem>
            <EVABreadcrumbLink href="/demos">Demos</EVABreadcrumbLink>
          </EVABreadcrumbItem>
          <EVABreadcrumbItem>
            <span>Vue 3</span>
          </EVABreadcrumbItem>
        </EVABreadcrumbList>
      </EVABreadcrumb>

      <!-- Alerts -->
      <EVAAlert variant="default">
        <strong>Info:</strong> This is an informational alert.
      </EVAAlert>

      <EVAAlert variant="success">
        <strong>Success:</strong> Operation completed successfully!
      </EVAAlert>

      <EVAAlert variant="warning">
        <strong>Warning:</strong> Please review your input.
      </EVAAlert>

      <!-- Tabs -->
      <EVATabs v-model="activeTab">
        <EVATabsList>
          <EVATabsTrigger value="tab1">Form Components</EVATabsTrigger>
          <EVATabsTrigger value="tab2">UI Components</EVATabsTrigger>
          <EVATabsTrigger value="tab3">Chat Demo</EVATabsTrigger>
        </EVATabsList>

        <EVATabsContent value="tab1">
          <EVACard>
            <EVACardHeader>
              <EVACardTitle>Form Components with v-model</EVACardTitle>
              <EVACardDescription>
                All form components support Vue's v-model directive for two-way data binding.
              </EVACardDescription>
            </EVACardHeader>

            <EVACardContent>
              <form @submit.prevent="handleSubmit">
                <!-- Text Input -->
                <div class="form-field">
                  <label>Text Input:</label>
                  <EVAInput 
                    v-model="textInput"
                    type="text"
                    placeholder="Enter text..."
                  />
                  <p class="value-display">Value: {{ textInput }}</p>
                </div>

                <!-- Email Input -->
                <div class="form-field">
                  <label>Email Input:</label>
                  <EVAInput 
                    v-model="emailInput"
                    type="email"
                    placeholder="Enter email..."
                  />
                  <p class="value-display">Value: {{ emailInput }}</p>
                </div>

                <!-- Textarea -->
                <div class="form-field">
                  <label>Textarea:</label>
                  <EVATextarea 
                    v-model="textarea"
                    placeholder="Enter multi-line text..."
                    :rows="4"
                  />
                  <p class="value-display">Value: {{ textarea }}</p>
                </div>

                <!-- Checkbox -->
                <div class="form-field">
                  <label>
                    <EVACheckbox v-model="checkbox" />
                    Accept terms and conditions
                  </label>
                  <p class="value-display">Checked: {{ checkbox }}</p>
                </div>

                <!-- Switch -->
                <div class="form-field">
                  <label>
                    <EVASwitch v-model="switchValue" />
                    Enable notifications
                  </label>
                  <p class="value-display">Enabled: {{ switchValue }}</p>
                </div>

                <!-- Select -->
                <div class="form-field">
                  <label>Select:</label>
                  <EVASelect v-model="select">
                    <EVASelectItem value="option1">Option 1</EVASelectItem>
                    <EVASelectItem value="option2">Option 2</EVASelectItem>
                    <EVASelectItem value="option3">Option 3</EVASelectItem>
                  </EVASelect>
                  <p class="value-display">Selected: {{ select }}</p>
                </div>

                <!-- Radio Group -->
                <div class="form-field">
                  <label>Radio Group:</label>
                  <EVARadioGroup v-model="radioGroup">
                    <EVARadioGroupItem value="option1">Option A</EVARadioGroupItem>
                    <EVARadioGroupItem value="option2">Option B</EVARadioGroupItem>
                    <EVARadioGroupItem value="option3">Option C</EVARadioGroupItem>
                  </EVARadioGroup>
                  <p class="value-display">Selected: {{ radioGroup }}</p>
                </div>

                <!-- Slider -->
                <div class="form-field">
                  <label>Slider:</label>
                  <EVASlider 
                    v-model="slider"
                    :min="0"
                    :max="100"
                    :step="1"
                  />
                  <p class="value-display">Value: {{ slider }}</p>
                </div>

                <!-- Progress -->
                <div class="form-field">
                  <label>Progress (based on slider value):</label>
                  <EVAProgress :value="slider" :max="100" />
                </div>
              </form>
            </EVACardContent>

            <EVACardFooter>
              <EVAGCButton variant="primary" @click="handleSubmit">
                Submit Form
              </EVAGCButton>
              <EVAGCButton variant="secondary" @click="dialogOpen = true">
                Open Dialog
              </EVAGCButton>
            </EVACardFooter>
          </EVACard>
        </EVATabsContent>

        <EVATabsContent value="tab2">
          <EVACard>
            <EVACardHeader>
              <EVACardTitle>UI Components</EVACardTitle>
              <EVACardDescription>
                Display and navigation components
              </EVACardDescription>
            </EVACardHeader>

            <EVACardContent>
              <!-- Badges -->
              <div class="form-field">
                <label>Badges:</label>
                <div class="badge-group">
                  <EVABadge variant="default">Default</EVABadge>
                  <EVABadge variant="secondary">Secondary</EVABadge>
                  <EVABadge variant="destructive">Destructive</EVABadge>
                  <EVABadge variant="outline">Outline</EVABadge>
                </div>
              </div>

              <!-- Skeleton -->
              <div class="form-field">
                <label>Skeleton Loading:</label>
                <EVASkeleton class="skeleton-demo" />
                <EVASkeleton class="skeleton-demo" />
              </div>

              <!-- Tooltips -->
              <div class="form-field">
                <label>Tooltip:</label>
                <EVATooltip content="This is a helpful tooltip">
                  <EVAGCButton variant="secondary">Hover me</EVAGCButton>
                </EVATooltip>
              </div>

              <!-- Accordion -->
              <div class="form-field">
                <label>Accordion:</label>
                <EVAAccordion type="single" collapsible>
                  <EVAAccordionItem value="item-1">
                    <template #trigger>Section 1</template>
                    <template #content>Content for section 1</template>
                  </EVAAccordionItem>
                  <EVAAccordionItem value="item-2">
                    <template #trigger>Section 2</template>
                    <template #content>Content for section 2</template>
                  </EVAAccordionItem>
                </EVAAccordion>
              </div>

              <!-- Pagination -->
              <div class="form-field">
                <label>Pagination:</label>
                <EVAPagination 
                  :current="currentPage"
                  :total="100"
                  :page-size="10"
                  @change="(e) => currentPage = e.detail.page"
                />
              </div>
            </EVACardContent>
          </EVACard>
        </EVATabsContent>

        <EVATabsContent value="tab3">
          <EVACard>
            <EVACardHeader>
              <EVACardTitle>Chat Panel Demo</EVACardTitle>
              <EVACardDescription>
                Interactive chat component with message history
              </EVACardDescription>
            </EVACardHeader>

            <EVACardContent>
              <EVAChatPanel 
                :messages="chatMessages"
                :loading="chatLoading"
                assistant-name="EVA Assistant"
                @sendMessage="handleChatMessage"
              />
            </EVACardContent>
          </EVACard>
        </EVATabsContent>
      </EVATabs>
    </main>

    <!-- Dialog -->
    <EVADialog :open="dialogOpen" @close="dialogOpen = false">
      <EVADialogHeader>
        <EVADialogTitle>Dialog Example</EVADialogTitle>
        <EVADialogDescription>
          This is an example of a modal dialog component.
        </EVADialogDescription>
      </EVADialogHeader>

      <div class="dialog-content">
        <p>Dialog content goes here...</p>
      </div>

      <EVADialogFooter>
        <EVAGCButton variant="secondary" @click="dialogOpen = false">
          Cancel
        </EVAGCButton>
        <EVAGCButton variant="primary" @click="dialogOpen = false">
          Confirm
        </EVAGCButton>
      </EVADialogFooter>
    </EVADialog>

    <!-- GC Footer -->
    <EVAGCFooter />
  </div>
</template>

<style scoped>
.demo-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.hero p {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.form-field {
  margin-bottom: 1.5rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.value-display {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-family: monospace;
}

.badge-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.skeleton-demo {
  height: 2rem;
  margin-bottom: 0.5rem;
}

.dialog-content {
  padding: 1rem 0;
}
</style>
