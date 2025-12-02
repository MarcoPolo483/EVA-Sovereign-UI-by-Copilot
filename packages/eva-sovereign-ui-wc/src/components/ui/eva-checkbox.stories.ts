import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-checkbox';

const meta: Meta = {
  title: 'UI/Checkbox',
  component: 'eva-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Checked state',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Checkbox label',
      defaultValue: '',
    },
    name: {
      control: 'text',
      description: 'Input name attribute',
      defaultValue: '',
    },
    value: {
      control: 'text',
      description: 'Input value attribute',
      defaultValue: '',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Checkbox input component with custom styling. Supports checked, unchecked, and disabled states with full keyboard accessibility.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Accept terms and conditions',
  },
  render: (args) => html`
    <eva-checkbox
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      label="${args.label}"
      name="${args.name || ''}"
      value="${args.value || ''}"
    ></eva-checkbox>
  `,
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
    label: 'Checked checkbox',
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: 'Disabled checkbox',
  },
  render: Default.render,
};

export const CheckedAndDisabled: Story = {
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
    label: 'Checked and disabled',
  },
  render: Default.render,
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    label: '',
  },
  render: (args) => html`
    <eva-checkbox
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      aria-label="Checkbox without visible label"
    ></eva-checkbox>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox without a visible label. Requires aria-label for accessibility.',
      },
    },
  },
};

export const MultipleChoices: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <eva-checkbox label="Option 1"></eva-checkbox>
      <eva-checkbox label="Option 2" checked></eva-checkbox>
      <eva-checkbox label="Option 3"></eva-checkbox>
      <eva-checkbox label="Option 4 (disabled)" disabled></eva-checkbox>
      <eva-checkbox label="Option 5 (checked & disabled)" checked disabled></eva-checkbox>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkbox options in a list.',
      },
    },
  },
};

export const InForm: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Notification Preferences</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <eva-checkbox name="email" value="email" label="Email notifications"></eva-checkbox>
          <eva-checkbox name="sms" value="sms" label="SMS notifications"></eva-checkbox>
          <eva-checkbox name="push" value="push" label="Push notifications" checked></eva-checkbox>
        </div>
      </div>
      
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Newsletter Subscriptions</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <eva-checkbox name="weekly" value="weekly" label="Weekly digest"></eva-checkbox>
          <eva-checkbox name="monthly" value="monthly" label="Monthly newsletter" checked></eva-checkbox>
          <eva-checkbox name="special" value="special" label="Special offers"></eva-checkbox>
        </div>
      </div>
      
      <eva-checkbox name="terms" value="accept" label="I accept the terms and conditions"></eva-checkbox>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes used in a form context with groupings.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <eva-checkbox label="Unchecked"></eva-checkbox>
      <eva-checkbox label="Checked" checked></eva-checkbox>
      <eva-checkbox label="Disabled" disabled></eva-checkbox>
      <eva-checkbox label="Checked & Disabled" checked disabled></eva-checkbox>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'All possible checkbox states.',
      },
    },
  },
};
