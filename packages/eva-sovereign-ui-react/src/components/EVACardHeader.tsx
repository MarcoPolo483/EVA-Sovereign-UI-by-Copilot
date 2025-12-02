import React, { forwardRef } from 'react';
import '../types';

export interface EVACardHeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACardHeader = forwardRef<HTMLElement, EVACardHeaderProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-card-header', { ref: ref as any, ...props }, children);
});

EVACardHeader.displayName = 'EVACardHeader';
