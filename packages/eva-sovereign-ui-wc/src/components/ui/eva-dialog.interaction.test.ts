import { describe, it, expect } from 'vitest';
import { EVADialog } from './eva-dialog';
import { dispatchKey, dispatchClick, settle, queryShadow } from '../../__tests__/helpers/interaction';

customElements.get('eva-dialog') || customElements.define('eva-dialog', EVADialog);

describe('eva-dialog interaction + branches', () => {
  it('opens via attribute and sets aria-modal with label fallback', async () => {
    const dialog = document.createElement('eva-dialog') as EVADialog;
    document.body.appendChild(dialog);
    dialog.setAttribute('open', '');
    await settle();

    const content = queryShadow<HTMLDivElement>(dialog.shadowRoot, '.content');
    expect(content).toBeTruthy();
    expect(content?.getAttribute('role')).toBe('dialog');
    expect(content?.getAttribute('aria-modal')).toBe('true');
    expect(content?.getAttribute('aria-label')).toBe('Dialog');
  });

  it('closes on overlay click and Escape key', async () => {
    const dialog = document.createElement('eva-dialog') as EVADialog;
    document.body.appendChild(dialog);
    dialog.open();
    await settle();

    const overlay = queryShadow<HTMLDivElement>(dialog.shadowRoot, '.overlay');
    expect(overlay).toBeTruthy();
    if (overlay) dispatchClick(overlay);
    await settle();
    // overlay click closes
    expect(dialog.hasAttribute('open')).toBe(false);

    dialog.open();
    await settle();
    // Escape closes
    dispatchKey(document, 'Escape');
    await settle();
    expect(dialog.hasAttribute('open')).toBe(false);
  });

  it('uses explicit aria-label when provided and aria-labelledby from title', async () => {
    const dialog = document.createElement('eva-dialog') as EVADialog;
    dialog.setAttribute('aria-label', 'Confirm Action');
    const title = document.createElement('eva-dialog-title');
    title.textContent = 'Confirm';
    dialog.appendChild(title);
    document.body.appendChild(dialog);

    dialog.open();
    await settle();

    const content = queryShadow<HTMLDivElement>(dialog.shadowRoot, '.content');
    expect(content?.getAttribute('aria-label')).toBe('Confirm Action');
    const labelledby = content?.getAttribute('aria-labelledby');
    expect(labelledby).toBeTruthy();
  });
});
