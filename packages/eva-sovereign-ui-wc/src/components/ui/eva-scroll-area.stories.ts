import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-scroll-area';

const meta: Meta = {
  title: 'UI/Scroll Area',
  component: 'eva-scroll-area',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Custom styled scrollable container with smooth scrolling. Features styled scrollbars that work across browsers with WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'scrollable-region-focusable', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-scroll-area style="height: 200px; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem;">
      ${Array.from({ length: 20 }, (_, i) => html`
        <p style="margin: 0 0 0.5rem 0;">Scrollable content line ${i + 1}</p>
      `)}
    </eva-scroll-area>
  `,
};

export const LongContent: Story = {
  render: () => html`
    <eva-scroll-area style="height: 300px; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.5rem;">
      <h3 style="margin-top: 0;">Article Title</h3>
      ${Array.from({ length: 10 }, (_, i) => html`
        <p>Paragraph ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      `)}
    </eva-scroll-area>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Scroll area with long article content.',
      },
    },
  },
};

export const SidebarMenu: Story = {
  render: () => html`
    <eva-scroll-area style="height: 400px; width: 250px; border: 1px solid #e0e0e0; border-radius: 8px; padding: 0.5rem;">
      <h4 style="margin: 0.5rem 0.75rem; font-size: 0.875rem; text-transform: uppercase; color: #666;">Navigation</h4>
      ${Array.from({ length: 30 }, (_, i) => html`
        <a href="#" style="display: block; padding: 0.75rem; text-decoration: none; color: inherit; border-radius: 4px;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">
          Menu Item ${i + 1}
        </a>
      `)}
    </eva-scroll-area>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Scrollable sidebar navigation menu.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Scrollable with arrow keys and page up/down</li>
        <li><strong>Screen Readers:</strong> Properly announced scrollable region</li>
        <li><strong>Custom Scrollbars:</strong> Styled scrollbars with proper contrast</li>
        <li><strong>Smooth Scrolling:</strong> Enhanced scrolling behavior</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the scroll area component.',
      },
    },
  },
};
