import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-dropdown-menu';

/**
 * ## EVA Dropdown Menu
 * 
 * Click-triggered dropdown menu with keyboard navigation.
 * 
 * ### Features:
 * - Opens on click (not hover)
 * - Auto-positioned relative to trigger
 * - Closes on outside click or ESC
 * - Keyboard navigation (arrow keys, Enter)
 * - Supports checkboxes, radio items, separators
 * - Nested submenus (if implemented)
 * 
 * ### Usage:
 * ```html
 * <eva-dropdown-menu>
 *   <button slot="trigger">Menu</button>
 *   <eva-dropdown-menu-content>
 *     <eva-dropdown-menu-item>Edit</eva-dropdown-menu-item>
 *     <eva-dropdown-menu-item>Delete</eva-dropdown-menu-item>
 *   </eva-dropdown-menu-content>
 * </eva-dropdown-menu>
 * ```
 */
const meta: Meta = {
  title: 'Components/Dropdown Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Click-triggered dropdown menu with keyboard navigation support.',
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

/**
 * Default dropdown menu with basic actions.
 */
export const Default: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Click the button to open the menu</p>
      <eva-dropdown-menu>
        <button slot="trigger" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer; font-weight: 500;">
          Actions
        </button>
        <eva-dropdown-menu-content>
          <eva-dropdown-menu-item>Edit</eva-dropdown-menu-item>
          <eva-dropdown-menu-item>Duplicate</eva-dropdown-menu-item>
          <eva-dropdown-menu-separator></eva-dropdown-menu-separator>
          <eva-dropdown-menu-item>Archive</eva-dropdown-menu-item>
          <eva-dropdown-menu-item style="color: #dc2626;">Delete</eva-dropdown-menu-item>
        </eva-dropdown-menu-content>
      </eva-dropdown-menu>
    </div>
  `,
};

/**
 * User account menu with profile options.
 */
export const UserMenu: Story = {
  render: () => html`
    <div style="display: flex; justify-content: flex-end;">
      <eva-dropdown-menu>
        <button slot="trigger" style="padding: 0.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 9999px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
          <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 9999px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
            JD
          </div>
        </button>
        <eva-dropdown-menu-content>
          <div style="padding: 0.75rem 1rem; border-bottom: 1px solid #e5e7eb;">
            <p style="margin: 0; font-weight: 500;">John Doe</p>
            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #6b7280;">john@example.com</p>
          </div>
          <eva-dropdown-menu-item>Profile Settings</eva-dropdown-menu-item>
          <eva-dropdown-menu-item>Billing</eva-dropdown-menu-item>
          <eva-dropdown-menu-item>Team</eva-dropdown-menu-item>
          <eva-dropdown-menu-separator></eva-dropdown-menu-separator>
          <eva-dropdown-menu-item>Support</eva-dropdown-menu-item>
          <eva-dropdown-menu-item>Documentation</eva-dropdown-menu-item>
          <eva-dropdown-menu-separator></eva-dropdown-menu-separator>
          <eva-dropdown-menu-item>Sign Out</eva-dropdown-menu-item>
        </eva-dropdown-menu-content>
      </eva-dropdown-menu>
    </div>
  `,
};

/**
 * Filter menu with checkbox items.
 */
export const FilterMenu: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Filter menu with checkboxes</p>
      <eva-dropdown-menu>
        <button slot="trigger" style="padding: 0.5rem 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.375rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
          Filter
          <span style="font-size: 0.75rem;">▼</span>
        </button>
        <eva-dropdown-menu-content>
          <div style="padding: 0.75rem 1rem; border-bottom: 1px solid #e5e7eb;">
            <p style="margin: 0; font-weight: 500; font-size: 0.875rem;">Filter by Status</p>
          </div>
          <eva-dropdown-menu-checkbox-item checked>
            Active
          </eva-dropdown-menu-checkbox-item>
          <eva-dropdown-menu-checkbox-item checked>
            Pending
          </eva-dropdown-menu-checkbox-item>
          <eva-dropdown-menu-checkbox-item>
            Completed
          </eva-dropdown-menu-checkbox-item>
          <eva-dropdown-menu-checkbox-item>
            Archived
          </eva-dropdown-menu-checkbox-item>
        </eva-dropdown-menu-content>
      </eva-dropdown-menu>
    </div>
  `,
};

/**
 * Sort menu with radio items.
 */
