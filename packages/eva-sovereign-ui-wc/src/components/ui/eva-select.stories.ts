import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-select';

const meta: Meta = {
  title: 'UI/Select',
  component: 'eva-select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'Select size',
      defaultValue: 'default',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: 'Select an option',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Custom select dropdown with keyboard navigation and WCAG 2.2 AA compliance.',
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
    <eva-select placeholder="Select a fruit">
      <eva-select-item value="apple">Apple</eva-select-item>
      <eva-select-item value="banana">Banana</eva-select-item>
      <eva-select-item value="orange">Orange</eva-select-item>
      <eva-select-item value="grape">Grape</eva-select-item>
    </eva-select>
  `,
};

export const Small: Story = {
  render: () => html`
    <eva-select size="sm" placeholder="Small select">
      <eva-select-item value="1">Option 1</eva-select-item>
      <eva-select-item value="2">Option 2</eva-select-item>
      <eva-select-item value="3">Option 3</eva-select-item>
    </eva-select>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <eva-select disabled placeholder="Disabled select">
      <eva-select-item value="1">Option 1</eva-select-item>
      <eva-select-item value="2">Option 2</eva-select-item>
    </eva-select>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <eva-label for="province-select">Province/Territory</eva-label>
      <eva-select id="province-select" placeholder="Select your province">
        <eva-select-item value="on">Ontario</eva-select-item>
        <eva-select-item value="qc">Quebec</eva-select-item>
        <eva-select-item value="bc">British Columbia</eva-select-item>
        <eva-select-item value="ab">Alberta</eva-select-item>
        <eva-select-item value="mb">Manitoba</eva-select-item>
        <eva-select-item value="sk">Saskatchewan</eva-select-item>
        <eva-select-item value="ns">Nova Scotia</eva-select-item>
        <eva-select-item value="nb">New Brunswick</eva-select-item>
        <eva-select-item value="nl">Newfoundland and Labrador</eva-select-item>
        <eva-select-item value="pe">Prince Edward Island</eva-select-item>
        <eva-select-item value="nt">Northwest Territories</eva-select-item>
        <eva-select-item value="nu">Nunavut</eva-select-item>
        <eva-select-item value="yt">Yukon</eva-select-item>
      </eva-select>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="service-type">Service Type *</eva-label>
        <eva-select id="service-type" placeholder="Select a service">
          <eva-select-item value="ei">Employment Insurance</eva-select-item>
          <eva-select-item value="passport">Passport Services</eva-select-item>
          <eva-select-item value="tax">Tax Services</eva-select-item>
          <eva-select-item value="immigration">Immigration</eva-select-item>
        </eva-select>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="urgency">Urgency Level</eva-label>
        <eva-select id="urgency" placeholder="Select urgency">
          <eva-select-item value="low">Low</eva-select-item>
          <eva-select-item value="medium">Medium</eva-select-item>
          <eva-select-item value="high">High</eva-select-item>
          <eva-select-item value="critical">Critical</eva-select-item>
        </eva-select>
      </div>

      <eva-gc-button type="submit">Submit Request</eva-gc-button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete form example with select components and labels.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <h4>Default Size</h4>
        <eva-select placeholder="Default select">
          <eva-select-item value="1">Option 1</eva-select-item>
          <eva-select-item value="2">Option 2</eva-select-item>
        </eva-select>
      </div>

      <div>
        <h4>Small Size</h4>
        <eva-select size="sm" placeholder="Small select">
          <eva-select-item value="1">Option 1</eva-select-item>
          <eva-select-item value="2">Option 2</eva-select-item>
        </eva-select>
      </div>

      <div>
        <h4>Disabled</h4>
        <eva-select disabled placeholder="Disabled select">
          <eva-select-item value="1">Option 1</eva-select-item>
          <eva-select-item value="2">Option 2</eva-select-item>
        </eva-select>
      </div>

      <div>
        <h4>Many Options (Scrollable)</h4>
        <eva-select placeholder="Select a country">
          <eva-select-item value="ca">Canada</eva-select-item>
          <eva-select-item value="us">United States</eva-select-item>
          <eva-select-item value="uk">United Kingdom</eva-select-item>
          <eva-select-item value="au">Australia</eva-select-item>
          <eva-select-item value="nz">New Zealand</eva-select-item>
          <eva-select-item value="fr">France</eva-select-item>
          <eva-select-item value="de">Germany</eva-select-item>
          <eva-select-item value="jp">Japan</eva-select-item>
        </eva-select>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all select states and configurations.',
      },
    },
  },
};
