import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-tabs';

const meta: Meta = {
  title: 'UI/Tabs',
  component: 'eva-tabs',
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'text',
      description: 'Active tab value',
      defaultValue: 'tab1',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tabbed interface component with keyboard navigation and ARIA support. Composed of eva-tabs, eva-tabs-list, eva-tabs-trigger, and eva-tabs-content.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'aria-roles', enabled: true },
          { id: 'tabindex', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    active: 'tab1',
  },
  render: (args) => html`
    <eva-tabs active="${args.active}">
      <eva-tabs-list>
        <eva-tabs-trigger value="tab1">Account</eva-tabs-trigger>
        <eva-tabs-trigger value="tab2">Password</eva-tabs-trigger>
        <eva-tabs-trigger value="tab3">Settings</eva-tabs-trigger>
      </eva-tabs-list>
      
      <eva-tabs-content value="tab1">
        <h3 style="margin: 0 0 0.5rem 0;">Account Settings</h3>
        <p>Manage your account information and preferences.</p>
      </eva-tabs-content>
      
      <eva-tabs-content value="tab2">
        <h3 style="margin: 0 0 0.5rem 0;">Password</h3>
        <p>Change your password and security settings.</p>
      </eva-tabs-content>
      
      <eva-tabs-content value="tab3">
        <h3 style="margin: 0 0 0.5rem 0;">Settings</h3>
        <p>Configure application settings and preferences.</p>
      </eva-tabs-content>
    </eva-tabs>
  `,
};

export const WithContent: Story = {
  render: () => html`
    <eva-tabs active="overview">
      <eva-tabs-list>
        <eva-tabs-trigger value="overview">Overview</eva-tabs-trigger>
        <eva-tabs-trigger value="analytics">Analytics</eva-tabs-trigger>
        <eva-tabs-trigger value="reports">Reports</eva-tabs-trigger>
        <eva-tabs-trigger value="notifications">Notifications</eva-tabs-trigger>
      </eva-tabs-list>
      
      <eva-tabs-content value="overview">
        <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin: 0 0 1rem 0;">Dashboard Overview</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div style="padding: 1rem; background: #f9fafb; border-radius: 6px;">
              <div style="font-size: 0.875rem; color: #6b7280;">Total Users</div>
              <div style="font-size: 1.5rem; font-weight: bold;">2,543</div>
            </div>
            <div style="padding: 1rem; background: #f9fafb; border-radius: 6px;">
              <div style="font-size: 0.875rem; color: #6b7280;">Active Now</div>
              <div style="font-size: 1.5rem; font-weight: bold;">142</div>
            </div>
            <div style="padding: 1rem; background: #f9fafb; border-radius: 6px;">
              <div style="font-size: 0.875rem; color: #6b7280;">Revenue</div>
              <div style="font-size: 1.5rem; font-weight: bold;">$12,345</div>
            </div>
          </div>
        </div>
      </eva-tabs-content>
      
      <eva-tabs-content value="analytics">
        <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin: 0 0 1rem 0;">Analytics Dashboard</h3>
          <p>Detailed analytics and metrics would appear here.</p>
        </div>
      </eva-tabs-content>
      
      <eva-tabs-content value="reports">
        <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin: 0 0 1rem 0;">Reports</h3>
          <p>Generate and view reports from this section.</p>
        </div>
      </eva-tabs-content>
      
      <eva-tabs-content value="notifications">
        <div style="padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin: 0 0 1rem 0;">Notifications</h3>
          <p>Manage your notification preferences here.</p>
        </div>
      </eva-tabs-content>
    </eva-tabs>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with rich content including statistics and formatted panels.',
      },
    },
  },
};

export const WithDisabledTab: Story = {
  render: () => html`
    <eva-tabs active="tab1">
      <eva-tabs-list>
        <eva-tabs-trigger value="tab1">Enabled</eva-tabs-trigger>
        <eva-tabs-trigger value="tab2" disabled>Disabled</eva-tabs-trigger>
        <eva-tabs-trigger value="tab3">Enabled</eva-tabs-trigger>
      </eva-tabs-list>
      
      <eva-tabs-content value="tab1">
        <p>This tab is enabled and active.</p>
      </eva-tabs-content>
      
      <eva-tabs-content value="tab2">
        <p>This content is not accessible because the tab is disabled.</p>
      </eva-tabs-content>
      
      <eva-tabs-content value="tab3">
        <p>This tab is also enabled.</p>
      </eva-tabs-content>
    </eva-tabs>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example with a disabled tab that cannot be selected.',
      },
    },
  },
};

export const ManyTabs: Story = {
  render: () => html`
    <eva-tabs active="jan">
      <eva-tabs-list>
        <eva-tabs-trigger value="jan">January</eva-tabs-trigger>
        <eva-tabs-trigger value="feb">February</eva-tabs-trigger>
        <eva-tabs-trigger value="mar">March</eva-tabs-trigger>
        <eva-tabs-trigger value="apr">April</eva-tabs-trigger>
        <eva-tabs-trigger value="may">May</eva-tabs-trigger>
        <eva-tabs-trigger value="jun">June</eva-tabs-trigger>
      </eva-tabs-list>
      
      <eva-tabs-content value="jan"><p>January data</p></eva-tabs-content>
      <eva-tabs-content value="feb"><p>February data</p></eva-tabs-content>
      <eva-tabs-content value="mar"><p>March data</p></eva-tabs-content>
      <eva-tabs-content value="apr"><p>April data</p></eva-tabs-content>
      <eva-tabs-content value="may"><p>May data</p></eva-tabs-content>
      <eva-tabs-content value="jun"><p>June data</p></eva-tabs-content>
    </eva-tabs>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with multiple options, demonstrating horizontal layout.',
      },
    },
  },
};
