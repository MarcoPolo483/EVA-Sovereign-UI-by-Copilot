import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-radio-group';
import './eva-label';

const meta: Meta = {
  title: 'UI/Radio Group',
  component: 'eva-radio-group',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable all radio buttons',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Radio button group for mutually exclusive selections with WCAG 2.2 AA compliance.',
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
    <eva-radio-group name="default-group">
      <eva-radio-group-item value="option1">Option 1</eva-radio-group-item>
      <eva-radio-group-item value="option2">Option 2</eva-radio-group-item>
      <eva-radio-group-item value="option3">Option 3</eva-radio-group-item>
    </eva-radio-group>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <eva-label>Select your preferred contact method:</eva-label>
      <eva-radio-group name="contact-method">
        <eva-radio-group-item value="email">Email</eva-radio-group-item>
        <eva-radio-group-item value="phone">Phone</eva-radio-group-item>
        <eva-radio-group-item value="mail">Mail</eva-radio-group-item>
      </eva-radio-group>
    </div>
  `,
};

export const Preselected: Story = {
  render: () => html`
    <eva-radio-group name="preselected-group">
      <eva-radio-group-item value="option1">Option 1</eva-radio-group-item>
      <eva-radio-group-item value="option2" checked>Option 2 (Selected)</eva-radio-group-item>
      <eva-radio-group-item value="option3">Option 3</eva-radio-group-item>
    </eva-radio-group>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <eva-radio-group name="disabled-group" disabled>
      <eva-radio-group-item value="option1">Option 1</eva-radio-group-item>
      <eva-radio-group-item value="option2" checked>Option 2 (Selected)</eva-radio-group-item>
      <eva-radio-group-item value="option3">Option 3</eva-radio-group-item>
    </eva-radio-group>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <eva-label>Language Preference *</eva-label>
        <eva-radio-group name="language" required>
          <eva-radio-group-item value="en">English</eva-radio-group-item>
          <eva-radio-group-item value="fr">Français</eva-radio-group-item>
        </eva-radio-group>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <eva-label>Service Type *</eva-label>
        <eva-radio-group name="service-type" required>
          <eva-radio-group-item value="employment">Employment Insurance</eva-radio-group-item>
          <eva-radio-group-item value="passport">Passport Services</eva-radio-group-item>
          <eva-radio-group-item value="tax">Tax Services</eva-radio-group-item>
          <eva-radio-group-item value="immigration">Immigration Services</eva-radio-group-item>
        </eva-radio-group>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <eva-label>Urgency Level</eva-label>
        <eva-radio-group name="urgency">
          <eva-radio-group-item value="low">Low - Can wait 2-3 weeks</eva-radio-group-item>
          <eva-radio-group-item value="medium" checked>Medium - Within 1 week</eva-radio-group-item>
          <eva-radio-group-item value="high">High - Within 48 hours</eva-radio-group-item>
          <eva-radio-group-item value="critical">Critical - Immediate</eva-radio-group-item>
        </eva-radio-group>
      </div>

      <eva-gc-button type="submit">Submit Request</eva-gc-button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete government service form with radio groups.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4>Default</h4>
        <eva-radio-group name="state1">
          <eva-radio-group-item value="1">Option 1</eva-radio-group-item>
          <eva-radio-group-item value="2">Option 2</eva-radio-group-item>
          <eva-radio-group-item value="3">Option 3</eva-radio-group-item>
        </eva-radio-group>
      </div>

      <div>
        <h4>With Selection</h4>
        <eva-radio-group name="state2">
          <eva-radio-group-item value="1">Option 1</eva-radio-group-item>
          <eva-radio-group-item value="2" checked>Option 2 (Selected)</eva-radio-group-item>
          <eva-radio-group-item value="3">Option 3</eva-radio-group-item>
        </eva-radio-group>
      </div>

      <div>
        <h4>Disabled</h4>
        <eva-radio-group name="state3" disabled>
          <eva-radio-group-item value="1">Option 1</eva-radio-group-item>
          <eva-radio-group-item value="2" checked>Option 2 (Selected)</eva-radio-group-item>
          <eva-radio-group-item value="3">Option 3</eva-radio-group-item>
        </eva-radio-group>
      </div>

      <div>
        <h4>With Descriptions</h4>
        <eva-radio-group name="state4">
          <eva-radio-group-item value="basic">
            <strong>Basic Plan</strong> - $10/month
          </eva-radio-group-item>
          <eva-radio-group-item value="pro" checked>
            <strong>Pro Plan</strong> - $25/month (Most Popular)
          </eva-radio-group-item>
          <eva-radio-group-item value="enterprise">
            <strong>Enterprise Plan</strong> - Custom pricing
          </eva-radio-group-item>
        </eva-radio-group>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all radio group states and configurations.',
      },
    },
  },
};
