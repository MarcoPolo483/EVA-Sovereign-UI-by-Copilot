import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVASheet } from '../src/components/EVASheet';
import { EVASheetTrigger } from '../src/components/EVASheetTrigger';
import { EVASheetContent } from '../src/components/EVASheetContent';
import { EVASheetHeader } from '../src/components/EVASheetHeader';
import { EVASheetTitle } from '../src/components/EVASheetTitle';
import { EVASheetDescription } from '../src/components/EVASheetDescription';
import { EVASheetFooter } from '../src/components/EVASheetFooter';

describe('EVASheet wrappers', () => {
  it('renders sheet structure', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVASheet>
          <EVASheetTrigger>
            <button>Open</button>
          </EVASheetTrigger>
          <EVASheetContent>
            <EVASheetHeader>
              <EVASheetTitle>Title</EVASheetTitle>
              <EVASheetDescription>Description</EVASheetDescription>
            </EVASheetHeader>
            <EVASheetFooter>
              <button>Close</button>
            </EVASheetFooter>
          </EVASheetContent>
        </EVASheet>
      );
    });
    expect(container.querySelector('eva-sheet')).toBeTruthy();
    expect(container.querySelector('eva-sheet-trigger')).toBeTruthy();
    expect(container.querySelector('eva-sheet-content')).toBeTruthy();
    expect(container.querySelector('eva-sheet-header')).toBeTruthy();
    expect(container.querySelector('eva-sheet-title')).toBeTruthy();
    expect(container.querySelector('eva-sheet-description')).toBeTruthy();
    expect(container.querySelector('eva-sheet-footer')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
