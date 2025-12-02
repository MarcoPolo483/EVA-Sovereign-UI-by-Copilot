import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbPageProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABreadcrumbPage = forwardRef<HTMLElement, EVABreadcrumbPageProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumb-page', { ref: ref as any, ...props }, children);
});

EVABreadcrumbPage.displayName = 'EVABreadcrumbPage';
