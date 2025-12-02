import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVADropdownMenu } from '../src/components/EVADropdownMenu';
import { EVADropdownMenuItem } from '../src/components/EVADropdownMenuItem';
import { EVADropdownMenuSeparator } from '../src/components/EVADropdownMenuSeparator';
import { EVADropdownMenuLabel } from '../src/components/EVADropdownMenuLabel';

describe('EVADropdownMenu wrappers', () => {
  it('renders dropdown menu elements', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVADropdownMenu>
          <button slot="trigger">Open</button>
          <EVADropdownMenuLabel>Actions</EVADropdownMenuLabel>
          <EVADropdownMenuItem>Item 1</EVADropdownMenuItem>
          <EVADropdownMenuSeparator></EVADropdownMenuSeparator>
          <EVADropdownMenuItem>Item 2</EVADropdownMenuItem>
        </EVADropdownMenu>
      );
    });
    expect(container.querySelector('eva-dropdown-menu')).toBeTruthy();
    expect(container.querySelectorAll('eva-dropdown-menu-item').length).toBe(2);
    expect(container.querySelector('eva-dropdown-menu-label')).toBeTruthy();
    expect(container.querySelector('eva-dropdown-menu-separator')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
