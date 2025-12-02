import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABreadcrumbs = forwardRef<HTMLElement, EVABreadcrumbsProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumbs', { ref: ref as any, ...props }, children);
});

EVABreadcrumbs.displayName = 'EVABreadcrumbs';
