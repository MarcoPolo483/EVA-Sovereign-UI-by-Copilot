import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-table';

const meta: Meta = {
  title: 'UI/Table',
  component: 'eva-table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Responsive data table component. Composed of eva-table, eva-table-header, eva-table-body, eva-table-row, eva-table-head, and eva-table-cell.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <eva-table>
      <eva-table-header>
        <eva-table-row>
          <eva-table-head>Name</eva-table-head>
          <eva-table-head>Status</eva-table-head>
          <eva-table-head>Role</eva-table-head>
        </eva-table-row>
      </eva-table-header>
      <eva-table-body>
        <eva-table-row>
          <eva-table-cell>John Doe</eva-table-cell>
          <eva-table-cell>Active</eva-table-cell>
          <eva-table-cell>Admin</eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>Jane Smith</eva-table-cell>
          <eva-table-cell>Active</eva-table-cell>
          <eva-table-cell>User</eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>Bob Johnson</eva-table-cell>
          <eva-table-cell>Inactive</eva-table-cell>
          <eva-table-cell>Guest</eva-table-cell>
        </eva-table-row>
      </eva-table-body>
    </eva-table>
  `,
};

export const WithMoreColumns: Story = {
  render: () => html`
    <eva-table>
      <eva-table-header>
        <eva-table-row>
          <eva-table-head>ID</eva-table-head>
          <eva-table-head>Name</eva-table-head>
          <eva-table-head>Email</eva-table-head>
          <eva-table-head>Department</eva-table-head>
          <eva-table-head>Status</eva-table-head>
        </eva-table-row>
      </eva-table-header>
      <eva-table-body>
        <eva-table-row>
          <eva-table-cell>1</eva-table-cell>
          <eva-table-cell>John Doe</eva-table-cell>
          <eva-table-cell>john@example.com</eva-table-cell>
          <eva-table-cell>Engineering</eva-table-cell>
          <eva-table-cell>Active</eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>2</eva-table-cell>
          <eva-table-cell>Jane Smith</eva-table-cell>
          <eva-table-cell>jane@example.com</eva-table-cell>
          <eva-table-cell>Design</eva-table-cell>
          <eva-table-cell>Active</eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>3</eva-table-cell>
          <eva-table-cell>Bob Johnson</eva-table-cell>
          <eva-table-cell>bob@example.com</eva-table-cell>
          <eva-table-cell>Marketing</eva-table-cell>
          <eva-table-cell>Inactive</eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>4</eva-table-cell>
          <eva-table-cell>Alice Williams</eva-table-cell>
          <eva-table-cell>alice@example.com</eva-table-cell>
          <eva-table-cell>Sales</eva-table-cell>
          <eva-table-cell>Active</eva-table-cell>
        </eva-table-row>
      </eva-table-body>
    </eva-table>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Table with more columns showing a typical data grid.',
      },
    },
  },
};

