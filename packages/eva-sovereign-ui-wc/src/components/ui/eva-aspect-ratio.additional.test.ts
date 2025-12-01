import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent } from 'tests/test-utils';
import './eva-aspect-ratio';

function getDeclaredPercentage(el: HTMLElement): number {
  // Inspect the injected <style> element text for padding-bottom declaration.
  const styleEl = el.shadowRoot?.querySelector('style');
  expect(styleEl).toBeTruthy();
  const match = styleEl!.textContent?.match(/padding-bottom:\s*([0-9.]+)%/);
  expect(match).toBeTruthy();
  return parseFloat(match![1]);
}

describe('eva-aspect-ratio (additional)', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createComponent('eva-aspect-ratio');
  });

  it('applies default 16/9 ratio (~56.25%) padding', () => {
    const pct = getDeclaredPercentage(element);
    expect(pct).toBeGreaterThan(56.2);
    expect(pct).toBeLessThan(56.3);
  });

  it('updates ratio to 4/3 (~75%) when attribute changes', async () => {
    element.setAttribute('ratio', '4/3');
    await new Promise(r => setTimeout(r, 0));
    const pct = getDeclaredPercentage(element);
    expect(pct).toBeGreaterThan(74.9);
    expect(pct).toBeLessThan(75.1);
  });

  it('updates ratio to 1/1 (100%)', async () => {
    element.setAttribute('ratio', '1/1');
    await new Promise(r => setTimeout(r, 0));
    const pct = getDeclaredPercentage(element);
    expect(pct).toBeGreaterThan(99.9);
    expect(pct).toBeLessThan(100.1);
  });

  it('supports numeric ratio "2" (50%)', async () => {
    element.setAttribute('ratio', '2');
    await new Promise(r => setTimeout(r, 0));
    const pct = getDeclaredPercentage(element);
    expect(pct).toBeGreaterThan(49.9);
    expect(pct).toBeLessThan(50.1);
  });

  it('handles invalid ratio gracefully (NaN -> zero padding detection)', async () => {
    element.setAttribute('ratio', 'abc');
    await new Promise(r => setTimeout(r, 0));
    const pct = getDeclaredPercentage(element);
    // Fallback to default ratio when invalid -> same as 16/9
    expect(pct).toBeGreaterThan(56.2);
    expect(pct).toBeLessThan(56.3);
  });
});
