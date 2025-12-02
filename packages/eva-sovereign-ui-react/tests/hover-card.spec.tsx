import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVAHoverCard } from '../src/components/EVAHoverCard';
import { EVAHoverCardTrigger } from '../src/components/EVAHoverCardTrigger';
import { EVAHoverCardContent } from '../src/components/EVAHoverCardContent';

describe('EVAHoverCard wrappers', () => {
  it('renders hover-card structure', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVAHoverCard>
          <EVAHoverCardTrigger>
            <button>Hover me</button>
          </EVAHoverCardTrigger>
          <EVAHoverCardContent>Info</EVAHoverCardContent>
        </EVAHoverCard>
      );
    });
    expect(container.querySelector('eva-hover-card')).toBeTruthy();
    expect(container.querySelector('eva-hover-card-trigger')).toBeTruthy();
    expect(container.querySelector('eva-hover-card-content')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
