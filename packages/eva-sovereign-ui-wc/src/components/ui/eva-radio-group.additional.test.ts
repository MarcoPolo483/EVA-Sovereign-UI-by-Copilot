import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './eva-radio-group';

describe('eva-radio-group (additional coverage)', () => {
  let groupHost: HTMLDivElement;

  beforeEach(() => {
    groupHost = document.createElement('div');
    groupHost.innerHTML = `
      <eva-radio-group name="choice" value="opt2">
        <eva-radio-group-item value="opt1"></eva-radio-group-item>
        <eva-radio-group-item value="opt2"></eva-radio-group-item>
        <eva-radio-group-item value="opt3"></eva-radio-group-item>
      </eva-radio-group>
    `;
    document.body.appendChild(groupHost);
  });

  afterEach(() => {
    groupHost.remove();
  });

  it('applies checked state to the item matching group value', async () => {
    await Promise.resolve();
    const items = Array.from(groupHost.querySelectorAll('eva-radio-group-item'));
    expect(items.length).toBe(3);
    expect(items[0].hasAttribute('checked')).toBe(false);
    expect(items[1].hasAttribute('checked')).toBe(true);
    expect(items[2].hasAttribute('checked')).toBe(false);
  });

  it('clicking a visual selects the item and updates the group value', async () => {
    await Promise.resolve();
    const group = groupHost.querySelector('eva-radio-group')!;
    const items = Array.from(groupHost.querySelectorAll('eva-radio-group-item'));
    const visual = items[2].shadowRoot!.querySelector('.visual') as HTMLDivElement;

    let changed = false;
    group.addEventListener('change', () => (changed = true));
    visual.click();
    await new Promise((r) => setTimeout(r, 10));

    expect(group.getAttribute('value')).toBe('opt3');
    expect(items[2].hasAttribute('checked')).toBe(true);
    expect(changed).toBe(true);
  });

  it('keyboard Space on visual toggles selection', async () => {
    await Promise.resolve();
    const group = groupHost.querySelector('eva-radio-group')!;
    const items = Array.from(groupHost.querySelectorAll('eva-radio-group-item'));
    const visual = items[0].shadowRoot!.querySelector('.visual') as HTMLDivElement;

    visual.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    await new Promise((r) => setTimeout(r, 10));

    expect(group.getAttribute('value')).toBe('opt1');
    expect(items[0].hasAttribute('checked')).toBe(true);
  });

  it('disabled item cannot be selected', async () => {
    await Promise.resolve();
    const group = groupHost.querySelector('eva-radio-group')!;
    const items = Array.from(groupHost.querySelectorAll('eva-radio-group-item'));
    // Move selection away from the item we'll disable
    group.setAttribute('value', 'opt1');
    await Promise.resolve();
    items[1].setAttribute('disabled', '');
    await Promise.resolve();

    const visual = items[1].shadowRoot!.querySelector('.visual') as HTMLDivElement;
    visual.click();
    await new Promise((r) => setTimeout(r, 10));

    // Value remains unchanged since item was disabled
    expect(group.getAttribute('value')).toBe('opt1');
    expect(items[1].hasAttribute('checked')).toBe(false);
  });
});
