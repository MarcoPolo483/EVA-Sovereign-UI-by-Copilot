import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-drawer';
import '../gc-design/eva-gc-button';

const meta: Meta = {
  title: 'UI/Drawer',
  component: 'eva-drawer',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Drawer open state',
      defaultValue: false,
    },
    side: {
      control: 'select',
      options: ['right', 'left', 'top', 'bottom'],
      description: 'Side from which drawer slides in',
      defaultValue: 'right',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Slide-out panel component with overlay backdrop. Similar to Sheet but simplified. Features ESC to close, overlay click to dismiss, and WCAG 2.2 AA compliance.',
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
      <eva-gc-button id="open-drawer-default">Open Drawer</eva-gc-button>
      <eva-drawer id="drawer-default" side="right">
        <h2 style="margin-top: 0;">Drawer Title</h2>
        <p>This is a drawer that slides in from the right side.</p>
        <p>Click the overlay or press ESC to close.</p>
        <eva-gc-button id="close-drawer-default">Close</eva-gc-button>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-drawer-default').addEventListener('click', () => {
        document.getElementById('drawer-default').setAttribute('open', '');
      });
      document.getElementById('close-drawer-default').addEventListener('click', () => {
        document.getElementById('drawer-default').removeAttribute('open');
      });
    </script>
  `,
};

export const FromLeft: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-drawer-left">Open Sidebar</eva-gc-button>
      <eva-drawer id="drawer-left" side="left">
        <h2 style="margin-top: 0;">Sidebar Menu</h2>
        <nav style="display: flex; flex-direction: column; gap: 0.75rem;">
          <a href="#dashboard" style="padding: 0.75rem; border-radius: 4px; background: rgba(0, 0, 0, 0.05);">Dashboard</a>
          <a href="#reports" style="padding: 0.75rem; border-radius: 4px;">Reports</a>
          <a href="#analytics" style="padding: 0.75rem; border-radius: 4px;">Analytics</a>
          <a href="#settings" style="padding: 0.75rem; border-radius: 4px;">Settings</a>
          <a href="#help" style="padding: 0.75rem; border-radius: 4px;">Help</a>
        </nav>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-drawer-left').addEventListener('click', () => {
        document.getElementById('drawer-left').setAttribute('open', '');
      });
    </script>
  `,
};

export const FromTop: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-drawer-top">Show Notification</eva-gc-button>
      <eva-drawer id="drawer-top" side="top">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="flex: 1;">
            <h3 style="margin: 0 0 0.5rem 0;">System Update Available</h3>
            <p style="margin: 0;">A new version is available. Update now to get the latest features and security improvements.</p>
          </div>
          <eva-gc-button id="update-now">Update</eva-gc-button>
        </div>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-drawer-top').addEventListener('click', () => {
        document.getElementById('drawer-top').setAttribute('open', '');
      });
      document.getElementById('update-now').addEventListener('click', () => {
        document.getElementById('drawer-top').removeAttribute('open');
      });
    </script>
  `,
};

export const FromBottom: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-drawer-bottom">Show Actions</eva-gc-button>
      <eva-drawer id="drawer-bottom" side="bottom">
        <h3 style="margin-top: 0;">Quick Actions</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem;">
          <eva-gc-button>Share</eva-gc-button>
          <eva-gc-button>Download</eva-gc-button>
          <eva-gc-button>Print</eva-gc-button>
          <eva-gc-button>Export</eva-gc-button>
        </div>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-drawer-bottom').addEventListener('click', () => {
        document.getElementById('drawer-bottom').setAttribute('open', '');
      });
    </script>
  `,
};

export const FilterPanel: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-filters">Show Filters</eva-gc-button>
      <eva-drawer id="drawer-filters" side="right">
        <h2 style="margin-top: 0;">Filter Options</h2>
        
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Category</label>
            <eva-select placeholder="Select category">
              <eva-select-item value="all">All Categories</eva-select-item>
              <eva-select-item value="electronics">Electronics</eva-select-item>
              <eva-select-item value="clothing">Clothing</eva-select-item>
              <eva-select-item value="books">Books</eva-select-item>
            </eva-select>
          </div>

          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Price Range</label>
            <eva-slider min="0" max="1000" step="10" value="500"></eva-slider>
            <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.875rem;">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Availability</label>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <eva-checkbox id="in-stock"></eva-checkbox>
              <label for="in-stock">In Stock Only</label>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
              <eva-checkbox id="on-sale"></eva-checkbox>
              <label for="on-sale">On Sale</label>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <eva-gc-button id="apply-filters">Apply Filters</eva-gc-button>
            <eva-gc-button variant="secondary">Reset</eva-gc-button>
          </div>
        </div>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-filters').addEventListener('click', () => {
        document.getElementById('drawer-filters').setAttribute('open', '');
      });
      document.getElementById('apply-filters').addEventListener('click', () => {
        document.getElementById('drawer-filters').removeAttribute('open');
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Drawer used as a filter panel with various form controls.',
      },
    },
  },
};

