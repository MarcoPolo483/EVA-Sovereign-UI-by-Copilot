import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-input';

const meta: Meta = {
  title: 'UI/Input',
  component: 'eva-input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'file'],
      description: 'Input type attribute',
      defaultValue: 'text',
    },
    value: {
      control: 'text',
      description: 'Input value',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: '',
    },
    label: {
      control: 'text',
      description: 'Input label',
      defaultValue: '',
    },
    error: {
      control: 'text',
      description: 'Error message',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
      defaultValue: false,
    },
    readonly: {
      control: 'boolean',
      description: 'Make input read-only',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Text input component with Spark styling. Supports validation states, labels, and various input types.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'label', enabled: true },
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    label: 'Input Label',
  },
  render: (args) => html`
    <eva-input
      type="${args.type}"
      value="${args.value || ''}"
      placeholder="${args.placeholder}"
      label="${args.label}"
      error="${args.error || ''}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
    ></eva-input>
  `,
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'Sample text',
    label: 'Filled Input',
  },
  render: Default.render,
};

export const Email: Story = {
  args: {
    ...Default.args,
    type: 'email',
    placeholder: 'email@example.com',
    label: 'Email Address',
  },
  render: Default.render,
};

export const Password: Story = {
  args: {
    ...Default.args,
    type: 'password',
    placeholder: '••••••••',
    label: 'Password',
  },
  render: Default.render,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    value: 'invalid@',
    label: 'Email',
    error: 'Please enter a valid email address',
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: 'Disabled input',
    label: 'Disabled',
    disabled: true,
  },
  render: Default.render,
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    value: 'Read-only value',
    label: 'Read-Only',
    readonly: true,
  },
  render: Default.render,
};

export const SearchInput: Story = {
  args: {
    ...Default.args,
    type: 'search',
    placeholder: 'Search...',
    label: 'Search',
  },
  render: Default.render,
};

export const FileInput: Story = {
  args: {
    ...Default.args,
    type: 'file',
    label: 'Upload File',
  },
  render: Default.render,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <eva-input type="text" placeholder="Text input" label="Text"></eva-input>
      <eva-input type="email" placeholder="email@example.com" label="Email"></eva-input>
      <eva-input type="password" placeholder="••••••••" label="Password"></eva-input>
      <eva-input type="text" value="Disabled" label="Disabled" disabled></eva-input>
      <eva-input type="text" value="Read-only" label="Read-Only" readonly></eva-input>
      <eva-input 
        type="email" 
        value="invalid@" 
        label="With Error" 
        error="Invalid email format"
      ></eva-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all input variants and states.',
      },
    },
  },
};
