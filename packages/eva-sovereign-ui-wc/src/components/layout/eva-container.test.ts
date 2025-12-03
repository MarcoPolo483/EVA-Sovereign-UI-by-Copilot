import { describe, it, expect, beforeEach } from 'vitest';
import { createComponent, testAccessibility, shadowQuery } from '../../../../../tests/test-utils';
import './eva-container';

describe('eva-container', () => {
  let container: HTMLElement;

  beforeEach(async () => {
    container = await createComponent('eva-container');
    await new Promise(r => setTimeout(r, 50));
  });

  it('renders with shadow DOM', () => {
    expect(container.shadowRoot).toBeTruthy();
  });

  it('wraps slotted content', async () => {
    container.innerHTML = '<div>Content</div>';
    await new Promise(r => setTimeout(r, 50));
    const slot = shadowQuery(container, 'slot');
    expect(slot).toBeTruthy();
  });

  it('has no accessibility violations', async () => {
    await testAccessibility(container);
  });
});
