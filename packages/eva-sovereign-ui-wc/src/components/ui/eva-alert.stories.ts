import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-alert';

const meta: Meta = {
  title: 'UI/Alert',
  component: 'eva-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'Alert variant style',
      defaultValue: 'default',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Status message component with support for default and destructive variants. Includes icon and content slots with proper ARIA roles.',
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
  args: {
    variant: 'default',
  },
  render: (args) => html`
    <eva-alert variant="${args.variant}">
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <div slot="content">
        <strong>Information</strong>
        <p style="margin: 0.25rem 0 0 0;">This is an informational alert message.</p>
      </div>
    </eva-alert>
  `,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => html`
    <eva-alert variant="${args.variant}">
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
      <div slot="content">
        <strong>Error</strong>
        <p style="margin: 0.25rem 0 0 0;">Something went wrong. Please try again.</p>
      </div>
    </eva-alert>
  `,
};

export const WithoutIcon: Story = {
  render: () => html`
    <eva-alert>
      <div slot="content">
        <strong>Simple Alert</strong>
        <p style="margin: 0.25rem 0 0 0;">Alert without an icon, just text content.</p>
      </div>
    </eva-alert>
  `,
};

export const LongContent: Story = {
  render: () => html`
    <eva-alert>
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
      <div slot="content">
        <strong>Important Notice</strong>
        <p style="margin: 0.25rem 0 0 0;">
          This is a longer alert message that contains more detailed information. 
          It can span multiple lines and provide comprehensive details about the alert condition. 
          The alert component will automatically adjust its height to accommodate the content.
        </p>
      </div>
    </eva-alert>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <eva-alert variant="default">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <div slot="content">
          <strong>Default Alert</strong>
          <p style="margin: 0.25rem 0 0 0;">Standard informational alert.</p>
        </div>
      </eva-alert>

      <eva-alert variant="destructive">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <div slot="content">
          <strong>Destructive Alert</strong>
          <p style="margin: 0.25rem 0 0 0;">Error or warning alert.</p>
        </div>
      </eva-alert>

      <eva-alert>
        <div slot="content">
          <strong>No Icon Alert</strong>
          <p style="margin: 0.25rem 0 0 0;">Alert without an icon.</p>
        </div>
      </eva-alert>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'All alert variants displayed together.',
      },
    },
  },
};
