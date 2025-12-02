import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVASelect } from '../src/components/EVASelect';
import { EVASelectItem } from '../src/components/EVASelectItem';
import { EVARadioGroup } from '../src/components/EVARadioGroup';
import { EVARadioGroupItem } from '../src/components/EVARadioGroupItem';
import { EVAToggleGroup } from '../src/components/EVAToggleGroup';
import { EVAToggleGroupItem } from '../src/components/EVAToggleGroupItem';

describe('Form control wrappers', () => {
  it('renders select with items', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVASelect>
          <EVASelectItem>One</EVASelectItem>
          <EVASelectItem>Two</EVASelectItem>
        </EVASelect>
      );
    });
    expect(container.querySelector('eva-select')).toBeTruthy();
    expect(container.querySelectorAll('eva-select-item').length).toBe(2);
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders radio group with items', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVARadioGroup>
          <EVARadioGroupItem>Yes</EVARadioGroupItem>
          <EVARadioGroupItem>No</EVARadioGroupItem>
        </EVARadioGroup>
      );
    });
    expect(container.querySelector('eva-radio-group')).toBeTruthy();
    expect(container.querySelectorAll('eva-radio-group-item').length).toBe(2);
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders toggle group with items', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVAToggleGroup>
          <EVAToggleGroupItem>A</EVAToggleGroupItem>
          <EVAToggleGroupItem>B</EVAToggleGroupItem>
        </EVAToggleGroup>
      );
    });
    expect(container.querySelector('eva-toggle-group')).toBeTruthy();
    expect(container.querySelectorAll('eva-toggle-group-item').length).toBe(2);
    root.unmount();
    document.body.removeChild(container);
  });
});
