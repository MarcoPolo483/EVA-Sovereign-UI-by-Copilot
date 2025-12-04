import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-separator';

const meta: Meta = {
  title: 'UI/Separator',
  component: 'eva-separator',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
      defaultValue: 'horizontal',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Visual divider line with horizontal or vertical orientation. WCAG 2.2 AA compliant with proper ARIA attributes.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <p>Content above the separator</p>
      <eva-separator></eva-separator>
      <p>Content below the separator</p>
    </div>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
      <span>Left</span>
      <eva-separator orientation="vertical" style="height: 2rem;"></eva-separator>
      <span>Right</span>
    </div>
  `,
};

export const InNavigation: Story = {
  render: () => html`
    <nav style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
      <a href="#" style="text-decoration: none; color: inherit;">Home</a>
      <eva-separator orientation="vertical" style="height: 1.5rem;"></eva-separator>
      <a href="#" style="text-decoration: none; color: inherit;">About</a>
      <eva-separator orientation="vertical" style="height: 1.5rem;"></eva-separator>
      <a href="#" style="text-decoration: none; color: inherit;">Contact</a>
    </nav>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Vertical separators in navigation menu.',
      },
    },
  },
};

export const InContent: Story = {
  render: () => html`
    <article style="max-width: 600px; padding: 1.5rem;">
      <h2 style="margin-top: 0;">Article Title</h2>
      <p>Introduction paragraph with important information.</p>
      <eva-separator style="margin: 1.5rem 0;"></eva-separator>
      <h3>Section Heading</h3>
      <p>Main content of the article continues here.</p>
      <eva-separator style="margin: 1.5rem 0;"></eva-separator>
      <p style="font-style: italic; color: #666;">Author: Jane Doe | Published: Jan 15, 2024</p>
    </article>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Horizontal separators in article layout.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Semantic HTML:</strong> Uses proper role="separator" attribute</li>
        <li><strong>ARIA Orientation:</strong> aria-orientation attribute for screen readers</li>
        <li><strong>Visual Clarity:</strong> Clear visual distinction without relying on color alone</li>
        <li><strong>Flexible:</strong> Works in both horizontal and vertical layouts</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the separator component.',
      },
    },
  },
};
