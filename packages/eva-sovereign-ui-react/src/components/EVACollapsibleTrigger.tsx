import React, { forwardRef } from 'react';
import '../types';

export interface EVACollapsibleTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACollapsibleTrigger = forwardRef<HTMLElement, EVACollapsibleTriggerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-collapsible-trigger', { ref: ref as any, ...props }, children);
});

EVACollapsibleTrigger.displayName = 'EVACollapsibleTrigger';
