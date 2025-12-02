import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVACard } from '../src/components/EVACard';
import { EVACardHeader } from '../src/components/EVACardHeader';
import { EVACardTitle } from '../src/components/EVACardTitle';
import { EVACardDescription } from '../src/components/EVACardDescription';
import { EVACardContent } from '../src/components/EVACardContent';

describe('EVACard wrappers', () => {
  it('renders card with header and content', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVACard>
          <EVACardHeader>
            <EVACardTitle>Title</EVACardTitle>
            <EVACardDescription>Desc</EVACardDescription>
          </EVACardHeader>
          <EVACardContent>Body</EVACardContent>
        </EVACard>
      );
    });
    expect(container.querySelector('eva-card')).toBeTruthy();
    expect(container.querySelector('eva-card-header')).toBeTruthy();
    expect(container.querySelector('eva-card-title')).toBeTruthy();
    expect(container.querySelector('eva-card-description')).toBeTruthy();
    expect(container.querySelector('eva-card-content')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
