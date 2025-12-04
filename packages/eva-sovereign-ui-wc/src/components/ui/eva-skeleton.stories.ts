import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-skeleton';

const meta: Meta = {
  title: 'UI/Skeleton',
  component: 'eva-skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circle', 'rectangle'],
      description: 'Skeleton variant',
      defaultValue: 'text',
    },
    lines: {
      control: 'number',
      description: 'Number of lines (for text variant)',
      defaultValue: 1,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Loading placeholder with shimmer animation. Supports multiple variants (text, circle, rectangle) with customizable dimensions.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'aria-busy', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Text: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-skeleton variant="text"></eva-skeleton>
    </div>
  `,
};

export const MultipleLines: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-skeleton variant="text" lines="4"></eva-skeleton>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Skeleton with multiple text lines.',
      },
    },
  },
};

export const Circle: Story = {
  render: () => html`
    <eva-skeleton circle width="3rem" height="3rem"></eva-skeleton>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Circular skeleton for avatar placeholders.',
      },
    },
  },
};

export const UserCard: Story = {
  render: () => html`
    <div style="max-width: 400px; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <eva-skeleton circle width="3rem" height="3rem"></eva-skeleton>
        <div style="flex: 1;">
          <eva-skeleton variant="text" width="60%"></eva-skeleton>
          <eva-skeleton variant="text" width="40%"></eva-skeleton>
        </div>
      </div>
      <eva-skeleton variant="text" lines="3"></eva-skeleton>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete user card skeleton loader.',
      },
    },
  },
};

export const ArticlePreview: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-skeleton width="100%" height="200px" style="margin-bottom: 1rem;"></eva-skeleton>
      <eva-skeleton variant="text" width="80%" style="font-size: 1.5rem; margin-bottom: 0.5rem;"></eva-skeleton>
      <eva-skeleton variant="text" lines="3"></eva-skeleton>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Article preview with image and text skeletons.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>ARIA Busy:</strong> aria-busy attribute indicates loading state</li>
        <li><strong>Reduced Motion:</strong> Respects prefers-reduced-motion setting</li>
        <li><strong>Screen Readers:</strong> Announces loading state to assistive technology</li>
        <li><strong>Visual Feedback:</strong> Shimmer animation indicates active loading</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the skeleton component.',
      },
    },
  },
};
