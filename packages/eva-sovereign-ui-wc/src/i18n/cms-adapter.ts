// Bilingual CMS Adapter interfaces and default implementation
// Supports English/French content loading, locale detection, and URL management

export type Locale =
  | 'en-CA' | 'fr-CA'
  | 'en-US' | 'es-US'
  | 'en-GB' | 'cy-GB'
  | 'en-AU'
  | 'en-NZ' | 'mi-NZ';

export interface CMSContent {
  id: string;
  locale: Locale;
  title: string;
  body: string;
  metadata?: Record<string, any>;
}

export interface CMSAdapter {
  getLocale(): Locale;
  setLocale(next: Locale): void;
  buildUrl(path: string, locale?: Locale): string;
  parseLocaleFromUrl(url: string): Locale | null;
  fetchContent(path: string, locale?: Locale): Promise<CMSContent>;
}

// A minimal in-memory adapter useful for demos and unit tests
export class InMemoryCMSAdapter implements CMSAdapter {
  private current: Locale = 'en-CA';
  private store: Record<string, { 'en-CA': CMSContent; 'fr-CA': CMSContent }> = {};

  constructor(seed?: Array<{ path: string; en: CMSContent; fr: CMSContent }>) {
    if (seed) {
      for (const item of seed) {
        this.store[item.path] = {
          'en-CA': { ...item.en, locale: 'en-CA' },
          'fr-CA': { ...item.fr, locale: 'fr-CA' }
        };
      }
    }
  }

  getLocale(): Locale {
    return this.current;
  }

  setLocale(next: Locale): void {
    this.current = next;
    try {
      localStorage.setItem('eva:locale', next);
    } catch {}
  }

  buildUrl(path: string, locale: Locale = this.current): string {
    const clean = path.startsWith('/') ? path.slice(1) : path;
    const prefix = (locale.split('-')[0] || 'en').toLowerCase();
    return `/${prefix}/${clean}`;
  }

  parseLocaleFromUrl(url: string): Locale | null {
    const m = url.match(/^\/(en|fr|es|cy|mi)\//);
    if (!m) return null;
    const lang = m[1];
    // Map language to default region variant
    const defaults: Record<string, Locale> = {
      en: 'en-CA', fr: 'fr-CA', es: 'es-US', cy: 'cy-GB', mi: 'mi-NZ'
    };
    return defaults[lang] ?? 'en-CA';
  }

  async fetchContent(path: string, locale: Locale = this.current): Promise<CMSContent> {
    // Try in-memory first (only supports en-CA/fr-CA variants)
    const hit = this.store[path];
    if (hit) {
      const base = locale === 'fr-CA' ? 'fr-CA' : 'en-CA';
      return hit[base];
    }

    // Fallback: load from static JSON under /public/content
    const lang = (locale.split('-')[0] || 'en').toLowerCase();
    const url = `/content/${lang}/${path}.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`CMS content not found: ${url}`);
    const data = (await res.json()) as CMSContent;
    return { ...data, locale };
  }
}

// Utility to initialize adapter with persisted locale and URL parsing
export function initCMSAdapter(adapter: CMSAdapter): CMSAdapter {
  // Restore persisted locale
  try {
    const persisted = localStorage.getItem('eva:locale') as Locale | null;
    if (persisted) adapter.setLocale(persisted);
  } catch {}

  // Parse locale from current location
  const fromUrl = adapter.parseLocaleFromUrl(window.location.pathname);
  if (fromUrl) adapter.setLocale(fromUrl);

  return adapter;
}
