import React, { forwardRef } from 'react';
import '../types';

export interface EVACardDescriptionProps extends React.HTMLAttributes<HTMLElement> {}

export const EVACardDescription = forwardRef<HTMLElement, EVACardDescriptionProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-card-description', { ref: ref as any, ...props }, children);
});

EVACardDescription.displayName = 'EVACardDescription';
