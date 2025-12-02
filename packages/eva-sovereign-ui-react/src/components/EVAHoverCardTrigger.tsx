import React, { forwardRef } from 'react';
import '../types';

export interface EVAHoverCardTriggerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAHoverCardTrigger = forwardRef<HTMLElement, EVAHoverCardTriggerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-hover-card-trigger', { ref: ref as any, ...props }, children);
});

EVAHoverCardTrigger.displayName = 'EVAHoverCardTrigger';
