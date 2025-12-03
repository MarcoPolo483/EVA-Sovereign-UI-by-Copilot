import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-collapsible';
import '../gc-design/eva-gc-button';

const meta: Meta = {
  title: 'UI/Collapsible',
  component: 'eva-collapsible',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Collapsible open state',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Collapsible content container with smooth transitions. Composed of eva-collapsible, eva-collapsible-trigger, and eva-collapsible-content. Supports keyboard navigation and WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'button-name', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-collapsible>
      <eva-collapsible-trigger>
        <eva-gc-button>Toggle Content</eva-gc-button>
      </eva-collapsible-trigger>
      <eva-collapsible-content>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px;">
          <p style="margin: 0;">This content can be collapsed and expanded.</p>
        </div>
      </eva-collapsible-content>
    </eva-collapsible>
  `,
};

export const OpenByDefault: Story = {
  render: () => html`
    <eva-collapsible open>
      <eva-collapsible-trigger>
        <eva-gc-button>Close Content</eva-gc-button>
      </eva-collapsible-trigger>
      <eva-collapsible-content>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px;">
          <p style="margin: 0;">This collapsible starts in the open state.</p>
        </div>
      </eva-collapsible-content>
    </eva-collapsible>
  `,
};

export const FAQ: Story = {
  render: () => html`
    <div style="max-width: 600px; display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="margin: 0 0 1rem 0;">Frequently Asked Questions</h3>

      <eva-collapsible>
        <eva-collapsible-trigger>
          <button style="width: 100%; padding: 1rem; text-align: left; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; font-size: 1rem; font-weight: 600;">
            What is EVA Sovereign UI?
          </button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px; background: #f9f9f9;">
            <p style="margin: 0;">EVA Sovereign UI is a production-ready web components design system for government applications with WCAG 2.2 AA compliance and support for Five Eyes locales.</p>
          </div>
        </eva-collapsible-content>
      </eva-collapsible>

      <eva-collapsible>
        <eva-collapsible-trigger>
          <button style="width: 100%; padding: 1rem; text-align: left; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; font-size: 1rem; font-weight: 600;">
            Is it accessible?
          </button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px; background: #f9f9f9;">
            <p style="margin: 0;">Yes! All components meet WCAG 2.2 AA standards with proper color contrast, keyboard navigation, screen reader support, and focus indicators.</p>
          </div>
        </eva-collapsible-content>
      </eva-collapsible>

      <eva-collapsible>
        <eva-collapsible-trigger>
          <button style="width: 100%; padding: 1rem; text-align: left; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; font-size: 1rem; font-weight: 600;">
            Which frameworks are supported?
          </button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px; background: #f9f9f9;">
            <p style="margin: 0;">EVA Sovereign UI provides wrappers for React, Vue, Angular, and Svelte, with 100% feature parity across all frameworks.</p>
          </div>
        </eva-collapsible-content>
      </eva-collapsible>

      <eva-collapsible>
        <eva-collapsible-trigger>
          <button style="width: 100%; padding: 1rem; text-align: left; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; font-size: 1rem; font-weight: 600;">
            How do I get started?
          </button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px; background: #f9f9f9;">
            <p style="margin: 0 0 0.5rem 0;">Install the package for your framework:</p>
            <pre style="background: #f0f0f0; padding: 0.5rem; border-radius: 4px; margin: 0; overflow-x: auto;"><code>npm install @eva-suite/eva-sovereign-ui-react</code></pre>
          </div>
        </eva-collapsible-content>
      </eva-collapsible>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'FAQ section using multiple collapsible components.',
      },
    },
  },
};

export const NestedContent: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-collapsible>
        <eva-collapsible-trigger>
          <eva-gc-button>Show Advanced Settings</eva-gc-button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <div style="padding: 1.5rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px;">
            <h4 style="margin-top: 0;">Advanced Configuration</h4>
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <eva-label for="api-key">API Key</eva-label>
                <eva-input id="api-key" type="password" placeholder="Enter API key"></eva-input>
              </div>

              <div>
                <eva-label for="timeout">Request Timeout (ms)</eva-label>
                <eva-input id="timeout" type="number" value="5000"></eva-input>
              </div>

              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <eva-switch id="debug-mode"></eva-switch>
                <eva-label for="debug-mode">Enable Debug Mode</eva-label>
              </div>

              <eva-gc-button>Save Settings</eva-gc-button>
            </div>
          </div>
        </eva-collapsible-content>
      </eva-collapsible>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Collapsible with nested form controls.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => html`
    <eva-collapsible id="icon-collapsible">
      <eva-collapsible-trigger>
        <button style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; width: 100%; text-align: left; border: 1px solid #e0e0e0; border-radius: 4px; background: white; cursor: pointer; font-size: 1rem;">
          <span id="chevron-icon" style="transition: transform 200ms;">▶</span>
          <span style="font-weight: 600;">Click to expand</span>
        </button>
      </eva-collapsible-trigger>
      <eva-collapsible-content>
        <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px;">
          <p style="margin: 0;">Content is now visible with an animated chevron icon.</p>
        </div>
      </eva-collapsible-content>
    </eva-collapsible>
    <script>
      const collapsible = document.getElementById('icon-collapsible');
      const chevron = document.getElementById('chevron-icon');
      collapsible.addEventListener('toggle', (e) => {
        chevron.style.transform = e.detail.open ? 'rotate(90deg)' : 'rotate(0deg)';
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Collapsible with an animated chevron icon.',
      },
    },
  },
};

export const RichContent: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-collapsible>
        <eva-collapsible-trigger>
          <eva-gc-button>View Article</eva-gc-button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <article style="padding: 1.5rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px;">
            <h2 style="margin-top: 0;">Understanding Web Components</h2>
            <p><strong>Published:</strong> January 15, 2024</p>
            <p>Web Components are a suite of different technologies allowing you to create reusable custom elements with their functionality encapsulated away from the rest of your code.</p>
            <h3>Key Technologies</h3>
            <ul>
              <li><strong>Custom Elements:</strong> Define new HTML elements</li>
              <li><strong>Shadow DOM:</strong> Encapsulate styles and markup</li>
              <li><strong>HTML Templates:</strong> Reusable markup fragments</li>
            </ul>
            <eva-gc-button>Read More</eva-gc-button>
          </article>
        </eva-collapsible-content>
      </eva-collapsible>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Collapsible containing rich article content.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Trigger is fully keyboard accessible</li>
        <li><strong>Screen Reader Support:</strong> Proper ARIA attributes for expand/collapse state</li>
        <li><strong>Focus Management:</strong> Focus remains on trigger after toggle</li>
        <li><strong>Visual Feedback:</strong> Clear indication of interactive elements</li>
        <li><strong>Smooth Animation:</strong> Respects prefers-reduced-motion</li>
      </ul>
      
      <eva-collapsible>
        <eva-collapsible-trigger>
          <eva-gc-button>Test Accessibility</eva-gc-button>
        </eva-collapsible-trigger>
        <eva-collapsible-content>
          <div style="padding: 1rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 4px 4px;">
            <p style="margin: 0 0 0.5rem 0;">Try these interactions:</p>
            <ul style="margin: 0;">
              <li>Click the button to toggle</li>
              <li>Use keyboard (Space/Enter) to toggle</li>
              <li>Focus remains on the trigger button</li>
            </ul>
          </div>
        </eva-collapsible-content>
      </eva-collapsible>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive accessibility features for the collapsible component.',
      },
    },
  },
};
