import React, { forwardRef } from 'react';
import '../types';

export interface EVADropdownMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const EVADropdownMenu = forwardRef<HTMLElement, EVADropdownMenuProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-dropdown-menu', { ref: ref as any, ...props }, children);
});

EVADropdownMenu.displayName = 'EVADropdownMenu';
