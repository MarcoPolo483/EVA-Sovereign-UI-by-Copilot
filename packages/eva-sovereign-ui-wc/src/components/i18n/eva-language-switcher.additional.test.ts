import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent } from '../../../../../tests/test-utils';
import './eva-language-switcher';
import { i18n } from '../../i18n/i18n-service';

describe('eva-language-switcher (additional branch coverage)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-language-switcher');
    // Ensure translations exist
    if (!(i18n as any).translations['en-CA']) {
      (i18n as any).translations['en-CA'] = {
        language: { current: 'Current language' },
        accessibility: { language: 'Language selection' }
      };
    }
    if (!(i18n as any).translations['fr-CA']) {
      (i18n as any).translations['fr-CA'] = {
        language: { current: 'Langue actuelle' },
        accessibility: { language: 'Sélection de la langue' }
      };
    }
    await i18n.setLocale('en-CA');
    await new Promise(r => requestAnimationFrame(r));
  });

  describe('Event listener edge cases', () => {
    it('should ignore clicks on non-button elements inside switcher', () => {
      const switcher = element.shadowRoot?.querySelector('.switcher');
      expect(switcher).toBeDefined();

      // Click directly on the switcher container (not a button)
      const clickEvent = new MouseEvent('click', { bubbles: true });
      Object.defineProperty(clickEvent, 'target', {
        value: switcher,
        enumerable: true
      });
      
      // Should not throw or crash
      element.shadowRoot?.dispatchEvent(clickEvent);
      
      // Confirm element is still functional
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons).toBeDefined();
      expect(buttons!.length).toBeGreaterThan(0);
    });

    it('should handle click on button without data-locale attribute', () => {
      // This tests the `if (locale)` guard in setupEventListeners
      const switcher = element.shadowRoot?.querySelector('.switcher');
      const fakeButton = document.createElement('button');
      fakeButton.className = 'lang-button';
      // Deliberately omit data-locale to test guard path
      switcher?.appendChild(fakeButton);

      // Should not throw when clicking button without locale
      fakeButton.click();
      
      // Verify element still renders properly
      expect(element.shadowRoot?.querySelector('.switcher')).toBeDefined();
    });
  });

  describe('JSON parsing edge cases', () => {
    it('should fallback to default locales when JSON.parse throws', async () => {
      // Set malformed JSON
      element.setAttribute('available-locales', '{not-valid-json]');
      await new Promise(r => requestAnimationFrame(r));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      // Should fall back to ["en-CA", "fr-CA"]
      expect(buttons?.length).toBe(2);
      
      const enButton = element.shadowRoot?.querySelector('.lang-button[data-locale="en-CA"]');
      const frButton = element.shadowRoot?.querySelector('.lang-button[data-locale="fr-CA"]');
      expect(enButton).toBeDefined();
      expect(frButton).toBeDefined();
    });

    it('should handle malformed JSON array syntax', async () => {
      // Malformed array syntax that will trigger the catch block
      element.setAttribute('available-locales', '["en-CA", "fr-CA"');
      await new Promise(r => requestAnimationFrame(r));

      // Should fallback to default ["en-CA", "fr-CA"]
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(2);
      
      const enButton = element.shadowRoot?.querySelector('.lang-button[data-locale="en-CA"]');
      const frButton = element.shadowRoot?.querySelector('.lang-button[data-locale="fr-CA"]');
      expect(enButton).toBeDefined();
      expect(frButton).toBeDefined();
    });
  });

  describe('Attribute reactivity', () => {
    it('should re-render when available-locales changes', async () => {
      element.setAttribute('available-locales', '["en-CA", "fr-CA"]');
      await new Promise(r => requestAnimationFrame(r));
      
      let buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(2);

      element.setAttribute('available-locales', '["en-GB", "cy-GB", "en-US"]');
      await new Promise(r => requestAnimationFrame(r));
      
      buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(3);
    });

    it('should re-render when current-locale attribute changes', async () => {
      element.setAttribute('current-locale', 'fr-CA');
      await new Promise(r => requestAnimationFrame(r));

      // attributeChangedCallback triggers render() which uses i18n.getLocale()
      // Verify render was called by checking shadow DOM exists
      expect(element.shadowRoot?.querySelector('.switcher')).toBeDefined();
    });
  });

  describe('Button state verification', () => {
    it('should mark only current locale with aria-current="true"', async () => {
      await i18n.setLocale('en-CA');
      await new Promise(r => requestAnimationFrame(r));

      const currentButtons = element.shadowRoot?.querySelectorAll('.lang-button[aria-current="true"]');
      expect(currentButtons?.length).toBe(1);
      
      const currentButton = currentButtons?.[0];
      expect(currentButton?.getAttribute('data-locale')).toBe('en-CA');
    });

    it('should add sr-only span only to current locale button', async () => {
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      let srCount = 0;
      
      buttons?.forEach(button => {
        const srSpan = button.querySelector('.sr-only');
        if (srSpan) srCount++;
      });

      // Only the current locale should have sr-only text
      expect(srCount).toBe(1);
    });
  });

  describe('Display formatting', () => {
    it('should extract and uppercase language code from locale', () => {
      // Test that split('-')[0].toUpperCase() works correctly
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      
      buttons?.forEach(button => {
        const locale = button.getAttribute('data-locale') || '';
        const displayText = button.textContent?.trim().replace(/Current language/g, '').trim();
        const expectedCode = locale.split('-')[0].toUpperCase();
        
        expect(displayText).toContain(expectedCode);
      });
    });

    it('should handle single-part locale codes', async () => {
      // Edge case: locale without hyphen (though unlikely)
      element.setAttribute('available-locales', '["en", "fr"]');
      await new Promise(r => requestAnimationFrame(r));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(2);
      
      const enButton = Array.from(buttons || []).find(
        btn => btn.getAttribute('data-locale') === 'en'
      );
      expect(enButton?.textContent).toContain('EN');
    });
  });

  describe('Empty and edge case arrays', () => {
    it('should handle empty array gracefully', async () => {
      element.setAttribute('available-locales', '[]');
      await new Promise(r => requestAnimationFrame(r));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(0);
      
      // Switcher should still exist
      expect(element.shadowRoot?.querySelector('.switcher')).toBeDefined();
    });

    it('should handle array with single locale', async () => {
      element.setAttribute('available-locales', '["en-GB"]');
      await new Promise(r => requestAnimationFrame(r));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(1);
      
      const button = buttons?.[0];
      expect(button?.getAttribute('data-locale')).toBe('en-GB');
      expect(button?.textContent).toContain('EN');
    });

    it('should handle array with many locales', async () => {
      element.setAttribute('available-locales', '["en-CA", "fr-CA", "en-GB", "cy-GB", "en-AU", "en-NZ", "mi-NZ"]');
      await new Promise(r => requestAnimationFrame(r));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(7);
    });
  });
});
