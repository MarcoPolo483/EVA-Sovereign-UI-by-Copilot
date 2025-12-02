import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbListProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABreadcrumbList = forwardRef<HTMLElement, EVABreadcrumbListProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumb-list', { ref: ref as any, ...props }, children);
});

EVABreadcrumbList.displayName = 'EVABreadcrumbList';
