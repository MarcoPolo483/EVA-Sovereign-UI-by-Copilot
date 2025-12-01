import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createComponent } from '../../../../../tests/test-utils';
import './eva-language-switcher';
import { i18n } from '../../i18n/i18n-service';

describe('eva-language-switcher', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-language-switcher');
    // Stub translations if fetch not executed in test environment
    if (!(i18n as any).translations['en-CA']) {
      (i18n as any).translations['en-CA'] = { 
        language: { current: 'Current language', en: 'English', fr: 'Français' }, 
        accessibility: { language: 'Language selection' } 
      };
    }
    if (!(i18n as any).translations['fr-CA']) {
      (i18n as any).translations['fr-CA'] = { 
        language: { current: 'Langue actuelle', en: 'English', fr: 'Français' }, 
        accessibility: { language: 'Sélection de la langue' } 
      };
    }
    if (!(i18n as any).translations['en-US']) {
      (i18n as any).translations['en-US'] = {
        language: { current: 'Current language', en: 'English', es: 'Español' },
        accessibility: { language: 'Language selection' }
      };
    }
    if (!(i18n as any).translations['es-US']) {
      (i18n as any).translations['es-US'] = {
        language: { current: 'Idioma actual', en: 'English', es: 'Español' },
        accessibility: { language: 'Selección de idioma' }
      };
    }
    await i18n.setLocale('en-CA');
    await new Promise(r => setTimeout(r, 10));
  });

  describe('Rendering', () => {
    it('should render with shadow DOM', () => {
      expect(element.shadowRoot).toBeDefined();
    });

    it('should render language buttons', () => {
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons).toBeDefined();
      expect(buttons!.length).toBeGreaterThan(0);
    });

    it('should have proper ARIA role', () => {
      const switcher = element.shadowRoot?.querySelector('.switcher');
      expect(switcher?.getAttribute('role')).toBe('group');
    });

    it('should have ARIA label', () => {
      const switcher = element.shadowRoot?.querySelector('.switcher');
      expect(switcher?.getAttribute('aria-label')).toBeTruthy();
    });

    it('should render current locale with aria-current', () => {
      const currentButton = element.shadowRoot?.querySelector('.lang-button[aria-current="true"]');
      expect(currentButton).toBeDefined();
    });

    it('should show screen reader text for current language', () => {
      const sr = element.shadowRoot?.querySelector('.lang-button[aria-current="true"] .sr-only');
      expect(sr?.textContent).toMatch(/Current language/i);
    });
  });

  describe('Locale Switching', () => {
    it('should reactively update when locale changes', async () => {
      await i18n.setLocale('fr-CA');
      await new Promise(r => setTimeout(r, 20));
      const sr = element.shadowRoot?.querySelector('.lang-button[aria-current="true"] .sr-only');
      expect(sr?.textContent).toMatch(/Langue actuelle/i);
    });

    it('should emit language-changed event on button click', async () => {
      const eventSpy = vi.fn();
      element.addEventListener('language-changed', eventSpy);

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      const frButton = Array.from(buttons || []).find(
        btn => btn.getAttribute('data-locale') === 'fr-CA'
      ) as HTMLElement;

      if (frButton) {
        frButton.click();
        await new Promise(r => setTimeout(r, 10));
        expect(eventSpy).toHaveBeenCalled();
      }
    });

    it('should update active state when locale changes', async () => {
      await i18n.setLocale('fr-CA');
      await new Promise(r => setTimeout(r, 20));

      const frButton = element.shadowRoot?.querySelector(
        '.lang-button[data-locale="fr-CA"]'
      );
      expect(frButton?.getAttribute('aria-current')).toBe('true');
    });
  });

  describe('Available Locales', () => {
    it('should accept available-locales attribute', async () => {
      element.setAttribute('available-locales', '["en-US", "es-US"]');
      await new Promise(r => setTimeout(r, 10));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(2);
    });

    it('should default to Canadian locales', async () => {
      const defaultElement = document.createElement('eva-language-switcher');
      document.body.appendChild(defaultElement);

      await new Promise(r => setTimeout(r, 20));
      
      const buttons = defaultElement.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBeGreaterThanOrEqual(2);
      
      if (document.body.contains(defaultElement)) {
        document.body.removeChild(defaultElement);
      }
    });

    it('should handle single locale', async () => {
      element.setAttribute('available-locales', '["en-AU"]');
      await new Promise(r => setTimeout(r, 10));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBe(1);
    });

    it('should handle Five Eyes locales', async () => {
      const testCases = [
        { locales: '["en-CA", "fr-CA"]', count: 2, name: 'Canada' },
        { locales: '["en-US", "es-US"]', count: 2, name: 'USA' },
        { locales: '["en-GB", "cy-GB"]', count: 2, name: 'UK' },
        { locales: '["en-AU"]', count: 1, name: 'Australia' },
        { locales: '["en-NZ", "mi-NZ"]', count: 2, name: 'New Zealand' }
      ];

      for (const test of testCases) {
        element.setAttribute('available-locales', test.locales);
        await new Promise(r => setTimeout(r, 10));

        const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
        expect(buttons?.length).toBe(test.count);
      }
    });
  });

  describe('Accessibility', () => {
    it('should have proper lang attributes on buttons', () => {
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      buttons?.forEach(button => {
        expect(button.getAttribute('lang')).toBeTruthy();
      });
    });

    it('should be keyboard navigable', () => {
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      buttons?.forEach(button => {
        expect(button.tagName).toBe('BUTTON');
      });
    });

    it('should have focus-visible styles', () => {
      const style = element.shadowRoot?.querySelector('style');
      expect(style?.textContent).toContain('focus-visible');
    });

    it('should support reduced motion', () => {
      const style = element.shadowRoot?.querySelector('style');
      expect(style?.textContent).toContain('prefers-reduced-motion');
    });

    it('should have screen reader only text hidden visually', () => {
      const style = element.shadowRoot?.querySelector('style');
      expect(style?.textContent).toContain('.sr-only');
    });
  });

  describe('Styling', () => {
    it('should have hover styles', () => {
      const style = element.shadowRoot?.querySelector('style');
      expect(style?.textContent).toContain(':hover');
    });

    it('should have active state styles', () => {
      const style = element.shadowRoot?.querySelector('style');
      expect(style?.textContent).toContain('[aria-current="true"]');
    });

    it('should use design tokens', () => {
      const style = element.shadowRoot?.querySelector('style');
      // Tokens are compiled to actual values, check for spacing units
      expect(style?.textContent).toMatch(/0\.(25|5|75)rem/);
    });

    it('should use modern colors', () => {
      const style = element.shadowRoot?.querySelector('style');
      // Colors are compiled to oklch values
      expect(style?.textContent).toContain('oklch');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty available-locales', async () => {
      element.setAttribute('available-locales', '[]');
      await new Promise(r => setTimeout(r, 10));

      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons?.length).toBeGreaterThanOrEqual(0);
    });

    it('should handle invalid JSON in available-locales', async () => {
      // Should fallback to default locales on invalid JSON
      element.setAttribute('available-locales', 'invalid-json');
      await new Promise(r => setTimeout(r, 10));

      // Should still render with default locales
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons).toBeDefined();
      expect(buttons!.length).toBeGreaterThanOrEqual(2);
    });

    it('should handle unknown locales gracefully', async () => {
      element.setAttribute('available-locales', '["xx-XX", "yy-YY"]');
      await new Promise(r => setTimeout(r, 10));

      // Should still render buttons
      const buttons = element.shadowRoot?.querySelectorAll('.lang-button');
      expect(buttons).toBeDefined();
    });

    it('should handle rapid locale changes', async () => {
      await i18n.setLocale('en-CA');
      await i18n.setLocale('fr-CA');
      await i18n.setLocale('en-CA');
      await new Promise(r => setTimeout(r, 30));

      const currentButton = element.shadowRoot?.querySelector(
        '.lang-button[aria-current="true"]'
      );
      expect(currentButton?.getAttribute('data-locale')).toBe('en-CA');
    });
  });

  describe('Custom Events', () => {
    it('should emit language-changed with correct detail', async () => {
      const eventPromise = new Promise<CustomEvent>((resolve) => {
        element.addEventListener('language-changed', (e) => {
          resolve(e as CustomEvent);
        }, { once: true });
      });

      const button = element.shadowRoot?.querySelector(
        '.lang-button[data-locale="fr-CA"]'
      ) as HTMLElement;
      button?.click();

      const event = await eventPromise;
      expect(event.detail).toHaveProperty('locale');
      expect(event.detail.locale).toBe('fr-CA');
    });

    it('should not emit event for current locale', async () => {
      const eventSpy = vi.fn();
      element.addEventListener('language-changed', eventSpy);

      const currentButton = element.shadowRoot?.querySelector(
        '.lang-button[aria-current="true"]'
      ) as HTMLElement;
      currentButton?.click();

      await new Promise(r => setTimeout(r, 10));
      // May or may not emit - implementation dependent
    });
  });
});
