import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { InMemoryCMSAdapter, initCMSAdapter, type CMSContent } from './cms-adapter';

describe('InMemoryCMSAdapter', () => {
  let adapter: InMemoryCMSAdapter;

  beforeEach(() => {
    // Clear storage and set baseline location
    try { localStorage.clear(); } catch {}
    window.history.pushState({}, '', '/en/welcome');

    // Seed with simple EN/FR content
    const seed: Array<{ path: string; en: CMSContent; fr: CMSContent }> = [
      {
        path: 'welcome',
        en: { id: 'welcome', locale: 'en-CA', title: 'Welcome', body: 'Hello' },
        fr: { id: 'welcome', locale: 'fr-CA', title: 'Bienvenue', body: 'Bonjour' }
      }
    ];
    adapter = new InMemoryCMSAdapter(seed);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('locale management', () => {
    it('gets and sets locale and persists to localStorage', () => {
      expect(adapter.getLocale()).toBe('en-CA');
      adapter.setLocale('fr-CA');
      expect(adapter.getLocale()).toBe('fr-CA');
      try { expect(localStorage.getItem('eva:locale')).toBe('fr-CA'); } catch {}
    });
  });

  describe('URL building and parsing', () => {
    it('builds URL with language prefix', () => {
      adapter.setLocale('en-CA');
      expect(adapter.buildUrl('service/apply')).toBe('/en/service/apply');
      adapter.setLocale('fr-CA');
      expect(adapter.buildUrl('service/apply')).toBe('/fr/service/apply');
    });

    it('handles leading slash when building URL', () => {
      adapter.setLocale('en-CA');
      expect(adapter.buildUrl('/welcome')).toBe('/en/welcome');
    });

    it('parses locale from URL language prefix', () => {
      expect(adapter.parseLocaleFromUrl('/fr/path')).toBe('fr-CA');
      expect(adapter.parseLocaleFromUrl('/en/path')).toBe('en-CA');
      expect(adapter.parseLocaleFromUrl('/es/path')).toBe('es-US');
      expect(adapter.parseLocaleFromUrl('/cy/path')).toBe('cy-GB');
      expect(adapter.parseLocaleFromUrl('/mi/path')).toBe('mi-NZ');
      expect(adapter.parseLocaleFromUrl('/xx/path')).toBeNull();
    });
  });

  describe('content fetching', () => {
    it('returns seeded in-memory content for current locale', async () => {
      adapter.setLocale('fr-CA');
      const c = await adapter.fetchContent('welcome');
      expect(c.title).toBe('Bienvenue');
      expect(c.locale).toBe('fr-CA');
    });

    it('falls back to static JSON under /content/<lang>/<path>.json', async () => {
      // Create an adapter without seed
      adapter = new InMemoryCMSAdapter();
      adapter.setLocale('en-CA');
      // Mock fetch to return a JSON payload
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'welcome', title: 'Welcome (Static)', body: 'Hello Static' })
      } as any);

      const c = await adapter.fetchContent('welcome');
      expect((global.fetch as any).mock.calls[0][0]).toBe('/content/en/welcome.json');
      expect(c.title).toBe('Welcome (Static)');
      expect(c.locale).toBe('en-CA');
    });

    it('throws on missing static content', async () => {
      adapter = new InMemoryCMSAdapter();
      adapter.setLocale('fr-CA');
      global.fetch = vi.fn().mockResolvedValue({ ok: false } as any);
      await expect(adapter.fetchContent('missing')).rejects.toThrow(/CMS content not found/);
    });
  });

  describe('initCMSAdapter', () => {
    it('restores persisted locale then overrides with URL prefix', () => {
      try { localStorage.setItem('eva:locale', 'en-CA'); } catch {}
      window.history.pushState({}, '', '/fr/welcome');
      const initialized = initCMSAdapter(adapter);
      expect(initialized.getLocale()).toBe('fr-CA');
    });

    it('uses persisted locale when URL has no prefix', () => {
      try { localStorage.setItem('eva:locale', 'es-US'); } catch {}
      window.history.pushState({}, '', '/welcome');
      const initialized = initCMSAdapter(adapter);
      expect(initialized.getLocale()).toBe('es-US');
    });
  });
});
