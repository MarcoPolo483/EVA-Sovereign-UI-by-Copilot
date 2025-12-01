import { describe, it, expect } from 'vitest';
import { EVAPopover } from './eva-popover';
import { dispatchClick, settle, queryShadow } from '../../__tests__/helpers/interaction';

customElements.get('eva-popover') || customElements.define('eva-popover', EVAPopover);

describe('eva-popover interaction + branches', () => {
  it('toggles open via trigger slot and closes on outside click', async () => {
    const pop = document.createElement('eva-popover') as EVAPopover;
    const trigger = document.createElement('button');
    trigger.setAttribute('slot', 'trigger');
    trigger.textContent = 'Open';
    pop.appendChild(trigger);
    document.body.appendChild(pop);
    await settle();

    // click trigger to open
    dispatchClick(trigger);
    await settle();
    const content = queryShadow<HTMLDivElement>(pop.shadowRoot, '.content');
    expect(content).toBeTruthy();

    // clicking inside should not close
    if (content) dispatchClick(content);
    await settle();
    expect(pop.hasAttribute('open')).toBe(true);

    // click outside (document) should close
    dispatchClick(document.body);
    await settle();
    expect(pop.hasAttribute('open')).toBe(false);
  });
});
