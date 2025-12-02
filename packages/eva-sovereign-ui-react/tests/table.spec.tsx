import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVATable } from '../src/components/EVATable';
import { EVATableHeader } from '../src/components/EVATableHeader';
import { EVATableBody } from '../src/components/EVATableBody';
import { EVATableRow } from '../src/components/EVATableRow';
import { EVATableHead } from '../src/components/EVATableHead';
import { EVATableCell } from '../src/components/EVATableCell';

describe('EVATable wrappers', () => {
  it('renders table with header and body', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVATable>
          <EVATableHeader>
            <EVATableRow>
              <EVATableHead>Col 1</EVATableHead>
              <EVATableHead>Col 2</EVATableHead>
            </EVATableRow>
          </EVATableHeader>
          <EVATableBody>
            <EVATableRow>
              <EVATableCell>A</EVATableCell>
              <EVATableCell>B</EVATableCell>
            </EVATableRow>
          </EVATableBody>
        </EVATable>
      );
    });
    expect(container.querySelector('eva-table')).toBeTruthy();
    expect(container.querySelector('eva-table-header')).toBeTruthy();
    expect(container.querySelector('eva-table-body')).toBeTruthy();
    expect(container.querySelector('eva-table-row')).toBeTruthy();
    expect(container.querySelector('eva-table-head')).toBeTruthy();
    expect(container.querySelector('eva-table-cell')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
