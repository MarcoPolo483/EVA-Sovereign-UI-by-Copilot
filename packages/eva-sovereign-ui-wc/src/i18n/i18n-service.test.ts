/**
 * Comprehensive i18n Service Tests
 * Testing all Five Eyes locales with 80%+ coverage
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { I18nService } from './i18n-service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    // Get fresh instance for each test
    service = I18nService.getInstance();
    // Reset to default locale
    service.setLocale('en-CA');
  });

  describe('Singleton Pattern', () => {
    it('should return the same instance', () => {
      const instance1 = I18nService.getInstance();
      const instance2 = I18nService.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('Locale Management', () => {
    it('should have default locale en-CA', () => {
      expect(service.getLocale()).toBe('en-CA');
    });

    it('should set and get locale', async () => {
      await service.setLocale('fr-CA');
      expect(service.getLocale()).toBe('fr-CA');
    });

    it('should list all Five Eyes locales', () => {
      const locales = service.getAvailableLocales();
      expect(locales).toEqual([
        'en-CA', 'fr-CA',  // Canada
        'en-US', 'es-US',  // USA
        'en-GB', 'cy-GB',  // UK
        'en-AU',           // Australia
        'en-NZ', 'mi-NZ'   // New Zealand
      ]);
      expect(locales).toHaveLength(9);
    });

    it('should include all Canadian locales', () => {
      const locales = service.getAvailableLocales();
      expect(locales).toContain('en-CA');
      expect(locales).toContain('fr-CA');
    });

    it('should include all US locales', () => {
      const locales = service.getAvailableLocales();
      expect(locales).toContain('en-US');
      expect(locales).toContain('es-US');
    });

    it('should include all UK locales', () => {
      const locales = service.getAvailableLocales();
      expect(locales).toContain('en-GB');
      expect(locales).toContain('cy-GB');
    });

    it('should include Australian locale', () => {
      const locales = service.getAvailableLocales();
      expect(locales).toContain('en-AU');
    });

    it('should include all New Zealand locales', () => {
      const locales = service.getAvailableLocales();
      expect(locales).toContain('en-NZ');
      expect(locales).toContain('mi-NZ');
    });
  });

  describe('Translation Loading', () => {
    it('should load locale if not already loaded', async () => {
      const locale = 'en-US';
      expect(service.isLocaleLoaded(locale)).toBe(false);
      
      // Mock fetch for testing
      global.fetch = vi.fn().mockResolvedValue({
        json: async () => ({ test: { key: 'value' } })
      });

      await service.loadLocale(locale);
      expect(service.isLocaleLoaded(locale)).toBe(true);
    });

    it('should not reload already loaded locale', async () => {
      const locale = 'en-CA';
      
      // Load first time
      global.fetch = vi.fn().mockResolvedValue({
        json: async () => ({ test: { key: 'value' } })
      });
      await service.loadLocale(locale);
      
      const fetchCallCount = (global.fetch as any).mock.calls.length;
      
      // Try to load again
      await service.loadLocale(locale);
      
      // Should not call fetch again
      expect((global.fetch as any).mock.calls.length).toBe(fetchCallCount);
    });

    it('should handle failed locale loading gracefully', async () => {
      const locale = 'invalid-locale';
      
      global.fetch = vi.fn().mockRejectedValue(new Error('Not found'));
      
      // Should not throw
      await expect(service.loadLocale(locale)).resolves.not.toThrow();
      
      // Should mark as loaded with empty translations
      expect(service.isLocaleLoaded(locale)).toBe(true);
    });
  });

  describe('Translation Retrieval', () => {
    beforeEach(() => {
      // Set up mock translations
      (service as any).translations['en-CA'] = {
        simple: 'Simple text',
        nested: {
          key: 'Nested value'
        },
        deep: {
          nested: {
            key: 'Deep nested value'
          }
        },
        with: {
          params: 'Hello {name}, you have {count} messages'
        }
      };
    });

    it('should translate simple keys', () => {
      expect(service.t('simple')).toBe('Simple text');
    });

    it('should translate nested keys', () => {
      expect(service.t('nested.key')).toBe('Nested value');
    });

    it('should translate deeply nested keys', () => {
      expect(service.t('deep.nested.key')).toBe('Deep nested value');
    });

    it('should return key if translation not found', () => {
      expect(service.t('nonexistent.key')).toBe('nonexistent.key');
    });

    it('should replace parameters in translations', () => {
      const result = service.t('with.params', { name: 'John', count: 5 });
      expect(result).toBe('Hello John, you have 5 messages');
    });

    it('should handle missing parameters gracefully', () => {
      const result = service.t('with.params', { name: 'John' });
      expect(result).toBe('Hello John, you have {count} messages');
    });

    it('should handle undefined parameters', () => {
      const result = service.t('with.params', { name: undefined, count: 0 });
      expect(result).toBe('Hello {name}, you have 0 messages');
    });
  });

  describe('Locale Change Notifications', () => {
    it('should notify listeners on locale change', async () => {
      const mockCallback = vi.fn();
      service.subscribe(mockCallback);

      await service.setLocale('fr-CA');

      expect(mockCallback).toHaveBeenCalledWith('fr-CA');
    });

    it('should allow multiple subscribers', async () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();
      
      service.subscribe(callback1);
      service.subscribe(callback2);

      await service.setLocale('en-US');

      expect(callback1).toHaveBeenCalledWith('en-US');
      expect(callback2).toHaveBeenCalledWith('en-US');
    });

    it('should allow unsubscribing', async () => {
      const mockCallback = vi.fn();
      const unsubscribe = service.subscribe(mockCallback);

      unsubscribe();
      await service.setLocale('es-US');

      expect(mockCallback).not.toHaveBeenCalled();
    });

    it('should handle unsubscribe being called multiple times', () => {
      const mockCallback = vi.fn();
      const unsubscribe = service.subscribe(mockCallback);

      expect(() => {
        unsubscribe();
        unsubscribe();
      }).not.toThrow();
    });
  });

  describe('Five Eyes Locale Specific Tests', () => {
    describe('Canada (en-CA, fr-CA)', () => {
      it('should support English Canadian locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('en-CA');
      });

      it('should support French Canadian locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('fr-CA');
      });

      it('should switch between Canadian locales', async () => {
        await service.setLocale('en-CA');
        expect(service.getLocale()).toBe('en-CA');
        
        await service.setLocale('fr-CA');
        expect(service.getLocale()).toBe('fr-CA');
      });
    });

    describe('USA (en-US, es-US)', () => {
      it('should support English US locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('en-US');
      });

      it('should support Spanish US locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('es-US');
      });

      it('should switch between US locales', async () => {
        await service.setLocale('en-US');
        expect(service.getLocale()).toBe('en-US');
        
        await service.setLocale('es-US');
        expect(service.getLocale()).toBe('es-US');
      });
    });

    describe('UK (en-GB, cy-GB)', () => {
      it('should support English UK locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('en-GB');
      });

      it('should support Welsh locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('cy-GB');
      });

      it('should switch between UK locales', async () => {
        await service.setLocale('en-GB');
        expect(service.getLocale()).toBe('en-GB');
        
        await service.setLocale('cy-GB');
        expect(service.getLocale()).toBe('cy-GB');
      });
    });

    describe('Australia (en-AU)', () => {
      it('should support English Australian locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('en-AU');
      });

      it('should set Australian locale', async () => {
        await service.setLocale('en-AU');
        expect(service.getLocale()).toBe('en-AU');
      });
    });

    describe('New Zealand (en-NZ, mi-NZ)', () => {
      it('should support English NZ locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('en-NZ');
      });

      it('should support Te Reo Māori locale', () => {
        const locales = service.getAvailableLocales();
        expect(locales).toContain('mi-NZ');
      });

      it('should switch between NZ locales', async () => {
        await service.setLocale('en-NZ');
        expect(service.getLocale()).toBe('en-NZ');
        
        await service.setLocale('mi-NZ');
        expect(service.getLocale()).toBe('mi-NZ');
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty translation key', () => {
      expect(service.t('')).toBe('');
    });

    it('should handle translation key with only dots', () => {
      expect(service.t('...')).toBe('...');
    });

    it('should handle very long translation keys', () => {
      const longKey = 'a.'.repeat(100) + 'b';
      expect(service.t(longKey)).toBe(longKey);
    });

    it('should handle special characters in parameters', () => {
      (service as any).translations['en-CA'] = {
        test: 'Value: {param}'
      };
      
      const result = service.t('test', { param: '<script>alert("xss")</script>' });
      expect(result).toBe('Value: <script>alert("xss")</script>');
    });

    it('should handle numeric parameters', () => {
      (service as any).translations['en-CA'] = {
        test: 'Count: {count}'
      };
      
      const result = service.t('test', { count: 42 });
      expect(result).toBe('Count: 42');
    });

    it('should handle boolean parameters', () => {
      (service as any).translations['en-CA'] = {
        test: 'Status: {status}'
      };
      
      const result = service.t('test', { status: true });
      expect(result).toBe('Status: true');
    });
  });

  describe('Locale Validation', () => {
    it('should check if locale is loaded', () => {
      (service as any).translations['test-locale'] = {};
      expect(service.isLocaleLoaded('test-locale')).toBe(true);
      expect(service.isLocaleLoaded('unknown-locale')).toBe(false);
    });

    it('should return all available locales in correct order', () => {
      const locales = service.getAvailableLocales();
      
      // Check Canada comes first
      expect(locales[0]).toBe('en-CA');
      expect(locales[1]).toBe('fr-CA');
      
      // Check USA comes second
      expect(locales[2]).toBe('en-US');
      expect(locales[3]).toBe('es-US');
      
      // Check UK comes third
      expect(locales[4]).toBe('en-GB');
      expect(locales[5]).toBe('cy-GB');
      
      // Check Australia comes fourth
      expect(locales[6]).toBe('en-AU');
      
      // Check New Zealand comes last
      expect(locales[7]).toBe('en-NZ');
      expect(locales[8]).toBe('mi-NZ');
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
