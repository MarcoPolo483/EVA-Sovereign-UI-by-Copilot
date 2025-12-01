import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, shadowQuery, simulateKeyboard, simulateClick } from '../../../../../tests/test-utils';
import './eva-checkbox';

describe('eva-checkbox (additional branches)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-checkbox');
  });

  it('toggles via visual click and keyboard', async () => {
    // Initial query
    let input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    let visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input && visual).toBeTruthy();

    // Click visual -> toggles input via internal click
    simulateClick(visual!);
    await new Promise((r) => setTimeout(r, 10));

    // Re-query after re-render
    input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input!.checked).toBe(true);
    expect(visual!.getAttribute('aria-checked')).toBe('true');

    // Keyboard Space toggles back
    simulateKeyboard(visual as unknown as HTMLElement, ' ');
    await new Promise((r) => setTimeout(r, 10));

    // Re-query after re-render
    input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input!.checked).toBe(false);
    expect(visual!.getAttribute('aria-checked')).toBe('false');
  });

  it('does not toggle when disabled', async () => {
    element.setAttribute('disabled', '');
    await new Promise((r) => setTimeout(r, 0));
    const input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    const visual = shadowQuery<HTMLDivElement>(element, '.visual');

    simulateClick(visual!);
    await new Promise((r) => setTimeout(r, 10));
    expect(input!.checked).toBe(false);
  });

  it('Space key does not toggle when disabled', async () => {
    element.setAttribute('disabled', '');
    await new Promise((r) => setTimeout(r, 0));
    let input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    let visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input && visual).toBeTruthy();

    simulateKeyboard(visual as unknown as HTMLElement, ' ');
    await new Promise((r) => setTimeout(r, 10));

    // Re-query after potential re-render and ensure no toggle occurred
    input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input!.checked).toBe(false);
    expect(visual!.getAttribute('aria-checked')).toBe('false');
  });

  it('Enter key does not toggle when disabled', async () => {
    element.setAttribute('disabled', '');
    await new Promise((r) => setTimeout(r, 0));
    let input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    let visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input && visual).toBeTruthy();

    simulateKeyboard(visual as unknown as HTMLElement, 'Enter');
    await new Promise((r) => setTimeout(r, 10));

    // Re-query and ensure no toggle occurred
    input = shadowQuery<HTMLInputElement>(element, 'input.checkbox');
    visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(input!.checked).toBe(false);
    expect(visual!.getAttribute('aria-checked')).toBe('false');
  });

  it('accessible name: label attribute wins; aria-label used otherwise; default fallback', async () => {
    // Default fallback
    let visual = shadowQuery<HTMLDivElement>(element, '.visual');
    expect(visual!.getAttribute('aria-labelledby')).toBeNull();
    expect(visual!.getAttribute('aria-label')).toBe('Checkbox');

    // aria-label path
    const el2 = await createComponent('eva-checkbox', { 'aria-label': 'Terms accepted' });
    const visual2 = shadowQuery<HTMLDivElement>(el2, '.visual');
    expect(visual2!.getAttribute('aria-labelledby')).toBeNull();
    expect(visual2!.getAttribute('aria-label')).toBe('Terms accepted');

    // label attribute path -> sets aria-labelledby
    const el3 = await createComponent('eva-checkbox', { label: 'I agree' });
    const visual3 = shadowQuery<HTMLDivElement>(el3, '.visual');
    expect(visual3!.getAttribute('aria-label')).toBeNull();
    expect(visual3!.getAttribute('aria-labelledby')).toBeTruthy();
  });
});