export const WithStyledCells: Story = {
  render: () => html`
    <eva-table>
      <eva-table-header>
        <eva-table-row>
          <eva-table-head>Product</eva-table-head>
          <eva-table-head>Price</eva-table-head>
          <eva-table-head>Stock</eva-table-head>
          <eva-table-head>Status</eva-table-head>
        </eva-table-row>
      </eva-table-header>
      <eva-table-body>
        <eva-table-row>
          <eva-table-cell>Laptop</eva-table-cell>
          <eva-table-cell>$999.99</eva-table-cell>
          <eva-table-cell>45</eva-table-cell>
          <eva-table-cell>
            <span style="padding: 0.125rem 0.5rem; border-radius: 9999px; background: #dcfce7; color: #166534; font-size: 0.75rem;">In Stock</span>
          </eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>Mouse</eva-table-cell>
          <eva-table-cell>$29.99</eva-table-cell>
          <eva-table-cell>3</eva-table-cell>
          <eva-table-cell>
            <span style="padding: 0.125rem 0.5rem; border-radius: 9999px; background: #fef3c7; color: #92400e; font-size: 0.75rem;">Low Stock</span>
          </eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>Keyboard</eva-table-cell>
          <eva-table-cell>$79.99</eva-table-cell>
          <eva-table-cell>0</eva-table-cell>
          <eva-table-cell>
            <span style="padding: 0.125rem 0.5rem; border-radius: 9999px; background: #fee2e2; color: #991b1b; font-size: 0.75rem;">Out of Stock</span>
          </eva-table-cell>
        </eva-table-row>
      </eva-table-body>
    </eva-table>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Table with styled status badges in cells.',
      },
    },
  },
};

export const WithActions: Story = {
  render: () => html`
    <eva-table>
      <eva-table-header>
        <eva-table-row>
          <eva-table-head>Name</eva-table-head>
          <eva-table-head>Email</eva-table-head>
          <eva-table-head>Role</eva-table-head>
          <eva-table-head>Actions</eva-table-head>
        </eva-table-row>
      </eva-table-header>
      <eva-table-body>
        <eva-table-row>
          <eva-table-cell>John Doe</eva-table-cell>
          <eva-table-cell>john@example.com</eva-table-cell>
          <eva-table-cell>Admin</eva-table-cell>
          <eva-table-cell>
            <div style="display: flex; gap: 0.5rem;">
              <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer; font-size: 0.75rem;">Edit</button>
              <button style="padding: 0.25rem 0.5rem; border: 1px solid #dc2626; border-radius: 4px; background: white; color: #dc2626; cursor: pointer; font-size: 0.75rem;">Delete</button>
            </div>
          </eva-table-cell>
        </eva-table-row>
        <eva-table-row>
          <eva-table-cell>Jane Smith</eva-table-cell>
          <eva-table-cell>jane@example.com</eva-table-cell>
          <eva-table-cell>User</eva-table-cell>
          <eva-table-cell>
            <div style="display: flex; gap: 0.5rem;">
              <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer; font-size: 0.75rem;">Edit</button>
              <button style="padding: 0.25rem 0.5rem; border: 1px solid #dc2626; border-radius: 4px; background: white; color: #dc2626; cursor: pointer; font-size: 0.75rem;">Delete</button>
            </div>
          </eva-table-cell>
        </eva-table-row>
      </eva-table-body>
    </eva-table>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Table with action buttons in each row.',
      },
    },
  },
};

export const CompleteExample: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0;">User Management</h3>
        <button style="padding: 0.5rem 1rem; border: none; border-radius: 4px; background: #0066cc; color: white; cursor: pointer;">Add User</button>
      </div>
      
      <eva-table>
        <eva-table-header>
          <eva-table-row>
            <eva-table-head>Name</eva-table-head>
            <eva-table-head>Email</eva-table-head>
            <eva-table-head>Department</eva-table-head>
            <eva-table-head>Status</eva-table-head>
            <eva-table-head>Actions</eva-table-head>
          </eva-table-row>
        </eva-table-header>
        <eva-table-body>
          <eva-table-row>
            <eva-table-cell>John Doe</eva-table-cell>
            <eva-table-cell>john@example.com</eva-table-cell>
            <eva-table-cell>Engineering</eva-table-cell>
            <eva-table-cell>
              <span style="padding: 0.125rem 0.5rem; border-radius: 9999px; background: #dcfce7; color: #166534; font-size: 0.75rem;">Active</span>
            </eva-table-cell>
            <eva-table-cell>
              <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer; font-size: 0.75rem;">Edit</button>
            </eva-table-cell>
          </eva-table-row>
          <eva-table-row>
            <eva-table-cell>Jane Smith</eva-table-cell>
            <eva-table-cell>jane@example.com</eva-table-cell>
            <eva-table-cell>Design</eva-table-cell>
            <eva-table-cell>
              <span style="padding: 0.125rem 0.5rem; border-radius: 9999px; background: #dcfce7; color: #166534; font-size: 0.75rem;">Active</span>
            </eva-table-cell>
            <eva-table-cell>
              <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer; font-size: 0.75rem;">Edit</button>
            </eva-table-cell>
          </eva-table-row>
        </eva-table-body>
      </eva-table>
      
      <div style="display: flex; justify-content: center;">
        <eva-pagination current="1" total="5"></eva-pagination>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete example with header, styled table, and pagination.',
      },
    },
  },
};
