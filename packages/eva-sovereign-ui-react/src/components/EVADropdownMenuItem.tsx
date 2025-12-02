import React, { forwardRef } from 'react';
import '../types';

export interface EVADropdownMenuItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVADropdownMenuItem = forwardRef<HTMLElement, EVADropdownMenuItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-dropdown-menu-item', { ref: ref as any, ...props }, children);
});

EVADropdownMenuItem.displayName = 'EVADropdownMenuItem';
