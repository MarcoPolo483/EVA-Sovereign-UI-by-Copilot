import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVAMenubar } from '../src/components/EVAMenubar';
import { EVAMenubarMenu } from '../src/components/EVAMenubarMenu';
import { EVAMenubarItem } from '../src/components/EVAMenubarItem';

describe('EVAMenubar wrappers', () => {
  it('renders menubar and parts', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVAMenubar>
          <EVAMenubarMenu>
            <EVAMenubarItem>One</EVAMenubarItem>
            <EVAMenubarItem>Two</EVAMenubarItem>
          </EVAMenubarMenu>
        </EVAMenubar>
      );
    });
    expect(container.querySelector('eva-menubar')).toBeTruthy();
    expect(container.querySelector('eva-menubar-menu')).toBeTruthy();
    expect(container.querySelector('eva-menubar-item')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
