import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { gcTypography, typographyCSS } from './typography';

const meta: Meta = {
  title: 'Tokens/Typography',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Samples: Story = {
  render: () => html`
    <style>
      ${typographyCSS}
      .sample { margin: 8px 0; }
    </style>
    <div>
      <div class="sample" style="font: var(--gc-font-body)">Body text sample</div>
      <div class="sample" style="font: var(--gc-font-heading)">Heading sample</div>
      <div class="sample" style="font: var(--gc-font-mono)">Monospace sample</div>
    </div>
  `,
};