export const ShoppingCart: Story = {
  render: () => html`
    <div>
      <eva-gc-button id="open-cart">View Cart (3)</eva-gc-button>
      <eva-drawer id="drawer-cart" side="right">
        <h2 style="margin-top: 0;">Shopping Cart</h2>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e0e0e0; border-radius: 4px;">
            <div style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px;"></div>
            <div style="flex: 1;">
              <h4 style="margin: 0 0 0.25rem 0;">Product Name</h4>
              <p style="margin: 0; color: #666; font-size: 0.875rem;">$49.99</p>
            </div>
            <eva-gc-button variant="secondary" size="sm">Remove</eva-gc-button>
          </div>

          <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e0e0e0; border-radius: 4px;">
            <div style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px;"></div>
            <div style="flex: 1;">
              <h4 style="margin: 0 0 0.25rem 0;">Another Product</h4>
              <p style="margin: 0; color: #666; font-size: 0.875rem;">$29.99</p>
            </div>
            <eva-gc-button variant="secondary" size="sm">Remove</eva-gc-button>
          </div>

          <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e0e0e0; border-radius: 4px;">
            <div style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px;"></div>
            <div style="flex: 1;">
              <h4 style="margin: 0 0 0.25rem 0;">Third Item</h4>
              <p style="margin: 0; color: #666; font-size: 0.875rem;">$19.99</p>
            </div>
            <eva-gc-button variant="secondary" size="sm">Remove</eva-gc-button>
          </div>
        </div>

        <div style="border-top: 2px solid #e0e0e0; padding-top: 1rem; margin-top: auto;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
            <span style="font-weight: 600;">Subtotal:</span>
            <span style="font-weight: 600;">$99.97</span>
          </div>
          <eva-gc-button style="width: 100%;">Proceed to Checkout</eva-gc-button>
        </div>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-cart').addEventListener('click', () => {
        document.getElementById('drawer-cart').setAttribute('open', '');
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Drawer used as a shopping cart with product list and checkout action.',
      },
    },
  },
};

export const AllSides: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <eva-gc-button id="open-drawer-all-right">Right</eva-gc-button>
      <eva-gc-button id="open-drawer-all-left">Left</eva-gc-button>
      <eva-gc-button id="open-drawer-all-top">Top</eva-gc-button>
      <eva-gc-button id="open-drawer-all-bottom">Bottom</eva-gc-button>

      <eva-drawer id="drawer-all-right" side="right">
        <h2 style="margin-top: 0;">Right Drawer</h2>
        <p>Slides in from the right.</p>
      </eva-drawer>

      <eva-drawer id="drawer-all-left" side="left">
        <h2 style="margin-top: 0;">Left Drawer</h2>
        <p>Slides in from the left.</p>
      </eva-drawer>

      <eva-drawer id="drawer-all-top" side="top">
        <h2 style="margin-top: 0;">Top Drawer</h2>
        <p>Slides in from the top.</p>
      </eva-drawer>

      <eva-drawer id="drawer-all-bottom" side="bottom">
        <h2 style="margin-top: 0;">Bottom Drawer</h2>
        <p>Slides in from the bottom.</p>
      </eva-drawer>
    </div>
    <script>
      ['right', 'left', 'top', 'bottom'].forEach(side => {
        document.getElementById('open-drawer-all-' + side).addEventListener('click', () => {
          document.getElementById('drawer-all-' + side).setAttribute('open', '');
        });
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of drawers sliding in from all four sides.',
      },
    },
  },
};

export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3>Accessibility Features</h3>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Press ESC to close the drawer</li>
        <li><strong>Focus Management:</strong> Focus is trapped within the drawer when open</li>
        <li><strong>Overlay Interaction:</strong> Clicking the overlay backdrop closes the drawer</li>
        <li><strong>Screen Reader Support:</strong> Proper ARIA attributes for assistive technology</li>
        <li><strong>Color Contrast:</strong> All text meets WCAG 2.2 AA standards (4.5:1 minimum)</li>
        <li><strong>Animation:</strong> Smooth slide-in animation with appropriate timing</li>
      </ul>
      
      <eva-gc-button id="open-drawer-a11y">Test Accessibility</eva-gc-button>
      <eva-drawer id="drawer-a11y" side="right">
        <h2 style="margin-top: 0;">Accessible Drawer</h2>
        <p>Try these interactions:</p>
        <ul>
          <li>Press <kbd>ESC</kbd> to close</li>
          <li>Click outside the drawer to close</li>
          <li>Press <kbd>Tab</kbd> to navigate elements</li>
        </ul>
        <eva-gc-button id="close-drawer-a11y">Close Drawer</eva-gc-button>
      </eva-drawer>
    </div>
    <script>
      document.getElementById('open-drawer-a11y').addEventListener('click', () => {
        document.getElementById('drawer-a11y').setAttribute('open', '');
      });
      document.getElementById('close-drawer-a11y').addEventListener('click', () => {
        document.getElementById('drawer-a11y').removeAttribute('open');
      });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive accessibility features and keyboard shortcuts for the drawer component.',
      },
    },
  },
};
