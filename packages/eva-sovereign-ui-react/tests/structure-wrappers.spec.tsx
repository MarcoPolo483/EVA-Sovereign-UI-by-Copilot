import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVAButton } from '../src/components/EVAButton';
import { EVAPageShell } from '../src/components/EVAPageShell';
import { EVAContainer } from '../src/components/EVAContainer';
import { EVASkipLinks } from '../src/components/EVASkipLinks';
import { EVABreadcrumbs } from '../src/components/EVABreadcrumbs';
import { EVAProgramCard } from '../src/components/EVAProgramCard';
import { EVAHeroBanner } from '../src/components/EVAHeroBanner';

function renderNode(node: React.ReactNode) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  return { container, root };
}

describe('Structure wrappers', () => {
  it('renders EVAButton', async () => {
    const { container, root } = renderNode(<EVAButton>Click</EVAButton>);
    await act(async () => { root.render(<EVAButton>Click</EVAButton>); });
    expect(container.querySelector('eva-button')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAPageShell', async () => {
    const { container, root } = renderNode(<EVAPageShell />);
    await act(async () => { root.render(<EVAPageShell />); });
    expect(container.querySelector('eva-page-shell')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAContainer', async () => {
    const { container, root } = renderNode(<EVAContainer />);
    await act(async () => { root.render(<EVAContainer />); });
    expect(container.querySelector('eva-container')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVASkipLinks', async () => {
    const { container, root } = renderNode(<EVASkipLinks />);
    await act(async () => { root.render(<EVASkipLinks />); });
    expect(container.querySelector('eva-skip-links')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVABreadcrumbs', async () => {
    const { container, root } = renderNode(<EVABreadcrumbs />);
    await act(async () => { root.render(<EVABreadcrumbs />); });
    expect(container.querySelector('eva-breadcrumbs')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAProgramCard', async () => {
    const { container, root } = renderNode(<EVAProgramCard />);
    await act(async () => { root.render(<EVAProgramCard />); });
    expect(container.querySelector('eva-program-card')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAHeroBanner', async () => {
    const { container, root } = renderNode(<EVAHeroBanner />);
    await act(async () => { root.render(<EVAHeroBanner />); });
    expect(container.querySelector('eva-hero-banner')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
