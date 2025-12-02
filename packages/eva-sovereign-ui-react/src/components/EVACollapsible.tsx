import React, { forwardRef } from 'react';
import '../types';

export interface EVACollapsibleProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACollapsible = forwardRef<HTMLElement, EVACollapsibleProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-collapsible', { ref: ref as any, ...props }, children);
});

EVACollapsible.displayName = 'EVACollapsible';
