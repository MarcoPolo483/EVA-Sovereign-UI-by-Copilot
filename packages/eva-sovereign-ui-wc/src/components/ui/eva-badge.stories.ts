import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-badge';

const meta: Meta = {
  title: 'UI/Badge',
  component: 'eva-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Badge variant style',
      defaultValue: 'default',
    },
    label: {
      control: 'text',
      description: 'Badge text content',
      defaultValue: 'Badge',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Small label or tag component with multiple variants. Perfect for status indicators, counts, and labels.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Default',
  },
  render: (args) => html`
    <eva-badge variant="${args.variant}">${args.label}</eva-badge>
  `,
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
    label: 'Secondary',
  },
  render: Default.render,
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
    label: 'Destructive',
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

export const WithIcon: Story = {
  render: () => html`
    <eva-badge variant="default">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      Verified
    </eva-badge>
  `,
};

export const AsStatusIndicators: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <eva-badge variant="default">Active</eva-badge>
      <eva-badge variant="secondary">Pending</eva-badge>
      <eva-badge variant="destructive">Error</eva-badge>
      <eva-badge variant="outline">Draft</eva-badge>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Badges used as status indicators.',
      },
    },
  },
};

export const AsCounters: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span>Inbox</span>
        <eva-badge variant="default">12</eva-badge>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span>Notifications</span>
        <eva-badge variant="destructive">3</eva-badge>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span>Updates</span>
        <eva-badge variant="secondary">5</eva-badge>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Badges used as notification counters.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <eva-badge variant="default">Default</eva-badge>
        <eva-badge variant="secondary">Secondary</eva-badge>
        <eva-badge variant="destructive">Destructive</eva-badge>
        <eva-badge variant="outline">Outline</eva-badge>
      </div>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <eva-badge variant="default">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          With Icon
        </eva-badge>
        <eva-badge variant="secondary">99+</eva-badge>
        <eva-badge variant="destructive">NEW</eva-badge>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'All badge variants with various use cases.',
      },
    },
  },
};
