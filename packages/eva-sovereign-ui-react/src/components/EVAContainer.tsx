import React, { forwardRef } from 'react';
import '../types';

export interface EVAContainerProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAContainer = forwardRef<HTMLElement, EVAContainerProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-container', { ref: ref as any, ...props }, children);
});

EVAContainer.displayName = 'EVAContainer';
