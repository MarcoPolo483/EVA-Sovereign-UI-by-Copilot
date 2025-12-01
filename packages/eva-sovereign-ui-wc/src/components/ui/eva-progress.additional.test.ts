import { describe, it, expect } from 'vitest';
import { html } from 'lit';
import { fixture } from '@open-wc/testing-helpers';
import './eva-progress';

// Additional tests for eva-progress to exercise the label branch.

describe('eva-progress additional', () => {
  it('does not render label when none provided', async () => {
    const el = await fixture<HTMLDivElement>(html`<eva-progress value="60"></eva-progress>`);
    const progress = el as unknown as HTMLElement;
    expect(progress).toBeTruthy();
    const shadow = (progress as any).shadowRoot as ShadowRoot;
    expect(shadow).toBeTruthy();
    const div = shadow.querySelector('.progress') as HTMLElement | null;
    expect(div).toBeTruthy();
    // With no aria-label provided, component sets percentage text
    expect(div!.getAttribute('aria-label')).toBe('60%');
  });
});
import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, shadowQuery } from '../../../../../tests/test-utils';
import './eva-progress';

describe('eva-progress (additional branches)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-progress');
  });

  it('uses default aria-label as rounded percentage', async () => {
    element.setAttribute('value', '33');
    element.setAttribute('max', '70');
    await new Promise((r) => setTimeout(r, 0));
    const progress = shadowQuery<HTMLDivElement>(element, '.progress');
    expect(progress).toBeTruthy();
    // 33/70 ~= 47.14% -> rounds to 47%
    expect(progress!.getAttribute('aria-label')).toBe('47%');
  });

  it('honors explicit aria-label when provided', async () => {
    const el2 = await createComponent('eva-progress', { 'aria-label': 'Loading accounts' });
    const progress2 = shadowQuery<HTMLDivElement>(el2, '.progress');
    expect(progress2).toBeTruthy();
    expect(progress2!.getAttribute('aria-label')).toBe('Loading accounts');
  });

  it('clamps percentage between 0 and 100', async () => {
    // Below 0
    const below = await createComponent('eva-progress', { value: '-50', max: '100' });
    const belowEl = shadowQuery<HTMLDivElement>(below, '.progress');
    expect(belowEl!.getAttribute('aria-valuenow')).toBe('-50');
    // Indicator translate will clamp internally; just ensure label shows 0%
    expect(belowEl!.getAttribute('aria-label')).toBe('0%');

    // Above max
    const above = await createComponent('eva-progress', { value: '250', max: '100' });
    const aboveEl = shadowQuery<HTMLDivElement>(above, '.progress');
    expect(aboveEl!.getAttribute('aria-valuenow')).toBe('250');
    expect(aboveEl!.getAttribute('aria-label')).toBe('100%');
  });
});
