import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-label';
import './eva-input';
import './eva-checkbox';

const meta: Meta = {
  title: 'UI/Label',
  component: 'eva-label',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Form label component with accessibility features and peer-disabled support.',
      },
    },
    a11y: {
      config: {
        rules: [
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
    <eva-label>Default Label</eva-label>
  `,
};

export const WithInput: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <eva-label for="name-input">Full Name</eva-label>
      <eva-input id="name-input" placeholder="Enter your name"></eva-input>
    </div>
  `,
};

export const Required: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <eva-label for="email-input">Email Address *</eva-label>
      <eva-input id="email-input" type="email" required placeholder="name@example.com"></eva-input>
    </div>
  `,
};

export const WithCheckbox: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <eva-checkbox id="terms"></eva-checkbox>
      <eva-label for="terms">I agree to the terms and conditions</eva-label>
    </div>
  `,
};

export const DisabledField: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <eva-label for="disabled-input">Disabled Field</eva-label>
      <eva-input id="disabled-input" disabled value="This field is disabled"></eva-input>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="first-name">First Name *</eva-label>
        <eva-input id="first-name" required placeholder="John"></eva-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="last-name">Last Name *</eva-label>
        <eva-input id="last-name" required placeholder="Doe"></eva-input>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="email">Email Address *</eva-label>
        <eva-input id="email" type="email" required placeholder="john.doe@example.com"></eva-input>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <eva-checkbox id="newsletter"></eva-checkbox>
        <eva-label for="newsletter">Subscribe to newsletter</eva-label>
      </div>

      <eva-gc-button type="submit">Submit</eva-gc-button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete form example demonstrating label usage with various form controls.',
      },
    },
  },
};
