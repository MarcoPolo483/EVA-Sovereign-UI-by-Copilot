import { describe, it, expect, beforeEach } from 'vitest';
import { waitForElement, shadowQueryAll, simulateKeyboard } from 'tests/test-utils';
import './eva-accordion';

describe('eva-accordion (additional branches)', () => {
  let accordion: HTMLElement;

  beforeEach(async () => {
    // Build markup before connecting so parent can setup items
    accordion = document.createElement('eva-accordion');
    accordion.innerHTML = `
      <eva-accordion-item>
        <span slot="trigger">Item 1</span>
        <div>Content 1</div>
      </eva-accordion-item>
      <eva-accordion-item>
        <span slot="trigger">Item 2</span>
        <div>Content 2</div>
      </eva-accordion-item>
      <eva-accordion-item>
        <span slot="trigger">Item 3</span>
        <div>Content 3</div>
      </eva-accordion-item>
    `;
    document.body.appendChild(accordion);
    await waitForElement('eva-accordion');
  });

  it('allows only one open by default (allow-multiple=false)', async () => {
    const items = Array.from(accordion.querySelectorAll('eva-accordion-item')) as HTMLElement[];
    const triggers = items.map(i => i.shadowRoot?.querySelector('.trigger') as HTMLButtonElement);

    // Open first
    triggers[0].click();
    await new Promise(r => setTimeout(r, 20));
    expect(items[0].hasAttribute('open')).toBe(true);
    expect(triggers[0].getAttribute('aria-expanded')).toBe('true');

    // Open second -> first should close
    triggers[1].click();
    await new Promise(r => setTimeout(r, 20));
    expect(items[1].hasAttribute('open')).toBe(true);
    expect(items[0].hasAttribute('open')).toBe(false);
    expect(triggers[0].getAttribute('aria-expanded')).toBe('false');
  });

  it('supports multiple open when allow-multiple is set', async () => {
    // Recreate with attribute before connect for deterministic setup
    document.body.removeChild(accordion);
    accordion = document.createElement('eva-accordion');
    accordion.setAttribute('allow-multiple', '');
    accordion.innerHTML = `
      <eva-accordion-item>
        <span slot="trigger">Item 1</span>
        <div>Content 1</div>
      </eva-accordion-item>
      <eva-accordion-item>
        <span slot="trigger">Item 2</span>
        <div>Content 2</div>
      </eva-accordion-item>
    `;
    document.body.appendChild(accordion);
    await waitForElement('eva-accordion');
    const items = Array.from(accordion.querySelectorAll('eva-accordion-item')) as HTMLElement[];
    const triggers = items.map(i => i.shadowRoot?.querySelector('.trigger') as HTMLButtonElement);

    triggers[0].click();
    await new Promise(r => setTimeout(r, 10));
    triggers[1].click();
    await new Promise(r => setTimeout(r, 10));

    expect(items[0].hasAttribute('open')).toBe(true);
    expect(items[1].hasAttribute('open')).toBe(true);
  });

  it('supports ArrowDown/ArrowUp focus movement across triggers (no toggle)', async () => {
    const items = Array.from(accordion.querySelectorAll('eva-accordion-item')) as HTMLElement[];
    const triggers = items.map(i => i.shadowRoot?.querySelector('.trigger') as HTMLButtonElement);

    // Ensure all are closed
    items.forEach(i => expect(i.hasAttribute('open')).toBe(false));

    triggers[0].focus();
    simulateKeyboard(triggers[0], 'ArrowDown');
    await new Promise(r => setTimeout(r, 10));
    // Focus moves only; no toggle occurs
    items.forEach(i => expect(i.hasAttribute('open')).toBe(false));

    simulateKeyboard(triggers[0], 'ArrowUp');
    await new Promise(r => setTimeout(r, 10));
    items.forEach(i => expect(i.hasAttribute('open')).toBe(false));
  });
});
