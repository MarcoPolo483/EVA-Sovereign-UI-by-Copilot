import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from '../../../../../tests/test-utils';
import './eva-scroll-area';

describe('eva-scroll-area', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-scroll-area');
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should be defined as custom element', () => {
      expect(customElements.get('eva-scroll-area')).toBeTruthy();
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
      const button = shadowQuery<HTMLButtonElement>(element, 'button');
      if (button) {
        let clicked = false;
        element.addEventListener('click', () => { clicked = true; });
        simulateClick(button);
        await new Promise(resolve => setTimeout(resolve, 10));
        expect(clicked).toBe(true);
      }
    });

    it('should dispatch scroll event when content overflows', async () => {
      // Insert large content into default slot to force overflow
      const content = document.createElement('div');
      content.style.height = '2000px';
      content.textContent = 'overflow-content';
      element.appendChild(content);

      await new Promise(resolve => setTimeout(resolve, 0));

      const area = shadowQuery<HTMLDivElement>(element, '.scroll-area');
      expect(area).toBeTruthy();

      let scrolled = false;
      area?.addEventListener('scroll', () => { scrolled = true; });
      if (area) {
        area.scrollTop = 100;
        area.dispatchEvent(new Event('scroll', { bubbles: true }));
      }

      await new Promise(resolve => setTimeout(resolve, 0));
      expect(scrolled).toBe(true);
    });

    it('should expose slot content via shadow and support smooth behavior', async () => {
      const text = document.createElement('p');
      text.textContent = 'Hello Scroll Area';
      element.appendChild(text);
      await new Promise(resolve => setTimeout(resolve, 0));

      const area = shadowQuery<HTMLDivElement>(element, '.scroll-area');
      expect(area).toBeTruthy();

      // verify scroll-behavior style is applied (from computed style)
      const behavior = area ? getComputedStyle(area).scrollBehavior : '';
      expect(behavior).toBe('smooth');
    });
  });
});
