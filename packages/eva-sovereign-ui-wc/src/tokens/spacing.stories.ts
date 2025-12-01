import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { gcSpacing } from './spacing';

const meta: Meta = {
  title: 'Tokens/Spacing',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => html`
    <style>
      .row { display:flex; align-items:center; gap:8px; margin:6px 0; }
      .box { background:#eee; border:1px solid #ccc; }
    </style>
    <div>
      ${Object.entries(gcSpacing)
        .filter(([k]) => /^px$|^\d+(?:\.\d+)?$/.test(k))
        .map(([key, val]) => html`
          <div class="row"><code>${key}</code><div class="box" style="width: ${val}; height: 20px"></div><small>${val}</small></div>
        `)}
    </div>
  `,
};
