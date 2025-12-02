import React, { forwardRef } from 'react';
import '../types';

export interface EVACardContentProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACardContent = forwardRef<HTMLElement, EVACardContentProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-card-content', { ref: ref as any, ...props }, children);
});

EVACardContent.displayName = 'EVACardContent';
