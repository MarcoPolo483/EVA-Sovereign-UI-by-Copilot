import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'duplicate-id', enabled: true },
        ],
      },
      test: 'todo', // Show a11y violations in test UI only
    },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Introduction',
          'Getting Started',
          'GC Design',
          ['Button', 'Header', 'Footer', 'Language Switcher'],
          'UI',
          [
            'Input',
            'Textarea',
            'Select',
            'Checkbox',
            'Radio Group',
            'Switch',
            'Label',
            'Button',
            'Badge',
            'Card',
            'Dialog',
            'Alert',
            'Tabs',
            'Table',
            'Pagination',
          ],
          'Layout',
          'I18n',
          'ESDC',
          'Chat',
          'Accessibility',
          'Design Tokens',
          ['Colors', 'Typography', 'Spacing', 'Shadows'],
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en-CA',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'en-CA', title: 'English (Canada)' },
          { value: 'fr-CA', title: 'Français (Canada)' },
          { value: 'en-US', title: 'English (United States)' },
          { value: 'en-GB', title: 'English (United Kingdom)' },
          { value: 'en-AU', title: 'English (Australia)' },
          { value: 'en-NZ', title: 'English (New Zealand)' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;