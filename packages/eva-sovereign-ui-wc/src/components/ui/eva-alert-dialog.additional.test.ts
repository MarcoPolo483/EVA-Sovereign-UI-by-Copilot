import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, simulateKeyboard } from 'tests/test-utils';
import './eva-alert-dialog';

describe('eva-alert-dialog (additional branches)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-alert-dialog');
  });

  it('Escape does nothing when dialog is not open', async () => {
    // Ensure not open
    element.removeAttribute('open');
    await new Promise((r) => setTimeout(r, 0));

    let closed = false;
    element.addEventListener('close', () => { closed = true; });

    // Send Escape at document level (listener is attached to document)
    simulateKeyboard(document.body as unknown as HTMLElement, 'Escape');
    await new Promise((r) => setTimeout(r, 20));

    expect(closed).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });

  it('Escape closes when dialog is open and restores body overflow', async () => {
    element.setAttribute('open', '');
    await new Promise((r) => setTimeout(r, 0));
    // Body overflow should be hidden when open
    expect(document.body.style.overflow).toBe('hidden');

    let closed = false;
    element.addEventListener('close', () => { closed = true; });

    simulateKeyboard(document.body as unknown as HTMLElement, 'Escape');
    await new Promise((r) => setTimeout(r, 20));

    expect(closed).toBe(true);
    expect(element.hasAttribute('open')).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });
});
