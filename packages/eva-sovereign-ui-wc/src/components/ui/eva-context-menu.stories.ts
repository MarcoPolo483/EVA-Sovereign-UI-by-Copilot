import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-context-menu';

/**
 * ## EVA Context Menu
 * 
 * Right-click context menu that appears at cursor position.
 * 
 * ### Features:
 * - Opens on right-click (contextmenu event)
 * - Positioned at cursor coordinates
 * - Automatically adjusts if off-screen
 * - Closes on outside click or ESC key
 * - Keyboard navigation (arrow keys, Enter)
 * - Supports menu items, separators, disabled items
 * 
 * ### Usage:
 * ```html
 * <eva-context-menu>
 *   <div>Right-click me</div>
 *   <eva-context-menu-content slot="menu">
 *     <eva-context-menu-item>Cut</eva-context-menu-item>
 *     <eva-context-menu-item>Copy</eva-context-menu-item>
 *     <eva-context-menu-item>Paste</eva-context-menu-item>
 *   </eva-context-menu-content>
 * </eva-context-menu>
 * ```
 */
const meta: Meta = {
  title: 'Components/Context Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Context menu triggered by right-click with keyboard navigation.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'aria-roles', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default context menu on a content area.
 */
export const Default: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Right-click the box below to open the context menu</p>
      <eva-context-menu>
        <div style="width: 300px; height: 200px; background: #f3f4f6; border: 2px dashed #d1d5db; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #6b7280; font-weight: 500;">
          Right-click here
        </div>
        <eva-context-menu-content slot="menu">
          <eva-context-menu-item>Cut</eva-context-menu-item>
          <eva-context-menu-item>Copy</eva-context-menu-item>
          <eva-context-menu-item>Paste</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Delete</eva-context-menu-item>
        </eva-context-menu-content>
      </eva-context-menu>
    </div>
  `,
};

/**
 * Context menu on text selection.
 */
export const OnTextSelection: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Right-click the text below to see formatting options</p>
      <eva-context-menu>
        <div style="padding: 1.5rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; line-height: 1.8;">
          <p style="margin: 0;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Right-click anywhere in this text to see formatting options.
          </p>
        </div>
        <eva-context-menu-content slot="menu">
          <eva-context-menu-item>
            <span style="font-weight: bold;">Bold</span>
          </eva-context-menu-item>
          <eva-context-menu-item>
            <span style="font-style: italic;">Italic</span>
          </eva-context-menu-item>
          <eva-context-menu-item>
            <span style="text-decoration: underline;">Underline</span>
          </eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Copy</eva-context-menu-item>
          <eva-context-menu-item>Paste</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Select All</eva-context-menu-item>
        </eva-context-menu-content>
      </eva-context-menu>
    </div>
  `,
};

/**
 * File manager context menu with icons.
 */
export const FileManager: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Right-click on any file to see actions</p>
      <eva-context-menu>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
          <div style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center; cursor: default;">
            <div style="width: 48px; height: 48px; background: #dbeafe; border-radius: 0.5rem; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
              📄
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: #374151;">Document.pdf</p>
          </div>
          <div style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center; cursor: default;">
            <div style="width: 48px; height: 48px; background: #fef3c7; border-radius: 0.5rem; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
              📊
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: #374151;">Report.xlsx</p>
          </div>
          <div style="padding: 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center; cursor: default;">
            <div style="width: 48px; height: 48px; background: #fce7f3; border-radius: 0.5rem; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
              🖼️
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: #374151;">Photo.jpg</p>
          </div>
        </div>
        <eva-context-menu-content slot="menu">
          <eva-context-menu-item>Open</eva-context-menu-item>
          <eva-context-menu-item>Open With...</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Rename</eva-context-menu-item>
          <eva-context-menu-item>Move to...</eva-context-menu-item>
          <eva-context-menu-item>Copy</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Share</eva-context-menu-item>
          <eva-context-menu-item>Download</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item style="color: #dc2626;">Delete</eva-context-menu-item>
        </eva-context-menu-content>
      </eva-context-menu>
    </div>
  `,
};

/**
 * Table row context menu.
 */
export const OnTableRow: Story = {
  render: () => html`
    <div>
      <p style="margin-bottom: 1rem;">Right-click on any row to see actions</p>
      <eva-context-menu>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
              <th style="padding: 0.75rem; text-align: left; font-weight: 500;">Name</th>
              <th style="padding: 0.75rem; text-align: left; font-weight: 500;">Email</th>
              <th style="padding: 0.75rem; text-align: left; font-weight: 500;">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb; cursor: default;">
              <td style="padding: 0.75rem;">John Doe</td>
              <td style="padding: 0.75rem;">john@example.com</td>
              <td style="padding: 0.75rem;">Admin</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb; cursor: default;">
              <td style="padding: 0.75rem;">Jane Smith</td>
              <td style="padding: 0.75rem;">jane@example.com</td>
              <td style="padding: 0.75rem;">Editor</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb; cursor: default;">
              <td style="padding: 0.75rem;">Bob Johnson</td>
              <td style="padding: 0.75rem;">bob@example.com</td>
              <td style="padding: 0.75rem;">Viewer</td>
            </tr>
          </tbody>
        </table>
        <eva-context-menu-content slot="menu">
          <eva-context-menu-item>View Profile</eva-context-menu-item>
          <eva-context-menu-item>Send Message</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Edit User</eva-context-menu-item>
          <eva-context-menu-item>Change Role</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item style="color: #dc2626;">Remove User</eva-context-menu-item>
        </eva-context-menu-content>
      </eva-context-menu>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Arrow keys navigate menu items, Enter activates, ESC closes
 * - **Focus Management**: Focus trapped in menu when open, returns to trigger on close
 * - **Screen Readers**: role="menu" with aria-orientation="vertical", items have role="menuitem"
 * - **Color Contrast**: WCAG AA compliant colors (4.5:1 for text)
 * - **Visual Feedback**: Focus indicators and hover states clearly visible
 * - **Position Adjustment**: Menu repositions if off-screen to ensure visibility
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Context Menu Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Right-click or Menu key opens menu</li>
          <li>Up/Down arrows navigate items</li>
          <li>Enter/Space activate focused item</li>
          <li>ESC closes menu</li>
          <li>Tab closes menu (focus moves out)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Menu has role="menu" landmark</li>
          <li>Items have role="menuitem"</li>
          <li>Separators have role="separator"</li>
          <li>aria-orientation="vertical" for navigation</li>
          <li>Disabled items announced as unavailable</li>
        </ul>
      </div>

      <eva-context-menu>
        <div style="width: 300px; height: 150px; background: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: #6b7280;">
          Right-click here to test
        </div>
        <eva-context-menu-content slot="menu">
          <eva-context-menu-item>Action 1</eva-context-menu-item>
          <eva-context-menu-item>Action 2</eva-context-menu-item>
          <eva-context-menu-separator></eva-context-menu-separator>
          <eva-context-menu-item>Action 3</eva-context-menu-item>
        </eva-context-menu-content>
      </eva-context-menu>

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
