import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-avatar';

const meta: Meta = {
  title: 'UI/Avatar',
  component: 'eva-avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'User avatar component with image and fallback support. Features automatic sizing, rounded design, and WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'image-alt', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-avatar>
      <eva-avatar-image src="https://via.placeholder.com/40" alt="User avatar"></eva-avatar-image>
    </eva-avatar>
  `,
};

export const WithFallback: Story = {
  render: () => html`
    <eva-avatar>
      <eva-avatar-image src="invalid-url.jpg" alt="User"></eva-avatar-image>
      <eva-avatar-fallback>JD</eva-avatar-fallback>
    </eva-avatar>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Avatar with fallback initials when image fails to load.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <eva-avatar style="width: 2rem; height: 2rem;">
        <eva-avatar-image src="https://via.placeholder.com/32" alt="Small avatar"></eva-avatar-image>
      </eva-avatar>
      <eva-avatar style="width: 2.5rem; height: 2.5rem;">
        <eva-avatar-image src="https://via.placeholder.com/40" alt="Medium avatar"></eva-avatar-image>
      </eva-avatar>
      <eva-avatar style="width: 3rem; height: 3rem;">
        <eva-avatar-image src="https://via.placeholder.com/48" alt="Large avatar"></eva-avatar-image>
      </eva-avatar>
      <eva-avatar style="width: 4rem; height: 4rem;">
        <eva-avatar-image src="https://via.placeholder.com/64" alt="XL avatar"></eva-avatar-image>
      </eva-avatar>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Avatars in different sizes.',
      },
    },
  },
};

export const UserList: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      ${[1, 2, 3, 4, 5].map(i => html`
        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 8px;">
          <eva-avatar>
            <eva-avatar-image src="https://via.placeholder.com/40/${i}00" alt="User ${i}"></eva-avatar-image>
          </eva-avatar>
          <div>
            <h4 style="margin: 0; font-size: 1rem;">User Name ${i}</h4>
            <p style="margin: 0; color: #666; font-size: 0.875rem;">user${i}@example.com</p>
          </div>
        </div>
      `)}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Avatars in a user list.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Alt Text:</strong> Always provide descriptive alt text for images</li>
        <li><strong>Fallback Support:</strong> Graceful degradation with fallback initials</li>
        <li><strong>Semantic HTML:</strong> Proper image element with accessibility attributes</li>
        <li><strong>Responsive:</strong> Scales appropriately at different sizes</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the avatar component.',
      },
    },
  },
};
