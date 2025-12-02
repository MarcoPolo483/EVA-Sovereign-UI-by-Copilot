import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVAPagination } from '../src/components/EVAPagination';
import { EVAProgress } from '../src/components/EVAProgress';
import { EVAScrollArea } from '../src/components/EVAScrollArea';
import { EVASkeleton } from '../src/components/EVASkeleton';
import { EVASlider } from '../src/components/EVASlider';
import { EVAToggle } from '../src/components/EVAToggle';
import { EVAInputOTP } from '../src/components/EVAInputOTP';

function renderNode(node: React.ReactNode) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  return { container, root };
}

describe('More misc UI wrappers', () => {
  it('renders EVAPagination', async () => {
    const { container, root } = renderNode(<EVAPagination current-page={1} total-pages={5} /> as any);
    await act(async () => { root.render(<EVAPagination current-page={1} total-pages={5} /> as any); });
    expect(container.querySelector('eva-pagination')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAProgress', async () => {
    const { container, root } = renderNode(<EVAProgress value={50} max={100} /> as any);
    await act(async () => { root.render(<EVAProgress value={50} max={100} /> as any); });
    expect(container.querySelector('eva-progress')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAScrollArea', async () => {
    const { container, root } = renderNode(<EVAScrollArea><div>Scroll</div></EVAScrollArea>);
    await act(async () => { root.render(<EVAScrollArea><div>Scroll</div></EVAScrollArea>); });
    expect(container.querySelector('eva-scroll-area')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVASkeleton', async () => {
    const { container, root } = renderNode(<EVASkeleton />);
    await act(async () => { root.render(<EVASkeleton />); });
    expect(container.querySelector('eva-skeleton')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVASlider', async () => {
    const { container, root } = renderNode(<EVASlider value={25} max={100} /> as any);
    await act(async () => { root.render(<EVASlider value={25} max={100} /> as any); });
    expect(container.querySelector('eva-slider')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAToggle', async () => {
    const { container, root } = renderNode(<EVAToggle>On</EVAToggle>);
    await act(async () => { root.render(<EVAToggle>On</EVAToggle>); });
    expect(container.querySelector('eva-toggle')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders EVAInputOTP', async () => {
    const { container, root } = renderNode(<EVAInputOTP />);
    await act(async () => { root.render(<EVAInputOTP />); });
    expect(container.querySelector('eva-input-otp')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
