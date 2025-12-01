import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from '../../../../../tests/test-utils';
import { settle } from '../../__tests__/helpers/interaction';
import './eva-tooltip';

describe('eva-tooltip', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-tooltip');
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should be defined as custom element', () => {
      expect(customElements.get('eva-tooltip')).toBeTruthy();
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

    it('opens on hover/focus and closes on mouseleave/blur', async () => {
      const el = document.createElement('eva-tooltip');
      const btn = document.createElement('button');
      btn.setAttribute('slot', 'trigger');
      btn.textContent = 'Hover me';
      el.appendChild(btn);
      document.body.appendChild(el);
      await settle(1);

      // focus -> open (immediate, no timeout)
      btn.focus();
      await settle(2);
      let content = shadowQuery<HTMLDivElement>(el, '.content');
      expect(content).toBeTruthy();

      // mouseleave -> close
      btn.dispatchEvent(new Event('mouseleave', { bubbles: true }));
      await settle(2);
      content = shadowQuery<HTMLDivElement>(el, '.content');
      expect(content).toBeFalsy();

      // hover -> open (listener uses setTimeout(0))
      btn.dispatchEvent(new Event('mouseenter', { bubbles: true }));
      await new Promise(r => setTimeout(r, 1));
      await settle(2);
      content = shadowQuery<HTMLDivElement>(el, '.content');
      expect(content).toBeTruthy();

      // blur -> close
      btn.dispatchEvent(new Event('blur', { bubbles: true }));
      await settle(2);
      content = shadowQuery<HTMLDivElement>(el, '.content');
      expect(content).toBeFalsy();
    });

    it('positions within viewport bounds', async () => {
      const el2 = document.createElement('eva-tooltip');
      const btn = document.createElement('button');
      btn.setAttribute('slot', 'trigger');
      btn.style.position = 'fixed';
      btn.style.left = '0px';
      btn.style.top = '0px';
      el2.appendChild(btn);
      document.body.appendChild(el2);
      await settle(1);

      // use focus to open immediately
      btn.focus();
      await settle(2);
      const content = shadowQuery<HTMLDivElement>(el2, '.content');
      expect(content).toBeTruthy();
      const left = parseFloat(content?.style.left || '0');
      expect(left).toBeGreaterThanOrEqual(8);
    });
  });
});
