import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVAAlert } from '../src/components/EVAAlert';
import { EVAAspectRatio } from '../src/components/EVAAspectRatio';
import { EVABadge } from '../src/components/EVABadge';
import { EVACalendar } from '../src/components/EVACalendar';
import { EVACarousel } from '../src/components/EVACarousel';

function renderNode(node: React.ReactNode) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  return { container, root };
}

describe('Misc UI wrappers', () => {
  it('renders EVAAlert', async () => {
    const { container, root } = renderNode(<EVAAlert>Notice</EVAAlert>);
    await act(async () => {
      root.render(<EVAAlert>Notice</EVAAlert>);
    });
    const el = container.querySelector('eva-alert');
    expect(el).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAAspectRatio', async () => {
    const { container, root } = renderNode(<EVAAspectRatio>Content</EVAAspectRatio>);
    await act(async () => {
      root.render(<EVAAspectRatio>Content</EVAAspectRatio>);
    });
    const el = container.querySelector('eva-aspect-ratio');
    expect(el).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVABadge', async () => {
    const { container, root } = renderNode(<EVABadge>New</EVABadge>);
    await act(async () => {
      root.render(<EVABadge>New</EVABadge>);
    });
    const el = container.querySelector('eva-badge');
    expect(el).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVACalendar', async () => {
    const { container, root } = renderNode(<EVACalendar />);
    await act(async () => {
      root.render(<EVACalendar />);
    });
    const el = container.querySelector('eva-calendar');
    expect(el).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVACarousel', async () => {
    const { container, root } = renderNode(<EVACarousel>Slides</EVACarousel>);
    await act(async () => {
      root.render(<EVACarousel>Slides</EVACarousel>);
    });
    const el = container.querySelector('eva-carousel');
    expect(el).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
