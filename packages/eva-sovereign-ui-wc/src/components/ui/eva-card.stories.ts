import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-card';

const meta: Meta = {
  title: 'UI/Card',
  component: 'eva-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Content container component with header, title, description, content, and footer slots. Uses Spark styling with shadow-sm.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-card>
      <eva-card-header>
        <eva-card-title>Card Title</eva-card-title>
        <eva-card-description>Card description goes here</eva-card-description>
      </eva-card-header>
      <eva-card-content>
        <p>This is the main content area of the card. It can contain any content.</p>
      </eva-card-content>
      <eva-card-footer>
        <p>Footer content</p>
      </eva-card-footer>
    </eva-card>
  `,
};

export const SimpleCard: Story = {
  render: () => html`
    <eva-card>
      <eva-card-content>
        <p>Simple card with just content, no header or footer.</p>
      </eva-card-content>
    </eva-card>
  `,
};

export const WithHeaderOnly: Story = {
  render: () => html`
    <eva-card>
      <eva-card-header>
        <eva-card-title>Notifications</eva-card-title>
        <eva-card-description>You have 3 unread messages</eva-card-description>
      </eva-card-header>
      <eva-card-content>
        <ul style="margin: 0; padding-left: 1.5rem;">
          <li>Message from John</li>
          <li>System update available</li>
          <li>New comment on your post</li>
        </ul>
      </eva-card-content>
    </eva-card>
  `,
};

export const WithActions: Story = {
  render: () => html`
    <eva-card>
      <eva-card-header>
        <eva-card-title>Create Project</eva-card-title>
        <eva-card-description>Deploy your new project in one-click</eva-card-description>
      </eva-card-header>
      <eva-card-content>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem;">Project Name</label>
            <input type="text" placeholder="My Project" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem;">Framework</label>
            <select style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
              <option>Next.js</option>
              <option>React</option>
              <option>Vue</option>
            </select>
          </div>
        </div>
      </eva-card-content>
      <eva-card-footer style="display: flex; justify-content: space-between;">
        <button style="padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;">Cancel</button>
        <button style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #0066cc; color: white; cursor: pointer;">Deploy</button>
      </eva-card-footer>
    </eva-card>
  `,
};

export const MultipleCards: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      <eva-card>
        <eva-card-header>
          <eva-card-title>Analytics</eva-card-title>
          <eva-card-description>View your analytics</eva-card-description>
        </eva-card-header>
        <eva-card-content>
          <p style="font-size: 2rem; font-weight: bold; margin: 0;">2,543</p>
          <p style="margin: 0.5rem 0 0 0; color: #666;">Page views this month</p>
        </eva-card-content>
      </eva-card>

      <eva-card>
        <eva-card-header>
          <eva-card-title>Users</eva-card-title>
          <eva-card-description>Active users</eva-card-description>
        </eva-card-header>
        <eva-card-content>
          <p style="font-size: 2rem; font-weight: bold; margin: 0;">1,234</p>
          <p style="margin: 0.5rem 0 0 0; color: #666;">Total active users</p>
        </eva-card-content>
      </eva-card>

      <eva-card>
        <eva-card-header>
          <eva-card-title>Revenue</eva-card-title>
          <eva-card-description>Total revenue</eva-card-description>
        </eva-card-header>
        <eva-card-content>
          <p style="font-size: 2rem; font-weight: bold; margin: 0;">$12,345</p>
          <p style="margin: 0.5rem 0 0 0; color: #666;">This quarter</p>
        </eva-card-content>
      </eva-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Multiple cards in a responsive grid layout.',
      },
    },
  },
};
