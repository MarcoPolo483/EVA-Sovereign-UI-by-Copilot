import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createComponent, simulateKeyboard, shadowQuery } from 'tests/test-utils';
import './eva-accordion';
import type { EVAAccordion, EVAAccordionItem } from './eva-accordion';

describe('eva-accordion', () => {
  let accordion: EVAAccordion;

  beforeEach(async () => {
    accordion = await createComponent('eva-accordion') as EVAAccordion;
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(accordion.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-accordion')).toBeTruthy();
    });

    it('should render multiple accordion items', async () => {
      accordion.innerHTML = `
        <eva-accordion-item>
          <span slot="trigger">Item 1</span>
          <div>Content 1</div>
        </eva-accordion-item>
        <eva-accordion-item>
          <span slot="trigger">Item 2</span>
          <div>Content 2</div>
        </eva-accordion-item>
        <eva-accordion-item>
          <span slot="trigger">Item 3</span>
          <div>Content 3</div>
        </eva-accordion-item>
      `;
      await new Promise(r => setTimeout(r, 50));
      const items = accordion.querySelectorAll('eva-accordion-item');
      expect(items.length).toBe(3);
    });
  });

  describe('Single Expansion Mode (default)', () => {
    beforeEach(async () => {
      accordion.innerHTML = `
        <eva-accordion-item>
          <span slot="trigger">Item 1</span>
          <div>Content 1</div>
        </eva-accordion-item>
        <eva-accordion-item>
          <span slot="trigger">Item 2</span>
          <div>Content 2</div>
        </eva-accordion-item>
      `;
      await new Promise(r => setTimeout(r, 50));
      // Trigger reconnection to setup event listeners
      accordion.connectedCallback();
    });

    it('should collapse other items when opening one', async () => {
      const items = accordion.querySelectorAll('eva-accordion-item') as NodeListOf<EVAAccordionItem>;
      
      items[0].open();
      await new Promise(r => setTimeout(r, 50));
      expect(items[0].hasAttribute('open')).toBe(true);
      
      items[1].open();
      await new Promise(r => setTimeout(r, 50));
      expect(items[1].hasAttribute('open')).toBe(true);
      expect(items[0].hasAttribute('open')).toBe(false);
    });
  });

  describe('Multiple Expansion Mode', () => {
    beforeEach(async () => {
      accordion.setAttribute('allow-multiple', '');
      accordion.innerHTML = `
        <eva-accordion-item>
          <span slot="trigger">Item 1</span>
          <div>Content 1</div>
        </eva-accordion-item>
        <eva-accordion-item>
          <span slot="trigger">Item 2</span>
          <div>Content 2</div>
        </eva-accordion-item>
      `;
      await new Promise(r => setTimeout(r, 50));
      // Trigger reconnection to setup event listeners with allow-multiple
      accordion.connectedCallback();
    });

    it('should allow multiple items to be open', async () => {
      const items = accordion.querySelectorAll('eva-accordion-item') as NodeListOf<EVAAccordionItem>;
      
      items[0].open();
      await new Promise(r => setTimeout(r, 50));
      expect(items[0].hasAttribute('open')).toBe(true);
      
      items[1].open();
      await new Promise(r => setTimeout(r, 50));
      expect(items[1].hasAttribute('open')).toBe(true);
      expect(items[0].hasAttribute('open')).toBe(true);
    });
  });
});

describe('eva-accordion-item', () => {
  let item: EVAAccordionItem;

  beforeEach(async () => {
    item = await createComponent('eva-accordion-item') as EVAAccordionItem;
    item.innerHTML = `
      <span slot="trigger">Test Item</span>
      <div>Test Content</div>
    `;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render trigger and content', () => {
      const trigger = shadowQuery(item, '.trigger');
      const content = shadowQuery(item, '.content');
      expect(trigger).toBeTruthy();
      expect(content).toBeTruthy();
    });

    it('should be closed by default', () => {
      expect(item.hasAttribute('open')).toBe(false);
      const trigger = shadowQuery(item, '.trigger');
      expect(trigger?.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('Open/Close Functionality', () => {
    it('should open when open() is called', async () => {
      const toggleSpy = vi.fn();
      item.addEventListener('toggle', toggleSpy);
      
      item.open();
      await new Promise(r => setTimeout(r, 50));
      
      expect(item.hasAttribute('open')).toBe(true);
      expect(toggleSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { open: true }
      }));
    });

    it('should close when close() is called', async () => {
      item.open();
      await new Promise(r => setTimeout(r, 50));
      
      const toggleSpy = vi.fn();
      item.addEventListener('toggle', toggleSpy);
      
      item.close();
      await new Promise(r => setTimeout(r, 50));
      
      expect(item.hasAttribute('open')).toBe(false);
      expect(toggleSpy).toHaveBeenCalledWith(expect.objectContaining({
        detail: { open: false }
      }));
    });

    it('should toggle on trigger click', async () => {
      const trigger = shadowQuery<HTMLButtonElement>(item, '.trigger');
      expect(trigger).toBeTruthy();
      
      trigger!.click();
      await new Promise(r => setTimeout(r, 50));
      expect(item.hasAttribute('open')).toBe(true);
      
      trigger!.click();
      await new Promise(r => setTimeout(r, 50));
      expect(item.hasAttribute('open')).toBe(false);
    });
  });

  describe('Keyboard Support', () => {
    it('should toggle on Enter key', async () => {
      const trigger = shadowQuery<HTMLButtonElement>(item, '.trigger');
      expect(trigger).toBeTruthy();
      
      simulateKeyboard(trigger!, 'Enter');
      await new Promise(r => setTimeout(r, 50));
      expect(item.hasAttribute('open')).toBe(true);
    });

    it('should toggle on Space key', async () => {
      const trigger = shadowQuery<HTMLButtonElement>(item, '.trigger');
      expect(trigger).toBeTruthy();
      
      simulateKeyboard(trigger!, ' ');
      await new Promise(r => setTimeout(r, 50));
      expect(item.hasAttribute('open')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const trigger = shadowQuery(item, '.trigger');
      expect(trigger?.getAttribute('aria-expanded')).toBe('false');
      expect(trigger?.getAttribute('aria-controls')).toBeTruthy();
    });

    it('should update aria-expanded when opened', async () => {
      const trigger = shadowQuery(item, '.trigger');
      
      item.open();
      await new Promise(r => setTimeout(r, 50));
      
      expect(trigger?.getAttribute('aria-expanded')).toBe('true');
    });

    it('should have region role on content', () => {
      const content = shadowQuery(item, '.content');
      expect(content?.getAttribute('role')).toBe('region');
    });
  });

  describe('Events', () => {
    it('should emit toggle event on open', async () => {
      const toggleSpy = vi.fn();
      item.addEventListener('toggle', toggleSpy);
      
      item.open();
      await new Promise(r => setTimeout(r, 50));
      
      expect(toggleSpy).toHaveBeenCalled();
    });

    it('should emit accordion-toggle event', async () => {
      const toggleSpy = vi.fn();
      item.addEventListener('accordion-toggle', toggleSpy);
      
      item.open();
      await new Promise(r => setTimeout(r, 50));
      
      expect(toggleSpy).toHaveBeenCalled();
    });
  });
});
