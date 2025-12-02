import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVACollapsible } from '../src/components/EVACollapsible';
import { EVACollapsibleTrigger } from '../src/components/EVACollapsibleTrigger';
import { EVACollapsibleContent } from '../src/components/EVACollapsibleContent';

describe('EVACollapsible wrappers', () => {
  it('renders collapsible elements', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVACollapsible>
          <EVACollapsibleTrigger>Toggle</EVACollapsibleTrigger>
          <EVACollapsibleContent>Content</EVACollapsibleContent>
        </EVACollapsible>
      );
    });
    expect(container.querySelector('eva-collapsible')).toBeTruthy();
    expect(container.querySelector('eva-collapsible-trigger')).toBeTruthy();
    expect(container.querySelector('eva-collapsible-content')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
