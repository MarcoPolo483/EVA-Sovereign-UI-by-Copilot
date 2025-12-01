import { beforeAll, afterEach } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import { expect } from 'vitest';

// Extend Vitest matchers with jest-axe
expect.extend(toHaveNoViolations);

// Setup custom elements registry
beforeAll(() => {
  // Ensure clean state for custom elements
  if (!customElements.get('eva-test-element')) {
    class TestElement extends HTMLElement {}
    customElements.define('eva-test-element', TestElement);
  }
});

// Clean up after each test
afterEach(() => {
  document.body.innerHTML = '';
});

// Mock matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});

// Mock IntersectionObserver
if (typeof IntersectionObserver === 'undefined') {
  (globalThis as any).IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {
      return [];
    }
    unobserve() {}
  };
}

// Mock i18n locale fetch responses to avoid network/JSON noise in tests
const mockLocales: Record<string, any> = {
  'en-CA': { hello: 'Hello', locale: 'en-CA' },
  'fr-CA': { hello: 'Bonjour', locale: 'fr-CA' },
  'en-GB': { hello: 'Hello', locale: 'en-GB' },
  'cy-GB': { hello: 'Helo', locale: 'cy-GB' },
  'en-AU': { hello: 'Hello', locale: 'en-AU' },
  'en-NZ': { hello: 'Hello', locale: 'en-NZ' },
  'mi-NZ': { hello: 'Kia ora', locale: 'mi-NZ' },
};

const originalFetch = window.fetch?.bind(window);
window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const url = typeof input === 'string' ? input : input.toString();
  if (url.includes('/src/i18n/locales/')) {
    const match = url.match(/\/src\/i18n\/locales\/(.*)\.json$/);
    const key = match?.[1];
    if (key && mockLocales[key]) {
      const body = JSON.stringify(mockLocales[key]);
      return new Response(body, { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response('', { status: 404 });
  }
  return originalFetch ? originalFetch(input as any, init) : Promise.resolve(new Response('', { status: 200 }));
};

// Mock ResizeObserver
if (typeof ResizeObserver === 'undefined') {
  (globalThis as any).ResizeObserver = class ResizeObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    unobserve() {}
  };
}
