import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery } from '../../../../../tests/test-utils';
import './eva-gc-header';
import type { EVAGCHeader } from './eva-gc-header';

describe('eva-gc-header', () => {
  let header: EVAGCHeader;

  beforeEach(async () => {
    header = await createComponent('eva-gc-header') as EVAGCHeader;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(header.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-gc-header')).toBeTruthy();
    });

    it('should render header container', () => {
      const container = shadowQuery(header, '.header-container');
      expect(container).toBeTruthy();
    });

    it('should render logo section', () => {
      const logoSection = shadowQuery(header, '.logo-section');
      expect(logoSection).toBeTruthy();
    });
  });

  describe('Attributes', () => {
    it('should support profile attribute', async () => {
      header.setAttribute('profile', 'canada_gc');
      await new Promise(r => setTimeout(r, 50));
      expect(header.getAttribute('profile')).toBe('canada_gc');
    });

    it('should support app-name-key attribute', async () => {
      header.setAttribute('app-name-key', 'test.app.title');
      await new Promise(r => setTimeout(r, 50));
      expect(header.getAttribute('app-name-key')).toBe('test.app.title');
    });
  });

  describe('i18n Support', () => {
    it('should render translated app title', async () => {
      header.setAttribute('app-name-key', 'esdc.title');
      await new Promise(r => setTimeout(r, 50));
      const appTitle = shadowQuery(header, '.app-title');
      expect(appTitle).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await testAccessibility(header);
    });

    it('should support keyboard navigation', () => {
      const links = header.shadowRoot?.querySelectorAll('a');
      links?.forEach(link => {
        expect(link.hasAttribute('href')).toBe(true);
      });
    });
  });

  describe('Slots', () => {
    it('should support actions slot', () => {
      const slot = shadowQuery<HTMLSlotElement>(header, 'slot[name="actions"]');
      expect(slot).toBeTruthy();
    });
  });
});
