import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-tooltip';
import '../gc-design/eva-gc-button';

const meta: Meta = {
  title: 'UI/Tooltip',
  component: 'eva-tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Floating tooltip with hover and focus triggers. Features automatic positioning, fade animations, and WCAG 2.2 AA compliance.',
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

export const Default: Story = {
  render: () => html`
    <div style="padding: 3rem; text-align: center;">
      <eva-tooltip>
        <eva-gc-button slot="trigger">Hover Me</eva-gc-button>
        <span slot="content">This is a tooltip</span>
      </eva-tooltip>
    </div>
  `,
};

export const OnIcon: Story = {
  render: () => html`
    <div style="padding: 3rem; display: flex; gap: 2rem; justify-content: center;">
      <eva-tooltip>
        <button slot="trigger" style="width: 2.5rem; height: 2.5rem; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          ℹ️
        </button>
        <span slot="content">Information</span>
      </eva-tooltip>

      <eva-tooltip>
        <button slot="trigger" style="width: 2.5rem; height: 2.5rem; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          ⚙️
        </button>
        <span slot="content">Settings</span>
      </eva-tooltip>

      <eva-tooltip>
        <button slot="trigger" style="width: 2.5rem; height: 2.5rem; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          🔔
        </button>
        <span slot="content">Notifications</span>
      </eva-tooltip>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Tooltips on icon buttons.',
      },
    },
  },
};

export const LongText: Story = {
  render: () => html`
    <div style="padding: 3rem; text-align: center;">
      <eva-tooltip>
        <eva-gc-button slot="trigger">Hover for Details</eva-gc-button>
        <span slot="content">This tooltip contains a longer explanation that provides additional context and helpful information for the user.</span>
      </eva-tooltip>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with longer descriptive text.',
      },
    },
  },
};

export const InText: Story = {
  render: () => html`
    <div style="padding: 3rem; max-width: 600px;">
      <p style="line-height: 1.6;">
        The component library supports 
        <eva-tooltip>
          <span slot="trigger" style="text-decoration: underline dotted; cursor: help;">
            Five Eyes locales
          </span>
          <span slot="content">Canada, USA, UK, Australia, and New Zealand</span>
        </eva-tooltip>
        with full internationalization support.
      </p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Tooltip embedded in text content.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Hover and Focus:</strong> Shows on both mouse hover and keyboard focus</li>
        <li><strong>Auto-positioning:</strong> Adjusts to stay visible on screen</li>
        <li><strong>Screen Readers:</strong> Content accessible to assistive technology</li>
        <li><strong>Color Contrast:</strong> Meets WCAG AA standards</li>
        <li><strong>Keyboard Support:</strong> Full keyboard navigation</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the tooltip component.',
      },
    },
  },
};
