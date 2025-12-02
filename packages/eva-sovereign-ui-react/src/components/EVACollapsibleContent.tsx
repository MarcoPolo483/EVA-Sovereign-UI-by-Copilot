import React, { forwardRef } from 'react';
import '../types';

export interface EVACollapsibleContentProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACollapsibleContent = forwardRef<HTMLElement, EVACollapsibleContentProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-collapsible-content', { ref: ref as any, ...props }, children);
});

EVACollapsibleContent.displayName = 'EVACollapsibleContent';
