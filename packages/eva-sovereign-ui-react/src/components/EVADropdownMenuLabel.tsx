import React, { forwardRef } from 'react';
import '../types';

export interface EVADropdownMenuLabelProps extends React.HTMLAttributes<HTMLElement> {}

export const EVADropdownMenuLabel = forwardRef<HTMLElement, EVADropdownMenuLabelProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-dropdown-menu-label', { ref: ref as any, ...props }, children);
});

EVADropdownMenuLabel.displayName = 'EVADropdownMenuLabel';
