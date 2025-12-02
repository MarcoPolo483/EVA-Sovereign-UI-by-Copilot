import { describe, it, expect } from 'vitest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { EVABreadcrumb } from '../src/components/EVABreadcrumb';
import { EVABreadcrumbList } from '../src/components/EVABreadcrumbList';
import { EVABreadcrumbItem } from '../src/components/EVABreadcrumbItem';
import { EVABreadcrumbLink } from '../src/components/EVABreadcrumbLink';
import { EVABreadcrumbSeparator } from '../src/components/EVABreadcrumbSeparator';
import { EVABreadcrumbPage } from '../src/components/EVABreadcrumbPage';

describe('EVABreadcrumb family', () => {
  it('renders breadcrumb structure', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    await act(async () => {
      root.render(
        <EVABreadcrumb>
          <EVABreadcrumbList>
            <EVABreadcrumbItem>
              <EVABreadcrumbLink href="#">Home</EVABreadcrumbLink>
            </EVABreadcrumbItem>
            <EVABreadcrumbSeparator>/</EVABreadcrumbSeparator>
            <EVABreadcrumbItem>
              <EVABreadcrumbPage>Page</EVABreadcrumbPage>
            </EVABreadcrumbItem>
          </EVABreadcrumbList>
        </EVABreadcrumb>
      );
      await Promise.resolve();
    });
    expect(container.querySelector('eva-breadcrumb')).toBeTruthy();
    expect(container.querySelector('eva-breadcrumb-list')).toBeTruthy();
    expect(container.querySelectorAll('eva-breadcrumb-item').length).toBe(2);
    expect(container.querySelector('eva-breadcrumb-link')?.textContent).toContain('Home');
    expect(container.querySelector('eva-breadcrumb-page')?.textContent).toContain('Page');
    root.unmount();
    document.body.removeChild(container);
  });
});
