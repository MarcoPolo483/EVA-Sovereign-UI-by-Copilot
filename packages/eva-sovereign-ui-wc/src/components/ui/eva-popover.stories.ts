import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-popover';
import '../gc-design/eva-gc-button';

const meta: Meta = {
  title: 'UI/Popover',
  component: 'eva-popover',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Popover open state',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Floating content popover with click trigger. Features automatic positioning, close on outside click, and WCAG 2.2 AA compliance.',
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
    <div style="padding: 3rem;">
      <eva-popover>
        <eva-gc-button slot="trigger">Open Popover</eva-gc-button>
        <div slot="content" style="padding: 1rem; min-width: 200px;">
          <h4 style="margin: 0 0 0.5rem 0;">Popover Title</h4>
          <p style="margin: 0; font-size: 0.875rem;">This is the content of the popover. Click outside to close.</p>
        </div>
      </eva-popover>
    </div>
  `,
};

export const FormMenu: Story = {
  render: () => html`
    <div style="padding: 3rem;">
      <eva-popover>
        <eva-gc-button slot="trigger">Options</eva-gc-button>
        <div slot="content" style="padding: 0.5rem; min-width: 200px;">
          <button style="width: 100%; padding: 0.5rem; text-align: left; border: none; background: transparent; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">Edit</button>
          <button style="width: 100%; padding: 0.5rem; text-align: left; border: none; background: transparent; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">Duplicate</button>
          <button style="width: 100%; padding: 0.5rem; text-align: left; border: none; background: transparent; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">Archive</button>
          <eva-separator></eva-separator>
          <button style="width: 100%; padding: 0.5rem; text-align: left; border: none; background: transparent; cursor: pointer; border-radius: 4px; color: #d32f2f;" onmouseover="this.style.background='#ffebee'" onmouseout="this.style.background='transparent'">Delete</button>
        </div>
      </eva-popover>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Popover used as an action menu.',
      },
    },
  },
};

export const RichContent: Story = {
  render: () => html`
    <div style="padding: 3rem;">
      <eva-popover>
        <eva-gc-button slot="trigger">Share</eva-gc-button>
        <div slot="content" style="padding: 1.5rem; min-width: 300px;">
          <h4 style="margin: 0 0 1rem 0;">Share this page</h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <eva-input placeholder="Enter email address" type="email"></eva-input>
            <eva-textarea placeholder="Add a message (optional)" rows="3"></eva-textarea>
            <eva-gc-button>Send Invitation</eva-gc-button>
          </div>
        </div>
      </eva-popover>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Popover with form controls.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Trigger accessible via keyboard</li>
        <li><strong>Outside Click:</strong> Closes when clicking outside</li>
        <li><strong>Auto-positioning:</strong> Adjusts to stay on screen</li>
        <li><strong>Focus Management:</strong> Returns focus to trigger on close</li>
        <li><strong>Screen Readers:</strong> Proper ARIA attributes</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the popover component.',
      },
    },
  },
};
