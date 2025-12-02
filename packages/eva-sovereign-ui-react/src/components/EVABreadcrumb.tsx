import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABreadcrumb = forwardRef<HTMLElement, EVABreadcrumbProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumb', { ref: ref as any, ...props }, children);
});

EVABreadcrumb.displayName = 'EVABreadcrumb';
