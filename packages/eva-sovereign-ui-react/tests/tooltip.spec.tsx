import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { EVATooltip } from '../src/components/EVATooltip';

describe('EVATooltip', () => {
  it('renders eva-tooltip element', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(<EVATooltip data-testid="tip">Hello</EVATooltip>);
      await Promise.resolve();
    });
    const el = container.querySelector('eva-tooltip');
    expect(el).toBeTruthy();
    expect(el?.textContent).toContain('Hello');
    root.unmount();
    document.body.removeChild(container);
  });
});
