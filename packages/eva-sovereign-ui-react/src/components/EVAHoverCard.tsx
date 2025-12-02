import React, { forwardRef } from 'react';
import '../types';

export interface EVAHoverCardProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAHoverCard = forwardRef<HTMLElement, EVAHoverCardProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-hover-card', { ref: ref as any, ...props }, children);
});

EVAHoverCard.displayName = 'EVAHoverCard';
