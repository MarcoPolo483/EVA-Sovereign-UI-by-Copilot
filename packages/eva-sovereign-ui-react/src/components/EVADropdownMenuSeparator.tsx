import React, { forwardRef } from 'react';
import '../types';

export interface EVADropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLElement> {}

export const EVADropdownMenuSeparator = forwardRef<HTMLElement, EVADropdownMenuSeparatorProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-dropdown-menu-separator', { ref: ref as any, ...props }, children);
});

EVADropdownMenuSeparator.displayName = 'EVADropdownMenuSeparator';
