import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-toggle';

const meta: Meta = {
  title: 'UI/Toggle',
  component: 'eva-toggle',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Toggle variant',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Toggle size',
      defaultValue: 'default',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Toggle button with pressed/unpressed states. Features variants, sizes, and WCAG 2.2 AA compliance with proper ARIA attributes.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'button-name', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-toggle aria-label="Toggle button">Toggle</eva-toggle>
  `,
};

export const Outline: Story = {
  render: () => html`
    <eva-toggle variant="outline" aria-label="Outline toggle">Outline</eva-toggle>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <eva-toggle size="sm" aria-label="Small toggle">Small</eva-toggle>
      <eva-toggle size="default" aria-label="Default toggle">Default</eva-toggle>
      <eva-toggle size="lg" aria-label="Large toggle">Large</eva-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Toggles in different sizes.',
      },
    },
  },
};

export const ToolbarControls: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.5rem; padding: 0.5rem; border: 1px solid #e0e0e0; border-radius: 8px; background: #f9f9f9;">
      <eva-toggle aria-label="Bold">
        <strong>B</strong>
      </eva-toggle>
      <eva-toggle aria-label="Italic">
        <em>I</em>
      </eva-toggle>
      <eva-toggle aria-label="Underline">
        <u>U</u>
      </eva-toggle>
      <eva-separator orientation="vertical" style="height: 2rem;"></eva-separator>
      <eva-toggle aria-label="Left align">⬅</eva-toggle>
      <eva-toggle aria-label="Center align">↔</eva-toggle>
      <eva-toggle aria-label="Right align">➡</eva-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Toolbar with text formatting toggles.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      <eva-toggle disabled aria-label="Disabled toggle">Disabled</eva-toggle>
      <eva-toggle variant="outline" disabled aria-label="Disabled outline">Disabled</eva-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Disabled toggle buttons.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>ARIA Pressed:</strong> aria-pressed attribute indicates toggle state</li>
        <li><strong>Keyboard Support:</strong> Full keyboard navigation with Space/Enter</li>
        <li><strong>Focus Indicators:</strong> Clear focus visible on keyboard navigation</li>
        <li><strong>Screen Readers:</strong> State changes announced to assistive technology</li>
        <li><strong>Color Contrast:</strong> All states meet WCAG AA standards</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the toggle component.',
      },
    },
  },
};
