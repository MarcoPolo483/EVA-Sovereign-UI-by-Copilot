import type { Meta, StoryObj } from '@storybook/web-components';
import './eva-gc-language-switcher';
import { html } from 'lit';

const meta: Meta = {
  title: 'GC Design/i18n/Language Switcher (GC)',
  tags: ['autodocs'],
  parameters: {
    a11y: { disable: false },
  },
};

export default meta;

type Story = StoryObj;

export const PrefixMode: Story = {
  name: 'Prefix Mode (EN/FR)',
  render: () => html`
    <div style="padding:16px">
      <eva-gc-language-switcher include="en-CA, fr-CA"></eva-gc-language-switcher>
    </div>
  `,
};

export const EventMode: Story = {
  name: 'Event Mode (Five Eyes)',
  render: () => html`
    <div style="padding:16px">
      <eva-gc-language-switcher url-mode="event"></eva-gc-language-switcher>
      <script>
        const el = document.querySelector('eva-gc-language-switcher');
        el?.addEventListener('locale-change', (e) => {
          const detail = (e as CustomEvent).detail;
          // eslint-disable-next-line no-console
          console.log('Locale changed:', detail);
        });
      </script>
    </div>
  `,
};
