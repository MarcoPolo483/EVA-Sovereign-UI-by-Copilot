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
  },
};

export default preview;