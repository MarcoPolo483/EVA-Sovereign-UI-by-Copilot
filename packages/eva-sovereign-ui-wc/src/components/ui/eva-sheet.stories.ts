import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-sheet';
import '../gc-design/eva-gc-button';

const meta: Meta = {
  title: 'UI/Sheet',
  component: 'eva-sheet',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Sheet open state',
      defaultValue: false,
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side from which sheet slides in',
      defaultValue: 'right',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Side panel component that slides in from any edge. Features overlay backdrop, ESC to close, and smooth animations with WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'focus-order', enabled: true },
          { id: 'keyboard-focus', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-sheet-default">Open Sheet</eva-gc-button>
      <eva-sheet id="sheet-default" side="right">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Sheet Title</h2>
          <p>This is a sheet that slides in from the right side of the screen.</p>
          <p>Press ESC or click outside to close.</p>
          <eva-gc-button id="close-sheet-default">Close</eva-gc-button>
        </div>
      </eva-sheet>
    </div>
    <script>
      document.getElementById('open-sheet-default').addEventListener('click', () => {
        document.getElementById('sheet-default').setAttribute('open', '');
      });
      document.getElementById('close-sheet-default').addEventListener('click', () => {
        document.getElementById('sheet-default').removeAttribute('open');
      });
    </script>
  `,
};

export const FromLeft: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-sheet-left">Open from Left</eva-gc-button>
      <eva-sheet id="sheet-left" side="left">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Navigation</h2>
          <nav style="display: flex; flex-direction: column; gap: 1rem;">
            <a href="#" style="padding: 0.5rem;">Home</a>
            <a href="#" style="padding: 0.5rem;">About</a>
            <a href="#" style="padding: 0.5rem;">Services</a>
            <a href="#" style="padding: 0.5rem;">Contact</a>
          </nav>
        </div>
      </eva-sheet>
    </div>
    <script>
      document.getElementById('open-sheet-left').addEventListener('click', () => {
        document.getElementById('sheet-left').setAttribute('open', '');
      });
    </script>
  `,
};

export const FromTop: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-sheet-top">Open from Top</eva-gc-button>
      <eva-sheet id="sheet-top" side="top">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Notification Banner</h2>
          <p>This sheet slides down from the top of the screen.</p>
          <eva-gc-button id="close-sheet-top">Dismiss</eva-gc-button>
        </div>
      </eva-sheet>
    </div>
    <script>
      document.getElementById('open-sheet-top').addEventListener('click', () => {
        document.getElementById('sheet-top').setAttribute('open', '');
      });
      document.getElementById('close-sheet-top').addEventListener('click', () => {
        document.getElementById('sheet-top').removeAttribute('open');
      });
    </script>
  `,
};

export const FromBottom: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-sheet-bottom">Open from Bottom</eva-gc-button>
      <eva-sheet id="sheet-bottom" side="bottom">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Cookie Consent</h2>
          <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <eva-gc-button id="accept-cookies">Accept</eva-gc-button>
            <eva-gc-button id="decline-cookies" variant="secondary">Decline</eva-gc-button>
          </div>
        </div>
      </eva-sheet>
    </div>
    <script>
      document.getElementById('open-sheet-bottom').addEventListener('click', () => {
        document.getElementById('sheet-bottom').setAttribute('open', '');
      });
      document.getElementById('accept-cookies').addEventListener('click', () => {
        document.getElementById('sheet-bottom').removeAttribute('open');
      });
      document.getElementById('decline-cookies').addEventListener('click', () => {
        document.getElementById('sheet-bottom').removeAttribute('open');
      });
    </script>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-sheet-form">Edit Profile</eva-gc-button>
      <eva-sheet id="sheet-form" side="right">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Edit Profile</h2>
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <label for="name">Name</label>
              <eva-input id="name" placeholder="Enter your name" value="John Doe"></eva-input>
            </div>
            <div>
              <label for="email">Email</label>
              <eva-input id="email" type="email" placeholder="john.doe@example.com" value="john.doe@example.com"></eva-input>
            </div>
            <div>
              <label for="bio">Bio</label>
              <eva-textarea id="bio" placeholder="Tell us about yourself" rows="4"></eva-textarea>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
              <eva-gc-button type="submit">Save Changes</eva-gc-button>
              <eva-gc-button id="cancel-form" variant="secondary">Cancel</eva-gc-button>
            </div>
          </form>
        </div>
      </eva-sheet>
    </div>
    <script>
      document.getElementById('open-sheet-form').addEventListener('click', () => {
        document.getElementById('sheet-form').setAttribute('open', '');
      });
      document.getElementById('cancel-form').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('sheet-form').removeAttribute('open');
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Sheet used as a form panel for editing user profile information.',
      },
    },
  },
};

export const AllSides: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <eva-gc-button id="open-sheet-all-right">Right</eva-gc-button>
      <eva-gc-button id="open-sheet-all-left">Left</eva-gc-button>
      <eva-gc-button id="open-sheet-all-top">Top</eva-gc-button>
      <eva-gc-button id="open-sheet-all-bottom">Bottom</eva-gc-button>

      <eva-sheet id="sheet-all-right" side="right">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Right Sheet</h2>
          <p>Slides in from the right.</p>
        </div>
      </eva-sheet>

      <eva-sheet id="sheet-all-left" side="left">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Left Sheet</h2>
          <p>Slides in from the left.</p>
        </div>
      </eva-sheet>

      <eva-sheet id="sheet-all-top" side="top">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Top Sheet</h2>
          <p>Slides in from the top.</p>
        </div>
      </eva-sheet>

      <eva-sheet id="sheet-all-bottom" side="bottom">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Bottom Sheet</h2>
          <p>Slides in from the bottom.</p>
        </div>
      </eva-sheet>
    </div>
    <script>
      ['right', 'left', 'top', 'bottom'].forEach(side => {
        document.getElementById('open-sheet-all-' + side).addEventListener('click', () => {
          document.getElementById('sheet-all-' + side).setAttribute('open', '');
        });
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of sheets sliding in from all four sides.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Press ESC to close the sheet</li>
        <li><strong>Focus Management:</strong> Focus is automatically trapped within the sheet when open</li>
        <li><strong>Screen Reader Support:</strong> Proper ARIA labels and role attributes</li>
        <li><strong>Color Contrast:</strong> All text meets WCAG 2.2 AA standards (4.5:1 minimum)</li>
        <li><strong>Backdrop Interaction:</strong> Clicking outside the sheet closes it</li>
        <li><strong>Animation:</strong> Smooth slide-in/out animations with proper timing</li>
      </ul>
      
      <eva-gc-button id="open-sheet-a11y">Test Accessibility</eva-gc-button>
      <eva-sheet id="sheet-a11y" side="right">
        <div slot="content" style="padding: 1.5rem;">
          <h2 style="margin-top: 0;">Accessible Sheet</h2>
          <p>Try these keyboard shortcuts:</p>
          <ul>
            <li>Press <kbd>ESC</kbd> to close</li>
            <li>Press <kbd>Tab</kbd> to navigate through focusable elements</li>
          </ul>
          <eva-gc-button id="close-sheet-a11y">Close</eva-gc-button>
        </div>
      </eva-sheet>
    </div>
    <script>
      document.getElementById('open-sheet-a11y').addEventListener('click', () => {
        document.getElementById('sheet-a11y').setAttribute('open', '');
      });
      document.getElementById('close-sheet-a11y').addEventListener('click', () => {
        document.getElementById('sheet-a11y').removeAttribute('open');
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive accessibility features and keyboard shortcuts.',
      },
    },
  },
};
