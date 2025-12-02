import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { EVAAlertDialog } from '../src/components/EVAAlertDialog';
import { EVAAlertDialogTrigger } from '../src/components/EVAAlertDialogTrigger';
import { EVAAlertDialogContent } from '../src/components/EVAAlertDialogContent';
import { EVAAlertDialogHeader } from '../src/components/EVAAlertDialogHeader';
import { EVAAlertDialogTitle } from '../src/components/EVAAlertDialogTitle';
import { EVAAlertDialogDescription } from '../src/components/EVAAlertDialogDescription';
import { EVAAlertDialogFooter } from '../src/components/EVAAlertDialogFooter';
import { EVAAlertDialogAction } from '../src/components/EVAAlertDialogAction';
import { EVAAlertDialogCancel } from '../src/components/EVAAlertDialogCancel';

describe('EVAAlertDialog wrappers', () => {
  it('renders alert-dialog structure', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVAAlertDialog>
          <EVAAlertDialogTrigger>
            <button>Open</button>
          </EVAAlertDialogTrigger>
          <EVAAlertDialogContent>
            <EVAAlertDialogHeader>
              <EVAAlertDialogTitle>Confirm</EVAAlertDialogTitle>
              <EVAAlertDialogDescription>Are you sure?</EVAAlertDialogDescription>
            </EVAAlertDialogHeader>
            <EVAAlertDialogFooter>
              <EVAAlertDialogCancel>Cancel</EVAAlertDialogCancel>
              <EVAAlertDialogAction>Continue</EVAAlertDialogAction>
            </EVAAlertDialogFooter>
          </EVAAlertDialogContent>
        </EVAAlertDialog>
      );
    });
    expect(container.querySelector('eva-alert-dialog')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-trigger')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-content')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-header')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-title')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-description')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-footer')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-cancel')).toBeTruthy();
    expect(container.querySelector('eva-alert-dialog-action')).toBeTruthy();
    root.unmount();
    document.body.removeChild(container);
  });
});
