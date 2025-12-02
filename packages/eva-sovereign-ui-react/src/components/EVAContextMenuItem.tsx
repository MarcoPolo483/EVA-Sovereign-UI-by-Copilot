import React, { forwardRef } from 'react';
import '../types';

export interface EVAContextMenuItemProps extends React.HTMLAttributes<HTMLElement> {}

export const EVAContextMenuItem = forwardRef<HTMLElement, EVAContextMenuItemProps>(({ children, ...props }, ref) => {
  return React.createElement('eva-context-menu-item', { ref: ref as any, ...props }, children);
});

EVAContextMenuItem.displayName = 'EVAContextMenuItem';
