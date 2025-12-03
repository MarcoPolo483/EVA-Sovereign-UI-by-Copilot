import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery } from '../../../../../tests/test-utils';
import './eva-page-shell';
import type { EVAPageShell } from './eva-page-shell';

describe('eva-page-shell', () => {
  let shell: EVAPageShell;

  beforeEach(async () => {
    shell = await createComponent('eva-page-shell') as EVAPageShell;
    await new Promise(r => setTimeout(r, 50));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(shell.shadowRoot).toBeTruthy();
      expect(customElements.get('eva-page-shell')).toBeTruthy();
    });

    it('should render header, main, and footer', () => {
      const header = shadowQuery(shell, 'header');
      const main = shadowQuery(shell, 'main');
      const footer = shadowQuery(shell, 'footer');
      expect(header && main && footer).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      await testAccessibility(shell);
    });

    it('should have main with role and tabindex', () => {
      const main = shadowQuery(shell, 'main') as HTMLElement;
      expect(main.getAttribute('role')).toBe('main');
      expect(main.getAttribute('tabindex')).toBe('-1');
    });
  });

  describe('Slots', () => {
    it('should render slotted content', async () => {
      shell.innerHTML = `
        <div slot="header">Header content</div>
        <div>Main content</div>
        <div slot="footer">Footer content</div>
      `;
      await new Promise(r => setTimeout(r, 50));
      const headerSlot = shadowQuery<HTMLSlotElement>(shell, 'slot[name="header"]');
      const footerSlot = shadowQuery<HTMLSlotElement>(shell, 'slot[name="footer"]');
      const mainSlot = shadowQuery<HTMLSlotElement>(shell, 'main slot');
      expect(headerSlot && footerSlot && mainSlot).toBeTruthy();
    });
  });
});
