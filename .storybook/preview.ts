import type { Preview } from '@storybook/web-components';

// Global parameters including a11y
const preview: Preview = {
  parameters: {
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'duplicate-id', enabled: true },
        ],
      },
    },
    layout: 'centered',
  },
};

export default preview;
import type { Preview } from '@storybook/web-components-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;