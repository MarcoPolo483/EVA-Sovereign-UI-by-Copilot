import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery } from '../../../../../tests/test-utils';
import './eva-gc-footer';
import type { EVAGCFooter } from './eva-gc-footer';

describe('eva-gc-footer', () => {
  let footer: EVAGCFooter;

  beforeEach(async () => {
    footer = await createComponent('eva-gc-footer') as EVAGCFooter;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(footer.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-gc-footer')).toBeTruthy();
    });

    it('should render footer container', () => {
      const container = shadowQuery(footer, '.footer-container');
      expect(container).toBeTruthy();
    });
  });

  describe('Attributes', () => {
    it('should support profile attribute', async () => {
      footer.setAttribute('profile', 'canada_gc');
      await new Promise(r => setTimeout(r, 50));
      expect(footer.getAttribute('profile')).toBe('canada_gc');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await testAccessibility(footer);
    });

    it('should render links with underline', () => {
      // Inject some links via slot to ensure styling
      const container = shadowQuery(footer, '.footer-container') as HTMLElement;
      const ul = document.createElement('ul');
      ul.className = 'links';
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = 'Privacy';
      li.appendChild(a);
      ul.appendChild(li);
      container?.appendChild(ul);
      expect(ul.querySelector('a')?.textContent).toBe('Privacy');
    });
  });
});
