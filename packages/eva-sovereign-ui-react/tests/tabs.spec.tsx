import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVATabs } from '../src/components/EVATabs';
import { EVATabsList } from '../src/components/EVATabsList';
import { EVATabsTrigger } from '../src/components/EVATabsTrigger';
import { EVATabsContent } from '../src/components/EVATabsContent';

describe('EVATabs wrappers', () => {
  it('renders tabs and parts', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVATabs>
          <EVATabsList>
            <EVATabsTrigger>Tab 1</EVATabsTrigger>
            <EVATabsTrigger>Tab 2</EVATabsTrigger>
          </EVATabsList>
          <EVATabsContent>Content 1</EVATabsContent>
          <EVATabsContent>Content 2</EVATabsContent>
        </EVATabs>
      );
    });
    expect(container.querySelector('eva-tabs')).toBeTruthy();
    expect(container.querySelector('eva-tabs-list')).toBeTruthy();
    expect(container.querySelector('eva-tabs-trigger')).toBeTruthy();
    expect(container.querySelector('eva-tabs-content')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
