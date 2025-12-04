import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './eva-aspect-ratio';

const meta: Meta = {
  title: 'UI/Aspect Ratio',
  component: 'eva-aspect-ratio',
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'text',
      description: 'Aspect ratio (e.g., "16/9", "4/3", "1/1")',
      defaultValue: '16/9',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Container that maintains a specific aspect ratio for its content. Supports common ratios like 16/9, 4/3, 1/1, and custom ratios.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Video16x9: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-aspect-ratio ratio="16/9">
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
          16:9 Video
        </div>
      </eva-aspect-ratio>
    </div>
  `,
};

export const Square: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <eva-aspect-ratio ratio="1/1">
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
          1:1 Square
        </div>
      </eva-aspect-ratio>
    </div>
  `,
};

export const Classic4x3: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <eva-aspect-ratio ratio="4/3">
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
          4:3 Classic
        </div>
      </eva-aspect-ratio>
    </div>
  `,
};

export const Gallery: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 800px;">
      <eva-aspect-ratio ratio="1/1">
        <div style="width: 100%; height: 100%; background: #f0f0f0;"></div>
      </eva-aspect-ratio>
      <eva-aspect-ratio ratio="1/1">
        <div style="width: 100%; height: 100%; background: #e0e0e0;"></div>
      </eva-aspect-ratio>
      <eva-aspect-ratio ratio="1/1">
        <div style="width: 100%; height: 100%; background: #d0d0d0;"></div>
      </eva-aspect-ratio>
      <eva-aspect-ratio ratio="1/1">
        <div style="width: 100%; height: 100%; background: #c0c0c0;"></div>
      </eva-aspect-ratio>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Image gallery with consistent aspect ratios.',
      },
    },
  },
};
