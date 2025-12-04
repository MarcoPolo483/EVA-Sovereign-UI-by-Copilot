import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-alert-dialog';

/**
 * ## EVA Alert Dialog
 * 
 * Modal dialog for confirmations and critical actions.
 * 
 * ### Features:
 * - Modal overlay blocking background interaction
 * - Action and cancel buttons
 * - Keyboard support (ESC to close)
 * - Focus trap when open
 * - Slot-based content
 * - Close event emission
 * 
 * ### Usage:
 * ```html
 * <eva-alert-dialog open>
 *   <span slot="title">Confirm Action</span>
 *   <span slot="description">Are you sure?</span>
 *   <button slot="action">Confirm</button>
 *   <button slot="cancel">Cancel</button>
 * </eva-alert-dialog>
 * ```
 */
const meta: Meta = {
  title: 'Components/Alert Dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal alert dialog for confirmations and critical user decisions.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'dialog-name', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default alert dialog with confirmation.
 */
export const Default: Story = {
  render: () => html`
    <div>
      <button 
        @click=${(e: Event) => {
          const dialog = (e.target as HTMLElement).nextElementSibling as any;
          dialog.setAttribute('open', '');
        }}
        style="padding: 0.75rem 1.5rem; background: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
      >
        Delete Item
      </button>
      
      <eva-alert-dialog>
        <span slot="title">Delete Item</span>
        <span slot="description">
          Are you sure you want to delete this item? This action cannot be undone.
        </span>
        <button 
          slot="action"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
            console.log('Item deleted');
          }}
          style="padding: 0.5rem 1.5rem; background: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Delete
        </button>
        <button 
          slot="cancel"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.5rem 1.5rem; background: #f3f4f6; color: #374151; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Cancel
        </button>
      </eva-alert-dialog>
    </div>
  `,
};

/**
 * Account deletion confirmation.
 */
export const AccountDeletion: Story = {
  render: () => html`
    <div>
      <button 
        @click=${(e: Event) => {
          const dialog = (e.target as HTMLElement).nextElementSibling as any;
          dialog.setAttribute('open', '');
        }}
        style="padding: 0.75rem 1.5rem; background: #ef4444; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
      >
        Delete Account
      </button>
      
      <eva-alert-dialog>
        <span slot="title">⚠️ Delete Account</span>
        <span slot="description">
          <p style="margin: 0 0 1rem 0; font-weight: 500;">This will permanently delete your account and all associated data.</p>
          <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
            <li>All your posts and comments will be removed</li>
            <li>Your profile information will be deleted</li>
            <li>You will lose access to all premium features</li>
            <li>This action cannot be reversed</li>
          </ul>
        </span>
        <button 
          slot="action"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
            alert('Account deleted');
          }}
          style="padding: 0.75rem 1.5rem; background: #dc2626; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
        >
          Yes, Delete My Account
        </button>
        <button 
          slot="cancel"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #374151; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
        >
          Cancel
        </button>
      </eva-alert-dialog>
    </div>
  `,
};

/**
 * Logout confirmation dialog.
 */
export const LogoutConfirmation: Story = {
  render: () => html`
    <div>
      <button 
        @click=${(e: Event) => {
          const dialog = (e.target as HTMLElement).nextElementSibling as any;
          dialog.setAttribute('open', '');
        }}
        style="padding: 0.75rem 1.5rem; background: #6b7280; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
      >
        Logout
      </button>
      
      <eva-alert-dialog>
        <span slot="title">Confirm Logout</span>
        <span slot="description">
          Are you sure you want to logout? Any unsaved changes will be lost.
        </span>
        <button 
          slot="action"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
            console.log('User logged out');
          }}
          style="padding: 0.5rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Logout
        </button>
        <button 
          slot="cancel"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.5rem 1.5rem; background: #f3f4f6; color: #374151; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Stay Logged In
        </button>
      </eva-alert-dialog>
    </div>
  `,
};

/**
 * Success notification dialog.
 */
export const SuccessNotification: Story = {
  render: () => html`
    <div>
      <button 
        @click=${(e: Event) => {
          const dialog = (e.target as HTMLElement).nextElementSibling as any;
          dialog.setAttribute('open', '');
        }}
        style="padding: 0.75rem 1.5rem; background: #10b981; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
      >
        Complete Action
      </button>
      
      <eva-alert-dialog>
        <span slot="title">✅ Success!</span>
        <span slot="description">
          Your changes have been saved successfully. You can now continue working or close this dialog.
        </span>
        <button 
          slot="action"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.5rem 1.5rem; background: #10b981; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Continue
        </button>
      </eva-alert-dialog>
    </div>
  `,
};

/**
 * File upload confirmation with multiple actions.
 */
export const FileUpload: Story = {
  render: () => html`
    <div>
      <button 
        @click=${(e: Event) => {
          const dialog = (e.target as HTMLElement).nextElementSibling as any;
          dialog.setAttribute('open', '');
        }}
        style="padding: 0.75rem 1.5rem; background: #8b5cf6; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
      >
        Upload Files
      </button>
      
      <eva-alert-dialog>
        <span slot="title">📁 Upload Files</span>
        <span slot="description">
          <p style="margin: 0 0 1rem 0;">You are about to upload 5 files (24.5 MB total):</p>
          <ul style="margin: 0 0 1rem 0; padding-left: 1.5rem; line-height: 1.8;">
            <li>document.pdf (2.1 MB)</li>
            <li>photo1.jpg (5.3 MB)</li>
            <li>photo2.jpg (4.8 MB)</li>
            <li>spreadsheet.xlsx (8.2 MB)</li>
            <li>presentation.pptx (4.1 MB)</li>
          </ul>
          <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
            This may take a few minutes depending on your connection speed.
          </p>
        </span>
        <button 
          slot="action"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
            console.log('Files uploading...');
          }}
          style="padding: 0.75rem 1.5rem; background: #8b5cf6; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
        >
          Start Upload
        </button>
        <button 
          slot="cancel"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #374151; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer;"
        >
          Cancel
        </button>
      </eva-alert-dialog>
    </div>
  `,
};

/**
 * Accessibility features and WCAG 2.2 AA compliance.
 * 
 * - **Modal Behavior**: Blocks background interaction with overlay
 * - **Keyboard Support**: ESC closes dialog, Tab navigates between buttons
 * - **Focus Trap**: Focus stays within dialog when open
 * - **Screen Readers**: Title and description announced, role="alertdialog"
 * - **Color Contrast**: Action buttons use high contrast colors
 * - **Visual Feedback**: Clear distinction between action and cancel buttons
 */
export const AccessibilityNotes: Story = {
  render: () => html`
    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem;">
      <h3 style="margin-top: 0;">Alert Dialog Accessibility</h3>
      
      <div style="margin-bottom: 1.5rem;">
        <h4>Keyboard Support</h4>
        <ul style="line-height: 1.8;">
          <li>ESC key closes dialog</li>
          <li>Tab navigates between action and cancel buttons</li>
          <li>Enter activates focused button</li>
          <li>Focus trapped within dialog (can't tab to background)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Screen Reader Support</h4>
        <ul style="line-height: 1.8;">
          <li>Dialog has role="alertdialog"</li>
          <li>Title announced as dialog label</li>
          <li>Description provides context</li>
          <li>Action and cancel buttons clearly labeled</li>
          <li>Background marked as inert (not readable)</li>
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4>Visual Design</h4>
        <ul style="line-height: 1.8;">
          <li>Semi-transparent overlay (50% black)</li>
          <li>Dialog centered with white background</li>
          <li>Action button visually prominent</li>
          <li>Cancel button uses neutral styling</li>
          <li>Shadow for depth perception</li>
        </ul>
      </div>

      <button 
        @click=${(e: Event) => {
          const dialog = (e.target as HTMLElement).nextElementSibling as any;
          dialog.setAttribute('open', '');
        }}
        style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer; margin-bottom: 1.5rem;"
      >
        Open Example Dialog
      </button>
      
      <eva-alert-dialog>
        <span slot="title">Example Dialog</span>
        <span slot="description">
          This dialog demonstrates accessibility features. Press ESC to close, or use Tab to navigate between buttons.
        </span>
        <button 
          slot="action"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.5rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Confirm
        </button>
        <button 
          slot="cancel"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('eva-alert-dialog') as any;
            dialog.close();
          }}
          style="padding: 0.5rem 1.5rem; background: #f3f4f6; color: #374151; border: none; border-radius: 0.375rem; font-weight: 500; cursor: pointer;"
        >
          Cancel
        </button>
      </eva-alert-dialog>

      <div style="padding: 1rem; background: white; border-radius: 0.375rem;">
        <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">
          ✓ WCAG 2.2 Level AA Compliant<br>
          ✓ Keyboard navigable<br>
          ✓ Focus trapped<br>
          ✓ ESC to close
        </p>
      </div>
    </div>
  `,
};
