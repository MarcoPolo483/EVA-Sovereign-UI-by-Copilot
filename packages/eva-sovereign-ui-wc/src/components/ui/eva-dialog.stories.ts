import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-dialog';

const meta: Meta = {
  title: 'UI/Dialog',
  component: 'eva-dialog',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Dialog open state',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Modal dialog component with overlay backdrop, ESC key handling, and focus management. Composed of eva-dialog, eva-dialog-header, eva-dialog-title, eva-dialog-description, and eva-dialog-footer.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false,
  },
  render: (args) => html`
    <div>
      <button 
        style="padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;"
        onclick="document.querySelector('eva-dialog').setAttribute('open', '')"
      >
        Open Dialog
      </button>
      
      <eva-dialog ?open="${args.open}">
        <eva-dialog-header>
          <eva-dialog-title>Dialog Title</eva-dialog-title>
          <eva-dialog-description>This is a dialog description explaining what this dialog is about.</eva-dialog-description>
        </eva-dialog-header>
        
        <div style="padding: 1rem 0;">
          <p>This is the main content of the dialog. You can put any content here.</p>
        </div>
        
        <eva-dialog-footer>
          <button 
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;"
            onclick="document.querySelector('eva-dialog').removeAttribute('open')"
          >
            Cancel
          </button>
          <button 
            style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #0066cc; color: white; cursor: pointer;"
            onclick="document.querySelector('eva-dialog').removeAttribute('open')"
          >
            Confirm
          </button>
        </eva-dialog-footer>
      </eva-dialog>
    </div>
  `,
};

export const ConfirmationDialog: Story = {
  render: () => html`
    <div>
      <button 
        style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #dc2626; color: white; cursor: pointer;"
        onclick="this.nextElementSibling.setAttribute('open', '')"
      >
        Delete Item
      </button>
      
      <eva-dialog>
        <eva-dialog-header>
          <eva-dialog-title>Are you sure?</eva-dialog-title>
          <eva-dialog-description>This action cannot be undone. This will permanently delete the item.</eva-dialog-description>
        </eva-dialog-header>
        
        <eva-dialog-footer>
          <button 
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;"
            onclick="this.closest('eva-dialog').removeAttribute('open')"
          >
            Cancel
          </button>
          <button 
            style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #dc2626; color: white; cursor: pointer;"
            onclick="alert('Deleted!'); this.closest('eva-dialog').removeAttribute('open')"
          >
            Delete
          </button>
        </eva-dialog-footer>
      </eva-dialog>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Destructive confirmation dialog for dangerous actions.',
      },
    },
  },
};

export const FormDialog: Story = {
  render: () => html`
    <div>
      <button 
        style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #0066cc; color: white; cursor: pointer;"
        onclick="this.nextElementSibling.setAttribute('open', '')"
      >
        Create New User
      </button>
      
      <eva-dialog>
        <eva-dialog-header>
          <eva-dialog-title>Create New User</eva-dialog-title>
          <eva-dialog-description>Add a new user to the system. Fill in the required information below.</eva-dialog-description>
        </eva-dialog-header>
        
        <div style="padding: 1rem 0;">
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
              <input type="text" placeholder="John Doe" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
              <input type="email" placeholder="john@example.com" style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Role</label>
              <select style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px;">
                <option>Admin</option>
                <option>User</option>
                <option>Guest</option>
              </select>
            </div>
          </form>
        </div>
        
        <eva-dialog-footer>
          <button 
            style="padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;"
            onclick="this.closest('eva-dialog').removeAttribute('open')"
          >
            Cancel
          </button>
          <button 
            style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #0066cc; color: white; cursor: pointer;"
            onclick="alert('User created!'); this.closest('eva-dialog').removeAttribute('open')"
          >
            Create User
          </button>
        </eva-dialog-footer>
      </eva-dialog>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Dialog containing a form for data entry.',
      },
    },
  },
};

export const InformationDialog: Story = {
  render: () => html`
    <div>
      <button 
        style="padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;"
        onclick="this.nextElementSibling.setAttribute('open', '')"
      >
        View Details
      </button>
      
      <eva-dialog>
        <eva-dialog-header>
          <eva-dialog-title>System Information</eva-dialog-title>
          <eva-dialog-description>Details about the current system status.</eva-dialog-description>
        </eva-dialog-header>
        
        <div style="padding: 1rem 0;">
          <dl style="display: grid; grid-template-columns: auto 1fr; gap: 0.5rem 1rem;">
            <dt style="font-weight: 600;">Version:</dt>
            <dd style="margin: 0;">1.1.0</dd>
            
            <dt style="font-weight: 600;">Status:</dt>
            <dd style="margin: 0;">Active</dd>
            
            <dt style="font-weight: 600;">Last Updated:</dt>
            <dd style="margin: 0;">2024-01-15</dd>
            
            <dt style="font-weight: 600;">Uptime:</dt>
            <dd style="margin: 0;">99.9%</dd>
          </dl>
        </div>
        
        <eva-dialog-footer>
          <button 
            style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #0066cc; color: white; cursor: pointer;"
            onclick="this.closest('eva-dialog').removeAttribute('open')"
          >
            Close
          </button>
        </eva-dialog-footer>
      </eva-dialog>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Informational dialog displaying read-only data.',
      },
    },
  },
};
