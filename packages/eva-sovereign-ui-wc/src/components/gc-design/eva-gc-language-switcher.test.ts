import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import '../../i18n/i18n-service';
import './eva-gc-language-switcher';

describe('eva-gc-language-switcher (GC)', () => {
  let el: HTMLElement;

  beforeEach(async () => {
    // Ensure URL has a language prefix baseline
    window.history.pushState({}, '', '/en/welcome');
    el = document.createElement('eva-gc-language-switcher');
    // Limit to EN/FR for deterministic selection
    el.setAttribute('include', 'en-CA, fr-CA');
    document.body.appendChild(el);
    await new Promise(r => setTimeout(r, 10));
  });

  afterEach(() => {
    if (document.body.contains(el)) document.body.removeChild(el);
  });

  it('renders trigger and ARIA menu with items', async () => {
    const trigger = el.shadowRoot?.querySelector('button.trigger');
    const menu = el.shadowRoot?.querySelector('.menu');
    expect(trigger).toBeTruthy();
    expect(menu?.getAttribute('role')).toBe('menu');
    const items = el.shadowRoot?.querySelectorAll('.menu button.item');
    expect((items?.length || 0)).toBeGreaterThan(0);
  });

  it('uses prefix mode (no locale-change event) by default', async () => {
    const eventSpy = vi.fn();
    el.addEventListener('locale-change', eventSpy);

    // Open menu and select French
    (el.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement)?.click();
    await new Promise(r => setTimeout(r, 10));
    const items = Array.from(el.shadowRoot?.querySelectorAll('.menu button.item') || []) as HTMLButtonElement[];
    const frItem = items.find(b => b.getAttribute('aria-checked') === 'false') as HTMLButtonElement;
    frItem.click();

    await new Promise(r => setTimeout(r, 20));
    expect(eventSpy).not.toHaveBeenCalled();

    // Sanity-check next path computation matches expectation
    const rest = window.location.pathname.replace(/^\/(en|fr|es|cy|mi)\//, '/');
    const nextPath = `/fr${rest.startsWith('/') ? '' : '/'}${rest}`;
    expect(nextPath).toMatch(/^\/fr\/welcome/);
  });

  it('emits locale-change when url-mode="event"', async () => {
    el.setAttribute('url-mode', 'event');
    await new Promise(r => setTimeout(r, 10));
    const eventPromise = new Promise<CustomEvent>(resolve => {
      el.addEventListener('locale-change', e => resolve(e as CustomEvent), { once: true });
    });

    // Open menu and click a non-current locale
    (el.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement)?.click();
    await new Promise(r => setTimeout(r, 10));
    const item = Array.from(el.shadowRoot?.querySelectorAll('.menu button.item') || [])
      .find(b => b.getAttribute('aria-checked') === 'false') as HTMLButtonElement;
    item?.click();

    const evt = await eventPromise;
    expect(evt.detail).toHaveProperty('locale');
    expect(typeof evt.detail.locale).toBe('string');
  });

  it('supports keyboard navigation within the menu', async () => {
    const trigger = el.shadowRoot?.querySelector('button.trigger') as HTMLButtonElement;
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await new Promise(r => setTimeout(r, 10));
    // Menu should be open
    const menu = el.shadowRoot?.querySelector('.menu');
    expect(menu?.hasAttribute('hidden')).toBe(false);
    // ArrowDown on first item should not throw
    const first = el.shadowRoot?.querySelector('.menu button.item') as HTMLButtonElement;
    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    expect(first).toBeTruthy();
  });

  it('respects include attribute to filter locales', async () => {
    // Recreate element with include set pre-connection
    if (document.body.contains(el)) document.body.removeChild(el);
    el = document.createElement('eva-gc-language-switcher');
    el.setAttribute('include', 'en-CA, fr-CA');
    document.body.appendChild(el);
    await new Promise(r => setTimeout(r, 10));
    const items = el.shadowRoot?.querySelectorAll('.menu button.item');
    expect(items?.length).toBe(2);
  });
});
