import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-hover-card';
import './eva-avatar';

const meta: Meta = {
  title: 'UI/Hover Card',
  component: 'eva-hover-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Preview card that appears on hover. Features 200ms delay, automatic positioning, and smooth animations with WCAG 2.2 AA compliance.',
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
  render: () => html`
    <div style="padding: 3rem;">
      <eva-hover-card>
        <span slot="trigger" style="text-decoration: underline; cursor: help;">
          @username
        </span>
        <div slot="content" style="padding: 1rem; min-width: 250px;">
          <div style="display: flex; gap: 1rem; align-items: center;">
            <eva-avatar>
              <eva-avatar-image src="https://via.placeholder.com/40" alt="User avatar"></eva-avatar-image>
            </eva-avatar>
            <div>
              <h4 style="margin: 0; font-size: 1rem;">Jane Doe</h4>
              <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.875rem;">@username</p>
            </div>
          </div>
          <p style="margin: 0.75rem 0 0 0; font-size: 0.875rem;">Software Developer at ACME Corp. Passionate about web standards and accessibility.</p>
        </div>
      </eva-hover-card>
    </div>
  `,
};

export const UserProfile: Story = {
  render: () => html`
    <div style="padding: 3rem;">
      <p>Hover over username
        <eva-hover-card>
          <span slot="trigger" style="color: #0066cc; text-decoration: underline; cursor: pointer;">
            @johndoe
          </span>
          <div slot="content" style="padding: 1.5rem; min-width: 300px;">
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
              <eva-avatar style="width: 3rem; height: 3rem;">
                <eva-avatar-image src="https://via.placeholder.com/48" alt="John Doe"></eva-avatar-image>
              </eva-avatar>
              <div style="flex: 1;">
                <h4 style="margin: 0; font-size: 1.125rem;">John Doe</h4>
                <p style="margin: 0.25rem 0; color: #666; font-size: 0.875rem;">@johndoe</p>
              </div>
            </div>
            <p style="margin: 0 0 1rem 0; font-size: 0.875rem; line-height: 1.5;">Full-stack developer specializing in government applications. Building accessible, secure, and user-friendly experiences.</p>
            <div style="display: flex; gap: 1.5rem; font-size: 0.875rem; color: #666;">
              <span><strong>1.2K</strong> Followers</span>
              <span><strong>500</strong> Following</span>
            </div>
          </div>
        </eva-hover-card>
        to see profile.
      </p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Rich user profile preview on hover.',
      },
    },
  },
};

export const ProductPreview: Story = {
  render: () => html`
    <div style="padding: 3rem; display: flex; gap: 2rem; flex-wrap: wrap;">
      <eva-hover-card>
        <div slot="trigger" style="width: 150px; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; cursor: pointer;">
          <div style="width: 100%; aspect-ratio: 1; background: #f0f0f0; border-radius: 4px; margin-bottom: 0.75rem;"></div>
          <h4 style="margin: 0; font-size: 0.875rem;">Product A</h4>
          <p style="margin: 0.25rem 0 0 0; font-weight: 600;">$49.99</p>
        </div>
        <div slot="content" style="padding: 1.5rem; min-width: 300px;">
          <div style="width: 100%; aspect-ratio: 16/9; background: #f0f0f0; border-radius: 4px; margin-bottom: 1rem;"></div>
          <h3 style="margin: 0 0 0.5rem 0;">Premium Product A</h3>
          <p style="margin: 0 0 1rem 0; color: #666; font-size: 0.875rem;">High-quality product with exceptional features and outstanding performance. Perfect for professional use.</p>
          <div style="margin-bottom: 1rem;">
            <span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-right: 0.5rem;">Premium</span>
            <span style="background: #e8f5e9; color: #2e7d32; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">In Stock</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 1.25rem; font-weight: 600;">$49.99</span>
            <eva-gc-button size="sm">Add to Cart</eva-gc-button>
          </div>
        </div>
      </eva-hover-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Product card with detailed preview on hover.',
      },
    },
  },
};

export const LinkPreview: Story = {
  render: () => html`
    <div style="padding: 3rem; max-width: 600px;">
      <p style="line-height: 1.6;">
        Check out our 
        <eva-hover-card>
          <a href="#" slot="trigger" style="color: #0066cc; text-decoration: underline;">
            documentation
          </a>
          <div slot="content" style="padding: 1.25rem; min-width: 320px;">
            <h4 style="margin: 0 0 0.5rem 0;">EVA Documentation</h4>
            <p style="margin: 0 0 1rem 0; color: #666; font-size: 0.875rem;">Complete guide to building accessible government applications with EVA Sovereign UI components.</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Getting Started</span>
              <span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Components</span>
              <span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">API Reference</span>
            </div>
          </div>
        </eva-hover-card>
        to learn more about available components and features.
      </p>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Link with preview card showing content summary.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px; padding: 1rem;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Hover Delay:</strong> 200ms delay prevents accidental triggers</li>
        <li><strong>Keyboard Support:</strong> Content accessible via keyboard navigation</li>
        <li><strong>Auto-positioning:</strong> Card adjusts to stay on screen</li>
        <li><strong>Color Contrast:</strong> All text meets WCAG AA standards</li>
        <li><strong>Screen Readers:</strong> Semantic HTML for assistive technology</li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features of the hover card component.',
      },
    },
  },
};
