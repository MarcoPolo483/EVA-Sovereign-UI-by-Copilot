import React, { forwardRef } from 'react';
import '../types';

export interface EVABadgeProps extends React.HTMLAttributes<HTMLElement> {}

export const EVABadge = forwardRef<HTMLElement, EVABadgeProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-badge', { ref: ref as any, ...props }, children);
});

EVABadge.displayName = 'EVABadge';
