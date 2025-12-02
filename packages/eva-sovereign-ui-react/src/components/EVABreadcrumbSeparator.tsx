import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABreadcrumbSeparator = forwardRef<HTMLElement, EVABreadcrumbSeparatorProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumb-separator', { ref: ref as any, ...props }, children);
});

EVABreadcrumbSeparator.displayName = 'EVABreadcrumbSeparator';
