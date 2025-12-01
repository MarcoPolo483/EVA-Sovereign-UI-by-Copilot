import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, shadowQuery, simulateClick, simulateKeyboard } from 'tests/test-utils';
import './eva-toggle';

describe('eva-toggle (additional branches)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-toggle');
  });

  it('toggles via Space and Enter with preventDefault', async () => {
    const btn = shadowQuery<HTMLButtonElement>(element, 'button.toggle');
    expect(btn).toBeTruthy();
    let events = 0;
    element.addEventListener('toggle', () => { events++; });

    // Space
    const preventSpace = { called: false };
    btn!.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === ' ') preventSpace.called = true; }, { once: true });
    simulateKeyboard(btn!, ' ');
    await new Promise(r => setTimeout(r, 10));
    expect(btn!.getAttribute('aria-pressed')).toBe('true');
    expect(events).toBeGreaterThanOrEqual(1);
    expect(preventSpace.called).toBe(true);

    // Enter
    const preventEnter = { called: false };
    btn!.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === 'Enter') preventEnter.called = true; }, { once: true });
    simulateKeyboard(btn!, 'Enter');
    await new Promise(r => setTimeout(r, 10));
    expect(btn!.getAttribute('aria-pressed')).toBe('false'); // toggled back
    expect(events).toBeGreaterThanOrEqual(2);
    expect(preventEnter.called).toBe(true);
  });

  it('does not toggle when disabled (click and keyboard)', async () => {
    element.setAttribute('disabled', '');
    await new Promise(r => setTimeout(r, 10));
    const btn = shadowQuery<HTMLButtonElement>(element, 'button.toggle');
    expect(btn).toBeTruthy();

    let events = 0;
    element.addEventListener('toggle', () => { events++; });

    // Click should not toggle
    simulateClick(btn!);
    await new Promise(r => setTimeout(r, 10));
    expect(btn!.getAttribute('aria-pressed')).toBe('false');

    // Keyboard should not toggle
    simulateKeyboard(btn!, ' ');
    simulateKeyboard(btn!, 'Enter');
    await new Promise(r => setTimeout(r, 10));
    expect(btn!.getAttribute('aria-pressed')).toBe('false');
    expect(events).toBe(0);
  });

  it('uses default aria-label; honors aria-label when set before render', async () => {
    // Default on initial instance
    let btn = shadowQuery<HTMLButtonElement>(element, 'button.toggle');
    expect(btn).toBeTruthy();
    expect(btn!.getAttribute('aria-label')).toBe('Toggle');

    // New instance with aria-label provided at creation
    const el2 = await createComponent('eva-toggle', { 'aria-label': 'Power' });
    const btn2 = shadowQuery<HTMLButtonElement>(el2, 'button.toggle');
    expect(btn2).toBeTruthy();
    expect(btn2!.getAttribute('aria-label')).toBe('Power');
  });
});
