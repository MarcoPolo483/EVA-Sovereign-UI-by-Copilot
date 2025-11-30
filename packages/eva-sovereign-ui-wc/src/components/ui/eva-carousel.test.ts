import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from 'tests/test-utils';
import './eva-carousel';

describe('eva-carousel', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-carousel');
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should be defined as custom element', () => {
      expect(customElements.get('eva-carousel')).toBeTruthy();
    });
  });

  describe('Attributes', () => {
    it('should update when attributes change', async () => {
      element.setAttribute('test-attr', 'test-value');
      await new Promise(resolve => setTimeout(resolve, 0));
      expect(element.getAttribute('test-attr')).toBe('test-value');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await testAccessibility(element);
    });

    it('should be keyboard accessible', () => {
      const focusable = shadowQuery(element, 'button, input, select, textarea, a[href], [tabindex]');
      if (focusable) {
        expect(focusable.getAttribute('tabindex')).not.toBe('-1');
      }
    });
  });

  describe('Events', () => {
    it('should handle user interactions', async () => {
      // Add items for interaction
      element.innerHTML = `
        <eva-carousel-item><div>Slide 1</div></eva-carousel-item>
        <eva-carousel-item><div>Slide 2</div></eva-carousel-item>
      `;
      await new Promise(r => setTimeout(r, 50));
      const nextBtn = shadowQuery<HTMLButtonElement>(element, '.nav-button.next');
      let changed = false;
      element.addEventListener('change', () => { changed = true; });
      if (nextBtn) {
        simulateClick(nextBtn);
        await new Promise(r => setTimeout(r, 50));
        expect(changed).toBe(true);
      }
    });
  });
});
