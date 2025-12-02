import React, { forwardRef } from 'react';
import '../types';

export interface EVACardTitleProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACardTitle = forwardRef<HTMLElement, EVACardTitleProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-card-title', { ref: ref as any, ...props }, children);
});

EVACardTitle.displayName = 'EVACardTitle';
