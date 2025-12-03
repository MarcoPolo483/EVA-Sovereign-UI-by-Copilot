import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createComponent, shadowQuery } from '../../../../../tests/test-utils';
import './eva-tabs';
import type { EVATabs } from './eva-tabs';

describe('eva-tabs', () => {
  let tabs: EVATabs;

  beforeEach(async () => {
    tabs = await createComponent('eva-tabs') as EVATabs;
    tabs.innerHTML = `
      <eva-tabs-list>
        <eva-tabs-trigger value="tab1">Tab 1</eva-tabs-trigger>
        <eva-tabs-trigger value="tab2">Tab 2</eva-tabs-trigger>
        <eva-tabs-trigger value="tab3">Tab 3</eva-tabs-trigger>
      </eva-tabs-list>
      <eva-tabs-content value="tab1"><div>Content 1</div></eva-tabs-content>
      <eva-tabs-content value="tab2"><div>Content 2</div></eva-tabs-content>
      <eva-tabs-content value="tab3"><div>Content 3</div></eva-tabs-content>
    `;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(tabs.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-tabs')).toBeTruthy();
    });

    it('should render all triggers and content', () => {
      const triggers = tabs.querySelectorAll('eva-tabs-trigger');
      const contents = tabs.querySelectorAll('eva-tabs-content');
      expect(triggers.length).toBe(3);
      expect(contents.length).toBe(3);
    });
  });

  describe('Tab Switching', () => {
    it('should activate first tab by default when active is set', async () => {
      tabs.setAttribute('active', 'tab1');
      await new Promise(r => setTimeout(r, 50));
      expect(tabs.getAttribute('active')).toBe('tab1');
    });

    it('should switch active tab on trigger click', async () => {
      tabs.setAttribute('active', 'tab1');
      await new Promise(r => setTimeout(r, 50));
      
      const changeSpy = vi.fn();
      tabs.addEventListener('change', changeSpy);
      
      const trigger2 = tabs.querySelectorAll('eva-tabs-trigger')[1];
      const btn = shadowQuery<HTMLButtonElement>(trigger2, '.trigger');
      btn?.click();
      await new Promise(r => setTimeout(r, 50));
      
      expect(tabs.getAttribute('active')).toBe('tab2');
      expect(changeSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { value: 'tab2' }
      }));
    });
  });

  describe('Disabled State', () => {
    it('should not activate disabled trigger', async () => {
      tabs.setAttribute('active', 'tab1');
      const trigger2 = tabs.querySelectorAll('eva-tabs-trigger')[1];
      trigger2.setAttribute('disabled', '');
      await new Promise(r => setTimeout(r, 50));
      
      const btn = shadowQuery<HTMLButtonElement>(trigger2, '.trigger');
      btn?.click();
      await new Promise(r => setTimeout(r, 50));
      
      expect(tabs.getAttribute('active')).toBe('tab1');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA roles on triggers', () => {
      const trigger = tabs.querySelector('eva-tabs-trigger');
      const btn = shadowQuery(trigger!, '.trigger');
      expect(btn?.getAttribute('role')).toBe('tab');
    });
  });
});
