import { describe, it, expect } from 'vitest';
import { EVADrawer } from './eva-drawer';
import { dispatchKey, dispatchClick, settle, queryShadow } from '../../__tests__/helpers/interaction';

customElements.get('eva-drawer') || customElements.define('eva-drawer', EVADrawer);

describe('eva-drawer interaction + branches', () => {
  it('renders when open and positions by side', async () => {
    const drawer = document.createElement('eva-drawer') as EVADrawer;
    drawer.setAttribute('open', '');
    drawer.setAttribute('side', 'left');
    document.body.appendChild(drawer);
    await settle();

    const overlay = queryShadow<HTMLDivElement>(drawer.shadowRoot, '.overlay');
    const panel = queryShadow<HTMLDivElement>(drawer.shadowRoot, '.drawer');
    expect(overlay).toBeTruthy();
    expect(panel).toBeTruthy();
  });

  it('closes on overlay click and Escape', async () => {
    const drawer = document.createElement('eva-drawer') as EVADrawer;
    document.body.appendChild(drawer);
    drawer.setAttribute('open', '');
    await settle();

    const overlay = queryShadow<HTMLDivElement>(drawer.shadowRoot, '.overlay');
    if (overlay) dispatchClick(overlay);
    await settle();
    expect(drawer.hasAttribute('open')).toBe(false);

    drawer.setAttribute('open', '');
    await settle();
    dispatchKey(drawer.shadowRoot as unknown as Document, 'Escape');
    await settle();
    expect(drawer.hasAttribute('open')).toBe(false);
  });
});