export const SortMenu: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Sort menu with radio selection</p>
      <eva-dropdown-menu>
        <button slot="trigger" style="padding: 0.5rem 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.375rem; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
          Sort
          <span style="font-size: 0.75rem;">▼</span>
        </button>
        <eva-dropdown-menu-content>
          <div style="padding: 0.75rem 1rem; border-bottom: 1px solid #e5e7eb;">
            <p style="margin: 0; font-weight: 500; font-size: 0.875rem;">Sort by</p>
          </div>
          <eva-dropdown-menu-radio-group value="date">
            <eva-dropdown-menu-radio-item value="date" checked>
              Date Modified
            </eva-dropdown-menu-radio-item>
            <eva-dropdown-menu-radio-item value="name">
              Name
            </eva-dropdown-menu-radio-item>
            <eva-dropdown-menu-radio-item value="size">
              File Size
            </eva-dropdown-menu-radio-item>
            <eva-dropdown-menu-radio-item value="type">
              File Type
            </eva-dropdown-menu-radio-item>
          </eva-dropdown-menu-radio-group>
        </eva-dropdown-menu-content>
      </eva-dropdown-menu>
    </div>
  `,
};

/**
 * More actions menu with icons.
 */
export const WithIcons: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Menu items with icons</p>
      <eva-dropdown-menu>
        <button slot="trigger" style="width: 36px; height: 36px; background: white; border: 1px solid #e5e7eb; border-radius: 0.375rem; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
          ⋮
        </button>
        <eva-dropdown-menu-content>
          <eva-dropdown-menu-item>
            <span style="display: flex; align-items: center; gap: 0.75rem;">
              <span>📝</span> Edit
            </span>
          </eva-dropdown-menu-item>
          <eva-dropdown-menu-item>
            <span style="display: flex; align-items: center; gap: 0.75rem;">
              <span>📋</span> Copy
            </span>
          </eva-dropdown-menu-item>
          <eva-dropdown-menu-item>
            <span style="display: flex; align-items: center; gap: 0.75rem;">
              <span>📤</span> Share
            </span>
          </eva-dropdown-menu-item>
          <eva-dropdown-menu-separator></eva-dropdown-menu-separator>
          <eva-dropdown-menu-item>
            <span style="display: flex; align-items: center; gap: 0.75rem;">
              <span>⬇️</span> Download
            </span>
          </eva-dropdown-menu-item>
          <eva-dropdown-menu-separator></eva-dropdown-menu-separator>
          <eva-dropdown-menu-item style="color: #dc2626;">
            <span style="display: flex; align-items: center; gap: 0.75rem;">
              <span>🗑️</span> Delete
            </span>
          </eva-dropdown-menu-item>
        </eva-dropdown-menu-content>
      </eva-dropdown-menu>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Arrow keys navigate items, Enter activates, ESC closes
 * - **Focus Management**: Focus trapped in menu when open, returns to trigger on close
 * - **Screen Readers**: role="menu" on content, role="menuitem" on items
 * - **Color Contrast**: WCAG AA compliant colors (4.5:1 minimum)
 * - **Visual Feedback**: Clear focus indicators and hover states
 * - **Trigger Button**: Properly labeled with accessible name
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Dropdown Menu Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Space/Enter opens menu from trigger button</li>
          <li>Up/Down arrows navigate menu items</li>
          <li>Enter/Space activate focused item</li>
          <li>ESC closes menu and returns focus to trigger</li>
          <li>Tab closes menu (focus moves to next element)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Trigger button has accessible name</li>
          <li>Menu content has role="menu"</li>
          <li>Items have role="menuitem"</li>
          <li>Checkboxes use role="menuitemcheckbox"</li>
          <li>Radio items use role="menuitemradio"</li>
          <li>Open/closed state announced</li>
        </ul>
      </div>

      <eva-dropdown-menu>
        <button slot="trigger" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer;">
          Accessible Menu
        </button>
        <eva-dropdown-menu-content>
          <eva-dropdown-menu-item>Item 1</eva-dropdown-menu-item>
          <eva-dropdown-menu-item>Item 2</eva-dropdown-menu-item>
          <eva-dropdown-menu-item>Item 3</eva-dropdown-menu-item>
        </eva-dropdown-menu-content>
      </eva-dropdown-menu>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Screen reader friendly<br>
          ✓ Auto-positioning
        </p>
      </div>
    </div>
  `,
};
