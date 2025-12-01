import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { shadows } from './shadows';

const meta: Meta = {
  title: 'Tokens/Shadows',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Elevations: Story = {
  render: () => html`
    <style>
      .card { width: 180px; height: 80px; border-radius: 8px; background: white; margin: 12px; display:inline-block; }
      .label { padding: 8px; font-size: 12px; color: #444 }
    </style>
    <div>
      ${Object.entries(shadows).map(([name, value]) => html`
        <div class="card" style="box-shadow:${value}"><div class="label">${name}</div></div>
      `)}
    </div>
  `,
};
