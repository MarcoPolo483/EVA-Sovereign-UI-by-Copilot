import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-gc-button';

const meta: Meta = {
  title: 'GC Design/Button',
  component: 'eva-gc-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Button variant style',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size',
      defaultValue: 'default',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Button text content',
      defaultValue: 'Button',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Government of Canada styled button component with enhanced Spark styling. Supports WCAG 2.2 AAA accessibility standards with oklch() colors and smooth transitions.',
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
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    loading: false,
    label: 'Default Button',
  },
  render: (args) => html`
    <eva-gc-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      ${args.label}
    </eva-gc-button>
  `,
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
    label: 'Delete',
  },
  render: Default.render,
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
    label: 'Outline',
  },
  render: Default.render,
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
    label: 'Secondary',
  },
  render: Default.render,
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
    label: 'Ghost',
  },
  render: Default.render,
};

export const Link: Story = {
  args: {
    ...Default.args,
    variant: 'link',
    label: 'Link Style',
  },
  render: Default.render,
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    label: 'Small',
  },
  render: Default.render,
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    label: 'Large',
  },
  render: Default.render,
};

export const IconButton: Story = {
  args: {
    ...Default.args,
    size: 'icon',
    label: '☰',
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: 'Disabled',
  },
  render: Default.render,
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    label: 'Loading...',
  },
  render: Default.render,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <eva-gc-button variant="default">Default</eva-gc-button>
        <eva-gc-button variant="destructive">Destructive</eva-gc-button>
        <eva-gc-button variant="outline">Outline</eva-gc-button>
        <eva-gc-button variant="secondary">Secondary</eva-gc-button>
        <eva-gc-button variant="ghost">Ghost</eva-gc-button>
        <eva-gc-button variant="link">Link</eva-gc-button>
      </div>
      
      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
        <eva-gc-button size="sm">Small</eva-gc-button>
        <eva-gc-button size="default">Default</eva-gc-button>
        <eva-gc-button size="lg">Large</eva-gc-button>
        <eva-gc-button size="icon">☰</eva-gc-button>
      </div>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <eva-gc-button disabled>Disabled</eva-gc-button>
        <eva-gc-button loading>Loading</eva-gc-button>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all button variants, sizes, and states.',
      },
    },
  },
};
