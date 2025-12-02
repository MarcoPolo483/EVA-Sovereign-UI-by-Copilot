import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { EVATextarea } from '../src/components/EVATextarea';

describe('EVATextarea', () => {
  it('maps props to attributes', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVATextarea value="abc" placeholder="type" rows={5} label="Msg" aria-label="Message" />
      );
      await Promise.resolve();
    });
    const el = container.querySelector('eva-textarea') as HTMLElement;
    expect(el).toBeTruthy();
    expect(el.getAttribute('value')).toBe('abc');
    expect(el.getAttribute('placeholder')).toBe('type');
    expect(el.getAttribute('rows')).toBe('5');
    expect(el.getAttribute('label')).toBe('Msg');
    expect(el.getAttribute('aria-label')).toBe('Message');
    root.unmount();
    document.body.removeChild(container);
  });

  it('bridges input/change events', async () => {
    const onInput = vi.fn();
    const onChange = vi.fn();
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(<EVATextarea onInput={onInput} onChange={onChange} />);
      await Promise.resolve();
    });
    const el = container.querySelector('eva-textarea') as HTMLElement;
    expect(el).toBeTruthy();
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    expect(onInput).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    root.unmount();
    document.body.removeChild(container);
  });
});
