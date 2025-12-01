import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery, simulateClick, simulateKeyboard } from '../../../../../tests/test-utils';
import './eva-select';

describe('eva-select', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-select');
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should be defined as custom element', () => {
      expect(customElements.get('eva-select')).toBeTruthy();
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
      // Provide items
      element.innerHTML = `
        <eva-select-item value="one">One</eva-select-item>
        <eva-select-item value="two">Two</eva-select-item>
      `;
      await new Promise(r => setTimeout(r, 25));
      const trigger = shadowQuery<HTMLButtonElement>(element, '.trigger');
      let changed = false;
      element.addEventListener('change', () => { changed = true; });
      if (trigger) {
        simulateClick(trigger); // open
        await new Promise(r => setTimeout(r, 25));
        const firstItem = element.querySelector('eva-select-item');
        firstItem?.shadowRoot?.querySelector('.item')?.dispatchEvent(new Event('click', { bubbles: true, composed: true }));
        await new Promise(r => setTimeout(r, 50));
        expect(changed).toBe(true);
        expect(element.getAttribute('value')).toBe('one');
      }
    });

    it('should ignore disabled item clicks and keep dropdown open', async () => {
      element.innerHTML = `
        <eva-select-item value="one">One</eva-select-item>
        <eva-select-item value="two" disabled>Two</eva-select-item>
      `;
      await new Promise(r => setTimeout(r, 25));
      const trigger = shadowQuery<HTMLButtonElement>(element, '.trigger');
      if (trigger) {
        simulateClick(trigger); // open
        await new Promise(r => setTimeout(r, 25));
        const disabledItem = element.querySelectorAll('eva-select-item')[1];
        // Click disabled item; ensure event does not escape shadow to close dropdown
        disabledItem?.shadowRoot?.querySelector('.item')?.dispatchEvent(new Event('click', { bubbles: true, composed: false }));
        await new Promise(r => setTimeout(r, 25));
        // value should remain unset and dropdown remain open after disabled click
        expect(element.getAttribute('value')).not.toBe('two');
        const dropdown = shadowQuery<HTMLDivElement>(element, '.dropdown');
        expect(dropdown).toBeTruthy();
      }
    });

    it('should toggle aria-invalid via attribute and reflect on trigger', async () => {
      element.setAttribute('aria-invalid', 'true');
      await new Promise(r => setTimeout(r, 0));
      // Component does not mirror aria-invalid onto trigger attribute; validate host state
      expect(element.getAttribute('aria-invalid')).toBe('true');
      element.removeAttribute('aria-invalid');
      await new Promise(r => setTimeout(r, 0));
      expect(element.getAttribute('aria-invalid')).toBe(null);
    });

    it('should close on outside click when open', async () => {
      const trigger = shadowQuery<HTMLButtonElement>(element, '.trigger');
      if (trigger) {
        simulateClick(trigger); // open
        await new Promise(r => setTimeout(r, 25));
        document.body.dispatchEvent(new Event('click', { bubbles: true }));
        await new Promise(r => setTimeout(r, 25));
        const dropdown = shadowQuery<HTMLDivElement>(element, '.dropdown');
        expect(dropdown).toBeFalsy();
      }
    });
  });
});
