import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-switch';
import './eva-label';

const meta: Meta = {
  title: 'UI/Switch',
  component: 'eva-switch',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Switch checked state',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Toggle switch component for on/off states with WCAG 2.2 AA compliance.',
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
  render: () => html`
    <eva-switch></eva-switch>
  `,
};

export const Checked: Story = {
  render: () => html`
    <eva-switch checked></eva-switch>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      <eva-switch disabled></eva-switch>
      <eva-switch checked disabled></eva-switch>
    </div>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <eva-switch id="notifications"></eva-switch>
      <eva-label for="notifications">Enable notifications</eva-label>
    </div>
  `,
};

export const SettingsExample: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <h3>Notification Settings</h3>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <eva-label for="email-notifications">Email Notifications</eva-label>
        <eva-switch id="email-notifications" checked></eva-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <eva-label for="push-notifications">Push Notifications</eva-label>
        <eva-switch id="push-notifications"></eva-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <eva-label for="sms-notifications">SMS Notifications</eva-label>
        <eva-switch id="sms-notifications"></eva-switch>
      </div>

      <hr style="border: none; border-top: 1px solid #e0e0e0;">

      <h3>Privacy Settings</h3>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <eva-label for="public-profile">Public Profile</eva-label>
        <eva-switch id="public-profile" checked></eva-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <eva-label for="data-collection">Data Collection</eva-label>
        <eva-switch id="data-collection"></eva-switch>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between;">
        <eva-label for="marketing-emails">Marketing Emails</eva-label>
        <eva-switch id="marketing-emails" disabled></eva-switch>
      </div>

      <eva-gc-button>Save Settings</eva-gc-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Settings page example with multiple switch controls.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h4>Unchecked</h4>
        <eva-switch></eva-switch>
      </div>

      <div>
        <h4>Checked</h4>
        <eva-switch checked></eva-switch>
      </div>

      <div>
        <h4>Disabled (Unchecked)</h4>
        <eva-switch disabled></eva-switch>
      </div>

      <div>
        <h4>Disabled (Checked)</h4>
        <eva-switch checked disabled></eva-switch>
      </div>

      <div>
        <h4>With Label (Left)</h4>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <eva-label for="left-label">Airplane Mode</eva-label>
          <eva-switch id="left-label"></eva-switch>
        </div>
      </div>

      <div>
        <h4>With Label (Right)</h4>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <eva-switch id="right-label"></eva-switch>
          <eva-label for="right-label">Dark Mode</eva-label>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all switch states and configurations.',
      },
    },
  },
};
