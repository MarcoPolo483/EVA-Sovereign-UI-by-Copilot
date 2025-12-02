import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABreadcrumbItem = forwardRef<HTMLElement, EVABreadcrumbItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumb-item', { ref: ref as any, ...props }, children);
});

EVABreadcrumbItem.displayName = 'EVABreadcrumbItem';
