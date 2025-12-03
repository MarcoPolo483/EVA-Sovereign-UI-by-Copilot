import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-menubar';

/**
 * ## EVA Menubar
 * 
 * Horizontal application menu bar with dropdown menus.
 * 
 * ### Features:
 * - Horizontal layout with multiple menu triggers
 * - Keyboard navigation with arrow wrapping
 * - Dropdown menus on click/Enter
 * - Roving tabindex for focus management
 * - Supports nested menu items and separators
 * 
 * ### Usage:
 * ```html
 * <eva-menubar>
 *   <eva-menubar-menu label="File">
 *     <eva-menubar-item>New</eva-menubar-item>
 *     <eva-menubar-item>Open</eva-menubar-item>
 *   </eva-menubar-menu>
 *   <eva-menubar-menu label="Edit">
 *     <eva-menubar-item>Cut</eva-menubar-item>
 *     <eva-menubar-item>Copy</eva-menubar-item>
 *   </eva-menubar-menu>
 * </eva-menubar>
 * ```
 */
const meta: Meta = {
  title: 'Components/Menubar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Application menu bar with horizontal navigation and dropdown menus.',
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
 * Default menubar with File and Edit menus.
 */
export const Default: Story = {
  render: () => html`
    <eva-menubar>
      <eva-menubar-menu label="File">
        <eva-menubar-item>New File</eva-menubar-item>
        <eva-menubar-item>Open File</eva-menubar-item>
        <eva-menubar-item>Save</eva-menubar-item>
        <eva-menubar-separator></eva-menubar-separator>
        <eva-menubar-item>Exit</eva-menubar-item>
      </eva-menubar-menu>
      <eva-menubar-menu label="Edit">
        <eva-menubar-item>Undo</eva-menubar-item>
        <eva-menubar-item>Redo</eva-menubar-item>
        <eva-menubar-separator></eva-menubar-separator>
        <eva-menubar-item>Cut</eva-menubar-item>
        <eva-menubar-item>Copy</eva-menubar-item>
        <eva-menubar-item>Paste</eva-menubar-item>
      </eva-menubar-menu>
    </eva-menubar>
  `,
};

/**
 * Application menubar with complete menu structure.
 */
export const ApplicationMenu: Story = {
  render: () => html`
    <div>
      <eva-menubar>
        <eva-menubar-menu label="File">
          <eva-menubar-item>New Document</eva-menubar-item>
          <eva-menubar-item>Open...</eva-menubar-item>
          <eva-menubar-item>Save</eva-menubar-item>
          <eva-menubar-item>Save As...</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Print</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Exit</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="Edit">
          <eva-menubar-item>Undo</eva-menubar-item>
          <eva-menubar-item>Redo</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Cut</eva-menubar-item>
          <eva-menubar-item>Copy</eva-menubar-item>
          <eva-menubar-item>Paste</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Find...</eva-menubar-item>
          <eva-menubar-item>Replace...</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="View">
          <eva-menubar-item>Zoom In</eva-menubar-item>
          <eva-menubar-item>Zoom Out</eva-menubar-item>
          <eva-menubar-item>Reset Zoom</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Full Screen</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="Help">
          <eva-menubar-item>Documentation</eva-menubar-item>
          <eva-menubar-item>Keyboard Shortcuts</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>About</eva-menubar-item>
        </eva-menubar-menu>
      </eva-menubar>
      <div style="margin-top: 1rem; padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          💡 Use Left/Right arrows to navigate between menu triggers. Arrow wrapping is enabled (wraps around at edges).
        </p>
      </div>
    </div>
  `,
};

/**
 * Text editor menubar with formatting options.
 */
export const TextEditor: Story = {
  render: () => html`
    <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden;">
      <eva-menubar style="border-radius: 0;">
        <eva-menubar-menu label="File">
          <eva-menubar-item>New</eva-menubar-item>
          <eva-menubar-item>Open</eva-menubar-item>
          <eva-menubar-item>Save</eva-menubar-item>
          <eva-menubar-item>Export PDF</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="Edit">
          <eva-menubar-item>Undo</eva-menubar-item>
          <eva-menubar-item>Redo</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Cut</eva-menubar-item>
          <eva-menubar-item>Copy</eva-menubar-item>
          <eva-menubar-item>Paste</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="Format">
          <eva-menubar-item>Bold</eva-menubar-item>
          <eva-menubar-item>Italic</eva-menubar-item>
          <eva-menubar-item>Underline</eva-menubar-item>
          <eva-menubar-separator></eva-menubar-separator>
          <eva-menubar-item>Align Left</eva-menubar-item>
          <eva-menubar-item>Align Center</eva-menubar-item>
          <eva-menubar-item>Align Right</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="Insert">
          <eva-menubar-item>Image</eva-menubar-item>
          <eva-menubar-item>Link</eva-menubar-item>
          <eva-menubar-item>Table</eva-menubar-item>
          <eva-menubar-item>Horizontal Rule</eva-menubar-item>
        </eva-menubar-menu>
      </eva-menubar>
      <div style="padding: 2rem; min-height: 300px; background: white;">
        <p style="margin: 0; color: #9ca3af;">Start typing your document here...</p>
      </div>
    </div>
  `,
};

/**
 * Compact menubar for dashboard.
 */
export const DashboardMenu: Story = {
  render: () => html`
    <div>
      <div style="background: #1e293b; padding: 1rem; border-radius: 0.5rem 0.5rem 0 0;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <h2 style="margin: 0; color: white; font-size: 1.25rem;">Dashboard</h2>
          <eva-menubar style="margin-left: auto;">
            <eva-menubar-menu label="Actions">
              <eva-menubar-item>New Report</eva-menubar-item>
              <eva-menubar-item>Export Data</eva-menubar-item>
              <eva-menubar-item>Schedule Report</eva-menubar-item>
            </eva-menubar-menu>
            <eva-menubar-menu label="Settings">
              <eva-menubar-item>Preferences</eva-menubar-item>
              <eva-menubar-item>Notifications</eva-menubar-item>
              <eva-menubar-item>Data Sources</eva-menubar-item>
            </eva-menubar-menu>
            <eva-menubar-menu label="Help">
              <eva-menubar-item>Documentation</eva-menubar-item>
              <eva-menubar-item>Support</eva-menubar-item>
            </eva-menubar-menu>
          </eva-menubar>
        </div>
      </div>
      <div style="padding: 2rem; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 0.5rem 0.5rem;">
        <p style="margin: 0; color: #6b7280;">Dashboard content goes here...</p>
      </div>
    </div>
  `,
};

/**
 * Menubar keyboard navigation and states.
 */
export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 0.5rem;">Standard Menubar</h4>
        <eva-menubar>
          <eva-menubar-menu label="Menu 1">
            <eva-menubar-item>Item 1</eva-menubar-item>
            <eva-menubar-item>Item 2</eva-menubar-item>
          </eva-menubar-menu>
          <eva-menubar-menu label="Menu 2">
            <eva-menubar-item>Item A</eva-menubar-item>
            <eva-menubar-item>Item B</eva-menubar-item>
          </eva-menubar-menu>
          <eva-menubar-menu label="Menu 3">
            <eva-menubar-item>Option X</eva-menubar-item>
            <eva-menubar-item>Option Y</eva-menubar-item>
          </eva-menubar-menu>
        </eva-menubar>
      </div>

      <div style="padding: 1rem; background: #f0f9ff; border: 1px solid #bfdbfe; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Keyboard Navigation</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Tab:</strong> Focus first/last menu trigger</li>
          <li><strong>Left/Right Arrows:</strong> Navigate between menu triggers (with wrapping)</li>
          <li><strong>Enter/Space:</strong> Open focused menu</li>
          <li><strong>Down Arrow:</strong> Open menu and focus first item</li>
          <li><strong>Up Arrow:</strong> Open menu and focus last item</li>
          <li><strong>ESC:</strong> Close menu and return focus to trigger</li>
        </ul>
      </div>

      <div style="padding: 1rem; background: #fef3c7; border: 1px solid #fde68a; border-radius: 0.5rem;">
        <h4 style="margin-top: 0;">Enhanced Accessibility (Task #5)</h4>
        <p style="margin: 0.5rem 0; line-height: 1.8;">
          Arrow key wrapping has been implemented with modulo logic. When navigating with Left/Right arrows, 
          focus wraps around from the last menu to the first (and vice versa), creating a seamless navigation experience.
        </p>
      </div>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Keyboard Navigation**: Full keyboard support with arrow wrapping (enhanced in Task #5)
 * - **Roving Tabindex**: Only one menu trigger is tabbable at a time
 * - **Focus Management**: Clear focus indicators, focus returns to trigger on menu close
 * - **Screen Readers**: role="menubar" on container, role="menu" on dropdowns
 * - **Color Contrast**: WCAG AA compliant colors (4.5:1 minimum)
 * - **Arrow Wrapping**: Left/Right arrows wrap around at edges (modulo logic)
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Menubar Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>Tab focuses first menu trigger</li>
          <li>Left/Right arrows navigate between triggers (with wrapping)</li>
          <li>Enter/Space/Down opens menu and focuses first item</li>
          <li>Up opens menu and focuses last item</li>
          <li>ESC closes menu and returns focus to trigger</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Menubar has role="menubar"</li>
          <li>Menu triggers have proper labels</li>
          <li>Dropdown menus have role="menu"</li>
          <li>Menu items have role="menuitem"</li>
          <li>Open/closed state announced</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Enhanced Features (Task #5)</h4>
        <p style="margin: 0; padding: 0.75rem; background: #fef3c7; border-radius: 0.375rem;">
          ✨ Arrow key wrapping implemented with modulo logic for seamless circular navigation
        </p>
      </div>

      <eva-menubar>
        <eva-menubar-menu label="File">
          <eva-menubar-item>New</eva-menubar-item>
          <eva-menubar-item>Open</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="Edit">
          <eva-menubar-item>Cut</eva-menubar-item>
          <eva-menubar-item>Copy</eva-menubar-item>
        </eva-menubar-menu>
        <eva-menubar-menu label="View">
          <eva-menubar-item>Zoom In</eva-menubar-item>
          <eva-menubar-item>Zoom Out</eva-menubar-item>
        </eva-menubar-menu>
      </eva-menubar>

      <div style="margin-top: 1.5rem; padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable with wrapping<br>
          ✓ Screen reader friendly<br>
          ✓ Roving tabindex pattern
        </p>
      </div>
    </div>
  `,
};
