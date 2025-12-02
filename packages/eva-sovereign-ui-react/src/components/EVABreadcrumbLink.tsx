import React, { forwardRef } from 'react';
import '../types';

export interface EVABreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const EVABreadcrumbLink = forwardRef<HTMLElement, EVABreadcrumbLinkProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-breadcrumb-link', { ref: ref as any, ...props }, children);
});

EVABreadcrumbLink.displayName = 'EVABreadcrumbLink';
