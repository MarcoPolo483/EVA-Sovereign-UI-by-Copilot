import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-textarea';
import './eva-label';

const meta: Meta = {
  title: 'UI/Textarea',
  component: 'eva-textarea',
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
      defaultValue: 3,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: '',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Multi-line text input component with WCAG 2.2 AA compliance.',
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
    <eva-textarea placeholder="Enter your message..."></eva-textarea>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 500px;">
      <eva-label for="description">Description</eva-label>
      <eva-textarea id="description" placeholder="Provide details..."></eva-textarea>
    </div>
  `,
};

export const CustomRows: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
      <div>
        <h4>3 Rows (Default)</h4>
        <eva-textarea rows="3" placeholder="3 rows"></eva-textarea>
      </div>

      <div>
        <h4>5 Rows</h4>
        <eva-textarea rows="5" placeholder="5 rows"></eva-textarea>
      </div>

      <div>
        <h4>10 Rows</h4>
        <eva-textarea rows="10" placeholder="10 rows"></eva-textarea>
      </div>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <eva-textarea disabled placeholder="This textarea is disabled"></eva-textarea>
  `,
};

export const WithValue: Story = {
  render: () => html`
    <eva-textarea value="This is some pre-filled text content that demonstrates the textarea with existing content."></eva-textarea>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="feedback">Your Feedback *</eva-label>
        <eva-textarea 
          id="feedback" 
          rows="5"
          required
          placeholder="Please share your thoughts and suggestions..."
        ></eva-textarea>
        <small style="color: #666;">Minimum 10 characters required</small>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <eva-label for="additional">Additional Comments</eva-label>
        <eva-textarea 
          id="additional" 
          rows="3"
          placeholder="Any other information you'd like to provide (optional)"
        ></eva-textarea>
      </div>

      <eva-gc-button type="submit">Submit Feedback</eva-gc-button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete feedback form example with textarea components.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
      <div>
        <h4>Default</h4>
        <eva-textarea placeholder="Default textarea"></eva-textarea>
      </div>

      <div>
        <h4>With Content</h4>
        <eva-textarea value="This textarea has some content"></eva-textarea>
      </div>

      <div>
        <h4>Disabled</h4>
        <eva-textarea disabled placeholder="Disabled textarea"></eva-textarea>
      </div>

      <div>
        <h4>With Label</h4>
        <eva-label for="labeled">Comments</eva-label>
        <eva-textarea id="labeled" placeholder="Enter comments"></eva-textarea>
      </div>

      <div>
        <h4>Large (10 rows)</h4>
        <eva-textarea rows="10" placeholder="Large textarea for longer content"></eva-textarea>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all textarea states and configurations.',
      },
    },
  },
};
