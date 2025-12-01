import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { gcColors, modernColors } from './colors';

const meta: Meta = {
  title: 'Tokens/Colors',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const GCColors: Story = {
  render: () => html`
    <style>
      .swatch { display:inline-flex; align-items:center; gap:8px; margin:4px; }
      .box { width:32px; height:24px; border-radius:4px; border:1px solid #ccc; }
    </style>
    <div>
      ${Object.entries(gcColors).map(([name, value]) => html`
        <div class="swatch"><span class="box" style="background:${value}"></span><code>${name}</code> <small>${value}</small></div>
      `)}
    </div>
  `,
};

export const ModernColors: Story = {
  render: () => html`
    <style>
      .swatch { display:inline-flex; align-items:center; gap:8px; margin:4px; }
      .box { width:32px; height:24px; border-radius:4px; border:1px solid #ccc; }
    </style>
    <div>
      ${Object.entries(modernColors).map(([name, value]) => html`
        <div class="swatch"><span class="box" style="background:${value}"></span><code>${name}</code> <small>${value}</small></div>
      `)}
    </div>
  `,
};
