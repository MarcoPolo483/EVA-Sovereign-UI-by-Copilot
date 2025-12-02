import React, { forwardRef } from 'react';
import '../types';

export interface EVAHoverCardContentProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAHoverCardContent = forwardRef<HTMLElement, EVAHoverCardContentProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-hover-card-content', { ref: ref as any, ...props }, children);
});

EVAHoverCardContent.displayName = 'EVAHoverCardContent';
