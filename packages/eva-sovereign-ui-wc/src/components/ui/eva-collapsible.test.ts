import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createComponent } from 'tests/test-utils';
import './eva-collapsible';
import type { EVACollapsible } from './eva-collapsible';

describe('eva-collapsible', () => {
  let collapsible: EVACollapsible;

  beforeEach(async () => {
    collapsible = await createComponent('eva-collapsible') as EVACollapsible;
    collapsible.innerHTML = `
      <eva-collapsible-trigger>
        <button>Toggle</button>
      </eva-collapsible-trigger>
      <eva-collapsible-content>
        <div>Collapsible content</div>
      </eva-collapsible-content>
    `;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(collapsible.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-collapsible')).toBeTruthy();
    });

    it('should be closed by default', () => {
      expect(collapsible.hasAttribute('open')).toBe(false);
    });
  });

  describe('Toggle Functionality', () => {
    it('should open when toggle() is called', async () => {
      collapsible.toggle();
      await new Promise(r => setTimeout(r, 50));
      expect(collapsible.hasAttribute('open')).toBe(true);
    });

    it('should toggle on trigger click', async () => {
      const trigger = collapsible.querySelector('eva-collapsible-trigger');
      const button = trigger?.querySelector('button');
      
      button!.click();
      await new Promise(r => setTimeout(r, 50));
      expect(collapsible.hasAttribute('open')).toBe(true);
      
      button!.click();
      await new Promise(r => setTimeout(r, 50));
      expect(collapsible.hasAttribute('open')).toBe(false);
    });
  });

  describe('Events', () => {
    it('should emit toggle event', async () => {
      const toggleSpy = vi.fn();
      collapsible.addEventListener('toggle', toggleSpy);
      
      collapsible.toggle();
      await new Promise(r => setTimeout(r, 50));
      
      expect(toggleSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { open: true }
      }));
    });
  });
});
