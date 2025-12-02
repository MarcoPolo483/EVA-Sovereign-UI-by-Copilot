import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-pagination';

const meta: Meta = {
  title: 'UI/Pagination',
  component: 'eva-pagination',
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: 'Current page number',
      defaultValue: 1,
    },
    total: {
      control: 'number',
      description: 'Total number of pages',
      defaultValue: 10,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Pagination controls for navigating through multiple pages. Includes previous/next buttons, page numbers, and ellipsis for large page counts.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'aria-allowed-attr', enabled: true },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    current: 1,
    total: 10,
  },
  render: (args) => html`
    <eva-pagination
      current="${args.current}"
      total="${args.total}"
    ></eva-pagination>
  `,
};

export const FewPages: Story = {
  args: {
    current: 2,
    total: 5,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with a small number of pages (all visible).',
      },
    },
  },
};

export const ManyPages: Story = {
  args: {
    current: 15,
    total: 50,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis.',
      },
    },
  },
};

export const FirstPage: Story = {
  args: {
    current: 1,
    total: 20,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'First page with previous button disabled.',
      },
    },
  },
};

export const LastPage: Story = {
  args: {
    current: 20,
    total: 20,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Last page with next button disabled.',
      },
    },
  },
};

export const MiddlePage: Story = {
  args: {
    current: 25,
    total: 50,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Middle page showing ellipsis on both sides.',
      },
    },
  },
};

export const WithTable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <th style="text-align: left; padding: 0.5rem;">ID</th>
              <th style="text-align: left; padding: 0.5rem;">Name</th>
              <th style="text-align: left; padding: 0.5rem;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 0.5rem;">1</td>
              <td style="padding: 0.5rem;">Item One</td>
              <td style="padding: 0.5rem;">Active</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 0.5rem;">2</td>
              <td style="padding: 0.5rem;">Item Two</td>
              <td style="padding: 0.5rem;">Inactive</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 0.5rem;">3</td>
              <td style="padding: 0.5rem;">Item Three</td>
              <td style="padding: 0.5rem;">Active</td>
            </tr>
            <tr>
              <td style="padding: 0.5rem;">4</td>
              <td style="padding: 0.5rem;">Item Four</td>
              <td style="padding: 0.5rem;">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style="display: flex; justify-content: center;">
        <eva-pagination current="1" total="10"></eva-pagination>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Pagination used with a data table.',
      },
    },
  },
};
