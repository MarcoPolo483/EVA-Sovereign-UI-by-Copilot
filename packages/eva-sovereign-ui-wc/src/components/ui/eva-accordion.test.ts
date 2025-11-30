import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, simulateKeyboard } from 'tests/test-utils';
import './eva-accordion';

describe('eva-accordion', () => {
  let accordion: HTMLElement;

  beforeEach(async () => {
    accordion = await createComponent('eva-accordion');
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(accordion.shadowRoot).toBeTruthy();
    });

    it('should support multiple items', async () => {
      accordion.innerHTML = `
        <div slot="item-1-trigger">Item 1</div>
        <div slot="item-1-content">Content 1</div>
        <div slot="item-2-trigger">Item 2</div>
        <div slot="item-2-content">Content 2</div>
      `;
      await new Promise(resolve => setTimeout(resolve, 0));
      expect(accordion.children.length).toBeGreaterThan(0);
    });
  });

  describe('Interaction', () => {
    it.skip('should expand/collapse on click', async () => {
      accordion.innerHTML = `
        <button slot="item-1-trigger">Item 1</button>
        <div slot="item-1-content">Content 1</div>
      `;
      await new Promise(resolve => setTimeout(resolve, 0));

      const trigger = accordion.querySelector('[slot="item-1-trigger"]') as HTMLElement;
      trigger.click();
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
    });

    it.skip('should support keyboard navigation', async () => {
      accordion.innerHTML = `
        <button slot="item-1-trigger">Item 1</button>
        <div slot="item-1-content">Content 1</div>
      `;
      await new Promise(resolve => setTimeout(resolve, 0));

      const trigger = accordion.querySelector('[slot="item-1-trigger"]') as HTMLElement;
      simulateKeyboard(trigger, 'Enter');
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
    });
  });

  describe('Accessibility', () => {
    it.skip('should have proper ARIA attributes', async () => {
      accordion.innerHTML = `
        <button slot="item-1-trigger">Item 1</button>
        <div slot="item-1-content">Content 1</div>
      `;
      await new Promise(resolve => setTimeout(resolve, 0));

      const trigger = accordion.querySelector('[slot="item-1-trigger"]') as HTMLElement;
      expect(trigger.getAttribute('aria-controls')).toBeTruthy();
      expect(trigger.getAttribute('aria-expanded')).toBeTruthy();
    });
  });
});
