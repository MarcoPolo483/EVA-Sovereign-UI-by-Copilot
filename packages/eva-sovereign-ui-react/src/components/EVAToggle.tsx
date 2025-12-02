import React, { forwardRef } from 'react';
import '../types';

export interface EVAToggleProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAToggle = forwardRef<HTMLElement, EVAToggleProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-toggle', { ref: ref as any, ...props }, children);
});

EVAToggle.displayName = 'EVAToggle';
